---
title: CentOS-7-1810版虚拟机部署Nuxtjs项目
date: 2019-05-06 07:42:34
description: '在VirtualBox虚拟机中，如何设置Centos7来部署网站。包括yum升级、nodejs安装、mongodb安装、nginx安装、git安装、github密钥配置、pm2安装及命令语句等。'
image: '/images/20190506/VirtualBox_CentOS_06_05_2019_19_13_24.png'
slug: centos-build-nuxt-nginx-mongodb
author:
  name: liumuu
  bio: vuejs
  img: /blog/avatar.jpg
---

## 1、安装 CentOS

![Image](/images/20190506/VirtualBox_CentOS_06_05_2019_19_13_24.png)

![Image](/images/20190506/VirtualBox_CentOS_06_05_2019_19_14_12.png)

![Image](/images/20190506/VirtualBox_CentOS_06_05_2019_19_15_00.png)

root 目录下`anaconda-ks.cfg`文件，通过这个文件可以修改成自动安装的脚本,用于自动安装同样配置的系统。

设置时区：

`timedatectl list-timezones` 列出所有时区

`timedatectl set-timezone Asia/Shanghai` 设置系统时区为上海

## 2、设置虚拟机网卡为桥接网卡

![Image](/images/20190506/2019-05-06-194548.png)

## 3、开启网卡

```c
ip addr
```

查看本机网络信息，默认不开启网卡。

```c
vi /etc/sysconfig/network-scripts/ifcfg-enp0s3
ONBOOT=yes
```

修改最后一行。然后按 Esc 退出，再出入命令 `:wq` ，再按 Enter 即可。

然后重启网络服务： `sudo service network restart`

## 4、升级 yum

`yum update`

## 5、安装 nodejs 和 npm

官方文档：

`https://nodejs.org/zh-cn/download/package-manager/`

`https://github.com/nodesource/distributions/blob/master/README.md`

NodeJS 10.x 版本：

`curl -sL https://rpm.nodesource.com/setup_10.x | bash -`

`yum install gcc-c++ make`

`yum install nodejs`

查看安装结果：`node -v`，`npm -v`。

## 6、安装 vim

`yum install vim`

## 7、安装 mongoDB

官方文档：

`https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/`

新建文件：`/etc/yum.repos.d/mongodb-org-4.0.repo`

```json
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

安装 mondodb 包：

`sudo yum install -y mongodb-org`

重启后，`mongo`进入 mongodb，`help`查看帮助。

## 8、安装并设置 git 和 github key

`yum install git`

运行`ssh-keygen -t rsa -b 4096 -C "mail@example.com"`，三处输入直接按回车。

`cat ~/.ssh/id_rsa.pub`，得到 key。

在 github 上新建 SSH key：`https://github.com/settings/keys`

![Image](/images/20190506/2019-05-06-205101.png)

## 9、WARN

`nodejs gyp WARN EACCES user "root" does not have permission to access the dev dir。`

结尾添加：`--unsafe-perm`

## 10、防火墙设置

1、查看 firewall 服务状态：`systemctl status firewalld`

2、查看 firewall 的状态：`firewall-cmd --state`：running

3、开启：`service firewalld start`

4、重启：`service firewalld restart`

5、关闭：`service firewalld stop`

6、查看防火墙规则：`firewall-cmd --list-all`

7、查询端口是否开放`firewall-cmd --query-port=8080/tcp`

8、开放 80 端口`firewall-cmd --permanent --add-port=80/tcp`

9、移除端口`firewall-cmd --permanent --remove-port=8080/tcp`

10、重启防火墙(修改配置后要重启防火墙)`firewall-cmd --reload`

11、参数解释：

-1、firwall-cmd：是 Linux 提供的操作 firewall 的一个工具

-2、--permanent：表示设置为持久

-3、--add-port：标识添加的端口

## 11、安装 nginx

官方文档：`http://nginx.org/en/linux_packages.html#RHEL-CentOS`

`sudo yum install yum-utils`

新建：`/etc/yum.repos.d/nginx.repo`

```c
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
```

安装：`sudo yum install nginx`

查看版本：`nginx -v`

使用：`nginx -s stop/quit/reload/reopen`

设置：`/etc/nginx/nginx.conf`

```c
user root;

http {
    server{
        listen  80;
        server_name     _;
    }
}
```

错误：`nginx: [error] open() "/var/run/nginx.pid" failed (2: No such file or directory)`：

先启动：`nginx`，

再重启：`nginx -s reload`

开机启动：`systemctl enable nginx.service`

`Created symlink from /etc/systemd/system/multi-user.target.wants/nginx.service to /usr/lib/systemd/system/nginx.service.`

![Image](/images/20190506/2019-05-06-214119.png)

## 12、Selinux 系统

nginx 反向代理，无法访问，日志：`permission denied while connecting to upstream`

设置：`setsebool -P httpd_can_network_connect 1`

状态查看：`sestatus`

```c
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Max kernel policy version:      31
```

当前模式：`getenforce`

临时关闭：`setenforce 0`

彻底关闭：`sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config`

## 13、PM2

`pm2 ls` `pm2 restart 0` `pm2 stop 0` `pm2 start 0` `pm2 delete 0`

`pm2 start npm --watch --name <taskname> -- run start`

`pm2 startup`开机启动

`pm2 save`

`pm2 start npm --watch --name rioor-server -- run dev`

## 14、mongo 数据库

更新一条数据：`db.user.update({username:'admin'},{$set:{scope:['user','admin','sysAdmin']}})`

数据库备份：`mongodump -h localhost:27017 -d rioor -o /root/dbbak`

数据库还原：`mongorestore -h localhost:27017 -d rioor_restore --dir D:\rioor\`

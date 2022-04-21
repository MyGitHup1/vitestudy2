# Git概述

- git是一个免费的开源的分布式版本控制系统
- 易于学习 性能快

## git 命令

* git init 初始化一个git仓库 在当前目录生成一个.git目录
* git clone 从远程仓库克隆项目到本地目录
* git add <filename> 将一个文件添加到暂存区
* git push 将已提交的本地仓库push到远程仓库
* git pull 从远程仓库提取最新代码
* git rm --cache <filename>从暂存区删除文件
* git rm -f <filename>从工作区删除文件 （删了就没了找不到了）
* git restore <filename> 撤销工作区已修改的内容 (还没添加暂存区)
* git reset --hard 3d01865 更改工作区到指定版本
* git log 查看版本详细信息
* git reflog 查看版本信息

##### git分支命令

* git branch <new-branch-name> 创建一个分支
* git branch 查看分支
* git branch -v 查看分支版本
* git checkout <branch-name> 切换分支
* git merge <branch-name> 将输入的分支合并到 当前所在分支
  在线修改11111111111111

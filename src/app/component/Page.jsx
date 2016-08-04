import React from 'react';
import Marked from 'marked';

var page1=`
## 个人信息

**姓名**：彭崇甫

**性别**：男

**出生年月**：1992年11月

**籍贯**：广西-贺州

**学校专业**：清华大学工程力学与航天航空工程

**电话**：18810665001

**Email**：pengchongfu@gmail.com

**个人网站**：http://pengchongfu.com/

**博客**：http://blog.pengchongfu.com/

**github**：https://github.com/steinsphang

## 自我简介

自学前端知识，掌握JavaScript、DOM和BOM相关知识。关注前端技术领域的发展，学习并尝试过react.js、vue.js和electron等技术。

了解常用的jQuery、bootstrap等前端开发框架。有后端开发经验，使用过node以及flask，能够独立开发前后端完成一个基本的web应用。

## 技术能力

* 基本掌握JavaScript、CSS、HTML以及各种JS、CSS框架来搭建Web应用。
* 熟练使用JavaScript开发程序，了解原生JavaScript以及框架和类库的使用。
* 了解node相关开发，以及前端工程化技术。

## 个人经历
* 2011年进入清华大学航天航空学院学习。
* 2015年7月，本科毕业之后自学编程，并且专注于web前端。
* 2015年11月，在北京一维弦科技有限责任公司实习。使用foundation5和node搭建公司主页，实现提交附件以及服务器端邮件发送。

## 作品

### [server](https://github.com/steinsphang/server)
项目地址：http://pengchongfu.com/

* 后端采用node的express框架
* 简历为使用react.js完成的单页应用
* 使用html5完成音乐播放功能
* 使用原生js完成的几个小游戏
* 使用ajax将消息传输到后端并发送邮件

### [wechat-node](https://github.com/steinsphang/wechat-node)
调用web微信接口，实现的一个node版的命令行微信

### [wx4work](https://github.com/steinsphang/wx4work)
调用web微信接口，实现的一个微信chrome插件，方便收发消息

### [tap-raser](https://github.com/guzhaoyuan/tap-raser)
项目地址：http://pengchongfu.com/tap-raser

一款使用three.js完成的简单小游戏

### [pixivSearch](https://github.com/steinsphang/pixivSearch)
项目地址：http://pengchongfu.com:3000/

pixiv搜图工具，能够方便搜索pixiv上某个标签下收藏数较高的作品

前端采用bootstrap，后端为flask

### [wx_vue](https://github.com/steinsphang/wx_vue)
使用electron以及vue.js实现的微信桌面版客户端
`;


var page2=`
# 关于

这是学习了reactjs的基础知识之后做的一个简历,采用单页应用的形式

***

页面使用reactjs生成,调用material-ui的组件,使用redux进行数据流控制,记录各组件的状态，最后使用webpack打包

主要有以下三个组件:

1. Bar：页面上方的导航条
2. Leftnav：页面左边的导航栏
3. Page：页面正文部分

数据流控制:
点击页面上的按钮之后触发action,修改store内存储的数据,数据改变之后自动修改view内的组件状态
`;

var page3=`
# 更多

彭崇甫的个人网站,请点击[这里](http://pengchongfu.com)
`;
page1=Marked(page1);
page2=Marked(page2);
page3=Marked(page3);

var arr3=page3.split("<a");
for(let i=0,l=arr3.length-1;i<l;i++){
  arr3[i]+='<a target="_blank"';
}
page3=arr3.join('');

var arr1=page1.split("<a");
for(let i=0,l=arr1.length-1;i<l;i++){
  arr1[i]+='<a target="_blank"';
}
page1=arr1.join('');


class Page extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var page;
    page="初始值";
    switch(this.props.page){
      case 1:
        page=page1;
        break;
      case 2:
        page=page2;
        break;
      case 3:
        page=page3;
        break;
      default:
        page=page1;
    }

    return (
      <div
        style={{paddingTop:100,width:"75%",margin:"0 auto","wordWrap":"break-word","wordBreak":"break-all"}}
        dangerouslySetInnerHTML={{__html:page}}
      />

    );
  }

}

export default Page;

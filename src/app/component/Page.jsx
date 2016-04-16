import React from 'react';
import Marked from 'marked';

var page1=`
# 个人信息

- 彭崇甫/男/1992
- 本科/清华大学工程力学与航天航空工程专业/2015年7月毕业
- 个人网站：[pengchongfu.com](http://pengchongfu.com)
- GitHub：[https://github.com/steinsphang](https://github.com/steinsphang)

---

# 联系方式

- 手机：18810665001
- 邮箱：pengchongfu@gmail.com
- 微信号：pengchongfu

---

# 技能清单

- 计算机基础：了解基本的数据结构和算法以及网络原理知识
- 前端：javascript、html、css
- 开发框架：jquery、bootstrap
- 开发工具：git、webpack
- 后端：node

---

# 项目经历

实习（北京一维弦科技有限责任公司 2015.11)：

- 使用foundation5和node搭建公司主页
- 实现从浏览器提交附件并发送邮件的功能

个人网站：

- 服务器采用node的express模块搭建
- 使用html5的audio标签实现在线音乐功能
- 使用reactjs编写、webpack打包简历
- 使用ajax以及node的nodemailer模块实现发送邮件功能
- 使用原生js完成小游戏的编写

---

# 致谢
感谢您花时间阅读我的简历
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

import React from 'react';
import Marked from 'marked';

var page1=`
# 联系方式

- 手机：18810665001
- Email：pengchongfu@gmail.com
- 微信号：pengchongfu

---

# 个人信息

- 彭崇甫/男/1992
- 本科/清华大学工程力学与航天航空工程专业/2015年7月毕业
- 个人网站：pengchongfu.com
- Github：https://github.com/steinsphang
- 期望职位：Web前端开发

---

# 自我介绍
本科所学专业为工程力学与航天航空工程，多为机械设计及力学分析方面的课程。对it技术感兴趣，
平时喜欢电子产品，学习过c和单片机的课程，折腾过树莓派和arduino。毕业设计内容为使用java开发eclipse插件
。自学web开发相关技术以及计算机基础知识，能看懂英文技术文档。

---

# demo
2015.11~12在北京一维弦科技有限责任公司 实习
foundation5

网站
使用node搭建个人网站



---

# 技能清单

- 计算机基础：了解基本的数据结构和算法知识以及网络原理
- 前端语言：javascript、html、css
- 版本控制：git
- web开发：node react websocket
- 前端工具：webpack

---

# 致谢
感谢您花时间阅读我的简历。
`;


var page2=`
# 关于

这是学习了reactjs的基础知识之后做的一个简历,采用单页应用的形式

***

页面使用reactjs生成,调用material-ui的组件,使用redux进行数据流控制,记录各组件的状态，最后使用webpack打包

主要有一下三个组件:

1. Bar：页面上方的导航条
2. Leftnav：页面左边的导航栏
3. Page：页面正文部分

数据流控制:
点击页面上的按钮之后触发action,修改store内存储的数据,数据改变之后自动修改view内的组件状态
`;

var page3=`
# 更多

刚学前端编程的时候写过几个小游戏,请点击[这里](http://pengchongfu.com/game)
`;
page1=Marked(page1);
page2=Marked(page2);
page3=Marked(page3);

var arr=page3.split("<a");
for(let i=0,l=arr.length-1;i<l;i++){
  arr[i]+='<a target="_blank"';
}
page3=arr.join('');


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

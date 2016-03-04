# resume 

这是学习了reactjs的基础知识之后做的一个简历,采用单页应用的形式

***

页面使用reactjs生成,调用material-ui的组件,使用redux进行数据流控制,记录各组件的状态，最后使用webpack打包

主要有以下三个组件:

1. Bar：页面上方的导航条
2. Leftnav：页面左边的导航栏
3. Page：页面正文部分

数据流控制:
点击页面上的按钮之后触发action,修改store内存储的数据,数据改变之后自动修改view内的组件状态
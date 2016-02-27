import React from 'react';

const page1=`
<h1 id="web-">Web前端程序员简历模板</h1>
<p>本简历模板由国内首家互联网人才拍卖网站「 <a href="http://www.jobdeer.com">JobDeer.com</a> 」提供。</p>
<p>（括号里的是我们的顾问编写的说明，建议在简历书写完成后统一删除）</p>
<h2 id="-">先讲讲怎样才是一份好的技术简历</h2>
<p>首先，一份好的简历不光说明事实，更通过FAB模式来增强其说服力。</p>
<ul>
<li>Feature：是什么</li>
<li>Advantage：比别人好在哪些地方</li>
<li>Benefit：如果雇佣你，招聘方会得到什么好处 </li>
</ul>
<p>其次，写简历和写议论文不同，过分的论证会显得自夸，反而容易引起反感，所以要点到为止。这里的技巧是，提供论据，把论点留给阅读简历的人自己去得出。放论据要具体，最基本的是要数字化，好的论据要让人印象深刻。</p>
<p>举个例子，下边内容是虚构的：</p>
<p>2006年，我参与了手机XX网发布系统WAPCMS的开发（<code>这部分是大家都会写的</code>）。作为核心程序员，我不但完成了网站界面、调度队列的开发工作，更提出了高效的组件级缓存系统，通过碎片化缓冲有效的提升了系统的渲染效率。（<code>这部分是很多同学忘掉的，要写出你在这个项目中具体负责的部分，以及你贡献出来的价值。</code>）在该系统上线后，Web前端性能从10QPS提升到200QPS，服务器由10台减少到3台（<code>通过量化的数字来增强可信度</code>）。2008年我升任WAPCMS项目负责人，带领一个3人小组支持着每天超过2亿的PV（<code>这就是Benefit。你能带给前雇主的价值，也就是你能带给新雇主的价值。</code>）。</p>
<p>有同学问，如果我在项目里边没有那么显赫的成绩可以说怎么办？讲不出成绩时，就讲你的成长。因为学习能力也是每家公司都看中的东西。你可以写你在这个项目里边遇到了一个什么样的问题，别人怎么解决的，你怎么解决的，你的方案好在什么地方，最终这个方案的效果如何。</p>
<p>具体、量化、有说服力，是技术简历特别需要注重的地方。</p>
<p>（以上内容在写完简历后，对每一段进行评估，完成后再删除）</p>
<hr>
<h1 id="-">联系方式</h1>
<p>（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）</p>
<ul>
<li>手机：135<strong><em>**</em></strong> （<code>如果是外地手机，可注明。如经常关机，要写上最优联系时间</code>）</li>
<li>Email：goodman@gmail.com （<code>虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G</code>）</li>
<li>QQ/微信号：6<strong><em>*</em></strong>（<code>提供一个通过网络可以联系到你的方式</code>）</li>
</ul>
<hr>
<h1 id="-">个人信息</h1>
<ul>
<li>胶布帝/男/1990 </li>
<li>本科/萌鹿大学计算机系 </li>
<li>工作年限：3年</li>
<li>微博：<a href="http://weibo.com/jobdeer">@JobDeer</a> （<code>如果没有技术相关内容，也可以不放</code>）</li>
<li>技术博客：<a href="http://blog.github.io">http://blog.github.io</a> ( <code>使用GitHub Host的Big较高</code>  )</li>
<li><p>Github：<a href="http://github.com/geekcompany">http://github.com/geekcompany</a> ( <code>有原创repo的Github帐号会极大的提升你的个人品牌</code>  )</p>
</li>
<li><p>期望职位：Web前端高级程序员，应用架构师</p>
</li>
<li>期望薪资：税前月薪15k~20k，特别喜欢的公司可例外</li>
<li>期望城市：北京</li>
</ul>
<hr>
<h1 id="-">工作经历</h1>
<p>（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）</p>
<h2 id="abc-2012-9-2014-9-">ABC公司 （ 2012年9月 ~ 2014年9月 ）</h2>
<h3 id="def-">DEF项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="ghi-">GHI项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="-">其他项目</h3>
<p>（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）</p>
<h2 id="jkl-2010-3-2012-8-">JKL公司 （ 2010年3月 ~ 2012年8月 ）</h2>
<h3 id="mno-">MNO项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="pqr-">PQR项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="-">其他项目</h3>
<p>（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）</p>
<hr>
<h1 id="-">开源项目和作品</h1>
<p>（这一段用于放置工作以外的、可证明你的能力的材料）</p>
<h2 id="-">开源项目</h2>
<p>（对于程序员来讲，没有什么比Show me the code能有说服力了）</p>
<ul>
<li><a href="http://github.com/yourname/projectname">STU</a>：项目的简要说明，Star和Fork数多的可以注明</li>
<li><a href="http://github.com/yourname/projectname">WXYZ</a>：项目的简要说明，Star和Fork数多的可以注明</li>
</ul>
<h2 id="-">技术文章</h2>
<p>（挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）</p>
<ul>
<li><a href="http://get.jobdeer.com/706.get">一个产品经理眼中的云计算：前生今世和未来</a></li>
<li><a href="http://get.jobdeer.com/343.get">来自HeroKu的HTTP API 设计指南(翻译文章)</a> （ <code>好的翻译文章可以侧证你对英文技术文档的阅读能力</code>）</li>
</ul>
<h2 id="-">演讲和讲义</h2>
<p>（放置你代表公司在一些技术会议上做过的演讲，以及你在公司分享时制作的讲义）</p>
<ul>
<li>2014架构师大会演讲：<a href="http://jobdeer.com">如何通过Docker优化内部开发</a><ul>
<li>9月公司内部分享：<a href="http://jobdeer.com">云计算的前生今世</a></li>
</ul>
</li>
</ul>
<h1 id="-">技能清单</h1>
<p>（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）</p>
<p>以下均为我熟练使用的技能</p>
<ul>
<li>Web开发：PHP/Hack/Node</li>
<li>Web框架：ThinkPHP/Yaf/Yii/Lavaral/LazyPHP</li>
<li>前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic</li>
<li>前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap</li>
<li>数据库相关：MySQL/PgSQL/PDO/SQLite</li>
<li>版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer</li>
<li>单元测试：PHPUnit/SimpleTest/Qunit</li>
<li>云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发</li>
</ul>
<h2 id="-">参考技能关键字</h2>
<p>本技能关键字列表是从最近招聘Web前端的数百份JD中统计出来的，括号中是出现的词频。如果你的简历要投递给有机器（简历分选系统）和不如机器（不懂技术的HR）筛选简历环节的地方，请一定从下边高频关键词中选择5～10个适合你自己的。</p>
<ul>
<li>web(889)</li>
<li>javascript(596)</li>
<li>css(555)</li>
<li>html(430)</li>
<li>jquery(323)</li>
<li>html5(312)</li>
<li>js(311)</li>
<li>ajax(196)</li>
<li>css3(176)</li>
<li>w3c(168)</li>
<li>div(156)</li>
<li>php(134)</li>
<li>xhtml(106)</li>
<li>java(92)</li>
<li>ui(78)</li>
<li>photoshop(75)</li>
<li>dom(63)</li>
<li>xml(56)</li>
<li>json(54)</li>
<li>yui(51)</li>
<li>flash(45)</li>
<li>bootstrap(43)</li>
<li>python(43)</li>
<li>http(38)</li>
<li>dreamweaver(38)</li>
<li>ext(33)</li>
<li>linux(33)</li>
<li>seo(32)</li>
<li>prototype(29)</li>
<li>chrome(28)</li>
<li>pc(28)</li>
<li>nodejs(28)</li>
<li>firefox(26)</li>
<li>ps(25)</li>
<li>angularjs(25)</li>
<li>fireworks(24)</li>
<li>extjs(23)</li>
<li>safari(22)</li>
<li>www(22)</li>
<li>mobile(22)</li>
<li>jsp(22)</li>
<li>mvc(22)</li>
<li>backbone(21)</li>
<li>node(21)</li>
<li>ruby(20)</li>
<li>github(19)</li>
<li>ios(18)</li>
<li>ie6(18)</li>
<li>android(18)</li>
<li>asp(18)</li>
<li>sass(17)</li>
<li>wap(16)</li>
<li>mootools(16)</li>
<li>ie(16)</li>
<li>mysql(15)</li>
<li>flex(14)</li>
<li>firebug(13)</li>
<li>bom(13)</li>
<li>webapp(12)</li>
<li>less(12)</li>
<li>web2(11)</li>
<li>angular(10)</li>
<li>git(10)</li>
<li>dw(10)</li>
<li>as(10)</li>
<li>mac(10)</li>
<li>psd(8)</li>
<li>o2o(7)</li>
<li>dojo(7)</li>
<li>actionscript3(6)</li>
<li>grunt(5)</li>
<li>ue(5)</li>
<li>zepto(5)</li>
<li>actionscript(5)</li>
<li>ie8(5)</li>
<li>coffeescript(5)</li>
<li>django(4)</li>
</ul>
<hr>
<h1 id="-">致谢</h1>
<p>感谢您花时间阅读我的简历，期待能有机会和您共事。</p>
`;

const page2=`
<h1 id="java-">Java程序员简历模板</h1>
<p>本简历模板由国内首家互联网人才拍卖网站「 <a href="http://www.jobdeer.com">JobDeer.com</a> 」提供。</p>
<p>（括号里的是我们的顾问编写的说明，建议在简历书写完成后统一删除）</p>
<h2 id="-">先讲讲怎样才是一份好的技术简历</h2>
<p>首先，一份好的简历不光说明事实，更通过FAB模式来增强其说服力。</p>
<ul>
<li>Feature：是什么</li>
<li>Advantage：比别人好在哪些地方</li>
<li>Benefit：如果雇佣你，招聘方会得到什么好处 </li>
</ul>
<p>其次，写简历和写议论文不同，过分的论证会显得自夸，反而容易引起反感，所以要点到为止。这里的技巧是，提供论据，把论点留给阅读简历的人自己去得出。放论据要具体，最基本的是要数字化，好的论据要让人印象深刻。</p>
<p>举个例子，下边内容是虚构的：</p>
<p>2006年，我参与了手机XX网发布系统WAPCMS的开发（<code>这部分是大家都会写的</code>）。作为核心程序员，我不但完成了网站界面、调度队列的开发工作，更提出了高效的组件级缓存系统，通过碎片化缓冲有效的提升了系统的渲染效率。（<code>这部分是很多同学忘掉的，要写出你在这个项目中具体负责的部分，以及你贡献出来的价值。</code>）在该系统上线后，Web前端性能从10QPS提升到200QPS，服务器由10台减少到3台（<code>通过量化的数字来增强可信度</code>）。2008年我升任WAPCMS项目负责人，带领一个3人小组支持着每天超过2亿的PV（<code>这就是Benefit。你能带给前雇主的价值，也就是你能带给新雇主的价值。</code>）。</p>
<p>有同学问，如果我在项目里边没有那么显赫的成绩可以说怎么办？讲不出成绩时，就讲你的成长。因为学习能力也是每家公司都看中的东西。你可以写你在这个项目里边遇到了一个什么样的问题，别人怎么解决的，你怎么解决的，你的方案好在什么地方，最终这个方案的效果如何。</p>
<p>具体、量化、有说服力，是技术简历特别需要注重的地方。</p>
<p>（以上内容在写完简历后，对每一段进行评估，完成后再删除）</p>
<hr>
<h1 id="-">联系方式</h1>
<p>（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）</p>
<ul>
<li>手机：135<strong><em>**</em></strong> （<code>如果是外地手机，可注明。如经常关机，要写上最优联系时间</code>）</li>
<li>Email：goodman@gmail.com （<code>虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G</code>）</li>
<li>QQ/微信号：6<strong><em>*</em></strong>（<code>提供一个通过网络可以联系到你的方式</code>）</li>
</ul>
<hr>
<h1 id="-">个人信息</h1>
<ul>
<li>胶布帝/男/1990 </li>
<li>本科/萌鹿大学计算机系 </li>
<li>工作年限：3年</li>
<li>微博：<a href="http://weibo.com/jobdeer">@JobDeer</a> （<code>如果没有技术相关内容，也可以不放</code>）</li>
<li>技术博客：<a href="http://blog.github.io">http://blog.github.io</a> ( <code>使用GitHub Host的Big较高</code>  )</li>
<li><p>Github：<a href="http://github.com/geekcompany">http://github.com/geekcompany</a> ( <code>有原创repo的Github帐号会极大的提升你的个人品牌</code>  )</p>
</li>
<li><p>期望职位：Java高级程序员，架构师</p>
</li>
<li>期望薪资：税前月薪15k~20k，特别喜欢的公司可例外</li>
<li>期望城市：北京</li>
</ul>
<hr>
<h1 id="-">工作经历</h1>
<p>（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）</p>
<h2 id="abc-2012-9-2014-9-">ABC公司 （ 2012年9月 ~ 2014年9月 ）</h2>
<h3 id="def-">DEF项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="ghi-">GHI项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="-">其他项目</h3>
<p>（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）</p>
<h2 id="jkl-2010-3-2012-8-">JKL公司 （ 2010年3月 ~ 2012年8月 ）</h2>
<h3 id="mno-">MNO项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="pqr-">PQR项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="-">其他项目</h3>
<p>（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）</p>
<hr>
<h1 id="-">开源项目和作品</h1>
<p>（这一段用于放置工作以外的、可证明你的能力的材料）</p>
<h2 id="-">开源项目</h2>
<p>（对于程序员来讲，没有什么比Show me the code能有说服力了）</p>
<ul>
<li><a href="http://github.com/yourname/projectname">STU</a>：项目的简要说明，Star和Fork数多的可以注明</li>
<li><a href="http://github.com/yourname/projectname">WXYZ</a>：项目的简要说明，Star和Fork数多的可以注明</li>
</ul>
<h2 id="-">技术文章</h2>
<p>（挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）</p>
<ul>
<li><a href="http://get.jobdeer.com/706.get">一个产品经理眼中的云计算：前生今世和未来</a></li>
<li><a href="http://get.jobdeer.com/343.get">来自HeroKu的HTTP API 设计指南(翻译文章)</a> （ <code>好的翻译文章可以侧证你对英文技术文档的阅读能力</code>）</li>
</ul>
<h2 id="-">演讲和讲义</h2>
<p>（放置你代表公司在一些技术会议上做过的演讲，以及你在公司分享时制作的讲义）</p>
<ul>
<li>2014架构师大会演讲：<a href="http://jobdeer.com">如何通过Docker优化内部开发</a><ul>
<li>9月公司内部分享：<a href="http://jobdeer.com">云计算的前生今世</a></li>
</ul>
</li>
</ul>
<h1 id="-">技能清单</h1>
<p>（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）</p>
<p>以下均为我熟练使用的技能</p>
<ul>
<li>Web开发：PHP/Hack/Node</li>
<li>Web框架：ThinkPHP/Yaf/Yii/Lavaral/LazyPHP</li>
<li>前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic</li>
<li>前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap</li>
<li>数据库相关：MySQL/PgSQL/PDO/SQLite</li>
<li>版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer</li>
<li>单元测试：PHPUnit/SimpleTest/Qunit</li>
<li>云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发</li>
</ul>
<h2 id="-">参考技能关键字</h2>
<p>本技能关键字列表是从最近招聘Java的数百份JD中统计出来的，括号中是出现的词频。如果你的简历要投递给有机器（简历分选系统）和不如机器（不懂技术的HR）筛选简历环节的地方，请一定从下边高频关键词中选择5～10个适合你自己的。</p>
<ul>
<li>java(730)</li>
<li>spring(305)</li>
<li>web(260)</li>
<li>mysql(250)</li>
<li>oracle(207)</li>
<li>linux(198)</li>
<li>j2ee(182)</li>
<li>javascript(177)</li>
<li>sql(176)</li>
<li>hibernate(169)</li>
<li>html(139)</li>
<li>tomcat(132)</li>
<li>struts(128)</li>
<li>jquery(116)</li>
<li>jsp(106)</li>
<li>ajax(96)</li>
<li>css(94)</li>
<li>ibatis(84)</li>
<li>mvc(77)</li>
<li>servlet(71)</li>
<li>xml(70)</li>
<li>js(62)</li>
<li>eclipse(51)</li>
<li>mybatis(51)</li>
<li>jboss(47)</li>
<li>struts2(47)</li>
<li>weblogic(46)</li>
<li>redis(46)</li>
<li>apache(45)</li>
<li>http(44)</li>
<li>shell(39)</li>
<li>python(38)</li>
<li>hadoop(37)</li>
<li>nosql(35)</li>
<li>ssh(35)</li>
<li>sqlserver(33)</li>
<li>mongodb(33)</li>
<li>svn(32)</li>
<li>uml(32)</li>
<li>json(27)</li>
<li>unix(27)</li>
<li>maven(27)</li>
<li>nginx(26)</li>
<li>webservice(25)</li>
<li>jdbc(24)</li>
<li>memcached(23)</li>
<li>tcp(22)</li>
<li>resin(22)</li>
<li>jvm(21)</li>
<li>socket(21)</li>
<li>db2(19)</li>
<li>springmvc(19)</li>
<li>websphere(16)</li>
<li>soa(16)</li>
<li>mina(14)</li>
<li>android(14)</li>
<li>extjs(13)</li>
<li>erp(12)</li>
<li>memcache(12)</li>
<li>api(11)</li>
<li>jetty(11)</li>
<li>myeclipse(11)</li>
<li>ext(10)</li>
<li>git(10)</li>
<li>jpa(10)</li>
<li>svm(9)</li>
<li>php(9)</li>
<li>jms(9)</li>
<li>ruby(9)</li>
<li>lucene(8)</li>
<li>html5(8)</li>
<li>postgresql(8)</li>
<li>crm(7)</li>
<li>javaee(7)</li>
<li>sybase(7)</li>
<li>freemarker(6)</li>
<li>cache(6)</li>
<li>jsf(6)</li>
<li>j2se(6)</li>
<li>jbpm(6)</li>
<li>cvs(6)</li>
<li>junit(6)</li>
<li>visio(6)</li>
<li>netty(6)</li>
<li>hbase(6)</li>
<li>nio(6)</li>
<li>powerdesigner(6)</li>
<li>oo(6)</li>
<li>aop(6)</li>
<li>workflow(5)</li>
<li>restful(5)</li>
<li>ios(5)</li>
<li>ant(5)</li>
<li>mssql(5)</li>
<li>orm(5)</li>
<li>rose(5)</li>
<li>solr(5)</li>
<li>webwork(5)</li>
<li>zookeeper(4)</li>
<li>soap(4)</li>
<li>o2o(4)</li>
<li>wap(4)</li>
<li>cxf(4)</li>
<li>thrift(4)</li>
<li>xmpp(3)</li>
<li>p2p(3)</li>
<li>javabean(3)</li>
<li>jee(3)</li>
<li>hdfs(3)</li>
<li>dom(3)</li>
<li>hibernate3(3)</li>
</ul>
<hr>
<h1 id="-">致谢</h1>
<p>感谢您花时间阅读我的简历，期待能有机会和您共事。</p>

`;

const page3=`
<h1 id="ios-">iOS程序员简历模板</h1>
<p>本简历模板由国内首家互联网人才拍卖网站「 <a href="http://www.jobdeer.com">JobDeer.com</a> 」提供。</p>
<p>（括号里的是我们的顾问编写的说明，建议在简历书写完成后统一删除）</p>
<h2 id="-">先讲讲怎样才是一份好的技术简历</h2>
<p>首先，一份好的简历不光说明事实，更通过FAB模式来增强其说服力。</p>
<ul>
<li>Feature：是什么</li>
<li>Advantage：比别人好在哪些地方</li>
<li>Benefit：如果雇佣你，招聘方会得到什么好处 </li>
</ul>
<p>其次，写简历和写议论文不同，过分的论证会显得自夸，反而容易引起反感，所以要点到为止。这里的技巧是，提供论据，把论点留给阅读简历的人自己去得出。放论据要具体，最基本的是要数字化，好的论据要让人印象深刻。</p>
<p>举个例子，下边内容是虚构的：</p>
<p>2006年，我参与了手机XX网发布系统WAPCMS的开发（<code>这部分是大家都会写的</code>）。作为核心程序员，我不但完成了网站界面、调度队列的开发工作，更提出了高效的组件级缓存系统，通过碎片化缓冲有效的提升了系统的渲染效率。（<code>这部分是很多同学忘掉的，要写出你在这个项目中具体负责的部分，以及你贡献出来的价值。</code>）在该系统上线后，Web前端性能从10QPS提升到200QPS，服务器由10台减少到3台（<code>通过量化的数字来增强可信度</code>）。2008年我升任WAPCMS项目负责人，带领一个3人小组支持着每天超过2亿的PV（<code>这就是Benefit。你能带给前雇主的价值，也就是你能带给新雇主的价值。</code>）。</p>
<p>有同学问，如果我在项目里边没有那么显赫的成绩可以说怎么办？讲不出成绩时，就讲你的成长。因为学习能力也是每家公司都看中的东西。你可以写你在这个项目里边遇到了一个什么样的问题，别人怎么解决的，你怎么解决的，你的方案好在什么地方，最终这个方案的效果如何。</p>
<p>具体、量化、有说服力，是技术简历特别需要注重的地方。</p>
<p>（以上内容在写完简历后，对每一段进行评估，完成后再删除）</p>
<hr>
<h1 id="-">联系方式</h1>
<p>（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）</p>
<ul>
<li>手机：135<strong><em>**</em></strong> （<code>如果是外地手机，可注明。如经常关机，要写上最优联系时间</code>）</li>
<li>Email：goodman@gmail.com （<code>虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G</code>）</li>
<li>QQ/微信号：6<strong><em>*</em></strong>（<code>提供一个通过网络可以联系到你的方式</code>）</li>
</ul>
<hr>
<h1 id="-">个人信息</h1>
<ul>
<li>胶布帝/男/1990 </li>
<li>本科/萌鹿大学计算机系 </li>
<li>工作年限：3年</li>
<li>微博：<a href="http://weibo.com/jobdeer">@JobDeer</a> （<code>如果没有技术相关内容，也可以不放</code>）</li>
<li>技术博客：<a href="http://blog.github.io">http://blog.github.io</a> ( <code>使用GitHub Host的Big较高</code>  )</li>
<li><p>Github：<a href="http://github.com/geekcompany">http://github.com/geekcompany</a> ( <code>有原创repo的Github帐号会极大的提升你的个人品牌</code>  )</p>
</li>
<li><p>期望职位：iOS高级程序员，应用架构师</p>
</li>
<li>期望薪资：税前月薪15k~20k，特别喜欢的公司可例外</li>
<li>期望城市：北京</li>
</ul>
<hr>
<h1 id="-">工作经历</h1>
<p>（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）</p>
<h2 id="abc-2012-9-2014-9-">ABC公司 （ 2012年9月 ~ 2014年9月 ）</h2>
<h3 id="def-">DEF项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="ghi-">GHI项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="-">其他项目</h3>
<p>（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）</p>
<h2 id="jkl-2010-3-2012-8-">JKL公司 （ 2010年3月 ~ 2012年8月 ）</h2>
<h3 id="mno-">MNO项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="pqr-">PQR项目</h3>
<p>我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。</p>
<h3 id="-">其他项目</h3>
<p>（每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）</p>
<hr>
<h1 id="-">开源项目和作品</h1>
<p>（这一段用于放置工作以外的、可证明你的能力的材料）</p>
<h2 id="-">开源项目</h2>
<p>（对于程序员来讲，没有什么比Show me the code能有说服力了）</p>
<ul>
<li><a href="http://github.com/yourname/projectname">STU</a>：项目的简要说明，Star和Fork数多的可以注明</li>
<li><a href="http://github.com/yourname/projectname">WXYZ</a>：项目的简要说明，Star和Fork数多的可以注明</li>
</ul>
<h2 id="-">技术文章</h2>
<p>（挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）</p>
<ul>
<li><a href="http://get.jobdeer.com/706.get">一个产品经理眼中的云计算：前生今世和未来</a></li>
<li><a href="http://get.jobdeer.com/343.get">来自HeroKu的HTTP API 设计指南(翻译文章)</a> （ <code>好的翻译文章可以侧证你对英文技术文档的阅读能力</code>）</li>
</ul>
<h2 id="-">演讲和讲义</h2>
<p>（放置你代表公司在一些技术会议上做过的演讲，以及你在公司分享时制作的讲义）</p>
<ul>
<li>2014架构师大会演讲：<a href="http://jobdeer.com">如何通过Docker优化内部开发</a><ul>
<li>9月公司内部分享：<a href="http://jobdeer.com">云计算的前生今世</a></li>
</ul>
</li>
</ul>
<h1 id="-">技能清单</h1>
<p>（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）</p>
<p>以下均为我熟练使用的技能</p>
<ul>
<li>Web开发：PHP/Hack/Node</li>
<li>Web框架：ThinkPHP/Yaf/Yii/Lavaral/LazyPHP</li>
<li>前端框架：Bootstrap/AngularJS/EmberJS/HTML5/Cocos2dJS/ionic</li>
<li>前端工具：Bower/Gulp/SaSS/LeSS/PhoneGap</li>
<li>数据库相关：MySQL/PgSQL/PDO/SQLite</li>
<li>版本管理、文档和自动化部署工具：Svn/Git/PHPDoc/Phing/Composer</li>
<li>单元测试：PHPUnit/SimpleTest/Qunit</li>
<li>云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发</li>
</ul>
<h2 id="-">参考技能关键字</h2>
<p>本技能关键字列表是从最近招聘PHP的数百份JD中统计出来的，括号中是出现的词频。如果你的简历要投递给有机器（简历分选系统）和不如机器（不懂技术的HR）筛选简历环节的地方，请一定从下边高频关键词中选择5～10个适合你自己的。</p>
<ul>
<li>ios(1383)</li>
<li>iphone(312)</li>
<li>objective c(286)</li>
<li>app(276)</li>
<li>sdk(205)</li>
<li>xcode(196)</li>
<li>ipad(155)</li>
<li>ui(153)</li>
<li>http(138)</li>
<li>mac(83)</li>
<li>tcp(83)</li>
<li>socket(81)</li>
<li>store(69)</li>
<li>xml(58)</li>
<li>cocoa(58)</li>
<li>json(51)</li>
<li>appstore(49)</li>
<li>os(47)</li>
<li>api(36)</li>
<li>android(36)</li>
<li>interface(31)</li>
<li>web(30)</li>
<li>builder(29)</li>
<li>java(27)</li>
<li>touch(25)</li>
<li>instruments(22)</li>
<li>github(22)</li>
<li>mvc(20)</li>
<li>oop(18)</li>
<li>html5(18)</li>
<li>im(18)</li>
<li>lbs(17)</li>
<li>ue(17)</li>
<li>bug(17)</li>
<li>cocos2d(16)</li>
<li>sqlite(16)</li>
<li>gui(16)</li>
<li>uikit(16)</li>
<li>ipod(15)</li>
<li>macos(15)</li>
<li>udp(15)</li>
<li>ood(13)</li>
<li>linux(12)</li>
<li>macosx(11)</li>
<li>gcd(11)</li>
<li>coredata(10)</li>
<li>code review(10)</li>
<li>shark(10)</li>
<li>runtime(9)</li>
<li>itunes(9)</li>
<li>storyboard(8)</li>
<li>opengl(8)</li>
<li>ndk(8)</li>
<li>unix(7)</li>
<li>js(7)</li>
<li>mysql(7)</li>
<li>html(7)</li>
<li>swift(7)</li>
<li>javascript(6)</li>
<li>stackoverflow(6)</li>
<li>design(6)</li>
<li>apns(6)</li>
<li>xmpp(6)</li>
<li>autolayout(5)</li>
<li>ib(5)</li>
<li>restful(5)</li>
<li>osx(5)</li>
<li>scrum(5)</li>
<li>gt(5)</li>
<li>sql(5)</li>
<li>j2ee(5)</li>
<li>wifi(5)</li>
<li>ux(5)</li>
<li>oracle(4)</li>
<li>3g(4)</li>
<li>agent(4)</li>
</ul>
<hr>
<h1 id="-">致谢</h1>
<p>感谢您花时间阅读我的简历，期待能有机会和您共事。</p>

`;

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
        style={{paddingTop:200,width:"80%",margin:"0 auto","wordWrap":"break-word","wordBreak":"break-all"}}
        dangerouslySetInnerHTML={{__html:page}}
      />

    );
  }
  
}

export default Page;
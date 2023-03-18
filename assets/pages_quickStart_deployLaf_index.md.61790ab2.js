import{_ as s,o as a,c as l,a as n}from"./app.85bf895b.js";const e="/my-blog/assets/1.785dd970.png",o="/my-blog/assets/2.259ef58a.png",t="/my-blog/assets/3.fa3edeb0.png",p="/my-blog/assets/4.7c6923da.png",c="/my-blog/assets/5.901ec751.png",i="/my-blog/assets/6.e6aa1cf3.png",r="/my-blog/assets/7.1f908414.png",d="/my-blog/assets/8.794e742c.png",u="/my-blog/assets/9.1ac9ee1b.png",D=JSON.parse('{"title":"三分钟部署 laf (win 版本)","description":"","frontmatter":{},"headers":[{"level":2,"title":"起步","slug":"起步","link":"#起步","children":[]},{"level":2,"title":"安装 Multipass","slug":"安装-multipass","link":"#安装-multipass","children":[]},{"level":2,"title":"直到你看到这个界面，就部署成功啦","slug":"直到你看到这个界面-就部署成功啦","link":"#直到你看到这个界面-就部署成功啦","children":[]}],"relativePath":"pages/quickStart/deployLaf/index.md"}'),g={name:"pages/quickStart/deployLaf/index.md"},C=n('<h1 id="三分钟部署-laf-win-版本" tabindex="-1">三分钟部署 laf (win 版本) <a class="header-anchor" href="#三分钟部署-laf-win-版本" aria-hidden="true">#</a></h1><h2 id="起步" tabindex="-1">起步 <a class="header-anchor" href="#起步" aria-hidden="true">#</a></h2><p>演示系统： win11专业版（这里一定是专业版，家庭版的同学去某宝花几块钱升级一下）</p><p>首先我们需要用到一个工具 Multipass。</p><ul><li><code>Multipass</code> 是快速创建一个 <code>linux</code> 虚拟机的工具。</li><li>我们创建 <code>linux</code> 虚拟机干啥呢？用来部署 <code>k8s</code> 。</li><li>什么是 <code>k8s</code> ？ 简单理解就是可以把多台服务器，组成一个超级机器，一起来管理的一个平台。</li><li>部署k8s干啥？ 因为 <code>laf</code> 当前只支持在 <code>k8s</code> 上部署。</li><li>我们反过来说： <code>laf</code> 当前只支持在 <code>k8s</code> 上部署， <code>k8s</code> 只支持 <code>linux</code> ,而我们只有一个 <code>windows</code> 系统。<br><img src="'+e+'" alt="alt 属性文本"></li></ul><h2 id="安装-multipass" tabindex="-1">安装 Multipass <a class="header-anchor" href="#安装-multipass" aria-hidden="true">#</a></h2><p>点击<a href="https://multipass.run/install" target="_blank" rel="noreferrer">这里</a>安装 Multipass win 版本。<br> 一路选择<code>下一步</code>安装，这个地方需要注意的是一定要选这个，如果这个选项是黑的证明你的系统不是<code>专业版</code>。 <img src="'+o+`" alt="alt 属性文本"><br> 安装完毕之后，重启电脑。<br> 重启完执行命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 启动 laf-dev 虚拟器 分配 cpus 2 memory 4G disk 50G</span></span>
<span class="line"><span style="color:#A6ACCD;">multipass launch --name laf-dev --cpus 2 --memory 4G --disk 50G</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果遇到 launch failed: Remote &quot;&quot; is unknown or unreachable. 请更换网络，我是用手机开热点解决的，大约会消耗800MB流量。</p></div><p>等待 <img src="`+t+'" alt="alt 属性文本"><br> 看到以下提示代表完成，这里的意思是由于禁止挂载跳过了挂载。 <img src="'+p+`" alt="alt 属性文本"><br> 我们手动开启</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">multipass set local.privileged-mounts=true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>挂载 laf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 这里的 D:\\WorkSpace\\laf 是我电脑上的 laf 项目绝对地址，需要更换成你自己的</span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果你还没有，先去 GitHub 上 clone </span></span>
<span class="line"><span style="color:#A6ACCD;">multipass mount D:\\WorkSpace\\laf laf-dev:/laf/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>执行完之后需要打开 laf 项目找到 deploy/scripts/install-on-linux.sh 文件把 <code>CRLF</code> 改成 <code>LF</code> 后保存。 <img src="`+c+`" alt="alt 属性文本"><br> 改完后执行命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 获取到我们开启的虚拟机ip</span></span>
<span class="line"><span style="color:#A6ACCD;">multipass info laf-dev | Where-Object{$_ -match &quot;IPv4&quot;} | ForEach-Object{ ($_ -split &quot;\\s+&quot;)[1] }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>执行完后会出现一个 ip 地址 <img src="`+i+`" alt="alt 属性文本"><br> 复制下来放在这条命令里面</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">multipass exec laf-dev -- sudo -u root sh /laf/deploy/scripts/install-on-linux.sh 放在这里.nip.io</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+r+`" alt="alt 属性文本"><br> 网速太慢，待续。。。</p><hr><p>如果你也和我一样下载特别慢，可以将以下代码添加到 <code>install-on-linux.sh</code> 文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mkdir /etc/containers/</span></span>
<span class="line"><span style="color:#A6ACCD;">cat &gt;/etc/containers/registries.conf &lt;&lt;EOF</span></span>
<span class="line"><span style="color:#A6ACCD;">unqualified-search-registries = [&quot;docker.io&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[[registry]]</span></span>
<span class="line"><span style="color:#A6ACCD;">prefix = &quot;docker.io&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">location = &quot;dockerproxy.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+d+`" alt="alt 属性文本"><br> 保存后重新运行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 别忘了更换ip地址</span></span>
<span class="line"><span style="color:#A6ACCD;">multipass exec laf-dev -- sudo -u root sh /laf/deploy/scripts/install-on-linux.sh 放在这里.nip.io</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="直到你看到这个界面-就部署成功啦" tabindex="-1">直到你看到这个界面，就部署成功啦 <img src="`+u+'" alt="alt 属性文本"> <a class="header-anchor" href="#直到你看到这个界面-就部署成功啦" aria-hidden="true">#</a></h2><blockquote><p>如果本文对你有帮助，可以去 Github 给我的博客点个 star 嘛<br><strong><a href="https://github.com/zuoFeng59556/my-blog" target="_blank" rel="noreferrer">https://github.com/zuoFeng59556/my-blog</a></strong></p></blockquote>',25),m=[C];function h(y,b,A,_,f,k){return a(),l("div",null,m)}const x=s(g,[["render",h]]);export{D as __pageData,x as default};

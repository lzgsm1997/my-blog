import{_ as s}from"./chunks/3.f2184037.js";import{_ as a,o as n,c as p,a as l}from"./app.85bf895b.js";const d=JSON.parse('{"title":"三分钟拥有自己的 ChatGPT (从开发到上线)","description":"","frontmatter":{},"headers":[{"level":2,"title":"云函数教学","slug":"云函数教学","link":"#云函数教学","children":[]},{"level":2,"title":"云函数","slug":"云函数","link":"#云函数","children":[]},{"level":2,"title":"前端","slug":"前端","link":"#前端","children":[]},{"level":2,"title":"上线","slug":"上线","link":"#上线","children":[]}],"relativePath":"pages/quickStart/chatGPT/index.md"}'),o={name:"pages/quickStart/chatGPT/index.md"},e=l(`<h1 id="三分钟拥有自己的-chatgpt-从开发到上线" tabindex="-1">三分钟拥有自己的 ChatGPT (从开发到上线) <a class="header-anchor" href="#三分钟拥有自己的-chatgpt-从开发到上线" aria-hidden="true">#</a></h1><p>OpenAI 已经公布了 ChatGPT 正式版 API，背后的新模型是 gpt-3.5-turbo，这是 OpenAI 目前最先进的模型，响应速度更快，价格更便宜。</p><p>作为开发人员，我们还是希望通过 API 将 ChatGPT 和相关模型集成到自己的产品和应用中，尴尬的是，目前无法访问 ChatGPT API，原因大家都懂得。于是网上出现了各种各样的 API 反代服务，我们可以直接通过反代服务来变相访问 ChatGPT API。</p><p>即使我们解决了 API 的访问问题，还要准备一个开发环境，比如对于 Node.js 客户端来说，需要准备一个 Node.js 环境。</p><p>有没有一种简单快捷的方法来调用 ChatGPT API 呢？</p><p><strong>那当然是用 Laf 了。</strong></p><p>Laf 是一个<strong>完全开源</strong>的一站式云开发平台，提供了开箱即用的云函数，云数据库，对象存储等能力，让你可以像写博客一样写代码。</p><blockquote><p>GitHub：<strong><a href="https://github.com/labring/laf" target="_blank" rel="noreferrer">https://github.com/labring/laf</a></strong></p></blockquote><p>如果你希望快速了解 Laf 的用法，可以参考这篇文章：<a href="https://zuofeng59556.github.io/my-blog/pages/quickStart/laf/" target="_blank" rel="noreferrer">三分钟学会 Laf</a>。</p><p>言归正传，<strong>下面我们开始计时</strong>，三分钟时间用 Laf 实现一个自己的 ChatGPT！</p><blockquote><p>前提条件：你需要准备一个 ChatGPT 账号并且生成一个 API Key (这一步可以问 Google )</p></blockquote><h2 id="云函数教学" tabindex="-1">云函数教学 <a class="header-anchor" href="#云函数教学" aria-hidden="true">#</a></h2><p>首先需要登录 <a href="https://laf.dev" target="_blank" rel="noreferrer">laf.dev</a>，然后新建一个应用。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-22-YLijVo.png" alt=""></p><p>点击开发按钮进入开发页面。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-26-NMoDbR.png" alt=""></p><p>在 NPM 依赖面板中点击右上角的 <code>+</code>：</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-09-23-29-wNbCOt.png" alt=""></p><p>然后输入 chatgpt 并回车进行搜索，选择第一个搜索结果，<strong>保存并重启：</strong></p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-09-23-30-ARz9Vu.png" alt=""></p><p>重启之后，自定义依赖项中便出现了 chatgpt。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-09-23-35-WoQaDj.png" alt=""></p><p>然后就可以像我一样新建一个云函数名字叫 <strong>send</strong>，并写入以下内容：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> cloud </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lafjs/cloud</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionContext</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ChatGPTAPI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chatgpt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ChatGPTAPI</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CHAT_GPT_API_KEY</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sendMessage</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">“鸡你太美”指的是中国大陆哪位男艺人？给你个提示，他喜欢唱、跳、篮球、Rap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-36-kyCtdE.png" alt=""></p><p>API Key 是通过环境变量 <code>CHAT_GPT_API_KEY</code> 传入的，所以我们还需要创建一个环境变量。点击左下角的设置图标：</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-38-ydsD8h.png" alt=""></p><p>依次选择「环境变量」--&gt; 「新增环境变量」，输入环境变量的名称和值，然后点击「确定」，再点击「更新」，便会重启应用。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-46-Hr7VTk.png" alt=""></p><p>现在点击右上角的「运行」，即可调试运行。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-49-44vRN2.png" alt=""></p><p>Perfect！现在我们来试试添加<strong>追踪上下文</strong>的功能。其实也很简单，只需要在对话时传入上一次对话的 ID 即可，代码如下：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> cloud </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lafjs/cloud</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionContext</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ChatGPTAPI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chatgpt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ChatGPTAPI</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CHAT_GPT_API_KEY</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sendMessage</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">“鸡你太美”指的是中国大陆哪位男艺人？给你个提示，他喜欢唱、跳、篮球、Rap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 传入 parentMessageId 追踪上下文</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sendMessage</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不对，他姓蔡，请重新回答</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    parentMessageId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>运行一下看看：</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-18-53-Vavw0w.png" alt=""></p><p>好厉害，竟然两次就答对了我的问题！</p><p>好了，<strong>现在才开始真的计时</strong>，因为刚刚是教学环节，不计入耗时😁</p><h2 id="云函数" tabindex="-1">云函数 <a class="header-anchor" href="#云函数" aria-hidden="true">#</a></h2><p>接下来我们就可以开始动手打造自己的 ChatGPT 了，首先把上一节的函数替换为下面的内容：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> cloud </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@lafjs/cloud</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionContext</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ChatGPTAPI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chatgpt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 这里需要把 api 对象放入 cloud.shared 不然无法追踪上下文</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shared</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">api</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">api</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ChatGPTAPI</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CHAT_GPT_API_KEY</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shared</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 这里前端如果传过来 parentMessageId 则代表需要追踪上下文</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentMessageId</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sendMessage</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sendMessage</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> parentMessageId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentMessageId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>现在应该很好理解这个函数了吧？</p><h2 id="前端" tabindex="-1">前端 <a class="header-anchor" href="#前端" aria-hidden="true">#</a></h2><p>我们要实现的是 Web 版 ChatGPT，所以还需要一个前端页面。首先需要安装 Laf 的 SDK：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ npm install laf-client-sdk</span></span>
<span class="line"></span></code></pre></div><p>接下来，需要创建一个 cloud 对象：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cloud</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">laf-client-sdk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 创建 cloud 对象 这里需要将 &lt;appid&gt; 替换成自己的 App ID</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cloud </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Cloud</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">baseUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://&lt;appid&gt;.laf.dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">getAccessToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 这里不需要授权，先填空</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>这里我们看一下前端的核心代码，非常的简单，就是把提问的内容和上下文 id 传入云函数就可以了。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 我们提问的内容</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">question</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 与云函数逻辑一样，有上下文 id 就传入</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">parentMessageId</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">send</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">send</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> parentMessageId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parentMessageId</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 回复我们的内容在 res.text </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 这个是上下文 id</span></span>
<span class="line"><span style="color:#A6ACCD;">parentMessageId</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>到这一步 我们已经可以发信息给 ChatGPT 并且拿到回复的消息了。</p><p>我们只要稍微加<strong>亿点点</strong>细节，就可以变成这样：</p><p><img src="`+s+'" alt="alt 属性文本"></p><p>加完这点细节之后，基本开发工作就完成了，接下来就是把项目上线分享给你的朋友，顺便装个杯。</p><p>说到上线我们现在应该要去买一台服务器安装 Nginx，配置 Nginx，解析域名，绑定域名...</p><p><strong>NO NO NO 我不允许你浪费年轻而美好的生命，life is short, you need laf 😃</strong></p><h2 id="上线" tabindex="-1">上线 <a class="header-anchor" href="#上线" aria-hidden="true">#</a></h2><p>打开你的 Laf，点击存储界面 --&gt; 点击上方加号 --&gt; 创建一个权限为 readonly 的存储桶（名字随意）。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-09-hMcqZu.jpg" alt=""></p><p>创建完之后，在你的前端项目中运行打包命令。我这里用的是 <code>npm run build</code>。</p><p>打包完毕之后找到打包好的 <code>dist</code> 文件夹，像我一样把 <code>dist</code> 文件里面的所有东西都上传到我们刚刚创建的存储桶里面，记住是原封不动的上传哦，文件就是文件，文件夹就是文件夹。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-11-EE5Ld4.jpg" alt=""></p><p>上传完毕之后，发现右上角有一个 “开启网站托管”，点一下它！</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-11-N0Ty0Z.jpg" alt=""></p><p>点完之后出来一个链接，我们点击一下访问看看是啥东西。</p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-12-iBZITq.jpg" alt=""></p><p><strong>哦！我的老天鹅呀 这不就是我刚刚开发的项目吗？？</strong></p><p><img src="https://jsdelivr.icloudnative.io/gh/yangchuansheng/imghosting5@main/uPic/2023-03-11-19-12-bFGfCz.jpg" alt=""></p><p>恭喜，到这里你的项目已经上线了，快分享给你的好朋友吧！</p><hr><ul><li>项目源码：<strong><a href="https://github.com/zuoFeng59556/chatGPT" target="_blank" rel="noreferrer">https://github.com/zuoFeng59556/chatGPT</a></strong></li><li>示例网站：<strong><a href="https://jyf6wk-chat-gpt.site.laf.dev/" target="_blank" rel="noreferrer">https://jyf6wk-chat-gpt.site.laf.dev/</a></strong></li></ul><blockquote><p>如果本文对你有帮助，可以去 Github 给我的博客点个 star 嘛<br><strong><a href="https://github.com/zuoFeng59556/my-blog" target="_blank" rel="noreferrer">https://github.com/zuoFeng59556/my-blog</a></strong></p></blockquote>',70),t=[e];function c(r,F,y,D,i,A){return n(),p("div",null,t)}const h=a(o,[["render",c]]);export{d as __pageData,h as default};

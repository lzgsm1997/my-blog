import{_ as s,o as l,c as a,a as n}from"./app.0d6ecb8e.js";const y=JSON.parse('{"title":"\u{1F578}\uFE0F \u89E3\u6790 BeautifulSoup","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F578}\uFE0F \u5B89\u88C5","slug":"\u{1F578}\uFE0F-\u5B89\u88C5","link":"#\u{1F578}\uFE0F-\u5B89\u88C5","children":[{"level":3,"title":"\u{1F578}\uFE0F\u5F15\u5165","slug":"\u{1F578}\uFE0F\u5F15\u5165","link":"#\u{1F578}\uFE0F\u5F15\u5165","children":[]},{"level":3,"title":"\u{1F578}\uFE0F BeatifuSoup \u89E3\u6790\u5668","slug":"\u{1F578}\uFE0F-beatifusoup-\u89E3\u6790\u5668","link":"#\u{1F578}\uFE0F-beatifusoup-\u89E3\u6790\u5668","children":[]},{"level":3,"title":"\u{1F578}\uFE0F \u5B89\u88C5lxml","slug":"\u{1F578}\uFE0F-\u5B89\u88C5lxml","link":"#\u{1F578}\uFE0F-\u5B89\u88C5lxml","children":[]},{"level":3,"title":"\u{1F578}\uFE0F \u4F7F\u7528","slug":"\u{1F578}\uFE0F-\u4F7F\u7528","link":"#\u{1F578}\uFE0F-\u4F7F\u7528","children":[]},{"level":3,"title":"\u{1F578}\uFE0F find_all / find","slug":"\u{1F578}\uFE0F-find-all-find","link":"#\u{1F578}\uFE0F-find-all-find","children":[]}]}],"relativePath":"WebSpider/Spider/BeautifulSoup.md","lastUpdated":1679152892000}'),p={name:"WebSpider/Spider/BeautifulSoup.md"},o=n(`<h1 id="\u{1F578}\uFE0F-\u89E3\u6790-beautifulsoup" tabindex="-1">\u{1F578}\uFE0F \u89E3\u6790 BeautifulSoup <a class="header-anchor" href="#\u{1F578}\uFE0F-\u89E3\u6790-beautifulsoup" aria-hidden="true">#</a></h1><h2 id="\u{1F578}\uFE0F-\u5B89\u88C5" tabindex="-1">\u{1F578}\uFE0F \u5B89\u88C5 <a class="header-anchor" href="#\u{1F578}\uFE0F-\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">pip install beautifulsoup4</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F578}\uFE0F\u5F15\u5165" tabindex="-1">\u{1F578}\uFE0F\u5F15\u5165 <a class="header-anchor" href="#\u{1F578}\uFE0F\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> bs4 </span><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> BeautifulSoup   </span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F578}\uFE0F-beatifusoup-\u89E3\u6790\u5668" tabindex="-1">\u{1F578}\uFE0F BeatifuSoup \u89E3\u6790\u5668 <a class="header-anchor" href="#\u{1F578}\uFE0F-beatifusoup-\u89E3\u6790\u5668" aria-hidden="true">#</a></h3><p>\u89E3\u6790\u5668\u662F\u4E00\u79CD\u5E2E\u6211\u4EEC\u7ED3\u6784\u5316\u7F51\u9875\u5185\u5BB9\u7684\u5DE5\u5177\uFF0C\u901A\u8FC7\u89E3\u6790\u5668\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u7ED3\u6784\u5316\u7684\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u5355\u7EAF\u7684\u5B57\u7B26\uFF0C\u65B9\u4FBF\u6211\u4EEC\u89E3\u6790\u548C\u67E5\u627E\u6570\u636E\u3002 BeautifulSoup \u7684\u89E3\u6790\u5668\u6709 html.parse\uFF0Chtml5lib\uFF0Clxml \u7B49\u3002BeautifulSoup \u672C\u8EAB\u652F\u6301\u7684\u6807\u51C6\u5E93\u662F html.parse\uFF0Chtml5lib\u3002\u4F46\u662F\uFF0Clxml \u7684\u6027\u80FD\u975E\u5E38\u68D2\uFF0C\u4EE5\u53CA\u62E5\u6709\u826F\u597D\u7684\u5BB9\u9519\u80FD\u529B\uFF0C\u73B0\u5728\u88AB\u5E7F\u6CDB\u7684\u4F7F\u7528\u3002 \u89E3\u6790\u5668\u5BF9\u6BD4\uFF1A</p><ul><li><strong>html.parse \u662F Python \u6807\u51C6\u5E93\u7684\u89E3\u6790\u5668\uFF0C\u8FD9\u4E2A\u89E3\u6790\u5668\u6267\u884C\u901F\u5EA6\u4E0D\u662F\u592A\u5FEB\uFF0C\u4F46\u662F\u6587\u6863\u5BB9\u9519\u80FD\u529B\u6BD4\u8F83\u597D\u3002</strong></li><li><strong>html.5lib \u540C\u6837\u662F\u5185\u7F6E\u7684\u89E3\u6790\u5668\uFF0C\u5B83\u662F\u901A\u8FC7\u6D4F\u89C8\u5668\u7684\u65B9\u5F0F\u89E3\u6790\u6570\u636E\uFF0C\u53EF\u4EE5\u751F\u6210\u826F\u597D\u7684 HTML5 \u683C\u5F0F\u7684\u6587\u6863\uFF0C\u4F46\u662F\u901F\u5EA6\u6BD4\u8F83\u6162\u3002</strong></li><li><strong>lxml \u662F\u7B2C\u4E09\u65B9\u89E3\u6790\u5668\uFF0C\u9700\u8981\u989D\u5916\u5B89\u88C5\u3002\u8FD9\u4E2A\u89E3\u6790\u5668\u6267\u884C\u901F\u5EA6\u5FEB\uFF0C\u5E76\u4E14\u662F\u552F\u4E00\u652F\u6301 XML \u7684\u89E3\u6790\u5668\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u4E5F\u4F1A\u9009\u7528 lxml \u6765\u8FDB\u884C\u8BB2\u89E3\u3002</strong></li></ul><p>\u5B89\u88C5 lxml \u548C\u5B89\u88C5 BeautifulSoup \u7C7B\u4F3C\uFF0C\u540C\u6837\u53EA\u9700\u4E00\u884C\u547D\u4EE4\u5C31\u597D\uFF1A</p><h3 id="\u{1F578}\uFE0F-\u5B89\u88C5lxml" tabindex="-1">\u{1F578}\uFE0F \u5B89\u88C5lxml <a class="header-anchor" href="#\u{1F578}\uFE0F-\u5B89\u88C5lxml" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">pip install lxml</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F578}\uFE0F-\u4F7F\u7528" tabindex="-1">\u{1F578}\uFE0F \u4F7F\u7528 <a class="header-anchor" href="#\u{1F578}\uFE0F-\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> requests</span></span>
<span class="line"><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> bs4 </span><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> BeautifulSoup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">html </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> requests</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">get</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">https://www.baidu.com</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">soup </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">BeautifulSoup</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">html</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">text</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">lxml</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">soup</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">data1 </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> soup</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">find_all</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">p</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">data2 </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> soup</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">find_all</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">div</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">class_</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">list</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F578}\uFE0F-find-all-find" tabindex="-1">\u{1F578}\uFE0F find_all / find <a class="header-anchor" href="#\u{1F578}\uFE0F-find-all-find" aria-hidden="true">#</a></h3><ul><li><code>find_all</code> \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F<code>&lt;\u6807\u7B7E&gt;</code>,\u7B2C\u4E8C\u4E2A\u6807\u7B7E\u662F\u6807\u7B7E\u7684\u5C5E\u6027\u3002\u5B83\u4F1A\u628A\u6240\u6709\u5305\u542B\u8FD9\u4E9B\u7B5B\u9009\u6761\u4EF6\u7684<code>&lt;\u6807\u7B7E&gt;</code>\u6C47\u805A\u6210\u4E00\u4E2A\u6570\u7EC4\u3002</li><li><code>find</code> \u662F\u83B7\u53D6\u7B2C\u4E00\u4E2A\u7B26\u5408\u7684\u6761\u4EF6\u7684\u6807\u7B7E</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">data</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">soup</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">find_all</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">div</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">class_</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">list</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">) </span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">data</span><span style="color:#D8DEE9FF;">)</span><span style="color:#616E88;">//\u{1F447}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//[&#39;&lt;div class=&quot;list&quot;&gt;1&lt;/div&gt;&#39;,&#39;&lt;div class=&quot;list&quot;&gt;2&lt;/div&gt;&#39;,&#39;&lt;div class=&quot;list&quot;&gt;3&lt;/div&gt;&#39;]</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">BeautifulSoup</p><p>\u5173\u4E8E\u8FD9\u4E2A BeautifulSoup \uFF01<br> \u5982\u679C\u4F60\u4E0D\u4F7F\u7528\u5B83\uFF0C\u722C\u4E0B\u6765\u7684\u5C31\u662F\u5E72\u5DF4\u5DF4\u7684\u5B57.... \u4F60\u662F\u4E0D\u80FD\u7528<code>find_all</code> <code>find</code>\u8FD9\u4E9B\u6765\u627E\u91CC\u9762\u7684\u6807\u7B7E\u7684\uFF0C\u56E0\u4E3A\u722C\u4E0B\u6765\u7684\u6570\u636E\u5C31\u662F\u3010\u5B57\u3011\uFF0C\u53EA\u6709\u5F53\u4F60\u5229\u7528BeautfulSoup\u628A\u5B83\u3010\u89E3\u6790\u3011\u89E3\u6790\u6210HTML\u540E\uFF0C\u624D\u80FD\u88AB\u62FF\u6765\u5206\u6790\uFF0C\u6574\u7406\uFF0C\u83B7\u53D6\u3002</p><p>\u6240\u4EE5\u3010\u89E3\u6790\u3011\u3010\u89E3\u6790\u3011\uFF01\u5C31\u662F \u89E3\u91CA\uFF01\u5206\u6790\uFF01</p></div>`,17),e=[o];function t(c,r,i,E,d,u){return l(),a("div",null,e)}const h=s(p,[["render",t]]);export{y as __pageData,h as default};

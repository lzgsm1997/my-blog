import{_ as s,o as n,c as a,a as o}from"./app.0d6ecb8e.js";const D=JSON.parse('{"title":"\u{1F7E8} JS \u96F6\u788E\u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E8} \u6240\u6709\u53C2\u6570 arguments","slug":"\u{1F7E8}-\u6240\u6709\u53C2\u6570-arguments","link":"#\u{1F7E8}-\u6240\u6709\u53C2\u6570-arguments","children":[]},{"level":2,"title":"\u{1F7E8} \u65E0\u9650\u5927 Infinity","slug":"\u{1F7E8}-\u65E0\u9650\u5927-infinity","link":"#\u{1F7E8}-\u65E0\u9650\u5927-infinity","children":[]},{"level":2,"title":"\u{1F7E8} \u8F6C\u4E49\u5E8F\u5217 encodeURIComponent()","slug":"\u{1F7E8}-\u8F6C\u4E49\u5E8F\u5217-encodeuricomponent","link":"#\u{1F7E8}-\u8F6C\u4E49\u5E8F\u5217-encodeuricomponent","children":[]}],"relativePath":"FrontEnd/JavaScript/JS_Note.md","lastUpdated":1679152892000}'),l={name:"FrontEnd/JavaScript/JS_Note.md"},e=o(`<h1 id="\u{1F7E8}-js-\u96F6\u788E\u7B14\u8BB0" tabindex="-1">\u{1F7E8} JS \u96F6\u788E\u7B14\u8BB0 <a class="header-anchor" href="#\u{1F7E8}-js-\u96F6\u788E\u7B14\u8BB0" aria-hidden="true">#</a></h1><h2 id="\u{1F7E8}-\u6240\u6709\u53C2\u6570-arguments" tabindex="-1">\u{1F7E8} \u6240\u6709\u53C2\u6570 arguments <a class="header-anchor" href="#\u{1F7E8}-\u6240\u6709\u53C2\u6570-arguments" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">xxg</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">arguments</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// [\u53C2\u6570\u7684\u957F\u5EA6]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">arguments</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//[\u8F6C\u5165\u7684\u53C2\u6570]</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">xxg</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">3</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-\u65E0\u9650\u5927-infinity" tabindex="-1">\u{1F7E8} \u65E0\u9650\u5927 Infinity <a class="header-anchor" href="#\u{1F7E8}-\u65E0\u9650\u5927-infinity" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">Infinity</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">//\u65E0\u9650\u5927</span></span>
<span class="line"><span style="color:#81A1C1;">-Infinity</span><span style="color:#D8DEE9FF;">   </span><span style="color:#616E88;">//\u65E0\u9650\u5C0F</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-\u8F6C\u4E49\u5E8F\u5217-encodeuricomponent" tabindex="-1">\u{1F7E8} \u8F6C\u4E49\u5E8F\u5217 encodeURIComponent() <a class="header-anchor" href="#\u{1F7E8}-\u8F6C\u4E49\u5E8F\u5217-encodeuricomponent" aria-hidden="true">#</a></h2><blockquote><p><a href="https://baike.baidu.com/item/encodeURIComponent%28%29%20%E5%87%BD%E6%95%B0/7418815?fr=aladdin" target="_blank" rel="noreferrer">\u767E\u5EA6\u767E\u79D1\uFF1AencodeURIComponent() \u51FD\u6570</a><br> \u4F5C\u7528\uFF1A\u53EF\u628A\u5B57\u7B26\u4E32\u4F5C\u4E3AURI \u7EC4\u4EF6\u8FDB\u884C\u7F16\u7801\u3002</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#88C0D0;">encodeURIComponent</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">\u4F60\u597D\uFF0C\u4E16\u754C\uFF01</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#88C0D0;">encodeURIComponent</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Hello world!</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#88C0D0;">encodeURIComponent</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">,/?:@&amp;=+$#</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u8F93\u51FA\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#616E88;">//\u6D4B\u8BD5\u4E00\uFF1A%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%EF%BC%81</span></span>
<span class="line"><span style="color:#616E88;">//\u6D4B\u8BD5\u4E8C\uFF1AHello%20world!</span></span>
<span class="line"><span style="color:#616E88;">//\u6D4B\u8BD5\u4E09\uFF1A%2C%2F%3F%3A%40%26%3D%2B%24%23</span></span>
<span class="line"></span></code></pre></div>`,8),p=[e];function t(c,r,E,i,y,F){return n(),a("div",null,p)}const C=s(l,[["render",t]]);export{D as __pageData,C as default};

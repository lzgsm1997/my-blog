import{_ as s,o as a,c as l,a as n}from"./app.0d6ecb8e.js";const D=JSON.parse('{"title":"\u{1F7E7} HTML5 Web\u5B58\u50A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"sessionStorage","slug":"sessionstorage","link":"#sessionstorage","children":[{"level":3,"title":"\u4FDD\u5B58","slug":"\u4FDD\u5B58","link":"#\u4FDD\u5B58","children":[]},{"level":3,"title":"\u8BFB\u53D6\u6570\u636E","slug":"\u8BFB\u53D6\u6570\u636E","link":"#\u8BFB\u53D6\u6570\u636E","children":[]},{"level":3,"title":"\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E","slug":"\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E","link":"#\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E","children":[]},{"level":3,"title":"\u5220\u9664\u6240\u6709\u6570\u636E","slug":"\u5220\u9664\u6240\u6709\u6570\u636E","link":"#\u5220\u9664\u6240\u6709\u6570\u636E","children":[]}]},{"level":2,"title":"localStorage","slug":"localstorage","link":"#localstorage","children":[{"level":3,"title":"\u4FDD\u5B58","slug":"\u4FDD\u5B58-1","link":"#\u4FDD\u5B58-1","children":[]},{"level":3,"title":"\u8BFB\u53D6\u6570\u636E","slug":"\u8BFB\u53D6\u6570\u636E-1","link":"#\u8BFB\u53D6\u6570\u636E-1","children":[]},{"level":3,"title":"\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E","slug":"\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E-1","link":"#\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E-1","children":[]},{"level":3,"title":"\u5220\u9664\u6240\u6709\u6570\u636E","slug":"\u5220\u9664\u6240\u6709\u6570\u636E-1","link":"#\u5220\u9664\u6240\u6709\u6570\u636E-1","children":[]},{"level":3,"title":"\u5F97\u5230\u67D0\u4E2A\u7D22\u5F15\u7684key","slug":"\u5F97\u5230\u67D0\u4E2A\u7D22\u5F15\u7684key","link":"#\u5F97\u5230\u67D0\u4E2A\u7D22\u5F15\u7684key","children":[]}]},{"level":2,"title":"\u5B57\u7B26\u4E32 / \u5BF9\u8C61 \u4E92\u8F6C","slug":"\u5B57\u7B26\u4E32-\u5BF9\u8C61-\u4E92\u8F6C","link":"#\u5B57\u7B26\u4E32-\u5BF9\u8C61-\u4E92\u8F6C","children":[{"level":3,"title":"\u5BF9\u8C61\u8F6C\u6362\u5B57\u7B26\u4E32","slug":"\u5BF9\u8C61\u8F6C\u6362\u5B57\u7B26\u4E32","link":"#\u5BF9\u8C61\u8F6C\u6362\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"\u5B57\u7B26\u4E32\u8F6C\u6362\u5BF9\u8C61","slug":"\u5B57\u7B26\u4E32\u8F6C\u6362\u5BF9\u8C61","link":"#\u5B57\u7B26\u4E32\u8F6C\u6362\u5BF9\u8C61","children":[]}]}],"relativePath":"FrontEnd/HTML/HTML5_webstorage.md","lastUpdated":1679152892000}'),e={name:"FrontEnd/HTML/HTML5_webstorage.md"},o=n(`<h1 id="\u{1F7E7}-html5-web\u5B58\u50A8" tabindex="-1">\u{1F7E7} HTML5 Web\u5B58\u50A8 <a class="header-anchor" href="#\u{1F7E7}-html5-web\u5B58\u50A8" aria-hidden="true">#</a></h1><p>HTML5 web \u5B58\u50A8\uFF0C\u4E00\u4E2A\u6BD4 cookie \u66F4\u597D\u7684\u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u3002</p><ul><li>localStorage - \u7528\u4E8E\u957F\u4E45\u4FDD\u5B58\u6574\u4E2A\u7F51\u7AD9\u7684\u6570\u636E\uFF0C\u4FDD\u5B58\u7684\u6570\u636E\u6CA1\u6709\u8FC7\u671F\u65F6\u95F4\uFF0C\u76F4\u5230\u624B\u52A8\u53BB\u9664\u3002</li><li>sessionStorage - \u7528\u4E8E\u4E34\u65F6\u4FDD\u5B58\u540C\u4E00\u7A97\u53E3(\u6216\u6807\u7B7E\u9875)\u7684\u6570\u636E\uFF0C\u5728\u5173\u95ED\u7A97\u53E3\u6216\u6807\u7B7E\u9875\u4E4B\u540E\u5C06\u4F1A\u5220\u9664\u8FD9\u4E9B\u6570\u636E\u3002</li></ul><h2 id="sessionstorage" tabindex="-1">sessionStorage <a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a></h2><h3 id="\u4FDD\u5B58" tabindex="-1">\u4FDD\u5B58 <a class="header-anchor" href="#\u4FDD\u5B58" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">sessionStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setItem</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">key</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">value</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">sessionStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">key</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">value</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8BFB\u53D6\u6570\u636E" tabindex="-1">\u8BFB\u53D6\u6570\u636E <a class="header-anchor" href="#\u8BFB\u53D6\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">sessionStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getItem</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">key</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E" tabindex="-1">\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E <a class="header-anchor" href="#\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">sessionStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">removeItem</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">key</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u6240\u6709\u6570\u636E" tabindex="-1">\u5220\u9664\u6240\u6709\u6570\u636E <a class="header-anchor" href="#\u5220\u9664\u6240\u6709\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">sessionStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">clear</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-hidden="true">#</a></h2><h3 id="\u4FDD\u5B58-1" tabindex="-1">\u4FDD\u5B58 <a class="header-anchor" href="#\u4FDD\u5B58-1" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">localStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setItem</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">key</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">value</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8BFB\u53D6\u6570\u636E-1" tabindex="-1">\u8BFB\u53D6\u6570\u636E <a class="header-anchor" href="#\u8BFB\u53D6\u6570\u636E-1" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">lastname</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">localStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getItem</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">key</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E-1" tabindex="-1">\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E <a class="header-anchor" href="#\u5220\u9664\u6307\u5B9A\u952E\u7684\u6570\u636E-1" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">localStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">removeItem</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">key</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u6240\u6709\u6570\u636E-1" tabindex="-1">\u5220\u9664\u6240\u6709\u6570\u636E <a class="header-anchor" href="#\u5220\u9664\u6240\u6709\u6570\u636E-1" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">localStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">clear</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5F97\u5230\u67D0\u4E2A\u7D22\u5F15\u7684key" tabindex="-1">\u5F97\u5230\u67D0\u4E2A\u7D22\u5F15\u7684key <a class="header-anchor" href="#\u5F97\u5230\u67D0\u4E2A\u7D22\u5F15\u7684key" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">localStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">key</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><ul><li>IE8 \u4EE5\u4E0A\u7684 IE \u7248\u672C\u624D\u652F\u6301localStorage \u8FD9\u4E2A\u5C5E\u6027\u3002</li><li>localStorage\u5728\u6D4F\u89C8\u5668\u7684\u9690\u79C1\u6A21\u5F0F\u4E0B\u9762\u662F\u4E0D\u53EF\u8BFB\u53D6\u7684\u3002</li><li>localStorage\u672C\u8D28\u4E0A\u662F\u5BF9\u5B57\u7B26\u4E32\u7684\u8BFB\u53D6\uFF0C\u5982\u679C\u5B58\u50A8\u5185\u5BB9\u591A\u7684\u8BDD\u4F1A\u6D88\u8017\u5185\u5B58\u7A7A\u95F4\uFF0C\u4F1A\u5BFC\u81F4\u9875\u9762\u53D8\u5361\u3002</li><li>localStorage\u4E0D\u80FD\u88AB\u722C\u866B\u6293\u53D6\u5230\u3002</li><li>localStorage \u53EA\u652F\u6301 string \u7C7B\u578B\u7684\u5B58\u50A8</li></ul></div><h2 id="\u5B57\u7B26\u4E32-\u5BF9\u8C61-\u4E92\u8F6C" tabindex="-1">\u5B57\u7B26\u4E32 / \u5BF9\u8C61 \u4E92\u8F6C <a class="header-anchor" href="#\u5B57\u7B26\u4E32-\u5BF9\u8C61-\u4E92\u8F6C" aria-hidden="true">#</a></h2><p>\u76EE\u524D\u6240\u6709\u7684\u6D4F\u89C8\u5668\u4E2D\u90FD\u4F1A\u628AlocalStorage\u7684\u503C\u7C7B\u578B\u9650\u5B9A\u4E3Astring\u7C7B\u578B</p><ol><li>\u6240\u4EE5\u60F3\u628A\u3010\u5BF9\u8C61/\u6570\u7EC4\u3011\u5B58\u5165\u65F6\u8981\u8F6C\u6362\u4E3A\u3010\u5B57\u7B26\u4E32\u3011</li><li>\u62FF\u51FA\u6765\u7684\u65F6\u5019\u8F6C\u56DE\u3010\u5BF9\u8C61/\u6570\u7EC4\u3011</li></ol><h3 id="\u5BF9\u8C61\u8F6C\u6362\u5B57\u7B26\u4E32" tabindex="-1">\u5BF9\u8C61\u8F6C\u6362\u5B57\u7B26\u4E32 <a class="header-anchor" href="#\u5BF9\u8C61\u8F6C\u6362\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">str</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">JSON</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">stringify</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B57\u7B26\u4E32\u8F6C\u6362\u5BF9\u8C61" tabindex="-1">\u5B57\u7B26\u4E32\u8F6C\u6362\u5BF9\u8C61 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u8F6C\u6362\u5BF9\u8C61" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">JSON</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">parse</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">str</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div>`,31),p=[o];function t(r,c,i,E,d,y){return a(),l("div",null,p)}const h=s(e,[["render",t]]);export{D as __pageData,h as default};

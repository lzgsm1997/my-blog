import{_ as s,o as n,c as a,a as l}from"./app.0d6ecb8e.js";const C=JSON.parse('{"title":"\u{1F7E5} CSS \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5C5E\u6027\u9009\u62E9\u5668","slug":"\u5C5E\u6027\u9009\u62E9\u5668","link":"#\u5C5E\u6027\u9009\u62E9\u5668","children":[]},{"level":3,"title":"nth \u5143\u7D20\u9009\u62E9","slug":"nth-\u5143\u7D20\u9009\u62E9","link":"#nth-\u5143\u7D20\u9009\u62E9","children":[]},{"level":3,"title":"before && after","slug":"before-after","link":"#before-after","children":[]},{"level":3,"title":"CSS3\u4F2A\u7C7B\u9009\u62E9\u5668","slug":"css3\u4F2A\u7C7B\u9009\u62E9\u5668","link":"#css3\u4F2A\u7C7B\u9009\u62E9\u5668","children":[]}],"relativePath":"FrontEnd/CSS/CSS_Selector.md","lastUpdated":1679152892000}'),t={name:"FrontEnd/CSS/CSS_Selector.md"},e=l(`<h1 id="\u{1F7E5}-css-\u9009\u62E9\u5668" tabindex="-1">\u{1F7E5} CSS \u9009\u62E9\u5668 <a class="header-anchor" href="#\u{1F7E5}-css-\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h3 id="\u5C5E\u6027\u9009\u62E9\u5668" tabindex="-1">\u5C5E\u6027\u9009\u62E9\u5668 <a class="header-anchor" href="#\u5C5E\u6027\u9009\u62E9\u5668" aria-hidden="true">#</a></h3><p>\u5C5E\u6027\u9009\u62E9\u5668\u5C31\u662F\u5728\u6240\u6709\u6807\u7B7E\u4E0A \u53EA\u8981\u6709\u8FD9\u4E2A\u5C5E\u6027\u7684\u5C31\u88AB\u9009\u62E9\u4E2D\uFF01</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">title</span><span style="color:#ECEFF4;">]{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">color</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;">blue;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">class</span><span style="color:#81A1C1;">^=</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;">  //a\u6807\u7B7E\u91CC \u7C7B\u5C5E\u6027 \u5F00\u5934\u5E26\u6709xxg</span></span>
<span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">herf</span><span style="color:#81A1C1;">$=</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;">   //a\u6807\u7B7E\u91CC herf\u5C5E\u6027 \u7ED3\u5C3E\u6709xxg</span></span>
<span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">title</span><span style="color:#81A1C1;">*=</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;">  //a\u6807\u7B7E\u91CC title\u5C5E\u6027 \u5305\u542B\u4E86xxg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">a</span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">class</span><span style="color:#81A1C1;">^=</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">]{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">color</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;">blue;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="nth-\u5143\u7D20\u9009\u62E9" tabindex="-1">nth \u5143\u7D20\u9009\u62E9 <a class="header-anchor" href="#nth-\u5143\u7D20\u9009\u62E9" aria-hidden="true">#</a></h3><ul><li>demo:nth-child(n) \u9009\u62E9\u5668\u5339\u914D\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u7684\u7B2C N \u4E2A\u5B50\u5143\u7D20\uFF1B</li><li>demo:nth-last-child(n) \u9009\u62E9\u5668\u5339\u914D\u5C5E\u4E8E\u5176\u5143\u7D20\u7684\u7B2C N \u4E2A\u5B50\u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20\uFF0C\u4ECE\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u5F00\u59CB\u8BA1\u6570\uFF1B</li><li>demo:nth-of-type(n) \u9009\u62E9\u5668\u5339\u914D\u5C5E\u4E8E\u7236\u5143\u7D20\u7684\u7279\u5B9A\u7C7B\u578B\u7684\u7B2C N \u4E2A\u5B50\u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20</li></ul><h3 id="before-after" tabindex="-1">before &amp;&amp; after <a class="header-anchor" href="#before-after" aria-hidden="true">#</a></h3><ul><li>demo:before\uFF1A\u5143\u7D20\u7684\u5185\u5BB9\u4E4B\u524D\u63D2\u5165\u65B0\u5185\u5BB9\u3002</li><li>demo:after\uFF1A\u5143\u7D20\u7684\u5185\u5BB9\u4E4B\u540E\u63D2\u5165\u65B0\u5185\u5BB9\u3002</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">demo</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">before</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">content</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u5185\u5BB9</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="\u4F7F\u7528\u4F2A\u7C7B-after-\u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C" tabindex="-1">\u4F7F\u7528\u4F2A\u7C7B after \u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C <a class="header-anchor" href="#\u4F7F\u7528\u4F2A\u7C7B-after-\u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">demo</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">after</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">content</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">display</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">block;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">clear</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">both;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">item</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">float</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">left;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247" tabindex="-1">\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247 <a class="header-anchor" href="#\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">demo</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">before</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">content</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">display</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;">inline-block;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">width</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">12</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">height</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">12</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">font-size</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">12</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">line-height</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">12</span><span style="color:#81A1C1;">px;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">background</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">url</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">img.jpg</span><span style="color:#ECEFF4;">)</span><span style="color:#88C0D0;"> </span><span style="color:#81A1C1;">center</span><span style="color:#88C0D0;">  </span><span style="color:#81A1C1;">no-repeat;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">background-size</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">cover;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="css3\u4F2A\u7C7B\u9009\u62E9\u5668" tabindex="-1">CSS3\u4F2A\u7C7B\u9009\u62E9\u5668 <a class="header-anchor" href="#css3\u4F2A\u7C7B\u9009\u62E9\u5668" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4F2A\u7C7B\u9009\u62E9\u5668</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">a:root</td><td style="text-align:center;">\u4F2A\u7C7B\u9009\u62E9\u5668 \u7B49\u540C\u4E8E\u9009\u62E9html</td></tr><tr><td style="text-align:center;">a:not</td><td style="text-align:center;">\u5426\u5B9A\u9009\u62E9\u5668 \u5C31\u662F\u4E0D\u9009\u62E9\u8FD9\u4E2A</td></tr><tr><td style="text-align:center;">a:empty</td><td style="text-align:center;">\u9009\u62E9\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\u7684\u5BB9\u5668</td></tr><tr><td style="text-align:center;">a:target</td><td style="text-align:center;">\u76EE\u6807\u9009\u62E9\u5668 \u7528\u6765\u5339\u914D\u9875\u9762url\u7684\u67D0\u4E2A\u6807\u5FD7\u7B26\u7684\u76EE\u6807\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:first-child</td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:last-child</td><td style="text-align:center;">\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:nth-child(n)</td><td style="text-align:center;">n=odd\u6216\u8005even,\u4E5F\u53EF\u4EE5\u662F\u6570\u5B57</td></tr><tr><td style="text-align:center;">a:nth-last-child(n)</td><td style="text-align:center;">\u4ECE\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u5F00\u59CB\u8BA1\u7B97</td></tr><tr><td style="text-align:center;">a:first-of-type</td><td style="text-align:center;">\u6307\u5B9A</td></tr><tr><td style="text-align:center;">a:last-of-type</td><td style="text-align:center;">\u6307\u5B9A</td></tr><tr><td style="text-align:center;">a:nth-of-type(n)</td><td style="text-align:center;">\u6307\u5B9A</td></tr><tr><td style="text-align:center;">a:nth-last-of-type(n)</td><td style="text-align:center;">[...]</td></tr><tr><td style="text-align:center;">a:only-child</td><td style="text-align:center;">\u9009\u7684\u8FD9\u4E2A\u5143\u7D20\u4ED6 \u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u5B50\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:only-of-type</td><td style="text-align:center;">\u9009\u62E9\u8FD9\u4E2A\u5143\u7D20\u4E0B \u4ED6\u7684\u552F\u4E00\u7C7B\u578B\u7684\u5B50\u5143\u7D20</td></tr></tbody></table>`,16),p=[e];function o(c,r,E,y,i,d){return n(),a("div",null,p)}const D=s(t,[["render",o]]);export{C as __pageData,D as default};

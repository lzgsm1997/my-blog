import{_ as s,o as n,c as a,a as l}from"./app.0d6ecb8e.js";const d=JSON.parse('{"title":"\u{1F392} \u81EA\u5DF1\u5199npm\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E5} \u6CE8\u518Cnpm\u8D26\u53F7","slug":"\u{1F7E5}-\u6CE8\u518Cnpm\u8D26\u53F7","link":"#\u{1F7E5}-\u6CE8\u518Cnpm\u8D26\u53F7","children":[]},{"level":2,"title":"\u{1F7E7} \u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE","slug":"\u{1F7E7}-\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE","link":"#\u{1F7E7}-\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE","children":[]},{"level":2,"title":"\u{1F7E8} \u65B0\u5EFA index.js","slug":"\u{1F7E8}-\u65B0\u5EFA-index-js","link":"#\u{1F7E8}-\u65B0\u5EFA-index-js","children":[]},{"level":2,"title":"\u{1F7E9} \u65B0\u5EFA README.md","slug":"\u{1F7E9}-\u65B0\u5EFA-readme-md","link":"#\u{1F7E9}-\u65B0\u5EFA-readme-md","children":[]},{"level":2,"title":"\u{1F7E6} \u767B\u5F55 npm","slug":"\u{1F7E6}-\u767B\u5F55-npm","link":"#\u{1F7E6}-\u767B\u5F55-npm","children":[]},{"level":2,"title":"\u{1F7EA} \u4E0A\u4F20 npm","slug":"\u{1F7EA}-\u4E0A\u4F20-npm","link":"#\u{1F7EA}-\u4E0A\u4F20-npm","children":[]},{"level":2,"title":"\u{1F7EB} \u66F4\u65B0 npm","slug":"\u{1F7EB}-\u66F4\u65B0-npm","link":"#\u{1F7EB}-\u66F4\u65B0-npm","children":[]},{"level":2,"title":"\u2B1B \u4F7F\u7528 npm","slug":"\u2B1B-\u4F7F\u7528-npm","link":"#\u2B1B-\u4F7F\u7528-npm","children":[]},{"level":2,"title":"\u2B1C \u5173\u4E8E\u6211\u{1F447}","slug":"\u2B1C-\u5173\u4E8E\u6211\u{1F447}","link":"#\u2B1C-\u5173\u4E8E\u6211\u{1F447}","children":[]},{"level":2,"title":"\u{1F533} \u8865\u5145\u3010index.d.ts\u3011","slug":"\u{1F533}-\u8865\u5145\u3010index-d-ts\u3011","link":"#\u{1F533}-\u8865\u5145\u3010index-d-ts\u3011","children":[]}],"relativePath":"Explore/2022/create_npm.md","lastUpdated":1679152892000}'),p={name:"Explore/2022/create_npm.md"},o=l(`<h1 id="\u{1F392}-\u81EA\u5DF1\u5199npm\u5305" tabindex="-1">\u{1F392} \u81EA\u5DF1\u5199npm\u5305 <a class="header-anchor" href="#\u{1F392}-\u81EA\u5DF1\u5199npm\u5305" aria-hidden="true">#</a></h1><h2 id="\u{1F7E5}-\u6CE8\u518Cnpm\u8D26\u53F7" tabindex="-1">\u{1F7E5} \u6CE8\u518Cnpm\u8D26\u53F7 <a class="header-anchor" href="#\u{1F7E5}-\u6CE8\u518Cnpm\u8D26\u53F7" aria-hidden="true">#</a></h2><p>\u53BBnpm\u5B98\u7F51\u6CE8\u518C\u4E00\u4E2A\u8D26\u53F7\uFF1A</p><ul><li><a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">https://www.npmjs.com/</a></li></ul><h2 id="\u{1F7E7}-\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE" tabindex="-1">\u{1F7E7} \u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE <a class="header-anchor" href="#\u{1F7E7}-\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u5728\u672C\u5730\u7EC8\u7AEF\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm init</span></span>
<span class="line"></span></code></pre></div><p>\u65B0\u5EFA\u65F6\uFF0C\u4E0B\u9762\u662F\u9700\u8981\u586B\u5199\u7684\u8D44\u6599\u{1F447}</p><ul><li>package name: //\u5305\u7684\u540D\u5B57</li><li>version: 0.0.1 //\u7248\u672C (\u5927\u4FEE\u6539.\u5C0F\u4FEE\u6539.\u5C0F\u8865\u4E01)</li><li>description: \xA0//\u9879\u76EE\u63CF\u8FF0\uFF0C\u65B9\u4FBF\u522B\u4EBA\u4E86\u89E3\u4F60\u7684\u6A21\u5757\u4F5C\u7528\uFF0C\u641C\u7D22\u7684\u65F6\u5019\u4E5F\u6709\u7528</li><li>entry point: (index.js) //\u6307\u5B9A\u4E86\u7A0B\u5E8F\u7684\u4E3B\u5165\u53E3\u6587\u4EF6\uFF0C\u53EF\u66F4\u6539\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\uFF08\u76F4\u63A5\u56DE\u8F66\uFF09</li><li>test command: //\u6D4B\u8BD5\u547D\u4EE4\uFF08\u76F4\u63A5\u56DE\u8F66\uFF09</li><li>git repository: //git\u4ED3\u5E93\uFF08\u76F4\u63A5\u56DE\u8F66\uFF09</li><li>keywords: //\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u65B9\u4FBF\u522B\u4EBA\u641C\u7D22\u5230\u672C\u6A21\u5757</li><li>author: XXGGG //\u4F5C\u8005</li><li>license: (ISC) //\u8BB8\u53EF\u8BC1</li></ul><h2 id="\u{1F7E8}-\u65B0\u5EFA-index-js" tabindex="-1">\u{1F7E8} \u65B0\u5EFA <code>index.js</code> <a class="header-anchor" href="#\u{1F7E8}-\u65B0\u5EFA-index-js" aria-hidden="true">#</a></h2><p>\u5728\u6839\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2A<code>index.js</code> \u5199\u4E00\u4E2A\u529F\u80FD\u{1F447}</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">xgadd</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">a</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">b</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">c</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">a</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">b</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">c</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">xgadd</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E9}-\u65B0\u5EFA-readme-md" tabindex="-1">\u{1F7E9} \u65B0\u5EFA <code>README.md</code> <a class="header-anchor" href="#\u{1F7E9}-\u65B0\u5EFA-readme-md" aria-hidden="true">#</a></h2><p>\u65B0\u5EFA\u4E00\u4E2A <code>README.md</code> \u6587\u4EF6\u8BF4\u660E\u4E00\u4E0B\u4F60\u8FD9\u4E2Anpm\u5305\u7684\u529F\u80FD</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre><code><span class="line"><span style="color:#81A1C1;">#</span><span style="color:#88C0D0;"> xg-add</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u529F\u80FD\u63CF\u8FF0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">##</span><span style="color:#88C0D0;"> \u5B89\u88C5\u{1F447}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">##</span><span style="color:#88C0D0;"> \u4F7F\u7528\u{1F447}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">...</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E6}-\u767B\u5F55-npm" tabindex="-1">\u{1F7E6} \u767B\u5F55 npm <a class="header-anchor" href="#\u{1F7E6}-\u767B\u5F55-npm" aria-hidden="true">#</a></h2><p>\u5728\u7EC8\u7AEF\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\u{1F447}\u767B\u5F55npm</p><ul><li>\u767B\u5F55\u65F6\u9700\u8981\u6CE8\u610F\u5207\u6362\u4E3Anpm\u5B98\u65B9\u955C\u50CF\uFF0C\u800C\u4E0D\u662F\u6DD8\u5B9D\u955C\u50CF\uFF01</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm config </span><span style="color:#88C0D0;">set</span><span style="color:#D8DEE9FF;"> registry https://registry.npmjs.org/</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm login</span></span>
<span class="line"></span></code></pre></div><ol><li>\u8F93\u5165\u8D26\u53F7</li><li>\u8F93\u5165\u5BC6\u7801\uFF08\u5BC6\u7801\u4E0D\u4F1A\u663E\u793A\u51FA\u6765\uFF09</li><li>\u8F93\u5165\u90AE\u7BB1\uFF08\u8FC7\u540E\uFF0C\u5B98\u65B9npm\u4F1A\u53D1\u9001\u4E34\u65F6\u5BC6\u7801\u5230\u4F60\u7684\u90AE\u7BB1\uFF09</li><li>\u586B\u5165\u53D1\u7ED9\u90AE\u7BB1\u7684\u4E00\u4E32\u4E34\u65F6\u5BC6\u7801</li></ol><h2 id="\u{1F7EA}-\u4E0A\u4F20-npm" tabindex="-1">\u{1F7EA} \u4E0A\u4F20 npm <a class="header-anchor" href="#\u{1F7EA}-\u4E0A\u4F20-npm" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm publish</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E0A\u4F20\u6709\u53EF\u80FD\u4F1A\u51FA\u9519\uFF0C\u6709\u53EF\u80FD\u662F\u56E0\u4E3A\u5305\u540D\u76F8\u540C\uFF0C\u6362\u4E2A\u5305\u7684\u540D\u5B57\u5C31\u53EF\u4EE5\u4E86\uFF01</li></ul><h2 id="\u{1F7EB}-\u66F4\u65B0-npm" tabindex="-1">\u{1F7EB} \u66F4\u65B0 npm <a class="header-anchor" href="#\u{1F7EB}-\u66F4\u65B0-npm" aria-hidden="true">#</a></h2><p>\u5F53\u4F60\u7684\u5305\u6709\u66F4\u65B0\u5185\u5BB9\uFF0C\u9700\u8981\u4E0A\u4F20<br> \u540C\u6837\u662F\u4F7F\u7528<code>npm publish</code>\u547D\u4EE4\uFF0C\u4F46\u662F\u9700\u8981\u5148\u53BB\u5230<code>package.json</code>\u4FEE\u6539\u7248\u672C\u53F7<br> \u6539\u9AD8\u4E00\u4E2A\u7248\u672C<code>&quot;version&quot;:&quot;0.0.2&quot;</code></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xgadd</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">version</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">0.0.2</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">description</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">main</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">index.js</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">scripts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">test</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">echo </span><span style="color:#EBCB8B;">\\&quot;</span><span style="color:#A3BE8C;">Error: no test specified</span><span style="color:#EBCB8B;">\\&quot;</span><span style="color:#A3BE8C;"> &amp;&amp; exit 1</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">author</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">XXGGG</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">license</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ISC</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u2B1B-\u4F7F\u7528-npm" tabindex="-1">\u2B1B \u4F7F\u7528 npm <a class="header-anchor" href="#\u2B1B-\u4F7F\u7528-npm" aria-hidden="true">#</a></h2><p>\u5F53\u4E0A\u4F20\u5B8C\u540E\u4EE5\u540E\uFF0C\u81EA\u5DF1\u4E0B\u8F7D\u4E0B\u6765\u8BD5\u7528\u4E00\u4E0B\u{1F447}<br> \u5728\u4E00\u4E2A\u9879\u76EE\u6587\u4EF6\u5939\u7684\u6253\u5F00\u7EC8\u7AEF\u8F93\u5165\u{1F447}</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm install xgadd</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u5B8C\u540E\uFF0C\u53EF\u4EE5\u5728node_module\u91CC\u770B\u5230\u8FD9\u4E2A\u5305\u3002<br> \u7136\u540E\u5728\u9879\u76EE\u4E2D\u5F15\u5165\uFF0C\u5F15\u7528<br> \u6BD4\u5982\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#8FBCBB;">xgadd</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xgadd</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">xgadd</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;">) </span><span style="color:#616E88;">//2</span></span>
<span class="line"></span></code></pre></div><h2 id="\u2B1C-\u5173\u4E8E\u6211\u{1F447}" tabindex="-1">\u2B1C \u5173\u4E8E\u6211\u{1F447} <a class="header-anchor" href="#\u2B1C-\u5173\u4E8E\u6211\u{1F447}" aria-hidden="true">#</a></h2><ul><li>XXGGG\u7684npm\uFF1A<a href="https://www.npmjs.com/~xxggg" target="_blank" rel="noreferrer">https://www.npmjs.com/~xxggg</a></li><li>XXGGG\u7684Github\uFF1A<a href="https://github.com/XXGGG" target="_blank" rel="noreferrer">https://github.com/XXGGG</a></li></ul><h2 id="\u{1F533}-\u8865\u5145\u3010index-d-ts\u3011" tabindex="-1">\u{1F533} \u8865\u5145\u3010index.d.ts\u3011 <a class="header-anchor" href="#\u{1F533}-\u8865\u5145\u3010index-d-ts\u3011" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u5F88\u591A\u9879\u76EE\u90FD\u662F\u4F7F\u7528TypeScript\uFF0C\u6240\u4EE5\u5728\u628A\u5305\u4E0A\u4F20\u4E0A\u53BB\u7ED9\u522B\u4EBA\u7528\u7684\u65F6\u5019\u6700\u597D\u9644\u52A0\u591A\u4E00\u4E2A\u5173\u4E8Etyperscipt\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u3010index.d.ts\u3011</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#616E88;">//\u4E0Eindex.js \u540C\u76EE\u5F55 \u540C\u540D\u7684 index.d.ts</span></span>
<span class="line"><span style="color:#81A1C1;">declare</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">xgadd</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">a</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">b</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9;">xgadd</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u5728package.json\u91CC\u8BF4\u660E\u4E00\u4E0B\u4F60\u7684\u8FD9\u4E2A\u58F0\u660E\u6587\u4EF6\u5728\u54EA\u91CC</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xgadd</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">version</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">0.0.5</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">description</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">main</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">index.js</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">types</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">inedx.d.ts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> #</span><span style="color:#D8DEE9;">\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">scripts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">test</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">echo </span><span style="color:#EBCB8B;">\\&quot;</span><span style="color:#A3BE8C;">Error: no test specified</span><span style="color:#EBCB8B;">\\&quot;</span><span style="color:#A3BE8C;"> &amp;&amp; exit 1</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">keywords</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: [</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">javascript</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">img</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">imgMainColor</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">imgColor</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">author</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">XXGGG</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">license</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ISC</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5173\u4E8ETypeScript\u7684\u7C7B\u578B\u58F0\u660E\u53EF\u4EE5\u53C2\u8003\u{1F447}</p><blockquote><p><a href="https://ts.xcatliu.com/basics/declaration-files.html#%E4%B9%A6%E5%86%99%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">\u58F0\u660E\u6587\u4EF6 - TypeScript\u5165\u95E8\u6559\u7A0B</a></p></blockquote>`,41),e=[o];function t(c,r,E,F,y,i){return n(),a("div",null,e)}const D=s(p,[["render",t]]);export{d as __pageData,D as default};

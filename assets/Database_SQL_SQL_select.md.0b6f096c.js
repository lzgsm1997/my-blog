import{_ as s,o as a,c as n,a as l}from"./app.0d6ecb8e.js";const D=JSON.parse('{"title":"\u67E5 SELECT","description":"","frontmatter":{},"headers":[{"level":2,"title":"WHERE - \u67E5\u54EA\uFF1F","slug":"where-\u67E5\u54EA\uFF1F","link":"#where-\u67E5\u54EA\uFF1F","children":[]},{"level":2,"title":"AND & OR","slug":"and-or","link":"#and-or","children":[]},{"level":2,"title":"\u6392\u5217","slug":"\u6392\u5217","link":"#\u6392\u5217","children":[{"level":3,"title":"ORDER BY \u5347\u5E8F","slug":"order-by-\u5347\u5E8F","link":"#order-by-\u5347\u5E8F","children":[]},{"level":3,"title":"ORDER BY DESC \u964D\u5E8F","slug":"order-by-desc-\u964D\u5E8F","link":"#order-by-desc-\u964D\u5E8F","children":[]},{"level":3,"title":"ORDER BY \u591A\u5217","slug":"order-by-\u591A\u5217","link":"#order-by-\u591A\u5217","children":[]}]},{"level":2,"title":"\u8FD4\u56DE\u552F\u4E00 \u4E0D\u540C\u7684\u503C SELECT DISTINC","slug":"\u8FD4\u56DE\u552F\u4E00-\u4E0D\u540C\u7684\u503C-select-distinc","link":"#\u8FD4\u56DE\u552F\u4E00-\u4E0D\u540C\u7684\u503C-select-distinc","children":[]}],"relativePath":"Database/SQL/SQL_select.md","lastUpdated":1679152892000}'),e={name:"Database/SQL/SQL_select.md"},o=l(`<h1 id="\u67E5-select" tabindex="-1">\u67E5 SELECT <a class="header-anchor" href="#\u67E5-select" aria-hidden="true">#</a></h1><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">name</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">name</span><span style="color:#D8DEE9FF;">,age </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D</span></span>
<span class="line"></span></code></pre></div><h2 id="where-\u67E5\u54EA\uFF1F" tabindex="-1">WHERE - \u67E5\u54EA\uFF1F <a class="header-anchor" href="#where-\u67E5\u54EA\uFF1F" aria-hidden="true">#</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D </span><span style="color:#81A1C1;">WHERE</span><span style="color:#D8DEE9FF;"> country</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">CN</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D </span><span style="color:#81A1C1;">WHERE</span><span style="color:#D8DEE9FF;"> age</span><span style="color:#81A1C1;">&gt;</span><span style="color:#B48EAD;">18</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>SQL \u4F7F\u7528\u5355\u5F15\u53F7\u6765\u73AF\u7ED5\u6587\u672C\u503C\uFF08\u5927\u90E8\u5206\u6570\u636E\u5E93\u7CFB\u7EDF\u4E5F\u63A5\u53D7\u53CC\u5F15\u53F7\uFF09<br> \u5728\u4E0A\u4E2A\u5B9E\u4F8B\u4E2D &#39;CN&#39; \u6587\u672C\u5B57\u6BB5\u4F7F\u7528\u4E86\u5355\u5F15\u53F7\u3002<br> \u5982\u679C\u662F\u6570\u503C\u5B57\u6BB5\uFF0C<strong>\u8BF7\u4E0D\u8981\u4F7F\u7528\u5F15\u53F7\u3002</strong></p></div><h2 id="and-or" tabindex="-1">AND &amp; OR <a class="header-anchor" href="#and-or" aria-hidden="true">#</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D </span><span style="color:#81A1C1;">WHERE</span><span style="color:#D8DEE9FF;"> country</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">CN</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">AND</span><span style="color:#D8DEE9FF;"> alexa </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">50</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D </span><span style="color:#81A1C1;">WHERE</span><span style="color:#D8DEE9FF;"> country</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">USA</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">OR</span><span style="color:#D8DEE9FF;"> country</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">CN</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6392\u5217" tabindex="-1">\u6392\u5217 <a class="header-anchor" href="#\u6392\u5217" aria-hidden="true">#</a></h2><h3 id="order-by-\u5347\u5E8F" tabindex="-1">ORDER BY \u5347\u5E8F <a class="header-anchor" href="#order-by-\u5347\u5E8F" aria-hidden="true">#</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D </span><span style="color:#81A1C1;">ORDER BY</span><span style="color:#D8DEE9FF;"> age;</span></span>
<span class="line"></span></code></pre></div><h3 id="order-by-desc-\u964D\u5E8F" tabindex="-1">ORDER BY DESC \u964D\u5E8F <a class="header-anchor" href="#order-by-desc-\u964D\u5E8F" aria-hidden="true">#</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D </span><span style="color:#81A1C1;">ORDER BY</span><span style="color:#D8DEE9FF;"> age </span><span style="color:#81A1C1;">DESC</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="order-by-\u591A\u5217" tabindex="-1">ORDER BY \u591A\u5217 <a class="header-anchor" href="#order-by-\u591A\u5217" aria-hidden="true">#</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D </span><span style="color:#81A1C1;">ORDER BY</span><span style="color:#D8DEE9FF;"> country,alexa;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD4\u56DE\u552F\u4E00-\u4E0D\u540C\u7684\u503C-select-distinc" tabindex="-1">\u8FD4\u56DE\u552F\u4E00 \u4E0D\u540C\u7684\u503C SELECT DISTINC <a class="header-anchor" href="#\u8FD4\u56DE\u552F\u4E00-\u4E0D\u540C\u7684\u503C-select-distinc" aria-hidden="true">#</a></h2><blockquote><p>\u5C31\u662F\u6BD4\u5982\u670910\u4E2A18\u5C81\uFF0C8\u4E2A19\u5C81\uFF0C\u90A3\u4ED6\u53EA\u4F1A\u8FD4\u56DE\u4E00\u4E2A18\u548C\u4E00\u4E2A19.</p></blockquote><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">SELECT DISTINCT</span><span style="color:#D8DEE9FF;"> country </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D;</span></span>
<span class="line"></span></code></pre></div>`,20),p=[o];function c(t,r,E,y,d,i){return a(),n("div",null,p)}const C=s(e,[["render",c]]);export{D as __pageData,C as default};

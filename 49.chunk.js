webpackJsonp([49],{495:function(s,a,n){"use strict";function l(){return{label:"L10n",tabs:{"README.md":{type:"md",content:n(687)}}}}Object.defineProperty(a,"__esModule",{value:!0});var e=n(2),p={demo:l},t=function(){function s(){}return s}(),o=n(501),r=n(33),c=n(94),h=n(59),i=n(227),j=n(502),d=n(50),u=n(500);n.d(a,"L10nDemoModuleNgFactory",function(){return m});var m=e._3(t,[],function(s){return e._14([e._15(512,e.j,e.Z,[[8,[o.a]],[3,e.j],e.w]),e._15(4608,r.n,r.m,[e.t,[2,r.v]]),e._15(512,r.c,r.c,[]),e._15(512,c.a,c.a,[]),e._15(512,h.d,h.d,[]),e._15(512,i.a,i.a,[]),e._15(512,j.a,j.a,[]),e._15(512,d.m,d.m,[[2,d.r],[2,d.l]]),e._15(512,t,t,[]),e._15(1024,d.j,function(){return[[{path:"",component:u.a,data:p}]]},[])])})},687:function(s,a){s.exports='<h3 id="usage">Usage</h3>\n<pre class="hljs">\n<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@angular/core&apos;</span>;\n<span class="hljs-keyword">import</span> { L10nModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./app.component&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [\n    L10nModule.forRoot({\n      <span class="hljs-attr">loader</span>: MyLoaderService,  <span class="hljs-comment">// required - loader services class</span>\n      loaderConfig: { ... },    <span class="hljs-comment">// optional - loader configuration</span>\n      parser: MyParserService,  <span class="hljs-comment">// optional - parser service class</span>\n      config: {\n        <span class="hljs-attr">locale</span>: <span class="hljs-string">&quot;en-us&quot;</span>         <span class="hljs-comment">// optional - default locale. Uses browsers default language if not provided</span>\n      }\n    })\n  ],\n  <span class="hljs-attr">declarations</span>: [ AppComponent ],\n  <span class="hljs-attr">bootstrap</span>: [ AppComponent ]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppModule</span> </span>{ }\n</pre>\n<p>Use the <code>loc</code> pipe in a template to localize a text</p>\n<pre class="hljs">\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{&apos;HELLO_WORLD&apos; | loc}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n</pre>\n<h3 id="loader-services">Loader services</h3>\n<h4 id="static-resource-loader">Static resource loader</h4>\n<pre class="hljs"><span class="hljs-selector-tag">L10nModule</span><span class="hljs-selector-class">.forRoot</span>({\n  <span class="hljs-attribute">loader</span>: L10nStaticLoaderService,\n  loaderConfig: {\n    <span class="hljs-string">&quot;HELLO_WORLD&quot;</span>: {\n      <span class="hljs-string">&quot;en-us&quot;</span>: <span class="hljs-string">&quot;Hello World!&quot;</span>\n      <span class="hljs-string">&quot;de-de&quot;</span>: <span class="hljs-string">&quot;Hallo Welt!&quot;</span>\n    }\n  }\n});\n\n\n</pre><h4 id="http-service-todo">HTTP service TODO</h4>\n<pre class="hljs">L10nModule.forRoot({\n  <span class="hljs-attr">loader</span>: L10nHTTPLoaderService,\n  <span class="hljs-attr">loaderConfig</span>: {\n    <span class="hljs-attr">endpoint</span>: <span class="hljs-string">&apos;URL_TO_JSON&apos;</span>\n  }\n});\n</pre>\n<pre class="hljs">\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AnyInjectableClass</span> </span>{\n  <span class="hljs-keyword">constructor</span>(private l10n: L10nHTTPService) {\n    <span class="hljs-comment">// Refetches the json    </span>\n    <span class="hljs-keyword">this</span>.l10n.refresh();\n  }\n}\n</pre>\n<h3 id="custom-loaders">Custom loaders</h3>\n<pre class="hljs">@Injectable()\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">L10nFancyLoaderService</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">L10nLoaderService</span> </span>{\n  <span class="hljs-keyword">constructor</span>(\n    @Inject(L10N_CONFIG)\n    private config: L10nConfig,\n    // other injections\n  ) {\n    <span class="hljs-keyword">super</span>();\n    <span class="hljs-keyword">this</span>.config; <span class="hljs-comment">// loader config</span>\n  }\n\n  <span class="hljs-comment">// required</span>\n  fetchTranslationPackage(locale:string) : Observable&lt;TranslationPackage&gt; {\n    <span class="hljs-comment">// return your translation package as an Observable</span>\n  }\n\n  <span class="hljs-comment">// optional</span>\n  getSupportedLocales() : Observable&lt;string[]&gt; {\n    <span class="hljs-comment">// return an array of supported locales as an Observable</span>\n  }\n}\n</pre>\n<h3 id="template-parameters">Template parameters</h3>\n<pre class="hljs">{\n  <span class="hljs-attr">&quot;HELLO_USER&quot;</span>: {\n    <span class="hljs-attr">&quot;en-us&quot;</span>: <span class="hljs-string">&quot;Hello {0}!&quot;</span>,\n    <span class="hljs-attr">&quot;de-de&quot;</span>: <span class="hljs-string">&quot;Hallo {0}!&quot;</span>\n  }\n}\n</pre>\n<pre class="hljs">&lt;span&gt;{{HELLO_USER | loc:username}}&lt;/span&gt;\n</pre>\n'}});
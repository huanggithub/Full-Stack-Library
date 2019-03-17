(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{192:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),s("h2",{attrs:{id:"网络相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络相关","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络相关")]),t._v(" "),s("h3",{attrs:{id:"dns-预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析","aria-hidden":"true"}},[t._v("#")]),t._v(" DNS 预解析")]),t._v(" "),s("p",[t._v("DNS 解析也是需要时间的，可以通过预解析的方式来预先获得域名所对应的 IP。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//yuchengkai.cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),s("p",[t._v("缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。")]),t._v(" "),s("p",[t._v("通常浏览器缓存策略分为两种：强缓存和协商缓存。")]),t._v(" "),s("h4",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),s("p",[t._v("实现强缓存可以通过两种响应头实现："),s("code",[t._v("Expires")]),t._v(" 和 "),s("code",[t._v("Cache-Control")]),t._v(" 。强缓存表示在缓存期间不需要请求，"),s("code",[t._v("state code")]),t._v(" 为 200")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Expires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" Oct "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n")])])]),s("p",[s("code",[t._v("Expires")]),t._v(" 是 HTTP / 1.0 的产物，表示资源会在 "),s("code",[t._v("Wed, 22 Oct 2018 08:41:00 GMT")]),t._v(" 后过期，需要再次请求。并且 "),s("code",[t._v("Expires")]),t._v(" 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Cache"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])]),s("p",[s("code",[t._v("Cache-Control")]),t._v(" 出现于 HTTP / 1.1，优先级高于 "),s("code",[t._v("Expires")]),t._v(" 。该属性表示资源会在 30 秒后过期，需要再次请求。")]),t._v(" "),s("h4",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),s("p",[t._v("如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 304。")]),t._v(" "),s("p",[t._v("协商缓存需要客户端和服务端共同实现，和强缓存一样，也有两种实现方式。")]),t._v(" "),s("h5",{attrs:{id:"last-modified-和-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since","aria-hidden":"true"}},[t._v("#")]),t._v(" Last-Modified 和 If-Modified-Since")]),t._v(" "),s("p",[s("code",[t._v("Last-Modified")]),t._v(" 表示本地文件最后修改日期，"),s("code",[t._v("If-Modified-Since")]),t._v(" 会将 "),s("code",[t._v("Last-Modified")]),t._v(" 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。")]),t._v(" "),s("p",[t._v("但是如果在本地打开缓存文件，就会造成 "),s("code",[t._v("Last-Modified")]),t._v(" 被修改，所以在 HTTP / 1.1 出现了 "),s("code",[t._v("ETag")]),t._v(" 。")]),t._v(" "),s("h5",{attrs:{id:"etag-和-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match","aria-hidden":"true"}},[t._v("#")]),t._v(" ETag 和 If-None-Match")]),t._v(" "),s("p",[s("code",[t._v("ETag")]),t._v(" 类似于文件指纹，"),s("code",[t._v("If-None-Match")]),t._v(" 会将当前 "),s("code",[t._v("ETag")]),t._v(" 发送给服务器，询问该资源 "),s("code",[t._v("ETag")]),t._v(" 是否变动，有变动的话就将新的资源发送回来。并且 "),s("code",[t._v("ETag")]),t._v(" 优先级比 "),s("code",[t._v("Last-Modified")]),t._v(" 高。")]),t._v(" "),s("h4",{attrs:{id:"选择合适的缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的缓存策略","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择合适的缓存策略")]),t._v(" "),s("p",[t._v("对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略")]),t._v(" "),s("ul",[s("li",[t._v("对于某些不需要缓存的资源，可以使用 "),s("code",[t._v("Cache-control: no-store")]),t._v(" ，表示该资源不需要缓存")]),t._v(" "),s("li",[t._v("对于频繁变动的资源，可以使用 "),s("code",[t._v("Cache-Control: no-cache")]),t._v(" 并配合 "),s("code",[t._v("ETag")]),t._v(" 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。")]),t._v(" "),s("li",[t._v("对于代码文件来说，通常使用 "),s("code",[t._v("Cache-Control: max-age=31536000")]),t._v(" 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件。")])]),t._v(" "),s("h3",{attrs:{id:"使用-http-2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-http-2-0","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 HTTP / 2.0")]),t._v(" "),s("p",[t._v("因为浏览器会有并发请求限制，在 HTTP / 1.1 时代，每个请求都需要建立和断开，消耗了好几个 RTT 时间，并且由于 TCP 慢启动的原因，加载体积大的文件会需要更多的时间。")]),t._v(" "),s("p",[t._v("在  HTTP / 2.0 中引入了多路复用，能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度。并且还支持 Header 压缩，进一步的减少了请求的数据大小。")]),t._v(" "),s("h3",{attrs:{id:"预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),s("p",[t._v("在开发中，可能会遇到这样的情况。有些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。")]),t._v(" "),s("p",[t._v("预加载其实是声明式的 "),s("code",[t._v("fetch")]),t._v(" ，强制浏览器请求资源，并且不会阻塞 "),s("code",[t._v("onload")]),t._v(" 事件，可以使用以下代码开启预加载")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("预加载可以一定程度上降低首屏的加载时间，因为可以将一些不影响首屏但重要的文件延后加载，唯一缺点就是兼容性不好。")]),t._v(" "),s("h3",{attrs:{id:"预渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 预渲染")]),t._v(" "),s("p",[t._v("可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prerender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])])]),s("p",[t._v("预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染")]),t._v(" "),s("h2",{attrs:{id:"pwa-离线缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwa-离线缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" PWA 离线缓存")]),t._v(" "),s("h3",{attrs:{id:"主线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 主线程")]),t._v(" "),s("p",[s("code",[t._v("ServiceWorker")]),t._v("既然命名为"),s("code",[t._v("worker")]),t._v("，很大一部分原因就是它和"),s("code",[t._v("WebWorker")]),t._v("相关。它是第二个线程，不会影响 dom 渲染的主线程，两个"),s("code",[t._v("Worker")]),t._v("之间的通讯是基于"),s("code",[t._v("postMessage")]),t._v("。\n"),s("code",[t._v("chrome://inspect/#service-workers")]),t._v(" 就可以查看，在当前浏览器中，正在注册的 "),s("code",[t._v("SW")]),t._v("。另外，还有一个 "),s("code",[t._v("chrome://serviceworker-internals")]),t._v("，用来查看当前浏览器中，所有注册好的 "),s("code",[t._v("SW")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"基于-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-https","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于 HTTPS")]),t._v(" "),s("p",[s("code",[t._v("SW")]),t._v(" 是基于 "),s("code",[t._v("HTTPS")]),t._v(" 的，如果你的网站不是 "),s("code",[t._v("HTTPS")]),t._v("，那么基本上你也别想了 "),s("code",[t._v("SW")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"scope-作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope-作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" Scope 作用域")]),t._v(" "),s("p",[t._v("一个"),s("code",[t._v("sw.js")]),t._v("并不能接管一个站点所有的页面，它只能在所在路由底下起到作用。意思就是如果你在"),s("code",[t._v("//example.com/foo/bar.js")]),t._v("里注册了一个 "),s("code",[t._v("SW")]),t._v("，那么它默认的作用域为"),s("code",[t._v("//example.com/foo/")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("h4",{attrs:{id:"register"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register","aria-hidden":"true"}},[t._v("#")]),t._v(" register")]),t._v(" "),s("p",[s("code",[t._v("ServiceWorker.js")]),t._v("(又名"),s("code",[t._v("sw.js")]),t._v(")是一个独立 js，页面注册在浏览器支持的情况下，注册 sw.js 来控制"),s("code",[t._v("Service Worker")]),t._v("缓存。"),s("code",[t._v("register")]),t._v("将会触发安装声明周期。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceWorker'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/sw.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ServiceWorker registration successful with scope: '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        registration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scope\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ServiceWorker registration failed: '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[t._v("#")]),t._v(" install")]),t._v(" "),s("p",[s("code",[t._v("register")]),t._v("完成后会触发"),s("code",[t._v("install")]),t._v("的生命周期，把设置好的静态文件，采用"),s("code",[t._v("Service Worker")]),t._v("的缓存方式，使用了"),s("code",[t._v("Cache API")]),t._v("来将资源缓存起来，同时使用 "),s("code",[t._v("e.waitUntil")]),t._v(" 接手一个"),s("code",[t._v("Promise")]),t._v("来等待资源缓存成功，等到这个"),s("code",[t._v("Promise")]),t._v("状态成功后，"),s("code",[t._v("ServiceWorker")]),t._v("进入"),s("code",[t._v("installed")]),t._v("状态，意味着安装完毕。这时候主线程中返回的"),s("code",[t._v("registration.waiting")]),t._v("属性代表进入"),s("code",[t._v("installed")]),t._v("状态的"),s("code",[t._v("ServiceWorker")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CACHE_NAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_cache'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" urlsToCache "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/css/style.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/js/script.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里的self代表ServiceWorkerGlobalScope")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'install'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里的waitUtil会在安装成功之前执行一些预装的操作，但是只建议做一些轻量级和非常重要资源的缓存，减少安装失败的概率。安装成功")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后ServiceWorker状态会从installing变为installed")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitUntil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    caches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CACHE_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Opendhe : '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlsToCache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"skipwaiting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skipwaiting","aria-hidden":"true"}},[t._v("#")]),t._v(" skipWaiting")]),t._v(" "),s("p",[s("code",[t._v("skipWaiting()")]),t._v("意味着新 "),s("code",[t._v("SW")]),t._v(" 控制了之前用旧 "),s("code",[t._v("SW")]),t._v(" 获取的页面，也就是说你的页面有一部分资源是通过旧 "),s("code",[t._v("SW")]),t._v(" 获取，剩下一部分是通过新 "),s("code",[t._v("SW")]),t._v(" 获取.")]),t._v(" "),s("h4",{attrs:{id:"activate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activate","aria-hidden":"true"}},[t._v("#")]),t._v(" activate")]),t._v(" "),s("p",[t._v("安装完，则会进入激活状态。如果之前已有"),s("code",[t._v("ServiceWorker")]),t._v("，这个版本只是对"),s("code",[t._v("ServiceWorker")]),t._v("进行了更新。如果你在"),s("code",[t._v("event.waitUntil()")]),t._v("中传入了一个 "),s("code",[t._v("Promise")]),t._v("，"),s("code",[t._v("SW")]),t._v(" 将会缓存住功能性事件("),s("code",[t._v("fetch")]),t._v(","),s("code",[t._v("push")]),t._v(","),s("code",[t._v("sync")]),t._v("等等)，直到 "),s("code",[t._v("Promise")]),t._v(" 返回 "),s("code",[t._v("resolve")]),t._v(" 的时候再触发，也就是说，当你的"),s("code",[t._v("fetch")]),t._v("事件被触发的时候，"),s("code",[t._v("SW")]),t._v(" 已经被完全激活了。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'activate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitUntil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    caches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("expectedCaches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" caches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// V2控制缓存")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch","aria-hidden":"true"}},[t._v("#")]),t._v(" fetch")]),t._v(" "),s("p",[s("code",[t._v("fetch")]),t._v("请求是有别于"),s("code",[t._v("xhr")]),t._v("请求，"),s("code",[t._v("sw")]),t._v("提供监听拦截"),s("code",[t._v("fetch")]),t._v("的事件，对于命中缓存的数据可以直接返回请求。当接受到 "),s("code",[t._v("fetch")]),t._v(" 请求时，会直接返回"),s("code",[t._v("event.respondWith")]),t._v(" 得到"),s("code",[t._v("Promise")]),t._v(" 结果。这样我们可以捕获页面所有的 "),s("code",[t._v("fetch")]),t._v(" 请求。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fetch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("respondWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    caches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cache hit - return response")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"redundant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redundant","aria-hidden":"true"}},[t._v("#")]),t._v(" Redundant")]),t._v(" "),s("p",[s("code",[t._v("Service Worker")]),t._v(" 可能因为以下之一的原因而被废弃（redundant，原意为“多余的，累赘的”）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("installing")]),t._v(" 事件失败")]),t._v(" "),s("li",[s("code",[t._v("activating")]),t._v(" 事件失败")]),t._v(" "),s("li",[t._v("新的 "),s("code",[t._v("Service Worker")]),t._v(" 替换其成为激活态 "),s("code",[t._v("worker")])])]),t._v(" "),s("p",[t._v("浏览器获取了新版本的"),s("code",[t._v("ServiceWorker")]),t._v("代码，如果浏览器本身对"),s("code",[t._v("sw.js")]),t._v("进行缓存的话，也不会得到最新代码，所有代码会变成死代码，无法更新。所以对"),s("code",[t._v("sw")]),t._v("文件最好配置成"),s("code",[t._v("cache-control: no-cache")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"优化渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化渲染过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化渲染过程")]),t._v(" "),s("h3",{attrs:{id:"懒执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒执行","aria-hidden":"true"}},[t._v("#")]),t._v(" 懒执行")]),t._v(" "),s("p",[t._v("懒执行就是将某些逻辑延迟到使用时再计算。该技术可以用于首屏优化，对于某些耗时逻辑并不需要在首屏就使用的，就可以使用懒执行。懒执行需要唤醒，一般可以通过定时器或者事件的调用来唤醒。")]),t._v(" "),s("h3",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),s("p",[t._v("懒加载就是将不关键的资源延后加载。\n懒加载的原理就是只加载自定义区域（通常是可视区域，但也可以是即将进入可视区域）内需要加载的东西。")]),t._v(" "),s("p",[t._v("将页面里所有 img 属性 src 属性用 data-xx 代替，当页面滚动直至此图片出现在可视区域时，用 js 取到该图片的 data-xx 的值赋给 src，这样图片就会去下载资源，实现了图片懒加载。")]),t._v(" "),s("p",[t._v("懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等等。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("页可见区域宽： document.body.clientWidth;\n网页可见区域高： document.body.clientHeight;\n网页可见区域宽： document.body.offsetWidth (包括边线的宽);\n网页可见区域高： document.body.offsetHeight (包括边线的宽);\n网页正文全文宽： document.body.scrollWidth;\n网页正文全文高： document.body.scrollHeight;\n网页被卷去的高： document.body.scrollTop;\n网页被卷去的左： document.body.scrollLeft;\n网页正文部分上： window.screenTop;\n网页正文部分左： window.screenLeft;\n屏幕分辨率的高： window.screen.height;\n屏幕分辨率的宽： window.screen.width;\n屏幕可用工作区高度： window.screen.availHeight;\n")])])]),s("h2",{attrs:{id:"文件优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件优化")]),t._v(" "),s("h3",{attrs:{id:"图片优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片优化")]),t._v(" "),s("h4",{attrs:{id:"计算图片大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算图片大小","aria-hidden":"true"}},[t._v("#")]),t._v(" 计算图片大小")]),t._v(" "),s("p",[t._v("对于一张 100 * 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 RGBA 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1个字节），所以该图片大小大概为 39KB（10000 * 1 * 4 / 1024）。")]),t._v(" "),s("p",[t._v("但是在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。")]),t._v(" "),s("p",[t._v("了解了如何计算图片大小的知识，那么对于如何优化图片，想必大家已经有 2 个思路了：")]),t._v(" "),s("ul",[s("li",[t._v("减少像素点")]),t._v(" "),s("li",[t._v("减少每个像素点能够显示的颜色")])]),t._v(" "),s("h4",{attrs:{id:"图片加载优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片加载优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片加载优化")]),t._v(" "),s("ol",[s("li",[t._v("不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。")]),t._v(" "),s("li",[t._v("对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。")]),t._v(" "),s("li",[t._v("小图使用 base64 格式")]),t._v(" "),s("li",[t._v("将多个图标文件整合到一张图片中（雪碧图）")]),t._v(" "),s("li",[t._v("选择正确的图片格式：\n"),s("ul",[s("li",[t._v("对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好")]),t._v(" "),s("li",[t._v("小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替")]),t._v(" "),s("li",[t._v("照片使用 JPEG")])])])]),t._v(" "),s("h3",{attrs:{id:"其他文件优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他文件优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他文件优化")]),t._v(" "),s("ul",[s("li",[t._v("CSS 文件放在 "),s("code",[t._v("head")]),t._v(" 中")]),t._v(" "),s("li",[t._v("服务端开启文件压缩功能")]),t._v(" "),s("li",[t._v("将 "),s("code",[t._v("script")]),t._v(" 标签放在 "),s("code",[t._v("body")]),t._v(" 底部，因为 JS 文件执行会阻塞渲染。当然也可以把 "),s("code",[t._v("script")]),t._v(" 标签放在任意位置然后加上 "),s("code",[t._v("defer")]),t._v(" ，表示该文件会并行下载，但是会放到 HTML 解析完成后顺序执行。对于没有任何依赖的 JS 文件可以加上 "),s("code",[t._v("async")]),t._v(" ，表示加载和渲染后续文档元素的过程将和  JS 文件的加载与执行并行无序进行。")]),t._v(" "),s("li",[t._v("执行 JS 代码过长会卡住渲染，对于需要很多时间计算的代码可以考虑使用 "),s("code",[t._v("Webworker")]),t._v("。"),s("code",[t._v("Webworker")]),t._v(" 可以让我们另开一个线程执行脚本而不影响渲染。")])]),t._v(" "),s("h3",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),s("p",[t._v("静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie。")])])}],!1,null,null,null);e.options.__file="Performance.md";a.default=e.exports}}]);
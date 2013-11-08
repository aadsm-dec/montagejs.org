var Montage=require("montage").Montage,Promise=require("core/promise").Promise,URL=require("core/mini-url"),DocumentResources=Montage.specialize({_SCRIPT_TIMEOUT:{value:5e3},_document:{value:null},_resources:{value:null},_preloaded:{value:null},_expectedStyles:{value:null},constructor:{value:function DocumentResources(){this.super(),this._expectedStyles=[]}},initWithDocument:{value:function(e){return this.clear(),this._document=e,this}},clear:{value:function(){this._resources=Object.create(null),this._preloaded=Object.create(null)}},_addResource:{value:function(e){this._resources[e]=!0}},hasResource:{value:function(e){return e in this._resources}},isResourcePreloaded:{value:function(e){return this._preloaded[e]===!0}},isResourcePreloading:{value:function(e){return Promise.isPromise(this._preloaded[e])}},setResourcePreloadedPromise:{value:function(e,t){this._preloaded[e]=t}},setResourcePreloaded:{value:function(e){this._preloaded[e]=!0}},getResourcePreloadedPromise:{value:function(e){return this._preloaded[e]}},addScript:{value:function(e){var t=this.normalizeUrl(e.src);return t?this.isResourcePreloaded(t)?Promise.resolve():this.isResourcePreloading(t)?this.getResourcePreloadedPromise(t):this._importScript(e):this._importScript(e)}},_importScript:{value:function(e){var t,n,r=this,i=this._document,a=i.head,o=Promise.defer(),s=e.src;return s?(r._addResource(s),t=function(){r.setResourcePreloaded(s),e.removeEventListener("load",t),e.removeEventListener("error",t),clearTimeout(n),o.resolve()},e.addEventListener("load",t,!1),e.addEventListener("error",t,!1),n=setTimeout(function(){r.setResourcePreloaded(s),o.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(s,o.promise)):o.resolve(),a.appendChild(i.createComment("Inserted from FIXME")),a.appendChild(e),o.promise}},addStyle:{value:function(e){var t,n=e.getAttribute("href");if(n=this.normalizeUrl(n)){if(this.hasResource(n))return;this._addResource(n)}t=this._document.head,this._expectedStyles.push(n),t.insertBefore(e,t.firstChild)}},normalizeUrl:{value:function(e,t){return t||(t=this._document.location.href),URL.resolve(t,e)}},_schemeRegexp:{value:/^[a-zA-Z][a-zA-Z0-9+\.\-]*:\/\//i},preloadResource:{value:function(e,t){var n;return this._schemeRegexp.test(e)&&(n=!0),e=this.normalizeUrl(e),"file://"===e.slice(0,7)&&(n=!0),n&&t&&(n=!1),n||this.isResourcePreloaded(e)?Promise.resolve():this.isResourcePreloading(e)?this.getResourcePreloadedPromise(e):this._preloadResource(e)}},_preloadResource:{value:function(e){var t,n,r=this,i=new XMLHttpRequest,a=Promise.defer();return i.open("GET",e),t=function(){r.setResourcePreloaded(e),i.removeEventListener("load",t),i.removeEventListener("error",t),clearTimeout(n),a.resolve()},i.addEventListener("load",t,!1),i.addEventListener("error",t,!1),i.send(),n=setTimeout(function(){r.setResourcePreloaded(e),a.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(e,a.promise),a.promise}},areStylesLoaded:{get:function(){var e,t;if(this._expectedStyles.length>0){e=this._document.styleSheets;for(var n,r=0;n=e[r];r++)t=this._expectedStyles.indexOf(n.href),t>=0&&this._expectedStyles.splice(t,1)}return 0===this._expectedStyles.length}}},{getInstanceForDocument:{value:function(e){var t=e.__montage_resources__;return t||(t=e.__montage_resources__=(new DocumentResources).initWithDocument(e)),t}}});exports.DocumentResources=DocumentResources;
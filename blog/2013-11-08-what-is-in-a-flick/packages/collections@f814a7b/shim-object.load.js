montageDefine("f814a7b","shim-object",{dependencies:["weak-map"],factory:function(e,t,n){"use strict";var i=e("weak-map");n.exports=Object,Object.empty=Object.freeze(Object.create(null)),Object.isObject=function(e){return Object(e)===e},Object.getValueOf=function(e){return Object.can(e,"valueOf")&&(e=e.valueOf()),e};var r=new i;Object.hash=function(e){return Object.can(e,"hash")?""+e.hash():Object(e)===e?(r.has(e)||r.set(e,Math.random().toString(36).slice(2)),r.get(e)):""+e};var a=Object.prototype.hasOwnProperty;Object.owns=function(e,t){return a.call(e,t)},Object.can=function(e,t){return null!=e&&"function"==typeof e[t]&&!a.call(e,t)},Object.has=function(e,t){if("object"!=typeof e)throw Error("Object.has can't accept non-object: "+typeof e);if(Object.can(e,"has"))return e.has(t);if("string"==typeof t)return t in e&&e[t]!==Object.prototype[t];throw Error("Key must be a string for Object.has on plain objects")},Object.get=function(e,t,n){if("object"!=typeof e)throw Error("Object.get can't accept non-object: "+typeof e);return Object.can(e,"get")?e.get(t,n):Object.has(e,t)?e[t]:n},Object.set=function(e,t,n){Object.can(e,"set")?e.set(t,n):e[t]=n},Object.addEach=function(e,t){return t&&(Object.can(t,"forEach")?"function"==typeof t.keys?t.forEach(function(t,n){e[n]=t}):t.forEach(function(t){e[t[0]]=t[1]}):Object.keys(t).forEach(function(n){e[n]=t[n]})),e},Object.forEach=function(e,t,n){Object.keys(e).forEach(function(i){t.call(n,e[i],i,e)})},Object.map=function(e,t,n){return Object.keys(e).map(function(i){return t.call(n,e[i],i,e)})},Object.values=function(e){return Object.map(e,Function.identity)},Object.concat=function(){for(var e={},t=0;arguments.length>t;t++)Object.addEach(e,arguments[t]);return e},Object.from=Object.concat,Object.is=function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t},Object.equals=function(e,t,n){if(n=n||Object.equals,e=Object.getValueOf(e),t=Object.getValueOf(t),e===t)return 0!==e||1/e===1/t;if(null===e||null===t)return e===t;if(Object.can(e,"equals"))return e.equals(t,n);if(Object.can(t,"equals"))return t.equals(e,n);if("object"==typeof e&&"object"==typeof t){var i=Object.getPrototypeOf(e),r=Object.getPrototypeOf(t);if(i===r&&(i===Object.prototype||null===i)){for(var a in e)if(!n(e[a],t[a]))return!1;for(var a in t)if(!n(e[a],t[a]))return!1;return!0}}return e!==e&&t!==t},Object.compare=function(e,t){e=Object.getValueOf(e),t=Object.getValueOf(t);var n=typeof e,i=typeof t;return e===t?0:n!==i?0:"number"===n?e-t:"string"===n?t>e?-1:1:Object.can(e,"compare")?e.compare(t):Object.can(t,"compare")?-t.compare(e):0},Object.clone=function(e,t,n){if(e=Object.getValueOf(e),n=n||new i,void 0===t)t=1/0;else if(0===t)return e;if(Object.isObject(e)){if(!n.has(e))if(Object.can(e,"clone"))n.set(e,e.clone(t,n));else{var r=Object.getPrototypeOf(e);if(null!==r&&r!==Object.prototype)throw Error("Can't clone "+e);var a=Object.create(r);n.set(e,a);for(var s in e)a[s]=Object.clone(e[s],t-1,n)}return n.get(e)}return e},Object.clear=function(e){if(Object.can(e,"clear"))e.clear();else for(var t=Object.keys(e),n=t.length;n;)n--,delete e[t[n]];return e}}});
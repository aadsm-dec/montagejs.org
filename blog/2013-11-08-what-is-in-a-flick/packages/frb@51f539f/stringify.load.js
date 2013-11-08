montageDefine("51f539f","stringify",{dependencies:["./parse","./language"],factory:function(e,t,n){"use strict";function r(e,t){return r.semantics.stringify(e,t)}function i(e){return function(t,n,r){var i=e+"{"+r(t.args[1],n)+"}";return"value"===t.args[0].type?i:r(t.args[0],n)+"."+i}}e("./parse");var a=e("./language").precedence,o=e("./language").operatorTypes;e("./language").operatorTokens,n.exports=r,r.semantics={makeBlockStringifier:i,stringify:function(e,t,n){function r(e){var n=o(e,t);return n?n:"this"}var i,o=this.stringify.bind(this),s=this.stringifiers;if(s[e.type])i=s[e.type](e,t,o);else if(e.inline)i="&"+e.type+"("+e.args.map(r).join(", ")+")";else{var l;1===e.args.length&&"mapBlock"===e.args[0].type?(l=e.type+"{"+o(e.args[0].args[1],t)+"}",e=e.args[0]):l=e.type+"("+e.args.slice(1).map(r).join(", ")+")",i="value"===e.args[0].type?l:o(e.args[0],t)+"."+l}return!n||n.type===e.type&&"if"!==n.type||a.get(n.type).has(e.type)?i:"("+i+")"},stringifiers:{value:function(){return""},literal:function(e){return"string"==typeof e.value?"'"+e.value.replace("'","\\'")+"'":""+e.value},parameters:function(){return"$"},record:function(e,t,n){return"{"+Object.map(e.args,function(e,r){var i;return i="value"===e.type?"this":n(e,t),r+": "+i}).join(", ")+"}"},tuple:function(e,t,n){return"["+Object.map(e.args,function(e){return"value"===e.type?"this":n(e)}).join(", ")+"]"},component:function(e,t){var n;return t&&t.components&&e.component?t.components.getObjectLabel?n=t.components.getObjectLabel(e.component):t.components.getLabelForObject&&(n=t.components.getLabelForObject(e.component)):n=e.label,"@"+n},element:function(e){return"#"+e.id},mapBlock:i("map"),filterBlock:i("filter"),someBlock:i("some"),everyBlock:i("every"),sortedBlock:i("sorted"),sortedSetBlock:i("sortedSet"),groupBlock:i("group"),groupMapBlock:i("groupMap"),minBlock:i("min"),maxBlock:i("max"),property:function(e,t,n){return"value"===e.args[0].type?"string"==typeof e.args[1].value?e.args[1].value:"literal"===e.args[1].type?"."+e.args[1].value:"this["+n(e.args[1],t)+"]":"parameters"===e.args[0].type?"$"+e.args[1].value:"literal"===e.args[1].type&&/^[\w\d_]+$/.test(e.args[1].value)?n(e.args[0],t,{type:"scope"})+"."+e.args[1].value:n(e.args[0],{type:"scope"},t)+"["+n(e.args[1],t)+"]"},"with":function(e,t,n){var r=n(e.args[1],t,e);return n(e.args[0],t)+"."+r},not:function(e,t,n){return"equals"===e.args[0].type?n(e.args[0].args[0],t,{type:"equals"})+" != "+n(e.args[0].args[1],t,{type:"equals"}):"!"+n(e.args[0],t,e)},neg:function(e,t,n){return"-"+n(e.args[0],t,e)},toNumber:function(e,t,n){return"+"+n(e.args[0],t,e)},parent:function(e,t,n){return"^"+n(e.args[0],t,e)},"if":function(e,t,n){return n(e.args[0],t,e)+" ? "+n(e.args[1],t)+" : "+n(e.args[2],t)},event:function(e,t,n){return e.when+" "+e.event+" -> "+n(e.listener,t)},binding:function(e,t,n,r){var i=r(t.args[0],n)+" "+e+" "+r(t.args[1],n),a="",o=t.descriptor;if(o)for(var s in o)a+=", "+s+": "+r(o[s],n);return i+a},bind:function(e,t,n){return this.binding("<-",e,t,n)},bind2:function(e,t,n){return this.binding("<->",e,t,n)},assign:function(e,t,n){return n(e.args[0],t)+": "+n(e.args[1],t)},block:function(e,t,n){var r="@"+e.label;return e.connection&&("prototype"===e.connection?r+=" < ":"object"===e.connection&&(r+=" : "),r+=n({type:"literal",value:e.module}),e.exports&&"value"!==e.exports.type&&(r+=" "+n(e.exports,t))),r+" {\n"+e.statements.map(function(e){return"    "+n(e,t)+";\n"}).join("")+"}\n"},sheet:function(e,t,n){return"\n"+e.blocks.map(function(e){return n(e,t)}).join("\n")+"\n"}}},o.forEach(function(e,t){r.semantics.stringifiers[t]=function(t,n,r){return t.args.map(function(e){return r(e,n,t)}).join(" "+e+" ").trim()}})}});
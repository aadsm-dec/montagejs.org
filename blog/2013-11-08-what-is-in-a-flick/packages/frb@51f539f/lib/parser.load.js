montageDefine("51f539f","lib/parser",{dependencies:[],factory:function(e,t){function n(e){return function(t){var n,r=0,a=1,s=e.apply(this,[function(e){return n=e,i()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var o=0;t.length>o;o++)s=s(t[o],{index:o,line:a,column:r}),"\n"===t[o]?(a++,r=0):r++;s=s("",{index:o,line:a,column:r})}catch(l){if(l.loc){var c=l.loc;l.message+=t.length>80?" at line "+c.line+", column "+c.column:" in "+JSON.stringify(t)+" at index "+c.index}throw l}return n}}function i(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function i(){return i}}}function r(e){return function(t){return function(n,i){return n===e?t(n,i):t(null,i)(n,i)}}}t.makeParser=n,t.expectEof=i,t.makeExpect=r}});
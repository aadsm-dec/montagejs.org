montageDefine("51f539f","lib/trie",{dependencies:[],factory:function(e,t,n){function i(e){var t=Object.keys(e),n={value:void 0,children:{}},r={};t.forEach(function(t){if(0===t.length)n.value=e[t];else{var i=t[0];r[i]||(r[i]={});var a=t.slice(1);r[i][a]=e[t]}});var a=Object.keys(r);return a.forEach(function(e){n.children[e]=i(r[e])}),n}n.exports=i}});
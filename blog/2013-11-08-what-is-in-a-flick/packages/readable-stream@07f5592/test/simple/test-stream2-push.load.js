montageDefine("07f5592","test/simple/test-stream2-push",{dependencies:["../common.js","../../readable","assert","util","events"],factory:function(e){function t(){console.error("readStart"),p=!0}function n(){console.error("readStop"),p=!1,process.nextTick(function(){var e=o.read();null!==e&&f.write(e)})}function r(){c(p),h.emit("data",v),c(p),h.emit("data",v),c(p),h.emit("data",v),c(p),h.emit("data",v),c(!p),5>b++?setTimeout(r,10):a()}function i(){console.error("finish"),c.deepEqual(m,g),console.log("ok")}function a(){h.emit("end"),c(!p),f.end(o.read()),setTimeout(function(){c(d)})}e("../common.js");var o=e("../../readable"),s=o.Readable,l=o.Writable,c=e("assert");e("util");var u=e("events").EventEmitter,o=new s({highWaterMark:16,encoding:"utf8"}),h=new u;o._read=function(){console.error("stream._read"),t()};var d=!1;o.on("end",function(){d=!0}),h.on("data",function(e){var t=o.push(e);console.error("data",o._readableState.length),t||n()}),h.on("end",function(){o.push(null)});var p=!1,f=new l({decodeStrings:!1}),m=[],g=["asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg"];f._write=function(e,t,n){console.error("WRITE %s",e),m.push(e),process.nextTick(n)},f.on("finish",i);var v="asdfg",b=0;t(),r()}});
montageDefine("07f5592","test/simple/test-stream2-pipe-error-handling",{dependencies:["../common","assert","../../readable"],factory:function(e){e("../common");var t=e("assert"),n=e("../../readable");(function(){var e=1e3,r=new n.Readable;r._read=function(t){t=Math.min(e,t),e-=t,r.push(new Buffer(t))};var i;r.unpipe=function(e){i=e,n.Readable.prototype.unpipe.call(this,e)};var a=new n.Writable;a._write=function(e,t,n){n()},r.pipe(a);var o=null;a.on("error",function(e){o=e});var s;a.on("unpipe",function(e){s=e});var l=Error("This stream turned into bacon.");a.emit("error",l),t.strictEqual(o,l),t.strictEqual(s,r),t.strictEqual(i,a)})(),function(){var e=1e3,r=new n.Readable;r._read=function(t){t=Math.min(e,t),e-=t,r.push(new Buffer(t))};var i;r.unpipe=function(e){i=e,n.Readable.prototype.unpipe.call(this,e)};var a=new n.Writable;a._write=function(e,t,n){n()},r.pipe(a);var o;a.on("unpipe",function(e){o=e});var s=Error("This stream turned into bacon."),l=null;try{a.emit("error",s)}catch(c){l=c}t.strictEqual(l,s),t.strictEqual(o,r),t.strictEqual(i,a)}()}});
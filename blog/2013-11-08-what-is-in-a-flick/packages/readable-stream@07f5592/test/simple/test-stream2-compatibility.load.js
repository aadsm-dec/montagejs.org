montageDefine("07f5592","test/simple/test-stream2-compatibility",{dependencies:["../common.js","../../lib/_stream_readable","assert","util","events"],factory:function(e){function t(){n.apply(this),this._buffer=new Buffer(100),this._buffer.fill("x"),this.on("data",function(){a++})}e("../common.js");var n=e("../../lib/_stream_readable"),r=e("assert"),i=e("util");e("events").EventEmitter;var a=0;i.inherits(t,n),t.prototype._read=function(){this.push(this._buffer),this._buffer=new Buffer(0)},new t,r.equal(a,1)}});
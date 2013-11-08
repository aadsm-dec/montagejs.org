function zlibBuffer(e,t,n){function r(){for(var t;null!==(t=e.read());)o.push(t),s+=t.length;e.once("readable",r)}function i(t){e.removeListener("end",a),e.removeListener("readable",r),n(t)}function a(){var e=Buffer.concat(o,s);o=[],n(null,e)}var o=[],s=0;e.on("error",i),e.on("end",a),e.end(t),r()}function Deflate(e){return this instanceof Deflate?(Zlib.call(this,e,binding.DEFLATE),void 0):new Deflate(e)}function Inflate(e){return this instanceof Inflate?(Zlib.call(this,e,binding.INFLATE),void 0):new Inflate(e)}function Gzip(e){return this instanceof Gzip?(Zlib.call(this,e,binding.GZIP),void 0):new Gzip(e)}function Gunzip(e){return this instanceof Gunzip?(Zlib.call(this,e,binding.GUNZIP),void 0):new Gunzip(e)}function DeflateRaw(e){return this instanceof DeflateRaw?(Zlib.call(this,e,binding.DEFLATERAW),void 0):new DeflateRaw(e)}function InflateRaw(e){return this instanceof InflateRaw?(Zlib.call(this,e,binding.INFLATERAW),void 0):new InflateRaw(e)}function Unzip(e){return this instanceof Unzip?(Zlib.call(this,e,binding.UNZIP),void 0):new Unzip(e)}function Zlib(e,t){if(this._opts=e=e||{},this._chunkSize=e.chunkSize||exports.Z_DEFAULT_CHUNK,Transform.call(this,e),this._readableState.chunkSize=null,e.chunkSize&&(e.chunkSize<exports.Z_MIN_CHUNK||e.chunkSize>exports.Z_MAX_CHUNK))throw Error("Invalid chunk size: "+e.chunkSize);if(e.windowBits&&(e.windowBits<exports.Z_MIN_WINDOWBITS||e.windowBits>exports.Z_MAX_WINDOWBITS))throw Error("Invalid windowBits: "+e.windowBits);if(e.level&&(e.level<exports.Z_MIN_LEVEL||e.level>exports.Z_MAX_LEVEL))throw Error("Invalid compression level: "+e.level);if(e.memLevel&&(e.memLevel<exports.Z_MIN_MEMLEVEL||e.memLevel>exports.Z_MAX_MEMLEVEL))throw Error("Invalid memLevel: "+e.memLevel);if(e.strategy&&e.strategy!=exports.Z_FILTERED&&e.strategy!=exports.Z_HUFFMAN_ONLY&&e.strategy!=exports.Z_RLE&&e.strategy!=exports.Z_FIXED&&e.strategy!=exports.Z_DEFAULT_STRATEGY)throw Error("Invalid strategy: "+e.strategy);if(e.dictionary&&!Buffer.isBuffer(e.dictionary))throw Error("Invalid dictionary: it should be a Buffer instance");this._binding=new binding.Zlib(t);var n=this;this._hadError=!1,this._binding.onerror=function(e,t){n._binding=null,n._hadError=!0;var r=Error(e);r.errno=t,r.code=exports.codes[t],n.emit("error",r)},this._binding.init(e.windowBits||exports.Z_DEFAULT_WINDOWBITS,e.level||exports.Z_DEFAULT_COMPRESSION,e.memLevel||exports.Z_DEFAULT_MEMLEVEL,e.strategy||exports.Z_DEFAULT_STRATEGY,e.dictionary),this._buffer=new Buffer(this._chunkSize),this._offset=0,this._closed=!1,this.once("end",this.close)}var Transform=require("./lib/_stream_transform.js"),binding=process.binding("zlib"),util=require("util"),assert=require("assert").ok;binding.Z_MIN_WINDOWBITS=8,binding.Z_MAX_WINDOWBITS=15,binding.Z_DEFAULT_WINDOWBITS=15,binding.Z_MIN_CHUNK=64,binding.Z_MAX_CHUNK=1/0,binding.Z_DEFAULT_CHUNK=16384,binding.Z_MIN_MEMLEVEL=1,binding.Z_MAX_MEMLEVEL=9,binding.Z_DEFAULT_MEMLEVEL=8,binding.Z_MIN_LEVEL=-1,binding.Z_MAX_LEVEL=9,binding.Z_DEFAULT_LEVEL=binding.Z_DEFAULT_COMPRESSION,Object.keys(binding).forEach(function(e){e.match(/^Z/)&&(exports[e]=binding[e])}),exports.codes={Z_OK:binding.Z_OK,Z_STREAM_END:binding.Z_STREAM_END,Z_NEED_DICT:binding.Z_NEED_DICT,Z_ERRNO:binding.Z_ERRNO,Z_STREAM_ERROR:binding.Z_STREAM_ERROR,Z_DATA_ERROR:binding.Z_DATA_ERROR,Z_MEM_ERROR:binding.Z_MEM_ERROR,Z_BUF_ERROR:binding.Z_BUF_ERROR,Z_VERSION_ERROR:binding.Z_VERSION_ERROR},Object.keys(exports.codes).forEach(function(e){exports.codes[exports.codes[e]]=e}),exports.Deflate=Deflate,exports.Inflate=Inflate,exports.Gzip=Gzip,exports.Gunzip=Gunzip,exports.DeflateRaw=DeflateRaw,exports.InflateRaw=InflateRaw,exports.Unzip=Unzip,exports.createDeflate=function(e){return new Deflate(e)},exports.createInflate=function(e){return new Inflate(e)},exports.createDeflateRaw=function(e){return new DeflateRaw(e)},exports.createInflateRaw=function(e){return new InflateRaw(e)},exports.createGzip=function(e){return new Gzip(e)},exports.createGunzip=function(e){return new Gunzip(e)},exports.createUnzip=function(e){return new Unzip(e)},exports.deflate=function(e,t){zlibBuffer(new Deflate,e,t)},exports.gzip=function(e,t){zlibBuffer(new Gzip,e,t)},exports.deflateRaw=function(e,t){zlibBuffer(new DeflateRaw,e,t)},exports.unzip=function(e,t){zlibBuffer(new Unzip,e,t)},exports.inflate=function(e,t){zlibBuffer(new Inflate,e,t)},exports.gunzip=function(e,t){zlibBuffer(new Gunzip,e,t)},exports.inflateRaw=function(e,t){zlibBuffer(new InflateRaw,e,t)},util.inherits(Zlib,Transform),Zlib.prototype.reset=function(){return this._binding.reset()},Zlib.prototype._flush=function(e,t){var n=this._readableState,r=this;this._transform(null,e,function(e){return e?t(e):(n.length&&n.length<n.lowWaterMark&&!n.ended&&n.needReadable&&r.emit("readable"),t(),void 0)})},Zlib.prototype.flush=function(e){var t=this._writableState,n=this._transformState;if(t.writing){t.needDrain=!0;var r=this;return this.once("drain",function(){r._flush(n.output,e)}),void 0}this._flush(n.output,e||function(){})},Zlib.prototype.close=function(e){if(e&&process.nextTick(e),!this._closed){this._closed=!0,this._binding.close();var t=this;process.nextTick(function(){t.emit("close")})}},Zlib.prototype._transform=function(e,t,n){function r(a,o){if(!d._hadError){var s=c-o;if(assert(s>=0,"have should not go down"),s>0){var h=d._buffer.slice(d._offset,d._offset+s);d._offset+=s,t(h)}if((0===o||d._offset>=d._chunkSize)&&(c=d._chunkSize,d._offset=0,d._buffer=new Buffer(d._chunkSize)),0===o){u+=l-a,l=a;var p=d._binding.write(i,e,u,l,d._buffer,d._offset,d._chunkSize);return p.callback=r,p.buffer=e,void 0}n()}}var i,a=this._writableState,o=a.ending||a.ended,s=o&&(!e||a.length===e.length);if(null!==e&&!Buffer.isBuffer(e))return n(Error("invalid input"));i=s?binding.Z_FINISH:null===e?binding.Z_FULL_FLUSH:binding.Z_NO_FLUSH;var l=e&&e.length,c=this._chunkSize-this._offset,u=0,h=this._binding.write(i,e,u,l,this._buffer,this._offset,c);h.buffer=e,h.callback=r;var d=this},util.inherits(Deflate,Zlib),util.inherits(Inflate,Zlib),util.inherits(Gzip,Zlib),util.inherits(Gunzip,Zlib),util.inherits(DeflateRaw,Zlib),util.inherits(InflateRaw,Zlib),util.inherits(Unzip,Zlib);
montageDefine("07f5592","fs",{dependencies:["util","path","stream","events","./lib/_stream_readable.js","./lib/_stream_writable.js"],factory:function(e,t){function n(){if(N){var e=Error();return function(t){if(t)throw e.message=t.message,t=e}}return function(e){if(e)throw e}}function r(e){return"function"==typeof e?e:n()}function i(e){return"function"!=typeof e?n():function(){return e.apply(null,arguments)}}function a(e){if(e&&!Buffer.isEncoding(e))throw Error("Unknown encoding: "+e)}function o(e,t){if(-1!==(""+e).indexOf("\0")){var n=Error("Path must be a string without null bytes.");if(!t)throw n;return process.nextTick(function(){t(n)}),!1}return!0}function s(e){if("string"!=typeof e)return e;if(!D&&~e.indexOf("x"))throw d("ENOSYS","fs.open(O_EXCL)");switch(e){case"r":return A;case"rs":return A|B;case"r+":return j;case"rs+":return j|B;case"w":return I|P|R;case"wx":case"xw":return I|P|R|D;case"w+":return I|P|j;case"wx+":case"xw+":return I|P|j|D;case"a":return k|P|R;case"ax":case"xa":return k|P|R|D;case"a+":return k|P|j;case"ax+":case"xa+":return k|P|j|D}throw Error("Unknown file open flag: "+e)}function l(e,t){switch(typeof e){case"number":return e;case"string":return parseInt(e,8);default:return t?l(t):void 0}}function c(e,t){return F?"junction"===t?C._makeLong(e):(""+e).replace(/\//g,"\\"):e}function u(e){if("number"==typeof e)return e;if(e instanceof Date)return e.getTime()/1e3;throw Error("Cannot parse time: "+e)}function h(e,t,n,i,a,o){o=r(arguments[arguments.length-1]),x.write(e,t,n,i,a,function(r,s){r?x.close(e,function(){o&&o(r)}):s===i?x.close(e,o):(n+=s,i-=s,a+=s,h(e,t,n,i,a,o))})}function d(e,t){var n=Error(t+" "+e);return n.errno=n.code=e,n.syscall=t,n}function p(){S.call(this);var e=this,t=process.binding("fs_event_wrap").FSEvent;this._handle=new t,this._handle.owner=this,this._handle.onchange=function(t,n,r){t?(e._handle.close(),e.emit("error",d(errno,"watch"))):e.emit("change",n,r)}}function m(){S.call(this);var e=this;this._handle=new L.StatWatcher;var t=-1;this._handle.onchange=function(n,r,i){(-1!==t||-1!==i||n.nlink!==r.nlink)&&(t=i,e.emit("change",n,r))},this._handle.onstop=function(){e.emit("stop")}}function f(e){return Object.prototype.hasOwnProperty.call(q,e)&&q[e]}function g(){U=new Buffer(T),U.used=0}function v(e,t){if(!(this instanceof v))return new v(e,t);if(t=_._extend({bufferSize:65536,lowWaterMark:16384,highWaterMark:65536},t||{}),E.call(this,t),this.path=e,this.fd=t.hasOwnProperty("fd")?t.fd:null,this.flags=t.hasOwnProperty("flags")?t.flags:"r",this.mode=t.hasOwnProperty("mode")?t.mode:438,this.start=t.hasOwnProperty("start")?t.start:void 0,this.end=t.hasOwnProperty("start")?t.end:void 0,this.pos=void 0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw Error("start must be <= end");this.pos=this.start}"number"!=typeof this.fd&&this.open(),this.on("end",function(){this.destroy()})}function b(e,t){if(!(this instanceof b))return new b(e,t);if(t=_._extend({bufferSize:65536,lowWaterMark:16384,highWaterMark:65536},t||{}),z.call(this,t),this.path=e,this.fd=null,this.fd=t.hasOwnProperty("fd")?t.fd:null,this.flags=t.hasOwnProperty("flags")?t.flags:"w",this.mode=t.hasOwnProperty("mode")?t.mode:438,this.start=t.hasOwnProperty("start")?t.start:void 0,this.pos=void 0,this.bytesWritten=0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(0>this.start)throw Error("start must be >= zero");this.pos=this.start}"number"!=typeof this.fd&&this.open(),this.once("finish",this.close)}function y(e){M.call(this),this.fd=e,this.writable=!0,this.readable=!1}var _=e("util"),C=e("path"),L=process.binding("fs"),w=process.binding("constants"),x=t,M=e("stream").Stream,S=e("events").EventEmitter,E=e("./lib/_stream_readable.js"),z=e("./lib/_stream_writable.js"),O=128,T=40960,k=w.O_APPEND||0,P=w.O_CREAT||0;w.O_DIRECTORY||0;var D=w.O_EXCL||0;w.O_NOCTTY||0,w.O_NOFOLLOW||0;var A=w.O_RDONLY||0,j=w.O_RDWR||0;w.O_SYMLINK||0;var B=w.O_SYNC||0,I=w.O_TRUNC||0,R=w.O_WRONLY||0,F="win32"===process.platform,N=process.env.NODE_DEBUG&&/fs/.test(process.env.NODE_DEBUG);x.Stats=L.Stats,x.Stats.prototype._checkModeProperty=function(e){return(this.mode&w.S_IFMT)===e},x.Stats.prototype.isDirectory=function(){return this._checkModeProperty(w.S_IFDIR)},x.Stats.prototype.isFile=function(){return this._checkModeProperty(w.S_IFREG)},x.Stats.prototype.isBlockDevice=function(){return this._checkModeProperty(w.S_IFBLK)},x.Stats.prototype.isCharacterDevice=function(){return this._checkModeProperty(w.S_IFCHR)},x.Stats.prototype.isSymbolicLink=function(){return this._checkModeProperty(w.S_IFLNK)},x.Stats.prototype.isFIFO=function(){return this._checkModeProperty(w.S_IFIFO)},x.Stats.prototype.isSocket=function(){return this._checkModeProperty(w.S_IFSOCK)},x.exists=function(e,t){function n(e){t&&t(e?!1:!0)}o(e,n)&&L.stat(C._makeLong(e),n)},x.existsSync=function(e){try{return o(e),L.stat(C._makeLong(e)),!0}catch(t){return!1}},x.readFile=function(e,t){function n(){0===c?(u=new Buffer(8192),x.read(d,u,0,8192,-1,i)):x.read(d,u,p,c-p,-1,i)}function i(e,t){return e?x.close(d,function(){return l(e)}):0===t?o():(p+=t,0!==c?p===c?o():n():(h.push(u.slice(0,t)),n()),void 0)}function o(){x.close(d,function(e){return 0===c?u=Buffer.concat(h,p):c>p&&(u=u.slice(0,p)),s&&(u=u.toString(s)),l(e,u)})}var s="string"==typeof t?t:null,l=r(arguments[arguments.length-1]);a(s);var c,u,h,d,p=0;x.open(e,w.O_RDONLY,438,function(e,t){return e?l(e):(d=t,x.fstat(d,function(e,t){return e?l(e):(c=t.size,0===c?(h=[],n()):(u=new Buffer(c),n(),void 0))}),void 0)})},x.readFileSync=function(e,t){a(t);var n,r=x.openSync(e,w.O_RDONLY,438),i=!0;try{n=x.fstatSync(r).size,i=!1}finally{i&&x.closeSync(r)}var o,s,l=0;0===n?s=[]:o=new Buffer(n);for(var c=!1;!c;){var i=!0;try{if(0!==n)var u=x.readSync(r,o,l,n-l);else{o=new Buffer(8192);var u=x.readSync(r,o,0,8192);u&&s.push(o.slice(0,u))}i=!1}finally{i&&x.closeSync(r)}l+=u,c=0===u||0!==n&&l>=n}return x.closeSync(r),0===n?o=Buffer.concat(s,l):n>l&&(o=o.slice(0,l)),t&&(o=o.toString(t)),o},Object.defineProperty(t,"_stringToFlags",{enumerable:!1,value:s}),x.close=function(e,t){L.close(e,i(t))},x.closeSync=function(e){return L.close(e)},x.open=function(e,t,n,r){r=i(arguments[arguments.length-1]),n=l(n,438),o(e,r)&&L.open(C._makeLong(e),s(t),n,r)},x.openSync=function(e,t,n){return n=l(n,438),o(e),L.open(C._makeLong(e),s(t),n)},x.read=function(e,t,n,r,i,o){function s(e,n){o&&o(e,n||0,t)}if(!Buffer.isBuffer(t)){var l=arguments[4],c=arguments[3];a(c),i=arguments[2],r=arguments[1],t=new Buffer(r),n=0,o=function(e,n){if(l){var r=n>0?t.toString(c,0,n):"";l(e,r,n)}}}L.read(e,t,n,r,i,s)},x.readSync=function(e,t,n,r,i){var o=!1;if(!Buffer.isBuffer(t)){o=!0;var s=arguments[3];a(s),i=arguments[2],r=arguments[1],t=new Buffer(r),n=0}var l=L.read(e,t,n,r,i);if(!o)return l;var c=l>0?t.toString(s,0,l):"";return[c,l]},x.write=function(e,t,n,i,o,s){function l(e,n){s(e,n||0,t)}return Buffer.isBuffer(t)||(s=arguments[4],o=arguments[2],a(arguments[3]),t=new Buffer(""+arguments[1],arguments[3]),n=0,i=t.length),i?(s=r(s),L.write(e,t,n,i,o,l),void 0):("function"==typeof s&&process.nextTick(function(){s(void 0,0)}),void 0)},x.writeSync=function(e,t,n,r,i){return Buffer.isBuffer(t)||(i=arguments[2],a(arguments[3]),t=new Buffer(""+arguments[1],arguments[3]),n=0,r=t.length),r?L.write(e,t,n,r,i):0},x.rename=function(e,t,n){n=i(n),o(e,n)&&o(t,n)&&L.rename(C._makeLong(e),C._makeLong(t),n)},x.renameSync=function(e,t){return o(e),o(t),L.rename(C._makeLong(e),C._makeLong(t))},x.truncate=function(e,t,n){return"number"==typeof e?x.ftruncate(e,t,n):("function"==typeof t?(n=t,t=0):t===void 0&&(t=0),n=r(n),x.open(e,"w",function(e,r){return e?n(e):(L.ftruncate(r,t,function(e){x.close(r,function(t){n(e||t)})}),void 0)}),void 0)},x.truncateSync=function(e,t){if("number"==typeof e)return x.ftruncateSync(e,t);t===void 0&&(t=0);var n=x.openSync(e,"w");try{var r=x.ftruncateSync(n,t)}finally{x.closeSync(n)}return r},x.ftruncate=function(e,t,n){"function"==typeof t?(n=t,t=0):t===void 0&&(t=0),L.ftruncate(e,t,i(n))},x.ftruncateSync=function(e,t){return t===void 0&&(t=0),L.ftruncate(e,t)},x.rmdir=function(e,t){t=i(t),o(e,t)&&L.rmdir(C._makeLong(e),t)},x.rmdirSync=function(e){return o(e),L.rmdir(C._makeLong(e))},x.fdatasync=function(e,t){L.fdatasync(e,i(t))},x.fdatasyncSync=function(e){return L.fdatasync(e)},x.fsync=function(e,t){L.fsync(e,i(t))},x.fsyncSync=function(e){return L.fsync(e)},x.mkdir=function(e,t,n){"function"==typeof t&&(n=t),n=i(n),o(e,n)&&L.mkdir(C._makeLong(e),l(t,511),n)},x.mkdirSync=function(e,t){return o(e),L.mkdir(C._makeLong(e),l(t,511))},x.sendfile=function(e,t,n,r,a){L.sendfile(e,t,n,r,i(a))},x.sendfileSync=function(e,t,n,r){return L.sendfile(e,t,n,r)},x.readdir=function(e,t){t=i(t),o(e,t)&&L.readdir(C._makeLong(e),t)},x.readdirSync=function(e){return o(e),L.readdir(C._makeLong(e))},x.fstat=function(e,t){L.fstat(e,i(t))},x.lstat=function(e,t){t=i(t),o(e,t)&&L.lstat(C._makeLong(e),t)},x.stat=function(e,t){t=i(t),o(e,t)&&L.stat(C._makeLong(e),t)},x.fstatSync=function(e){return L.fstat(e)},x.lstatSync=function(e){return o(e),L.lstat(C._makeLong(e))},x.statSync=function(e){return o(e),L.stat(C._makeLong(e))},x.readlink=function(e,t){t=i(t),o(e,t)&&L.readlink(C._makeLong(e),t)},x.readlinkSync=function(e){return o(e),L.readlink(C._makeLong(e))},x.symlink=function(e,t,n,r){var a="string"==typeof n?n:null,r=i(arguments[arguments.length-1]);o(e,r)&&o(t,r)&&L.symlink(c(e,a),C._makeLong(t),a,r)},x.symlinkSync=function(e,t,n){return n="string"==typeof n?n:null,o(e),o(t),L.symlink(c(e,n),C._makeLong(t),n)},x.link=function(e,t,n){n=i(n),o(e,n)&&o(t,n)&&L.link(C._makeLong(e),C._makeLong(t),n)},x.linkSync=function(e,t){return o(e),o(t),L.link(C._makeLong(e),C._makeLong(t))},x.unlink=function(e,t){t=i(t),o(e,t)&&L.unlink(C._makeLong(e),t)},x.unlinkSync=function(e){return o(e),L.unlink(C._makeLong(e))},x.fchmod=function(e,t,n){L.fchmod(e,l(t),i(n))},x.fchmodSync=function(e,t){return L.fchmod(e,l(t))},w.hasOwnProperty("O_SYMLINK")&&(x.lchmod=function(e,t,n){n=r(n),x.open(e,w.O_WRONLY|w.O_SYMLINK,function(e,r){return e?(n(e),void 0):(x.fchmod(r,t,function(e){x.close(r,function(t){n(e||t)})}),void 0)})},x.lchmodSync=function(e,t){var n,r,i=x.openSync(e,w.O_WRONLY|w.O_SYMLINK);try{var a=x.fchmodSync(i,t)}catch(o){n=o}try{x.closeSync(i)}catch(o){r=o}if(n||r)throw n||r;return a}),x.chmod=function(e,t,n){n=i(n),o(e,n)&&L.chmod(C._makeLong(e),l(t),n)},x.chmodSync=function(e,t){return o(e),L.chmod(C._makeLong(e),l(t))},w.hasOwnProperty("O_SYMLINK")&&(x.lchown=function(e,t,n,i){i=r(i),x.open(e,w.O_WRONLY|w.O_SYMLINK,function(e,r){return e?(i(e),void 0):(x.fchown(r,t,n,i),void 0)})},x.lchownSync=function(e,t,n){var r=x.openSync(e,w.O_WRONLY|w.O_SYMLINK);return x.fchownSync(r,t,n)}),x.fchown=function(e,t,n,r){L.fchown(e,t,n,i(r))},x.fchownSync=function(e,t,n){return L.fchown(e,t,n)},x.chown=function(e,t,n,r){r=i(r),o(e,r)&&L.chown(C._makeLong(e),t,n,r)},x.chownSync=function(e,t,n){return o(e),L.chown(C._makeLong(e),t,n)},x._toUnixTimestamp=u,x.utimes=function(e,t,n,r){r=i(r),o(e,r)&&L.utimes(C._makeLong(e),u(t),u(n),r)},x.utimesSync=function(e,t,n){o(e),t=u(t),n=u(n),L.utimes(C._makeLong(e),t,n)},x.futimes=function(e,t,n,r){t=u(t),n=u(n),L.futimes(e,t,n,i(r))},x.futimesSync=function(e,t,n){t=u(t),n=u(n),L.futimes(e,t,n)},x.writeFile=function(e,t,n,i){var o="string"==typeof n?n:"utf8";a(o),i=r(arguments[arguments.length-1]),x.open(e,"w",438,function(e,n){if(e)i&&i(e);else{var r=Buffer.isBuffer(t)?t:new Buffer(""+t,o);h(n,r,0,r.length,0,i)}})},x.writeFileSync=function(e,t,n){a(n);var r=x.openSync(e,"w");Buffer.isBuffer(t)||(t=new Buffer(""+t,n||"utf8"));var i=0,o=t.length;try{for(;o>i;)i+=x.writeSync(r,t,i,o-i,i)}finally{x.closeSync(r)}},x.appendFile=function(e,t,n,i){var o="string"==typeof n?n:"utf8";a(o),i=r(arguments[arguments.length-1]),x.open(e,"a",438,function(e,n){if(e)return i(e);var r=Buffer.isBuffer(t)?t:new Buffer(""+t,o);h(n,r,0,r.length,null,i)})},x.appendFileSync=function(e,t,n){a(n);var r=x.openSync(e,"a");Buffer.isBuffer(t)||(t=new Buffer(""+t,n||"utf8"));var i=0,o=null,s=t.length;try{for(;s>i;)i+=x.writeSync(r,t,i,s-i,o),o+=i}finally{x.closeSync(r)}},_.inherits(p,S),p.prototype.start=function(e,t){o(e);var n=this._handle.start(C._makeLong(e),t);if(n)throw this._handle.close(),d(errno,"watch")},p.prototype.close=function(){this._handle.close()},x.watch=function(e){o(e);var t,n,r;return"object"==typeof arguments[1]?(n=arguments[1],r=arguments[2]):(n={},r=arguments[1]),void 0===n.persistent&&(n.persistent=!0),t=new p,t.start(e,n.persistent),r&&t.addListener("change",r),t},_.inherits(m,S),m.prototype.start=function(e,t,n){o(e),this._handle.start(C._makeLong(e),t,n)},m.prototype.stop=function(){this._handle.stop()};var q={};if(x.watchFile=function(e){o(e);var t,n,r={interval:5007,persistent:!0};if("object"==typeof arguments[1]?(r=_._extend(r,arguments[1]),n=arguments[2]):n=arguments[1],!n)throw Error("watchFile requires a listener function");return f(e)?t=q[e]:(t=q[e]=new m,t.start(e,r.persistent,r.interval)),t.addListener("change",n),t},x.unwatchFile=function(e,t){if(o(e),f(e)){var n=q[e];"function"==typeof t?n.removeListener("change",t):n.removeAllListeners("change"),0===n.listeners("change").length&&(n.stop(),q[e]=void 0)}},C.normalize,F)var V=/(.*?)(?:[\/\\]+|$)/g;else var V=/(.*?)(?:[\/]+|$)/g;if(F)var W=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;else var W=/^[\/]*/;x.realpathSync=function(e,t){function n(){var t=W.exec(e);r=t[0].length,i=t[0],a=t[0],o="",F&&!c[a]&&(x.lstatSync(a),c[a]=!0)}if(e=C.resolve(e),t&&Object.prototype.hasOwnProperty.call(t,e))return t[e];var r,i,a,o,s=e,l={},c={};for(n();e.length>r;){V.lastIndex=r;var u=V.exec(e);if(o=i,i+=u[0],a=o+u[1],r=V.lastIndex,!(c[a]||t&&t[a]===a)){var h;if(t&&Object.prototype.hasOwnProperty.call(t,a))h=t[a];else{var d=x.lstatSync(a);if(!d.isSymbolicLink()){c[a]=!0,t&&(t[a]=a);continue}var p=null;if(!F){var m=d.dev.toString(32)+":"+d.ino.toString(32);l.hasOwnProperty(m)&&(p=l[m])}null===p&&(x.statSync(a),p=x.readlinkSync(a)),h=C.resolve(o,p),t&&(t[a]=h),F||(l[m]=p)}e=C.resolve(h,e.slice(r)),n()}}return t&&(t[s]=e),e},x.realpath=function(e,t,n){function i(){var t=W.exec(e);c=t[0].length,u=t[0],h=t[0],d="",F&&!f[h]?x.lstat(h,function(e){return e?n(e):(f[h]=!0,a(),void 0)}):process.nextTick(a)}function a(){if(c>=e.length)return t&&(t[p]=e),n(null,e);V.lastIndex=c;var r=V.exec(e);return d=u,u+=r[0],h=d+r[1],c=V.lastIndex,f[h]||t&&t[h]===h?process.nextTick(a):t&&Object.prototype.hasOwnProperty.call(t,h)?l(t[h]):x.lstat(h,o)}function o(e,r){if(e)return n(e);if(!r.isSymbolicLink())return f[h]=!0,t&&(t[h]=h),process.nextTick(a);if(!F){var i=r.dev.toString(32)+":"+r.ino.toString(32);if(m.hasOwnProperty(i))return s(null,m[i],h)}x.stat(h,function(e){return e?n(e):(x.readlink(h,function(e,t){F||(m[i]=t),s(e,t)}),void 0)})}function s(e,r,i){if(e)return n(e);var a=C.resolve(d,r);t&&(t[i]=a),l(a)}function l(t){e=C.resolve(t,e.slice(c)),i()}if("function"!=typeof n&&(n=r(t),t=null),e=C.resolve(e),t&&Object.prototype.hasOwnProperty.call(t,e))return process.nextTick(n.bind(null,null,t[e]));var c,u,h,d,p=e,m={},f={};i()};var U;x.createReadStream=function(e,t){return new v(e,t)},_.inherits(v,E),x.ReadStream=v,x.FileReadStream=x.ReadStream,v.prototype.open=function(){var e=this;x.open(this.path,this.flags,this.mode,function(t,n){return t?(e.destroy(),e.emit("error",t),void 0):(e.fd=n,e.emit("open",n),e.read(),void 0)})},v.prototype._read=function(e,t){function n(e,n){if(e)return o.destroy(),t(e);var i=null;n>0&&(i=r.slice(a,a+n)),t(null,i)}if("number"!=typeof this.fd)return this.once("open",function(){this._read(e,t)});if(!this.destroyed){(!U||O>U.length-U.used)&&(U=null,g());var r=U,i=Math.min(U.length-U.used,e),a=U.used;if(void 0!==this.pos&&(i=Math.min(this.end-this.pos+1,i)),0>=i)return t();var o=this;x.read(this.fd,U,U.used,i,this.pos,n),void 0!==this.pos&&(this.pos+=i),U.used+=i}},v.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,"number"==typeof this.fd&&this.close())},v.prototype.close=function(e){function t(){x.close(n.fd,function(e){e?n.emit("error",e):n.emit("close")})}if(e&&this.once("close",e),this.closed||"number"!=typeof this.fd)return"number"!=typeof this.fd&&this.once("open",t),process.nextTick(this.emit.bind(this,"close"));this.closed=!0;var n=this;t()},x.createWriteStream=function(e,t){return new b(e,t)},_.inherits(b,z),x.WriteStream=b,x.FileWriteStream=x.WriteStream,b.prototype.open=function(){x.open(this.path,this.flags,this.mode,function(e,t){return e?(this.destroy(),this.emit("error",e),void 0):(this.fd=t,this.emit("open",t),void 0)}.bind(this))},b.prototype._write=function(e,t){return Buffer.isBuffer(e)?"number"!=typeof this.fd?this.once("open",this._write.bind(this,e,t)):(x.write(this.fd,e,0,e.length,this.pos,function(e,n){return e?(this.destroy(),t(e)):(this.bytesWritten+=n,t(),void 0)}.bind(this)),void 0!==this.pos&&(this.pos+=e.length),void 0):this.emit("error",Error("Invalid data"))},b.prototype.destroy=v.prototype.destroy,b.prototype.close=v.prototype.close,b.prototype.destroySoon=b.prototype.end,_.inherits(y,M),x.SyncWriteStream=y,y.prototype.write=function(e,t,n){var r,i;if(t)if("string"==typeof t)r=t,i=n;else{if("function"!=typeof t)throw Error("bad arg");i=t}return a(r),"string"==typeof e&&(e=new Buffer(e,r)),x.writeSync(this.fd,e,0,e.length),i&&process.nextTick(i),!0},y.prototype.end=function(e,t,n){e&&this.write(e,t,n),this.destroy()},y.prototype.destroy=function(){return x.closeSync(this.fd),this.fd=null,this.emit("close"),!0},y.prototype.destroySoon=y.prototype.destroy}});
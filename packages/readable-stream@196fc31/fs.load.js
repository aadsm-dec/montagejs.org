montageDefine("196fc31","fs",{dependencies:["util","path","stream","events","./lib/_stream_readable.js","./lib/_stream_writable.js"],factory:function(e,t){function n(){if(q){var e=Error();return function(t){if(t)throw e.message=t.message,t=e}}return function(e){if(e)throw e}}function a(e){return"function"==typeof e?e:n()}function s(e){return"function"!=typeof e?n():function(){return e.apply(null,arguments)}}function i(e){if(e&&!Buffer.isEncoding(e))throw Error("Unknown encoding: "+e)}function r(e,t){if(-1!==(""+e).indexOf("\0")){var n=Error("Path must be a string without null bytes.");if(!t)throw n;return process.nextTick(function(){t(n)}),!1}return!0}function o(e){if("string"!=typeof e)return e;if(!O&&~e.indexOf("x"))throw u("ENOSYS","fs.open(O_EXCL)");switch(e){case"r":return P;case"rs":return P|A;case"r+":return D;case"rs+":return D|A;case"w":return I|B|N;case"wx":case"xw":return I|B|N|O;case"w+":return I|B|D;case"wx+":case"xw+":return I|B|D|O;case"a":return j|B|N;case"ax":case"xa":return j|B|N|O;case"a+":return j|B|D;case"ax+":case"xa+":return j|B|D|O}throw Error("Unknown file open flag: "+e)}function l(e,t){switch(typeof e){case"number":return e;case"string":return parseInt(e,8);default:return t?l(t):void 0}}function c(e,t){return R?"junction"===t?L._makeLong(e):(""+e).replace(/\//g,"\\"):e}function p(e){if("number"==typeof e)return e;if(e instanceof Date)return e.getTime()/1e3;throw Error("Cannot parse time: "+e)}function h(e,t,n,s,i,r){r=a(arguments[arguments.length-1]),C.write(e,t,n,s,i,function(a,o){a?C.close(e,function(){r&&r(a)}):o===s?C.close(e,r):(n+=o,s-=o,i+=o,h(e,t,n,s,i,r))})}function u(e,t){var n=Error(t+" "+e);return n.errno=n.code=e,n.syscall=t,n}function d(){z.call(this);var e=this,t=process.binding("fs_event_wrap").FSEvent;this._handle=new t,this._handle.owner=this,this._handle.onchange=function(t,n,a){t?(e._handle.close(),e.emit("error",u(errno,"watch"))):e.emit("change",n,a)}}function g(){z.call(this);var e=this;this._handle=new _.StatWatcher;var t=-1;this._handle.onchange=function(n,a,s){(-1!==t||-1!==s||n.nlink!==a.nlink)&&(t=s,e.emit("change",n,a))},this._handle.onstop=function(){e.emit("stop")}}function m(e){return Object.prototype.hasOwnProperty.call(F,e)&&F[e]}function f(){U=new Buffer(T),U.used=0}function v(e,t){if(!(this instanceof v))return new v(e,t);if(t=w._extend({bufferSize:65536,lowWaterMark:16384,highWaterMark:65536},t||{}),S.call(this,t),this.path=e,this.fd=t.hasOwnProperty("fd")?t.fd:null,this.flags=t.hasOwnProperty("flags")?t.flags:"r",this.mode=t.hasOwnProperty("mode")?t.mode:438,this.start=t.hasOwnProperty("start")?t.start:void 0,this.end=t.hasOwnProperty("start")?t.end:void 0,this.pos=void 0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw Error("start must be <= end");this.pos=this.start}"number"!=typeof this.fd&&this.open(),this.on("end",function(){this.destroy()})}function y(e,t){if(!(this instanceof y))return new y(e,t);if(t=w._extend({bufferSize:65536,lowWaterMark:16384,highWaterMark:65536},t||{}),k.call(this,t),this.path=e,this.fd=null,this.fd=t.hasOwnProperty("fd")?t.fd:null,this.flags=t.hasOwnProperty("flags")?t.flags:"w",this.mode=t.hasOwnProperty("mode")?t.mode:438,this.start=t.hasOwnProperty("start")?t.start:void 0,this.pos=void 0,this.bytesWritten=0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(0>this.start)throw Error("start must be >= zero");this.pos=this.start}"number"!=typeof this.fd&&this.open(),this.once("finish",this.close)}function b(e){M.call(this),this.fd=e,this.writable=!0,this.readable=!1}var w=e("util"),L=e("path"),_=process.binding("fs"),x=process.binding("constants"),C=t,M=e("stream").Stream,z=e("events").EventEmitter,S=e("./lib/_stream_readable.js"),k=e("./lib/_stream_writable.js"),E=128,T=40960,j=x.O_APPEND||0,B=x.O_CREAT||0;x.O_DIRECTORY||0;var O=x.O_EXCL||0;x.O_NOCTTY||0,x.O_NOFOLLOW||0;var P=x.O_RDONLY||0,D=x.O_RDWR||0;x.O_SYMLINK||0;var A=x.O_SYNC||0,I=x.O_TRUNC||0,N=x.O_WRONLY||0,R="win32"===process.platform,q=process.env.NODE_DEBUG&&/fs/.test(process.env.NODE_DEBUG);C.Stats=_.Stats,C.Stats.prototype._checkModeProperty=function(e){return(this.mode&x.S_IFMT)===e},C.Stats.prototype.isDirectory=function(){return this._checkModeProperty(x.S_IFDIR)},C.Stats.prototype.isFile=function(){return this._checkModeProperty(x.S_IFREG)},C.Stats.prototype.isBlockDevice=function(){return this._checkModeProperty(x.S_IFBLK)},C.Stats.prototype.isCharacterDevice=function(){return this._checkModeProperty(x.S_IFCHR)},C.Stats.prototype.isSymbolicLink=function(){return this._checkModeProperty(x.S_IFLNK)},C.Stats.prototype.isFIFO=function(){return this._checkModeProperty(x.S_IFIFO)},C.Stats.prototype.isSocket=function(){return this._checkModeProperty(x.S_IFSOCK)},C.exists=function(e,t){function n(e){t&&t(e?!1:!0)}r(e,n)&&_.stat(L._makeLong(e),n)},C.existsSync=function(e){try{return r(e),_.stat(L._makeLong(e)),!0}catch(t){return!1}},C.readFile=function(e,t){function n(){0===c?(p=new Buffer(8192),C.read(u,p,0,8192,-1,s)):C.read(u,p,d,c-d,-1,s)}function s(e,t){return e?C.close(u,function(){return l(e)}):0===t?r():(d+=t,0!==c?d===c?r():n():(h.push(p.slice(0,t)),n()),void 0)}function r(){C.close(u,function(e){return 0===c?p=Buffer.concat(h,d):c>d&&(p=p.slice(0,d)),o&&(p=p.toString(o)),l(e,p)})}var o="string"==typeof t?t:null,l=a(arguments[arguments.length-1]);i(o);var c,p,h,u,d=0;C.open(e,x.O_RDONLY,438,function(e,t){return e?l(e):(u=t,C.fstat(u,function(e,t){return e?l(e):(c=t.size,0===c?(h=[],n()):(p=new Buffer(c),n(),void 0))}),void 0)})},C.readFileSync=function(e,t){i(t);var n,a=C.openSync(e,x.O_RDONLY,438),s=!0;try{n=C.fstatSync(a).size,s=!1}finally{s&&C.closeSync(a)}var r,o,l=0;0===n?o=[]:r=new Buffer(n);for(var c=!1;!c;){var s=!0;try{if(0!==n)var p=C.readSync(a,r,l,n-l);else{r=new Buffer(8192);var p=C.readSync(a,r,0,8192);p&&o.push(r.slice(0,p))}s=!1}finally{s&&C.closeSync(a)}l+=p,c=0===p||0!==n&&l>=n}return C.closeSync(a),0===n?r=Buffer.concat(o,l):n>l&&(r=r.slice(0,l)),t&&(r=r.toString(t)),r},Object.defineProperty(t,"_stringToFlags",{enumerable:!1,value:o}),C.close=function(e,t){_.close(e,s(t))},C.closeSync=function(e){return _.close(e)},C.open=function(e,t,n,a){a=s(arguments[arguments.length-1]),n=l(n,438),r(e,a)&&_.open(L._makeLong(e),o(t),n,a)},C.openSync=function(e,t,n){return n=l(n,438),r(e),_.open(L._makeLong(e),o(t),n)},C.read=function(e,t,n,a,s,r){function o(e,n){r&&r(e,n||0,t)}if(!Buffer.isBuffer(t)){var l=arguments[4],c=arguments[3];i(c),s=arguments[2],a=arguments[1],t=new Buffer(a),n=0,r=function(e,n){if(l){var a=n>0?t.toString(c,0,n):"";l(e,a,n)}}}_.read(e,t,n,a,s,o)},C.readSync=function(e,t,n,a,s){var r=!1;if(!Buffer.isBuffer(t)){r=!0;var o=arguments[3];i(o),s=arguments[2],a=arguments[1],t=new Buffer(a),n=0}var l=_.read(e,t,n,a,s);if(!r)return l;var c=l>0?t.toString(o,0,l):"";return[c,l]},C.write=function(e,t,n,s,r,o){function l(e,n){o(e,n||0,t)}return Buffer.isBuffer(t)||(o=arguments[4],r=arguments[2],i(arguments[3]),t=new Buffer(""+arguments[1],arguments[3]),n=0,s=t.length),s?(o=a(o),_.write(e,t,n,s,r,l),void 0):("function"==typeof o&&process.nextTick(function(){o(void 0,0)}),void 0)},C.writeSync=function(e,t,n,a,s){return Buffer.isBuffer(t)||(s=arguments[2],i(arguments[3]),t=new Buffer(""+arguments[1],arguments[3]),n=0,a=t.length),a?_.write(e,t,n,a,s):0},C.rename=function(e,t,n){n=s(n),r(e,n)&&r(t,n)&&_.rename(L._makeLong(e),L._makeLong(t),n)},C.renameSync=function(e,t){return r(e),r(t),_.rename(L._makeLong(e),L._makeLong(t))},C.truncate=function(e,t,n){return"number"==typeof e?C.ftruncate(e,t,n):("function"==typeof t?(n=t,t=0):t===void 0&&(t=0),n=a(n),C.open(e,"w",function(e,a){return e?n(e):(_.ftruncate(a,t,function(e){C.close(a,function(t){n(e||t)})}),void 0)}),void 0)},C.truncateSync=function(e,t){if("number"==typeof e)return C.ftruncateSync(e,t);t===void 0&&(t=0);var n=C.openSync(e,"w");try{var a=C.ftruncateSync(n,t)}finally{C.closeSync(n)}return a},C.ftruncate=function(e,t,n){"function"==typeof t?(n=t,t=0):t===void 0&&(t=0),_.ftruncate(e,t,s(n))},C.ftruncateSync=function(e,t){return t===void 0&&(t=0),_.ftruncate(e,t)},C.rmdir=function(e,t){t=s(t),r(e,t)&&_.rmdir(L._makeLong(e),t)},C.rmdirSync=function(e){return r(e),_.rmdir(L._makeLong(e))},C.fdatasync=function(e,t){_.fdatasync(e,s(t))},C.fdatasyncSync=function(e){return _.fdatasync(e)},C.fsync=function(e,t){_.fsync(e,s(t))},C.fsyncSync=function(e){return _.fsync(e)},C.mkdir=function(e,t,n){"function"==typeof t&&(n=t),n=s(n),r(e,n)&&_.mkdir(L._makeLong(e),l(t,511),n)},C.mkdirSync=function(e,t){return r(e),_.mkdir(L._makeLong(e),l(t,511))},C.sendfile=function(e,t,n,a,i){_.sendfile(e,t,n,a,s(i))},C.sendfileSync=function(e,t,n,a){return _.sendfile(e,t,n,a)},C.readdir=function(e,t){t=s(t),r(e,t)&&_.readdir(L._makeLong(e),t)},C.readdirSync=function(e){return r(e),_.readdir(L._makeLong(e))},C.fstat=function(e,t){_.fstat(e,s(t))},C.lstat=function(e,t){t=s(t),r(e,t)&&_.lstat(L._makeLong(e),t)},C.stat=function(e,t){t=s(t),r(e,t)&&_.stat(L._makeLong(e),t)},C.fstatSync=function(e){return _.fstat(e)},C.lstatSync=function(e){return r(e),_.lstat(L._makeLong(e))},C.statSync=function(e){return r(e),_.stat(L._makeLong(e))},C.readlink=function(e,t){t=s(t),r(e,t)&&_.readlink(L._makeLong(e),t)},C.readlinkSync=function(e){return r(e),_.readlink(L._makeLong(e))},C.symlink=function(e,t,n,a){var i="string"==typeof n?n:null,a=s(arguments[arguments.length-1]);r(e,a)&&r(t,a)&&_.symlink(c(e,i),L._makeLong(t),i,a)},C.symlinkSync=function(e,t,n){return n="string"==typeof n?n:null,r(e),r(t),_.symlink(c(e,n),L._makeLong(t),n)},C.link=function(e,t,n){n=s(n),r(e,n)&&r(t,n)&&_.link(L._makeLong(e),L._makeLong(t),n)},C.linkSync=function(e,t){return r(e),r(t),_.link(L._makeLong(e),L._makeLong(t))},C.unlink=function(e,t){t=s(t),r(e,t)&&_.unlink(L._makeLong(e),t)},C.unlinkSync=function(e){return r(e),_.unlink(L._makeLong(e))},C.fchmod=function(e,t,n){_.fchmod(e,l(t),s(n))},C.fchmodSync=function(e,t){return _.fchmod(e,l(t))},x.hasOwnProperty("O_SYMLINK")&&(C.lchmod=function(e,t,n){n=a(n),C.open(e,x.O_WRONLY|x.O_SYMLINK,function(e,a){return e?(n(e),void 0):(C.fchmod(a,t,function(e){C.close(a,function(t){n(e||t)})}),void 0)})},C.lchmodSync=function(e,t){var n,a,s=C.openSync(e,x.O_WRONLY|x.O_SYMLINK);try{var i=C.fchmodSync(s,t)}catch(r){n=r}try{C.closeSync(s)}catch(r){a=r}if(n||a)throw n||a;return i}),C.chmod=function(e,t,n){n=s(n),r(e,n)&&_.chmod(L._makeLong(e),l(t),n)},C.chmodSync=function(e,t){return r(e),_.chmod(L._makeLong(e),l(t))},x.hasOwnProperty("O_SYMLINK")&&(C.lchown=function(e,t,n,s){s=a(s),C.open(e,x.O_WRONLY|x.O_SYMLINK,function(e,a){return e?(s(e),void 0):(C.fchown(a,t,n,s),void 0)})},C.lchownSync=function(e,t,n){var a=C.openSync(e,x.O_WRONLY|x.O_SYMLINK);return C.fchownSync(a,t,n)}),C.fchown=function(e,t,n,a){_.fchown(e,t,n,s(a))},C.fchownSync=function(e,t,n){return _.fchown(e,t,n)},C.chown=function(e,t,n,a){a=s(a),r(e,a)&&_.chown(L._makeLong(e),t,n,a)},C.chownSync=function(e,t,n){return r(e),_.chown(L._makeLong(e),t,n)},C._toUnixTimestamp=p,C.utimes=function(e,t,n,a){a=s(a),r(e,a)&&_.utimes(L._makeLong(e),p(t),p(n),a)},C.utimesSync=function(e,t,n){r(e),t=p(t),n=p(n),_.utimes(L._makeLong(e),t,n)},C.futimes=function(e,t,n,a){t=p(t),n=p(n),_.futimes(e,t,n,s(a))},C.futimesSync=function(e,t,n){t=p(t),n=p(n),_.futimes(e,t,n)},C.writeFile=function(e,t,n,s){var r="string"==typeof n?n:"utf8";i(r),s=a(arguments[arguments.length-1]),C.open(e,"w",438,function(e,n){if(e)s&&s(e);else{var a=Buffer.isBuffer(t)?t:new Buffer(""+t,r);h(n,a,0,a.length,0,s)}})},C.writeFileSync=function(e,t,n){i(n);var a=C.openSync(e,"w");Buffer.isBuffer(t)||(t=new Buffer(""+t,n||"utf8"));var s=0,r=t.length;try{for(;r>s;)s+=C.writeSync(a,t,s,r-s,s)}finally{C.closeSync(a)}},C.appendFile=function(e,t,n,s){var r="string"==typeof n?n:"utf8";i(r),s=a(arguments[arguments.length-1]),C.open(e,"a",438,function(e,n){if(e)return s(e);var a=Buffer.isBuffer(t)?t:new Buffer(""+t,r);h(n,a,0,a.length,null,s)})},C.appendFileSync=function(e,t,n){i(n);var a=C.openSync(e,"a");Buffer.isBuffer(t)||(t=new Buffer(""+t,n||"utf8"));var s=0,r=null,o=t.length;try{for(;o>s;)s+=C.writeSync(a,t,s,o-s,r),r+=s}finally{C.closeSync(a)}},w.inherits(d,z),d.prototype.start=function(e,t){r(e);var n=this._handle.start(L._makeLong(e),t);if(n)throw this._handle.close(),u(errno,"watch")},d.prototype.close=function(){this._handle.close()},C.watch=function(e){r(e);var t,n,a;return"object"==typeof arguments[1]?(n=arguments[1],a=arguments[2]):(n={},a=arguments[1]),void 0===n.persistent&&(n.persistent=!0),t=new d,t.start(e,n.persistent),a&&t.addListener("change",a),t},w.inherits(g,z),g.prototype.start=function(e,t,n){r(e),this._handle.start(L._makeLong(e),t,n)},g.prototype.stop=function(){this._handle.stop()};var F={};if(C.watchFile=function(e){r(e);var t,n,a={interval:5007,persistent:!0};if("object"==typeof arguments[1]?(a=w._extend(a,arguments[1]),n=arguments[2]):n=arguments[1],!n)throw Error("watchFile requires a listener function");return m(e)?t=F[e]:(t=F[e]=new g,t.start(e,a.persistent,a.interval)),t.addListener("change",n),t},C.unwatchFile=function(e,t){if(r(e),m(e)){var n=F[e];"function"==typeof t?n.removeListener("change",t):n.removeAllListeners("change"),0===n.listeners("change").length&&(n.stop(),F[e]=void 0)}},L.normalize,R)var W=/(.*?)(?:[\/\\]+|$)/g;else var W=/(.*?)(?:[\/]+|$)/g;if(R)var H=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;else var H=/^[\/]*/;C.realpathSync=function(e,t){function n(){var t=H.exec(e);a=t[0].length,s=t[0],i=t[0],r="",R&&!c[i]&&(C.lstatSync(i),c[i]=!0)}if(e=L.resolve(e),t&&Object.prototype.hasOwnProperty.call(t,e))return t[e];var a,s,i,r,o=e,l={},c={};for(n();e.length>a;){W.lastIndex=a;var p=W.exec(e);if(r=s,s+=p[0],i=r+p[1],a=W.lastIndex,!(c[i]||t&&t[i]===i)){var h;if(t&&Object.prototype.hasOwnProperty.call(t,i))h=t[i];else{var u=C.lstatSync(i);if(!u.isSymbolicLink()){c[i]=!0,t&&(t[i]=i);continue}var d=null;if(!R){var g=u.dev.toString(32)+":"+u.ino.toString(32);l.hasOwnProperty(g)&&(d=l[g])}null===d&&(C.statSync(i),d=C.readlinkSync(i)),h=L.resolve(r,d),t&&(t[i]=h),R||(l[g]=d)}e=L.resolve(h,e.slice(a)),n()}}return t&&(t[o]=e),e},C.realpath=function(e,t,n){function s(){var t=H.exec(e);c=t[0].length,p=t[0],h=t[0],u="",R&&!m[h]?C.lstat(h,function(e){return e?n(e):(m[h]=!0,i(),void 0)}):process.nextTick(i)}function i(){if(c>=e.length)return t&&(t[d]=e),n(null,e);W.lastIndex=c;var a=W.exec(e);return u=p,p+=a[0],h=u+a[1],c=W.lastIndex,m[h]||t&&t[h]===h?process.nextTick(i):t&&Object.prototype.hasOwnProperty.call(t,h)?l(t[h]):C.lstat(h,r)}function r(e,a){if(e)return n(e);if(!a.isSymbolicLink())return m[h]=!0,t&&(t[h]=h),process.nextTick(i);if(!R){var s=a.dev.toString(32)+":"+a.ino.toString(32);if(g.hasOwnProperty(s))return o(null,g[s],h)}C.stat(h,function(e){return e?n(e):(C.readlink(h,function(e,t){R||(g[s]=t),o(e,t)}),void 0)})}function o(e,a,s){if(e)return n(e);var i=L.resolve(u,a);t&&(t[s]=i),l(i)}function l(t){e=L.resolve(t,e.slice(c)),s()}if("function"!=typeof n&&(n=a(t),t=null),e=L.resolve(e),t&&Object.prototype.hasOwnProperty.call(t,e))return process.nextTick(n.bind(null,null,t[e]));var c,p,h,u,d=e,g={},m={};s()};var U;C.createReadStream=function(e,t){return new v(e,t)},w.inherits(v,S),C.ReadStream=v,C.FileReadStream=C.ReadStream,v.prototype.open=function(){var e=this;C.open(this.path,this.flags,this.mode,function(t,n){return t?(e.destroy(),e.emit("error",t),void 0):(e.fd=n,e.emit("open",n),e.read(),void 0)})},v.prototype._read=function(e,t){function n(e,n){if(e)return r.destroy(),t(e);var s=null;n>0&&(s=a.slice(i,i+n)),t(null,s)}if("number"!=typeof this.fd)return this.once("open",function(){this._read(e,t)});if(!this.destroyed){(!U||E>U.length-U.used)&&(U=null,f());var a=U,s=Math.min(U.length-U.used,e),i=U.used;if(void 0!==this.pos&&(s=Math.min(this.end-this.pos+1,s)),0>=s)return t();var r=this;C.read(this.fd,U,U.used,s,this.pos,n),void 0!==this.pos&&(this.pos+=s),U.used+=s}},v.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,"number"==typeof this.fd&&this.close())},v.prototype.close=function(e){function t(){C.close(n.fd,function(e){e?n.emit("error",e):n.emit("close")})}if(e&&this.once("close",e),this.closed||"number"!=typeof this.fd)return"number"!=typeof this.fd&&this.once("open",t),process.nextTick(this.emit.bind(this,"close"));this.closed=!0;var n=this;t()},C.createWriteStream=function(e,t){return new y(e,t)},w.inherits(y,k),C.WriteStream=y,C.FileWriteStream=C.WriteStream,y.prototype.open=function(){C.open(this.path,this.flags,this.mode,function(e,t){return e?(this.destroy(),this.emit("error",e),void 0):(this.fd=t,this.emit("open",t),void 0)}.bind(this))},y.prototype._write=function(e,t){return Buffer.isBuffer(e)?"number"!=typeof this.fd?this.once("open",this._write.bind(this,e,t)):(C.write(this.fd,e,0,e.length,this.pos,function(e,n){return e?(this.destroy(),t(e)):(this.bytesWritten+=n,t(),void 0)}.bind(this)),void 0!==this.pos&&(this.pos+=e.length),void 0):this.emit("error",Error("Invalid data"))},y.prototype.destroy=v.prototype.destroy,y.prototype.close=v.prototype.close,y.prototype.destroySoon=y.prototype.end,w.inherits(b,M),C.SyncWriteStream=b,b.prototype.write=function(e,t,n){var a,s;if(t)if("string"==typeof t)a=t,s=n;else{if("function"!=typeof t)throw Error("bad arg");s=t}return i(a),"string"==typeof e&&(e=new Buffer(e,a)),C.writeSync(this.fd,e,0,e.length),s&&process.nextTick(s),!0},b.prototype.end=function(e,t,n){e&&this.write(e,t,n),this.destroy()},b.prototype.destroy=function(){return C.closeSync(this.fd),this.fd=null,this.emit("close"),!0},b.prototype.destroySoon=b.prototype.destroy}});
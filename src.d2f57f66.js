parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
!function(){var t=function(t){var n;t.textContent=function(t){if(t>0){var n=t/1e3,e=n/60,r=e/60,a=String(Math.floor(n%60)).padStart(2,0),o=String(Math.floor(e%60)).padStart(2,0),c=String(Math.floor(r)).padStart(2,0);return"".concat(c,"h:").concat(o,"m:").concat(a,"s")}return"Sprawdźmy go!"}((n=new Date,new Date(2019,6,27,0,0,0,0)-n))};$timeElement=document.querySelector(".timer"),setInterval(function(){t($timeElement)},1e3)}();
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.d2f57f66.js.map
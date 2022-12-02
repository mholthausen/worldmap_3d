define(["./RuntimeError-06c93819","./defaultValue-0a909f67","./createTaskProcessorWorker"],(function(e,t,n){"use strict";function i(t,n){if(i.passThroughDataForTesting)return n;const r=t.byteLength;if(0===r||r%4!=0)throw new e.RuntimeError("The length of key must be greater than 0 and a multiple of 4.");const a=new DataView(n),o=a.getUint32(0,!0);if(1953029805===o||2917034100===o)return n;const s=new DataView(t);let l=0;const c=n.byteLength,d=c-c%8,f=r;let h,u=8;for(;l<d;)for(u=(u+8)%24,h=u;l<d&&h<f;)a.setUint32(l,a.getUint32(l,!0)^s.getUint32(h,!0),!0),a.setUint32(l+4,a.getUint32(l+4,!0)^s.getUint32(h+4,!0),!0),l+=8,h+=24;if(l<c)for(h>=f&&(u=(u+8)%24,h=u);l<c;)a.setUint8(l,a.getUint8(l)^s.getUint8(h)),l++,h++}function r(e,t){return 0!=(e&t)}i.passThroughDataForTesting=!1;const a=[1,2,4,8];function o(e,t,n,i,r,a){this._bits=e,this.cnodeVersion=t,this.imageryVersion=n,this.terrainVersion=i,this.imageryProvider=r,this.terrainProvider=a,this.ancestorHasTerrain=!1,this.terrainState=void 0}o.clone=function(e,n){return t.defined(n)?(n._bits=e._bits,n.cnodeVersion=e.cnodeVersion,n.imageryVersion=e.imageryVersion,n.terrainVersion=e.terrainVersion,n.imageryProvider=e.imageryProvider,n.terrainProvider=e.terrainProvider):n=new o(e._bits,e.cnodeVersion,e.imageryVersion,e.terrainVersion,e.imageryProvider,e.terrainProvider),n.ancestorHasTerrain=e.ancestorHasTerrain,n.terrainState=e.terrainState,n},o.prototype.setParent=function(e){this.ancestorHasTerrain=e.ancestorHasTerrain||this.hasTerrain()},o.prototype.hasSubtree=function(){return r(this._bits,16)},o.prototype.hasImagery=function(){return r(this._bits,64)},o.prototype.hasTerrain=function(){return r(this._bits,128)},o.prototype.hasChildren=function(){return r(this._bits,15)},o.prototype.hasChild=function(e){return r(this._bits,a[e])},o.prototype.getChildBitmask=function(){return 15&this._bits};var s={},l={};const c=new Uint32Array((()=>{let e,t=[];for(var n=0;n<256;n++){e=n;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t})()),d=16209,f=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),h=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),u=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),w=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var b={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const m=(e,t,n,i)=>{let r=65535&e|0,a=e>>>16&65535|0,o=0;for(;0!==n;){o=n>2e3?2e3:n,n-=o;do{r=r+t[i++]|0,a=a+r|0}while(--o);r%=65521,a%=65521}return r|a<<16|0},g=(e,t,n,i)=>{const r=c,a=i+n;e^=-1;for(let n=i;n<a;n++)e=e>>>8^r[255&(e^t[n])];return-1^e},k=function(e,t){let n,i,r,a,o,s,l,c,f,h,u,w,b,m,g,k,_,p,y,v,E,x,R,A;const T=e.state;n=e.next_in,R=e.input,i=n+(e.avail_in-5),r=e.next_out,A=e.output,a=r-(t-e.avail_out),o=r+(e.avail_out-257),s=T.dmax,l=T.wsize,c=T.whave,f=T.wnext,h=T.window,u=T.hold,w=T.bits,b=T.lencode,m=T.distcode,g=(1<<T.lenbits)-1,k=(1<<T.distbits)-1;e:do{w<15&&(u+=R[n++]<<w,w+=8,u+=R[n++]<<w,w+=8),_=b[u&g];t:for(;;){if(p=_>>>24,u>>>=p,w-=p,p=_>>>16&255,0===p)A[r++]=65535&_;else{if(!(16&p)){if(0==(64&p)){_=b[(65535&_)+(u&(1<<p)-1)];continue t}if(32&p){T.mode=16191;break e}e.msg="invalid literal/length code",T.mode=d;break e}y=65535&_,p&=15,p&&(w<p&&(u+=R[n++]<<w,w+=8),y+=u&(1<<p)-1,u>>>=p,w-=p),w<15&&(u+=R[n++]<<w,w+=8,u+=R[n++]<<w,w+=8),_=m[u&k];n:for(;;){if(p=_>>>24,u>>>=p,w-=p,p=_>>>16&255,!(16&p)){if(0==(64&p)){_=m[(65535&_)+(u&(1<<p)-1)];continue n}e.msg="invalid distance code",T.mode=d;break e}if(v=65535&_,p&=15,w<p&&(u+=R[n++]<<w,w+=8,w<p&&(u+=R[n++]<<w,w+=8)),v+=u&(1<<p)-1,v>s){e.msg="invalid distance too far back",T.mode=d;break e}if(u>>>=p,w-=p,p=r-a,v>p){if(p=v-p,p>c&&T.sane){e.msg="invalid distance too far back",T.mode=d;break e}if(E=0,x=h,0===f){if(E+=l-p,p<y){y-=p;do{A[r++]=h[E++]}while(--p);E=r-v,x=A}}else if(f<p){if(E+=l+f-p,p-=f,p<y){y-=p;do{A[r++]=h[E++]}while(--p);if(E=0,f<y){p=f,y-=p;do{A[r++]=h[E++]}while(--p);E=r-v,x=A}}}else if(E+=f-p,p<y){y-=p;do{A[r++]=h[E++]}while(--p);E=r-v,x=A}for(;y>2;)A[r++]=x[E++],A[r++]=x[E++],A[r++]=x[E++],y-=3;y&&(A[r++]=x[E++],y>1&&(A[r++]=x[E++]))}else{E=r-v;do{A[r++]=A[E++],A[r++]=A[E++],A[r++]=A[E++],y-=3}while(y>2);y&&(A[r++]=A[E++],y>1&&(A[r++]=A[E++]))}break}}break}}while(n<i&&r<o);y=w>>3,n-=y,w-=y<<3,u&=(1<<w)-1,e.next_in=n,e.next_out=r,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=r<o?o-r+257:257-(r-o),T.hold=u,T.bits=w},_=(e,t,n,i,r,a,o,s)=>{const l=s.bits;let c,d,b,m,g,k,_=0,p=0,y=0,v=0,E=0,x=0,R=0,A=0,T=0,U=0,S=null;const Z=new Uint16Array(16),D=new Uint16Array(16);let I,O,B,N=null;for(_=0;_<=15;_++)Z[_]=0;for(p=0;p<i;p++)Z[t[n+p]]++;for(E=l,v=15;v>=1&&0===Z[v];v--);if(E>v&&(E=v),0===v)return r[a++]=20971520,r[a++]=20971520,s.bits=1,0;for(y=1;y<v&&0===Z[y];y++);for(E<y&&(E=y),A=1,_=1;_<=15;_++)if(A<<=1,A-=Z[_],A<0)return-1;if(A>0&&(0===e||1!==v))return-1;for(D[1]=0,_=1;_<15;_++)D[_+1]=D[_]+Z[_];for(p=0;p<i;p++)0!==t[n+p]&&(o[D[t[n+p]]++]=p);if(0===e?(S=N=o,k=20):1===e?(S=f,N=h,k=257):(S=u,N=w,k=0),U=0,p=0,_=y,g=a,x=E,R=0,b=-1,T=1<<E,m=T-1,1===e&&T>852||2===e&&T>592)return 1;for(;;){I=_-R,o[p]+1<k?(O=0,B=o[p]):o[p]>=k?(O=N[o[p]-k],B=S[o[p]-k]):(O=96,B=0),c=1<<_-R,d=1<<x,y=d;do{d-=c,r[g+(U>>R)+d]=I<<24|O<<16|B|0}while(0!==d);for(c=1<<_-1;U&c;)c>>=1;if(0!==c?(U&=c-1,U+=c):U=0,p++,0==--Z[_]){if(_===v)break;_=t[n+o[p]]}if(_>E&&(U&m)!==b){for(0===R&&(R=E),g+=y,x=_-R,A=1<<x;x+R<v&&(A-=Z[x+R],!(A<=0));)x++,A<<=1;if(T+=1<<x,1===e&&T>852||2===e&&T>592)return 1;b=U&m,r[b]=E<<24|x<<16|g-a|0}}return 0!==U&&(r[g+U]=_-R<<24|64<<16|0),s.bits=E,0},{Z_FINISH:p,Z_BLOCK:y,Z_TREES:v,Z_OK:E,Z_STREAM_END:x,Z_NEED_DICT:R,Z_STREAM_ERROR:A,Z_DATA_ERROR:T,Z_MEM_ERROR:U,Z_BUF_ERROR:S,Z_DEFLATED:Z}=b,D=16180,I=16190,O=16191,B=16192,N=16194,C=16199,M=16200,L=16206,F=16209,P=e=>(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24);function z(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const V=e=>{if(!e)return 1;const t=e.state;return!t||t.strm!==e||t.mode<D||t.mode>16211?1:0},H=e=>{if(V(e))return A;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=D,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,E},j=e=>{if(V(e))return A;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,H(e)},K=(e,t)=>{let n;if(V(e))return A;const i=e.state;return t<0?(n=0,t=-t):(n=5+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?A:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=n,i.wbits=t,j(e))},Y=(e,t)=>{if(!e)return A;const n=new z;e.state=n,n.strm=e,n.window=null,n.mode=D;const i=K(e,t);return i!==E&&(e.state=null),i};let G,Q,W=!0;const X=e=>{if(W){G=new Int32Array(512),Q=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(_(1,e.lens,0,288,G,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;_(2,e.lens,0,32,Q,0,e.work,{bits:5}),W=!1}e.lencode=G,e.lenbits=9,e.distcode=Q,e.distbits=5},q=(e,t,n,i)=>{let r;const a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Uint8Array(a.wsize)),i>=a.wsize?(a.window.set(t.subarray(n-a.wsize,n),0),a.wnext=0,a.whave=a.wsize):(r=a.wsize-a.wnext,r>i&&(r=i),a.window.set(t.subarray(n-i,n-i+r),a.wnext),(i-=r)?(a.window.set(t.subarray(n-i,n),0),a.wnext=i,a.whave=a.wsize):(a.wnext+=r,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=r))),0};l.inflateReset=j,l.inflateReset2=K,l.inflateResetKeep=H,l.inflateInit=e=>Y(e,15),l.inflateInit2=Y,l.inflate=(e,t)=>{let n,i,r,a,o,s,l,c,d,f,h,u,w,b,z,H,j,K,Y,G,Q,W,J=0;const $=new Uint8Array(4);let ee,te;const ne=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(V(e)||!e.output||!e.input&&0!==e.avail_in)return A;n=e.state,n.mode===O&&(n.mode=B),o=e.next_out,r=e.output,l=e.avail_out,a=e.next_in,i=e.input,s=e.avail_in,c=n.hold,d=n.bits,f=s,h=l,W=E;e:for(;;)switch(n.mode){case D:if(0===n.wrap){n.mode=B;break}for(;d<16;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(2&n.wrap&&35615===c){0===n.wbits&&(n.wbits=15),n.check=0,$[0]=255&c,$[1]=c>>>8&255,n.check=g(n.check,$,2,0),c=0,d=0,n.mode=16181;break}if(n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",n.mode=F;break}if((15&c)!==Z){e.msg="unknown compression method",n.mode=F;break}if(c>>>=4,d-=4,Q=8+(15&c),0===n.wbits&&(n.wbits=Q),Q>15||Q>n.wbits){e.msg="invalid window size",n.mode=F;break}n.dmax=1<<n.wbits,n.flags=0,e.adler=n.check=1,n.mode=512&c?16189:O,c=0,d=0;break;case 16181:for(;d<16;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(n.flags=c,(255&n.flags)!==Z){e.msg="unknown compression method",n.mode=F;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=F;break}n.head&&(n.head.text=c>>8&1),512&n.flags&&4&n.wrap&&($[0]=255&c,$[1]=c>>>8&255,n.check=g(n.check,$,2,0)),c=0,d=0,n.mode=16182;case 16182:for(;d<32;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}n.head&&(n.head.time=c),512&n.flags&&4&n.wrap&&($[0]=255&c,$[1]=c>>>8&255,$[2]=c>>>16&255,$[3]=c>>>24&255,n.check=g(n.check,$,4,0)),c=0,d=0,n.mode=16183;case 16183:for(;d<16;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}n.head&&(n.head.xflags=255&c,n.head.os=c>>8),512&n.flags&&4&n.wrap&&($[0]=255&c,$[1]=c>>>8&255,n.check=g(n.check,$,2,0)),c=0,d=0,n.mode=16184;case 16184:if(1024&n.flags){for(;d<16;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}n.length=c,n.head&&(n.head.extra_len=c),512&n.flags&&4&n.wrap&&($[0]=255&c,$[1]=c>>>8&255,n.check=g(n.check,$,2,0)),c=0,d=0}else n.head&&(n.head.extra=null);n.mode=16185;case 16185:if(1024&n.flags&&(u=n.length,u>s&&(u=s),u&&(n.head&&(Q=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Uint8Array(n.head.extra_len)),n.head.extra.set(i.subarray(a,a+u),Q)),512&n.flags&&4&n.wrap&&(n.check=g(n.check,i,u,a)),s-=u,a+=u,n.length-=u),n.length))break e;n.length=0,n.mode=16186;case 16186:if(2048&n.flags){if(0===s)break e;u=0;do{Q=i[a+u++],n.head&&Q&&n.length<65536&&(n.head.name+=String.fromCharCode(Q))}while(Q&&u<s);if(512&n.flags&&4&n.wrap&&(n.check=g(n.check,i,u,a)),s-=u,a+=u,Q)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=16187;case 16187:if(4096&n.flags){if(0===s)break e;u=0;do{Q=i[a+u++],n.head&&Q&&n.length<65536&&(n.head.comment+=String.fromCharCode(Q))}while(Q&&u<s);if(512&n.flags&&4&n.wrap&&(n.check=g(n.check,i,u,a)),s-=u,a+=u,Q)break e}else n.head&&(n.head.comment=null);n.mode=16188;case 16188:if(512&n.flags){for(;d<16;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(4&n.wrap&&c!==(65535&n.check)){e.msg="header crc mismatch",n.mode=F;break}c=0,d=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=O;break;case 16189:for(;d<32;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}e.adler=n.check=P(c),c=0,d=0,n.mode=I;case I:if(0===n.havedict)return e.next_out=o,e.avail_out=l,e.next_in=a,e.avail_in=s,n.hold=c,n.bits=d,R;e.adler=n.check=1,n.mode=O;case O:if(t===y||t===v)break e;case B:if(n.last){c>>>=7&d,d-=7&d,n.mode=L;break}for(;d<3;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}switch(n.last=1&c,c>>>=1,d-=1,3&c){case 0:n.mode=16193;break;case 1:if(X(n),n.mode=C,t===v){c>>>=2,d-=2;break e}break;case 2:n.mode=16196;break;case 3:e.msg="invalid block type",n.mode=F}c>>>=2,d-=2;break;case 16193:for(c>>>=7&d,d-=7&d;d<32;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if((65535&c)!=(c>>>16^65535)){e.msg="invalid stored block lengths",n.mode=F;break}if(n.length=65535&c,c=0,d=0,n.mode=N,t===v)break e;case N:n.mode=16195;case 16195:if(u=n.length,u){if(u>s&&(u=s),u>l&&(u=l),0===u)break e;r.set(i.subarray(a,a+u),o),s-=u,a+=u,l-=u,o+=u,n.length-=u;break}n.mode=O;break;case 16196:for(;d<14;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(n.nlen=257+(31&c),c>>>=5,d-=5,n.ndist=1+(31&c),c>>>=5,d-=5,n.ncode=4+(15&c),c>>>=4,d-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=F;break}n.have=0,n.mode=16197;case 16197:for(;n.have<n.ncode;){for(;d<3;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}n.lens[ne[n.have++]]=7&c,c>>>=3,d-=3}for(;n.have<19;)n.lens[ne[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,ee={bits:n.lenbits},W=_(0,n.lens,0,19,n.lencode,0,n.work,ee),n.lenbits=ee.bits,W){e.msg="invalid code lengths set",n.mode=F;break}n.have=0,n.mode=16198;case 16198:for(;n.have<n.nlen+n.ndist;){for(;J=n.lencode[c&(1<<n.lenbits)-1],z=J>>>24,H=J>>>16&255,j=65535&J,!(z<=d);){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(j<16)c>>>=z,d-=z,n.lens[n.have++]=j;else{if(16===j){for(te=z+2;d<te;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(c>>>=z,d-=z,0===n.have){e.msg="invalid bit length repeat",n.mode=F;break}Q=n.lens[n.have-1],u=3+(3&c),c>>>=2,d-=2}else if(17===j){for(te=z+3;d<te;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}c>>>=z,d-=z,Q=0,u=3+(7&c),c>>>=3,d-=3}else{for(te=z+7;d<te;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}c>>>=z,d-=z,Q=0,u=11+(127&c),c>>>=7,d-=7}if(n.have+u>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=F;break}for(;u--;)n.lens[n.have++]=Q}}if(n.mode===F)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=F;break}if(n.lenbits=9,ee={bits:n.lenbits},W=_(1,n.lens,0,n.nlen,n.lencode,0,n.work,ee),n.lenbits=ee.bits,W){e.msg="invalid literal/lengths set",n.mode=F;break}if(n.distbits=6,n.distcode=n.distdyn,ee={bits:n.distbits},W=_(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,ee),n.distbits=ee.bits,W){e.msg="invalid distances set",n.mode=F;break}if(n.mode=C,t===v)break e;case C:n.mode=M;case M:if(s>=6&&l>=258){e.next_out=o,e.avail_out=l,e.next_in=a,e.avail_in=s,n.hold=c,n.bits=d,k(e,h),o=e.next_out,r=e.output,l=e.avail_out,a=e.next_in,i=e.input,s=e.avail_in,c=n.hold,d=n.bits,n.mode===O&&(n.back=-1);break}for(n.back=0;J=n.lencode[c&(1<<n.lenbits)-1],z=J>>>24,H=J>>>16&255,j=65535&J,!(z<=d);){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(H&&0==(240&H)){for(K=z,Y=H,G=j;J=n.lencode[G+((c&(1<<K+Y)-1)>>K)],z=J>>>24,H=J>>>16&255,j=65535&J,!(K+z<=d);){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}c>>>=K,d-=K,n.back+=K}if(c>>>=z,d-=z,n.back+=z,n.length=j,0===H){n.mode=16205;break}if(32&H){n.back=-1,n.mode=O;break}if(64&H){e.msg="invalid literal/length code",n.mode=F;break}n.extra=15&H,n.mode=16201;case 16201:if(n.extra){for(te=n.extra;d<te;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}n.length+=c&(1<<n.extra)-1,c>>>=n.extra,d-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=16202;case 16202:for(;J=n.distcode[c&(1<<n.distbits)-1],z=J>>>24,H=J>>>16&255,j=65535&J,!(z<=d);){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(0==(240&H)){for(K=z,Y=H,G=j;J=n.distcode[G+((c&(1<<K+Y)-1)>>K)],z=J>>>24,H=J>>>16&255,j=65535&J,!(K+z<=d);){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}c>>>=K,d-=K,n.back+=K}if(c>>>=z,d-=z,n.back+=z,64&H){e.msg="invalid distance code",n.mode=F;break}n.offset=j,n.extra=15&H,n.mode=16203;case 16203:if(n.extra){for(te=n.extra;d<te;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}n.offset+=c&(1<<n.extra)-1,c>>>=n.extra,d-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=F;break}n.mode=16204;case 16204:if(0===l)break e;if(u=h-l,n.offset>u){if(u=n.offset-u,u>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=F;break}u>n.wnext?(u-=n.wnext,w=n.wsize-u):w=n.wnext-u,u>n.length&&(u=n.length),b=n.window}else b=r,w=o-n.offset,u=n.length;u>l&&(u=l),l-=u,n.length-=u;do{r[o++]=b[w++]}while(--u);0===n.length&&(n.mode=M);break;case 16205:if(0===l)break e;r[o++]=n.length,l--,n.mode=M;break;case L:if(n.wrap){for(;d<32;){if(0===s)break e;s--,c|=i[a++]<<d,d+=8}if(h-=l,e.total_out+=h,n.total+=h,4&n.wrap&&h&&(e.adler=n.check=n.flags?g(n.check,r,h,o-h):m(n.check,r,h,o-h)),h=l,4&n.wrap&&(n.flags?c:P(c))!==n.check){e.msg="incorrect data check",n.mode=F;break}c=0,d=0}n.mode=16207;case 16207:if(n.wrap&&n.flags){for(;d<32;){if(0===s)break e;s--,c+=i[a++]<<d,d+=8}if(4&n.wrap&&c!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=F;break}c=0,d=0}n.mode=16208;case 16208:W=x;break e;case F:W=T;break e;case 16210:return U;default:return A}return e.next_out=o,e.avail_out=l,e.next_in=a,e.avail_in=s,n.hold=c,n.bits=d,(n.wsize||h!==e.avail_out&&n.mode<F&&(n.mode<L||t!==p))&&q(e,e.output,e.next_out,h-e.avail_out),f-=e.avail_in,h-=e.avail_out,e.total_in+=f,e.total_out+=h,n.total+=h,4&n.wrap&&h&&(e.adler=n.check=n.flags?g(n.check,r,h,e.next_out-h):m(n.check,r,h,e.next_out-h)),e.data_type=n.bits+(n.last?64:0)+(n.mode===O?128:0)+(n.mode===C||n.mode===N?256:0),(0===f&&0===h||t===p)&&W===E&&(W=S),W},l.inflateEnd=e=>{if(V(e))return A;let t=e.state;return t.window&&(t.window=null),e.state=null,E},l.inflateGetHeader=(e,t)=>{if(V(e))return A;const n=e.state;return 0==(2&n.wrap)?A:(n.head=t,t.done=!1,E)},l.inflateSetDictionary=(e,t)=>{const n=t.length;let i,r,a;return V(e)?A:(i=e.state,0!==i.wrap&&i.mode!==I?A:i.mode===I&&(r=1,r=m(r,t,n,0),r!==i.check)?T:(a=q(e,t,n,n),a?(i.mode=16210,U):(i.havedict=1,E)))},l.inflateInfo="pako inflate (from Nodeca project)";var J={};const $=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);J.assign=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(const t in n)$(n,t)&&(e[t]=n[t])}}return e},J.flattenChunks=e=>{let t=0;for(let n=0,i=e.length;n<i;n++)t+=e[n].length;const n=new Uint8Array(t);for(let t=0,i=0,r=e.length;t<r;t++){let r=e[t];n.set(r,i),i+=r.length}return n};var ee={};let te=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){te=!1}const ne=new Uint8Array(256);for(let e=0;e<256;e++)ne[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;ne[254]=ne[254]=1,ee.string2buf=e=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(e);let t,n,i,r,a,o=e.length,s=0;for(r=0;r<o;r++)n=e.charCodeAt(r),55296==(64512&n)&&r+1<o&&(i=e.charCodeAt(r+1),56320==(64512&i)&&(n=65536+(n-55296<<10)+(i-56320),r++)),s+=n<128?1:n<2048?2:n<65536?3:4;for(t=new Uint8Array(s),a=0,r=0;a<s;r++)n=e.charCodeAt(r),55296==(64512&n)&&r+1<o&&(i=e.charCodeAt(r+1),56320==(64512&i)&&(n=65536+(n-55296<<10)+(i-56320),r++)),n<128?t[a++]=n:n<2048?(t[a++]=192|n>>>6,t[a++]=128|63&n):n<65536?(t[a++]=224|n>>>12,t[a++]=128|n>>>6&63,t[a++]=128|63&n):(t[a++]=240|n>>>18,t[a++]=128|n>>>12&63,t[a++]=128|n>>>6&63,t[a++]=128|63&n);return t},ee.buf2string=(e,t)=>{const n=t||e.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(e.subarray(0,t));let i,r;const a=new Array(2*n);for(r=0,i=0;i<n;){let t=e[i++];if(t<128){a[r++]=t;continue}let o=ne[t];if(o>4)a[r++]=65533,i+=o-1;else{for(t&=2===o?31:3===o?15:7;o>1&&i<n;)t=t<<6|63&e[i++],o--;o>1?a[r++]=65533:t<65536?a[r++]=t:(t-=65536,a[r++]=55296|t>>10&1023,a[r++]=56320|1023&t)}}return((e,t)=>{if(t<65534&&e.subarray&&te)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let n="";for(let i=0;i<t;i++)n+=String.fromCharCode(e[i]);return n})(a,r)},ee.utf8border=(e,t)=>{(t=t||e.length)>e.length&&(t=e.length);let n=t-1;for(;n>=0&&128==(192&e[n]);)n--;return n<0||0===n?t:n+ne[e[n]]>t?n:t};const ie=l,re=J,ae=ee,oe={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},se=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},le=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},ce=Object.prototype.toString,{Z_NO_FLUSH:de,Z_FINISH:fe,Z_OK:he,Z_STREAM_END:ue,Z_NEED_DICT:we,Z_STREAM_ERROR:be,Z_DATA_ERROR:me,Z_MEM_ERROR:ge}=b;function ke(e){this.options=re.assign({chunkSize:65536,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new se,this.strm.avail_out=0;let n=ie.inflateInit2(this.strm,t.windowBits);if(n!==he)throw new Error(oe[n]);if(this.header=new le,ie.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=ae.string2buf(t.dictionary):"[object ArrayBuffer]"===ce.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(n=ie.inflateSetDictionary(this.strm,t.dictionary),n!==he)))throw new Error(oe[n])}function _e(e,t){const n=new ke(t);if(n.push(e),n.err)throw n.msg||oe[n.err];return n.result}ke.prototype.push=function(e,t){const n=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let a,o,s;if(this.ended)return!1;for(o=t===~~t?t:!0===t?fe:de,"[object ArrayBuffer]"===ce.call(e)?n.input=new Uint8Array(e):n.input=e,n.next_in=0,n.avail_in=n.input.length;;){for(0===n.avail_out&&(n.output=new Uint8Array(i),n.next_out=0,n.avail_out=i),a=ie.inflate(n,o),a===we&&r&&(a=ie.inflateSetDictionary(n,r),a===he?a=ie.inflate(n,o):a===me&&(a=we));n.avail_in>0&&a===ue&&n.state.wrap>0&&0!==e[n.next_in];)ie.inflateReset(n),a=ie.inflate(n,o);switch(a){case be:case me:case we:case ge:return this.onEnd(a),this.ended=!0,!1}if(s=n.avail_out,n.next_out&&(0===n.avail_out||a===ue))if("string"===this.options.to){let e=ae.utf8border(n.output,n.next_out),t=n.next_out-e,r=ae.buf2string(n.output,e);n.next_out=t,n.avail_out=i-t,t&&n.output.set(n.output.subarray(e,e+t),0),this.onData(r)}else this.onData(n.output.length===n.next_out?n.output:n.output.subarray(0,n.next_out));if(a!==he||0!==s){if(a===ue)return a=ie.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(0===n.avail_in)break}}return!0},ke.prototype.onData=function(e){this.chunks.push(e)},ke.prototype.onEnd=function(e){e===he&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=re.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},s.Inflate=ke,s.inflate=_e,s.inflateRaw=function(e,t){return(t=t||{}).raw=!0,_e(e,t)},s.ungzip=_e,s.constants=b;const pe=Uint16Array.BYTES_PER_ELEMENT,ye=Int32Array.BYTES_PER_ELEMENT,ve=Uint32Array.BYTES_PER_ELEMENT,Ee={METADATA:0,TERRAIN:1,DBROOT:2,fromString:function(e){return"Metadata"===e?Ee.METADATA:"Terrain"===e?Ee.TERRAIN:"DbRoot"===e?Ee.DBROOT:void 0}},xe=1953029805;return n((function(t,n){const r=Ee.fromString(t.type);let a=t.buffer;i(t.key,a);const l=function(t){const n=new DataView(t);let i=0;const r=n.getUint32(i,!0);if(i+=ve,r!==xe&&2917034100!==r)throw new e.RuntimeError("Invalid magic");const a=n.getUint32(i,r===xe);i+=ve;const o=new Uint8Array(t,i),l=s.inflate(o);if(l.length!==a)throw new e.RuntimeError("Size of packet doesn't match header");return l}(a);a=l.buffer;const c=l.length;switch(r){case Ee.METADATA:return function(t,n,i){const r=new DataView(t);let a=0;const s=r.getUint32(a,!0);if(a+=ve,32301!==s)throw new e.RuntimeError("Invalid magic");const l=r.getUint32(a,!0);if(a+=ve,1!==l)throw new e.RuntimeError("Invalid data type. Must be 1 for QuadTreePacket");const c=r.getUint32(a,!0);if(a+=ve,2!==c)throw new e.RuntimeError("Invalid QuadTreePacket version. Only version 2 is supported.");const d=r.getInt32(a,!0);a+=ye;const f=r.getInt32(a,!0);if(a+=ye,32!==f)throw new e.RuntimeError("Invalid instance size.");const h=r.getInt32(a,!0);a+=ye;const u=r.getInt32(a,!0);a+=ye;const w=r.getInt32(a,!0);if(a+=ye,h!==d*f+a)throw new e.RuntimeError("Invalid dataBufferOffset");if(h+u+w!==n)throw new e.RuntimeError("Invalid packet offsets");const b=[];for(let e=0;e<d;++e){const e=r.getUint8(a);++a,++a;const t=r.getUint16(a,!0);a+=pe;const n=r.getUint16(a,!0);a+=pe;const i=r.getUint16(a,!0);a+=pe,a+=pe,a+=pe,a+=ye,a+=ye,a+=8;const s=r.getUint8(a++),l=r.getUint8(a++);a+=pe,b.push(new o(e,t,n,i,s,l))}const m=[];let g=0,k=0;const _=b[g++];return""===i?++k:m[i]=_,function e(t,n,i){let r=!1;if(4===i){if(n.hasSubtree())return;r=!0}for(let a=0;a<4;++a){const o=t+a.toString();if(r)m[o]=null;else if(i<4)if(n.hasChild(a)){if(g===d)return void console.log("Incorrect number of instances");const t=b[g++];m[o]=t,e(o,t,i+1)}else m[o]=null}}(i,_,k),m}(a,c,t.quadKey);case Ee.TERRAIN:return function(t,n,i){const r=new DataView(t),a=function(t){for(let i=0;i<4;++i){const i=r.getUint32(t,!0);if(t+=ve,(t+=i)>n)throw new e.RuntimeError("Malformed terrain packet found.")}return t};let o=0;const s=[];for(;s.length<5;){const e=o;o=a(o);const n=t.slice(e,o);i.push(n),s.push(n)}return s}(a,c,n);case Ee.DBROOT:return n.push(a),{buffer:a}}}))}));
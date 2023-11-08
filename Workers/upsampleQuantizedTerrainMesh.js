/*! For license information please see upsampleQuantizedTerrainMesh.js.LICENSE.txt */
import{a as be,b as Ne}from"./chunk-UWTP54MD.js";import{a as Ae}from"./chunk-4M7FKQYC.js";import{a as ue}from"./chunk-EMZN2RVW.js";import{a as ee}from"./chunk-PNRMC4IG.js";import"./chunk-JMG4RN2X.js";import"./chunk-PG5ZS3T4.js";import"./chunk-OH4CN3UY.js";import"./chunk-AAJ456AA.js";import{a as Ve}from"./chunk-JZL634RF.js";import{d as de}from"./chunk-DV7DPSRL.js";import"./chunk-4FFHQQYZ.js";import{c as Se,d as Z}from"./chunk-KCIWEUSR.js";import"./chunk-7XDW3BZW.js";import{a as A,b as Ie,c as Ce}from"./chunk-F33YCXD2.js";import{a as N}from"./chunk-DUBQPPQZ.js";import"./chunk-CG3JQAX7.js";import"./chunk-P3JQY4NV.js";import"./chunk-K36PKEJW.js";import{a as V,b as q}from"./chunk-KD2PMTHD.js";import{e as f}from"./chunk-ZUCO5WNM.js";var ne={clipTriangleAtAxisAlignedThreshold:function(e,t,i,n,s,r){if(!f(e))throw new V("threshold is required.");if(!f(t))throw new V("keepAbove is required.");if(!f(i))throw new V("u0 is required.");if(!f(n))throw new V("u1 is required.");if(!f(s))throw new V("u2 is required.");let h,u,o;f(r)?r.length=0:r=[],t?(h=i<e,u=n<e,o=s<e):(h=i>e,u=n>e,o=s>e);let p,l,d,a,m,c,g=h+u+o;return 1===g?h?(p=(e-i)/(n-i),l=(e-i)/(s-i),r.push(1),r.push(2),1!==l&&(r.push(-1),r.push(0),r.push(2),r.push(l)),1!==p&&(r.push(-1),r.push(0),r.push(1),r.push(p))):u?(d=(e-n)/(s-n),a=(e-n)/(i-n),r.push(2),r.push(0),1!==a&&(r.push(-1),r.push(1),r.push(0),r.push(a)),1!==d&&(r.push(-1),r.push(1),r.push(2),r.push(d))):o&&(m=(e-s)/(i-s),c=(e-s)/(n-s),r.push(0),r.push(1),1!==c&&(r.push(-1),r.push(2),r.push(1),r.push(c)),1!==m&&(r.push(-1),r.push(2),r.push(0),r.push(m))):2===g?h||i===e?u||n===e?!o&&s!==e&&(l=(e-i)/(s-i),d=(e-n)/(s-n),r.push(2),r.push(-1),r.push(0),r.push(2),r.push(l),r.push(-1),r.push(1),r.push(2),r.push(d)):(c=(e-s)/(n-s),p=(e-i)/(n-i),r.push(1),r.push(-1),r.push(2),r.push(1),r.push(c),r.push(-1),r.push(0),r.push(1),r.push(p)):(a=(e-n)/(i-n),m=(e-s)/(i-s),r.push(0),r.push(-1),r.push(1),r.push(0),r.push(a),r.push(-1),r.push(2),r.push(0),r.push(m)):3!==g&&(r.push(0),r.push(1),r.push(2)),r},computeBarycentricCoordinates:function(e,t,i,n,s,r,h,u,o){if(!f(e))throw new V("x is required.");if(!f(t))throw new V("y is required.");if(!f(i))throw new V("x1 is required.");if(!f(n))throw new V("y1 is required.");if(!f(s))throw new V("x2 is required.");if(!f(r))throw new V("y2 is required.");if(!f(h))throw new V("x3 is required.");if(!f(u))throw new V("y3 is required.");let p=i-h,l=h-s,d=r-u,a=n-u,m=1/(d*p+l*a),c=t-u,g=e-h,w=(d*g+l*c)*m,x=(-a*g+p*c)*m,y=1-w-x;return f(o)?(o.x=w,o.y=x,o.z=y,o):new A(w,x,y)},computeLineSegmentLineSegmentIntersection:function(e,t,i,n,s,r,h,u,o){q.typeOf.number("x00",e),q.typeOf.number("y00",t),q.typeOf.number("x01",i),q.typeOf.number("y01",n),q.typeOf.number("x10",s),q.typeOf.number("y10",r),q.typeOf.number("x11",h),q.typeOf.number("y11",u);let p=(u-r)*(i-e)-(h-s)*(n-t);if(0===p)return;let l=((h-s)*(t-r)-(u-r)*(e-s))/p,d=((i-e)*(t-r)-(n-t)*(e-s))/p;return l>=0&&l<=1&&d>=0&&d<=1?(f(o)||(o=new Z),o.x=e+l*(i-e),o.y=t+l*(n-t),o):void 0}},ie=ne,a=32767,z=a/2|0,Me=[],ze=[],Xe=[],te=new Ie,E=new A,Ke=[],We=[],Ye=[],Le=[],_e=[],Je=new A,Qe=new de,Ze=new ue,Ge=new Z,$e=new A;function je(e,t){let i=e.isEastChild,n=e.isNorthChild,s=i?z:0,r=i?a:z,h=n?z:0,u=n?a:z,o=Ke,p=We,f=Ye,l=_e;o.length=0,p.length=0,f.length=0,l.length=0;let d=Le;d.length=0;let c={},g=e.vertices,w=e.indices;w=w.subarray(0,e.indexCountWithoutSkirts);let x,y,V,I,B,v=Ne.clone(e.encoding),S=v.hasVertexNormals,b=0,k=e.vertexCountWithoutSkirts,C=e.minimumHeight,j=e.maximumHeight,q=new Array(k),O=new Array(k),T=new Array(k),K=S?new Array(2*k):void 0;for(y=0,V=0;y<k;++y,V+=2){let e=v.decodeTextureCoordinates(g,y,Ge);if(x=v.decodeHeight(g,y),I=N.clamp(e.x*a|0,0,a),B=N.clamp(e.y*a|0,0,a),T[y]=N.clamp((x-C)/(j-C)*a|0,0,a),I<20&&(I=0),B<20&&(B=0),a-I<20&&(I=a),a-B<20&&(B=a),q[y]=I,O[y]=B,S){let e=v.getOctEncodedNormal(g,y,$e);K[V]=e.x,K[V+1]=e.y}(i&&I>=z||!i&&I<=z)&&(n&&B>=z||!n&&B<=z)&&(c[y]=b,o.push(I),p.push(B),f.push(T[y]),S&&(l.push(K[V]),l.push(K[V+1])),++b)}let R=[];R.push(new m),R.push(new m),R.push(new m);let Z,H,P=[];for(P.push(new m),P.push(new m),P.push(new m),y=0;y<w.length;y+=3){let e=w[y],t=w[y+1],s=w[y+2],r=q[e],h=q[t],u=q[s];R[0].initializeIndexed(q,O,T,K,e),R[1].initializeIndexed(q,O,T,K,t),R[2].initializeIndexed(q,O,T,K,s);let a=ie.clipTriangleAtAxisAlignedThreshold(z,i,r,h,u,Me);Z=0,!(Z>=a.length)&&(Z=P[0].initializeFromClipResult(a,Z,R),!(Z>=a.length)&&(Z=P[1].initializeFromClipResult(a,Z,R),!(Z>=a.length)&&(Z=P[2].initializeFromClipResult(a,Z,R),H=ie.clipTriangleAtAxisAlignedThreshold(z,n,P[0].getV(),P[1].getV(),P[2].getV(),ze),Oe(o,p,f,l,d,c,H,P,S),Z<a.length&&(P[2].clone(P[1]),P[2].initializeFromClipResult(a,Z,R),H=ie.clipTriangleAtAxisAlignedThreshold(z,n,P[0].getV(),P[1].getV(),P[2].getV(),ze),Oe(o,p,f,l,d,c,H,P,S)))))}let U=i?-a:0,F=n?-a:0,M=[],W=[],X=[],Y=[],D=Number.MAX_VALUE,J=-D,Q=Xe;Q.length=0;let L=Ce.clone(e.ellipsoid),G=Se.clone(e.childRectangle),_=G.north,$=G.south,ee=G.east,ne=G.west;for(ee<ne&&(ee+=N.TWO_PI),y=0;y<o.length;++y)I=Math.round(o[y]),I<=s?(M.push(y),I=0):I>=r?(X.push(y),I=a):I=2*I+U,o[y]=I,B=Math.round(p[y]),B<=h?(W.push(y),B=0):B>=u?(Y.push(y),B=a):B=2*B+F,p[y]=B,x=N.lerp(C,j,f[y]/a),x<D&&(D=x),x>J&&(J=x),f[y]=x,te.longitude=N.lerp(ne,ee,I/a),te.latitude=N.lerp($,_,B/a),te.height=x,L.cartographicToCartesian(te,E),Q.push(E.x),Q.push(E.y),Q.push(E.z);let se=de.fromVertices(Q,A.ZERO,3,Qe),re=ue.fromRectangle(G,D,J,L,Ze),he=new be(L).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(se.center,Q,3,se.center,D,Je),oe=J-D,pe=new Uint16Array(o.length+p.length+f.length);for(y=0;y<o.length;++y)pe[y]=o[y];let fe=o.length;for(y=0;y<p.length;++y)pe[fe+y]=p[y];for(fe+=p.length,y=0;y<f.length;++y)pe[fe+y]=a*(f[y]-D)/oe;let le,ae=Ve.createTypedArray(o.length,d);if(S){let e=new Uint8Array(l);t.push(pe.buffer,ae.buffer,e.buffer),le=e.buffer}else t.push(pe.buffer,ae.buffer);return{vertices:pe.buffer,encodedNormals:le,indices:ae.buffer,minimumHeight:D,maximumHeight:J,westIndices:M,southIndices:W,eastIndices:X,northIndices:Y,boundingSphere:se,orientedBoundingBox:re,horizonOcclusionPoint:he}}function m(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}m.prototype.clone=function(e){return f(e)||(e=new m),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},m.prototype.initializeIndexed=function(e,t,i,n,s){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=i,this.normalBuffer=n,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0},m.prototype.initializeFromClipResult=function(e,t,i){let n=t+1;return-1!==e[t]?i[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=i[e[n]],++n,this.second=i[e[n]],++n,this.ratio=e[n],++n),n},m.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},m.prototype.isIndexed=function(){return f(this.index)},m.prototype.getH=function(){return f(this.index)?this.heightBuffer[this.index]:N.lerp(this.first.getH(),this.second.getH(),this.ratio)},m.prototype.getU=function(){return f(this.index)?this.uBuffer[this.index]:N.lerp(this.first.getU(),this.second.getU(),this.ratio)},m.prototype.getV=function(){return f(this.index)?this.vBuffer[this.index]:N.lerp(this.first.getV(),this.second.getV(),this.ratio)};var K=new Z,oe=-1,en=[new A,new A],nn=[new A,new A];function Te(e,t){++oe;let i=en[oe],n=nn[oe];return i=ee.octDecode(e.first.getNormalX(),e.first.getNormalY(),i),n=ee.octDecode(e.second.getNormalX(),e.second.getNormalY(),n),E=A.lerp(i,n,e.ratio,E),A.normalize(E,E),ee.octEncode(E,t),--oe,t}m.prototype.getNormalX=function(){return f(this.index)?this.normalBuffer[2*this.index]:(K=Te(this,K)).x},m.prototype.getNormalY=function(){return f(this.index)?this.normalBuffer[2*this.index+1]:(K=Te(this,K)).y};var S=[];function Oe(e,t,i,n,s,r,h,u,o){if(0===h.length)return;let p=0,l=0;for(;l<h.length;)l=S[p++].initializeFromClipResult(h,l,u);for(let s=0;s<p;++s){let h=S[s];if(h.isIndexed())h.newIndex=r[h.index],h.uBuffer=e,h.vBuffer=t,h.heightBuffer=i,o&&(h.normalBuffer=n);else{let s=h.getKey();if(f(r[s]))h.newIndex=r[s];else{let u=e.length;e.push(h.getU()),t.push(h.getV()),i.push(h.getH()),o&&(n.push(h.getNormalX()),n.push(h.getNormalY())),h.newIndex=u,r[s]=u}}}3===p?(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex)):4===p&&(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex),s.push(S[0].newIndex),s.push(S[2].newIndex),s.push(S[3].newIndex))}S.push(new m),S.push(new m),S.push(new m),S.push(new m);var An=Ae(je);export{An as default};
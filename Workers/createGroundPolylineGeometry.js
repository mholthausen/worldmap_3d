/*! For license information please see createGroundPolylineGeometry.js.LICENSE.txt */
import{a as _e}from"./chunk-EXJ3OQJJ.js";import{a as Z}from"./chunk-CXKSXL5C.js";import{a as _t}from"./chunk-63CO7A5M.js";import{a as Oe}from"./chunk-NXLA2DOI.js";import{a as Le}from"./chunk-2EHQCUJI.js";import{a as te}from"./chunk-EOT3UPEC.js";import{b as Qt}from"./chunk-ZKNXHPHD.js";import{a as jt}from"./chunk-W5ZMPE2M.js";import{c as Ce,d as zt}from"./chunk-YYYI3I6L.js";import{a as Pt,d as U,f as Kt,g as xe,h as Ne}from"./chunk-YIFABOF6.js";import"./chunk-PQVQONHO.js";import{c as G,d as Bt}from"./chunk-KDW4RGIR.js";import{a as vt}from"./chunk-VNDUYYBJ.js";import{a as t,b as u,c as z,d as bt}from"./chunk-V624RX7A.js";import{a as p}from"./chunk-VZ2RFJ3P.js";import"./chunk-RN5GA5QZ.js";import"./chunk-TWC6ISJU.js";import{a as O}from"./chunk-RKPKWH3Z.js";import{a as St,b as et}from"./chunk-BIYNNQRQ.js";import{e as g}from"./chunk-ZLUSVROX.js";function rt(t){t=O(t,O.EMPTY_OBJECT),this._ellipsoid=O(t.ellipsoid,z.WGS84),this._rectangle=O(t.rectangle,G.MAX_VALUE),this._projection=new Pt(this._ellipsoid),this._numberOfLevelZeroTilesX=O(t.numberOfLevelZeroTilesX,2),this._numberOfLevelZeroTilesY=O(t.numberOfLevelZeroTilesY,1)}Object.defineProperties(rt.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},rectangle:{get:function(){return this._rectangle}},projection:{get:function(){return this._projection}}}),rt.prototype.getNumberOfXTilesAtLevel=function(t){return this._numberOfLevelZeroTilesX<<t},rt.prototype.getNumberOfYTilesAtLevel=function(t){return this._numberOfLevelZeroTilesY<<t},rt.prototype.rectangleToNativeRectangle=function(t,e){et.defined("rectangle",t);let n=p.toDegrees(t.west),r=p.toDegrees(t.south),i=p.toDegrees(t.east),a=p.toDegrees(t.north);return g(e)?(e.west=n,e.south=r,e.east=i,e.north=a,e):new G(n,r,i,a)},rt.prototype.tileXYToNativeRectangle=function(t,e,n,r){let i=this.tileXYToRectangle(t,e,n,r);return i.west=p.toDegrees(i.west),i.south=p.toDegrees(i.south),i.east=p.toDegrees(i.east),i.north=p.toDegrees(i.north),i},rt.prototype.tileXYToRectangle=function(t,e,n,r){let i=this._rectangle,a=this.getNumberOfXTilesAtLevel(n),o=this.getNumberOfYTilesAtLevel(n),l=i.width/a,s=t*l+i.west,u=(t+1)*l+i.west,c=i.height/o,p=i.north-e*c,h=i.north-(e+1)*c;return g(r)||(r=new G(s,h,u,p)),r.west=s,r.south=h,r.east=u,r.north=p,r},rt.prototype.positionToTileXY=function(t,e,n){let r=this._rectangle;if(!G.contains(r,t))return;let i=this.getNumberOfXTilesAtLevel(e),a=this.getNumberOfYTilesAtLevel(e),o=r.width/i,l=r.height/a,s=t.longitude;r.east<r.west&&(s+=p.TWO_PI);let u=(s-r.west)/o|0;u>=i&&(u=i-1);let c=(r.north-t.latitude)/l|0;return c>=a&&(c=a-1),g(n)?(n.x=u,n.y=c,n):new Bt(u,c)};var De=rt,Ie=new t,He=new t,ke=new u,ee=new t,hn=new t,ye=new U,pn=new De,Lt=[new u,new u,new u,new u],Ot=new Bt,w={};function Ae(t){u.fromRadians(t.east,t.north,0,Lt[0]),u.fromRadians(t.west,t.north,0,Lt[1]),u.fromRadians(t.east,t.south,0,Lt[2]),u.fromRadians(t.west,t.south,0,Lt[3]);let e,n=0,r=0,i=0,a=0,o=w._terrainHeightsMaxLevel;for(e=0;e<=o;++e){let t=!1;for(let n=0;n<4;++n){let r=Lt[n];if(pn.positionToTileXY(r,e,Ot),0===n)i=Ot.x,a=Ot.y;else if(i!==Ot.x||a!==Ot.y){t=!0;break}}if(t)break;n=i,r=a}if(0!==e)return{x:n,y:r,level:e>o?o:e-1}}w.initialize=function(){let t=w._initPromise;return g(t)||(t=xe.fetchJson(Ne("Assets/approximateTerrainHeights.json")).then((function(t){w._terrainHeights=t})),w._initPromise=t),t},w.getMinimumMaximumHeights=function(e,n){if(et.defined("rectangle",e),!g(w._terrainHeights))throw new St("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");n=O(n,z.WGS84);let r=Ae(e),i=w._defaultMinTerrainHeight,a=w._defaultMaxTerrainHeight;if(g(r)){let o=`${r.level}-${r.x}-${r.y}`,l=w._terrainHeights[o];g(l)&&(i=l[0],a=l[1]),n.cartographicToCartesian(G.northeast(e,ke),Ie),n.cartographicToCartesian(G.southwest(e,ke),He),t.midpoint(He,Ie,ee);let s=n.scaleToGeodeticSurface(ee,hn);if(g(s)){let e=t.distance(ee,s);i=Math.min(i,-e)}else i=w._defaultMinTerrainHeight}return i=Math.max(w._defaultMinTerrainHeight,i),{minimumTerrainHeight:i,maximumTerrainHeight:a}},w.getBoundingSphere=function(t,e){if(et.defined("rectangle",t),!g(w._terrainHeights))throw new St("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");e=O(e,z.WGS84);let n=Ae(t),r=w._defaultMaxTerrainHeight;if(g(n)){let t=`${n.level}-${n.x}-${n.y}`,e=w._terrainHeights[t];g(e)&&(r=e[1])}let i=U.fromRectangle3D(t,e,0);return U.fromRectangle3D(t,e,r,ye),U.union(i,ye,i)},w._terrainHeightsMaxLevel=6,w._defaultMaxTerrainHeight=9e3,w._defaultMinTerrainHeight=-1e5,w._terrainHeights=void 0,w._initPromise=void 0,Object.defineProperties(w,{initialized:{get:function(){return g(w._terrainHeights)}}});var Xt=w,le=[Pt,_e],dn=le.length,Ke=Math.cos(p.toRadians(30)),Me=Math.cos(p.toRadians(150)),Qe=0,tn=1e3;function ct(t){let e=(t=O(t,O.EMPTY_OBJECT)).positions;if(!g(e)||e.length<2)throw new St("At least two positions are required.");if(g(t.arcType)&&t.arcType!==Z.GEODESIC&&t.arcType!==Z.RHUMB)throw new St("Valid options for arcType are ArcType.GEODESIC and ArcType.RHUMB.");this.width=O(t.width,1),this._positions=e,this.granularity=O(t.granularity,9999),this.loop=O(t.loop,!1),this.arcType=O(t.arcType,Z.GEODESIC),this._ellipsoid=z.WGS84,this._projectionIndex=0,this._workerName="createGroundPolylineGeometry",this._scene3DOnly=!1}Object.defineProperties(ct.prototype,{packedLength:{get:function(){return 1+3*this._positions.length+1+1+1+z.packedLength+1+1}}}),ct.setProjectionAndEllipsoid=function(t,e){let n=0;for(let t=0;t<dn;t++)if(e instanceof le[t]){n=t;break}t._projectionIndex=n,t._ellipsoid=e.ellipsoid};var fn=new t,Re=new t,Pe=new t;function se(e,n,r,i,a){let o=P(i,e,0,fn),l=P(i,e,r,Re),s=P(i,n,0,Pe),u=nt(l,o,Re),c=nt(s,o,Pe);return t.cross(c,u,a),t.normalize(a,a)}var mn=new u,gn=new t,un=new t,wn=new t;function ne(e,n,r,i,a,o,l,s,u,c,p){if(0===a)return;let h;o===Z.GEODESIC?h=new Oe(e,n,l):o===Z.RHUMB&&(h=new te(e,n,l));let g=h.surfaceDistance;if(g<a)return;let d=se(e,n,i,l,wn),f=Math.ceil(g/a),w=g/f,m=w,O=f-1,y=s.length;for(let e=0;e<O;e++){let e=h.interpolateUsingSurfaceDistance(m,mn),n=P(l,e,r,gn),a=P(l,e,i,un);t.pack(d,s,y),t.pack(n,u,y),t.pack(a,c,y),p.push(e.latitude),p.push(e.longitude),y+=3,m+=w}}var oe=new u;function P(t,e,n,r){return u.clone(e,oe),oe.height=n,u.toCartesian(oe,t,r)}function nt(e,n,r){return t.subtract(e,n,r),t.normalize(r,r),r}function be(e,n,r,i){return i=nt(e,n,i),i=t.cross(i,r,i),i=t.normalize(i,i),t.cross(r,i,i)}ct.pack=function(e,n,r){et.typeOf.object("value",e),et.defined("array",n);let i=O(r,0),a=e._positions,o=a.length;n[i++]=o;for(let e=0;e<o;++e){let r=a[e];t.pack(r,n,i),i+=3}return n[i++]=e.granularity,n[i++]=e.loop?1:0,n[i++]=e.arcType,z.pack(e._ellipsoid,n,i),i+=z.packedLength,n[i++]=e._projectionIndex,n[i++]=e._scene3DOnly?1:0,n},ct.unpack=function(e,n,r){et.defined("array",e);let i=O(n,0),a=e[i++],o=new Array(a);for(let n=0;n<a;n++)o[n]=t.unpack(e,i),i+=3;let l=e[i++],s=1===e[i++],u=e[i++],c=z.unpack(e,i);i+=z.packedLength;let p=e[i++],h=1===e[i++];return g(r)||(r=new ct({positions:o})),r._positions=o,r.granularity=l,r.loop=s,r.arcType=u,r._ellipsoid=c,r._projectionIndex=p,r._scene3DOnly=h,r};var Sn=new t,Tn=new t,En=new t,en=new t,xn=0,Nn=-1;function ie(e,n,r,i,a){let o=nt(r,n,en),l=be(e,n,o,Sn),s=be(i,n,o,Tn);if(p.equalsEpsilon(t.dot(l,s),Nn,p.EPSILON5))return a=t.cross(o,l,a),t.normalize(a,a);a=t.add(s,l,a),a=t.normalize(a,a);let u=t.cross(o,a,En);return t.dot(s,u)<xn&&(a=t.negate(a,a)),a}var Ut=jt.fromPointNormal(t.ZERO,t.UNIT_Y),Cn=new t,_n=new t,Ln=new t,On=new t,Dn=new t,Yt=new t,Ft=new u,ve=new u,Be=new u;ct.createGeometry=function(e){let n,r,i=!e._scene3DOnly,a=e.loop,o=e._ellipsoid,l=e.granularity,s=e.arcType,c=new le[e._projectionIndex](o),h=Qe,d=tn,f=e._positions,w=f.length;2===w&&(a=!1);let m,O,y,T,_,k,E,L=new te(void 0,void 0,o),b=[f[0]];for(r=0;r<w-1;r++)m=f[r],O=f[r+1],_=Qt.lineSegmentPlane(m,O,Ut,Yt),g(_)&&!t.equalsEpsilon(_,m,p.EPSILON7)&&!t.equalsEpsilon(_,O,p.EPSILON7)&&(e.arcType===Z.GEODESIC?b.push(t.clone(_)):e.arcType===Z.RHUMB&&(E=o.cartesianToCartographic(_,Ft).longitude,y=o.cartesianToCartographic(m,Ft),T=o.cartesianToCartographic(O,ve),L.setEndPoints(y,T),k=L.findIntersectionWithLongitude(E,Be),_=o.cartographicToCartesian(k,Yt),g(_)&&!t.equalsEpsilon(_,m,p.EPSILON7)&&!t.equalsEpsilon(_,O,p.EPSILON7)&&b.push(t.clone(_)))),b.push(O);a&&(m=f[w-1],O=f[0],_=Qt.lineSegmentPlane(m,O,Ut,Yt),g(_)&&!t.equalsEpsilon(_,m,p.EPSILON7)&&!t.equalsEpsilon(_,O,p.EPSILON7)&&(e.arcType===Z.GEODESIC?b.push(t.clone(_)):e.arcType===Z.RHUMB&&(E=o.cartesianToCartographic(_,Ft).longitude,y=o.cartesianToCartographic(m,Ft),T=o.cartesianToCartographic(O,ve),L.setEndPoints(y,T),k=L.findIntersectionWithLongitude(E,Be),_=o.cartographicToCartesian(k,Yt),g(_)&&!t.equalsEpsilon(_,m,p.EPSILON7)&&!t.equalsEpsilon(_,O,p.EPSILON7)&&b.push(t.clone(_)))));let A=b.length,I=new Array(A);for(r=0;r<A;r++){let t=u.fromCartesian(b[r],o);t.height=0,I[r]=t}if(I=Le(I,u.equalsEpsilon),A=I.length,A<2)return;let v=[],S=[],N=[],j=[],z=Cn,D=_n,x=Ln,H=On,M=Dn,C=I[0],R=I[1];for(z=P(o,I[A-1],h,z),H=P(o,R,h,H),D=P(o,C,h,D),x=P(o,C,d,x),M=a?ie(z,D,x,H,M):se(C,R,d,o,M),t.pack(M,S,0),t.pack(D,N,0),t.pack(x,j,0),v.push(C.latitude),v.push(C.longitude),ne(C,R,h,d,l,s,o,S,N,j,v),r=1;r<A-1;++r){z=t.clone(D,z),D=t.clone(H,D);let e=I[r];P(o,e,d,x),P(o,I[r+1],h,H),ie(z,D,x,H,M),n=S.length,t.pack(M,S,n),t.pack(D,N,n),t.pack(x,j,n),v.push(e.latitude),v.push(e.longitude),ne(I[r],I[r+1],h,d,l,s,o,S,N,j,v)}let U=I[A-1],G=I[A-2];if(D=P(o,U,h,D),x=P(o,U,d,x),a){let t=I[0];z=P(o,G,h,z),H=P(o,t,h,H),M=ie(z,D,x,H,M)}else M=se(G,U,d,o,M);if(n=S.length,t.pack(M,S,n),t.pack(D,N,n),t.pack(x,j,n),v.push(U.latitude),v.push(U.longitude),a){for(ne(U,C,h,d,l,s,o,S,N,j,v),n=S.length,r=0;r<3;++r)S[n+r]=S[r],N[n+r]=N[r],j[n+r]=j[r];v.push(C.latitude),v.push(C.longitude)}return Qn(a,c,N,j,S,v,i)};var In=new t,Hn=new bt,kn=new Kt;function ze(e,n,r,i){let a=nt(r,n,In),o=t.dot(a,e);if(o>Ke||o<Me){let t=nt(i,r,en),n=o<Me?p.PI_OVER_TWO:-p.PI_OVER_TWO,a=Kt.fromAxisAngle(t,n,kn),l=bt.fromQuaternion(a,Hn);return bt.multiplyByVector(l,e,e),!0}return!1}var je=new u,yn=new t,Xe=new t;function Dt(e,n,r,i,a){let o=u.toCartesian(n,e._ellipsoid,yn),l=t.add(o,r,Xe),s=!1,c=e._ellipsoid,h=c.cartesianToCartographic(l,je);Math.abs(n.longitude-h.longitude)>p.PI_OVER_TWO&&(s=!0,l=t.subtract(o,r,Xe),h=c.cartesianToCartographic(l,je)),h.height=0;let g=e.project(h,a);return(a=t.subtract(g,i,a)).z=0,a=t.normalize(a,a),s&&t.negate(a,a),a}var An=new t,Ye=new t;function Fe(e,n,r,i,a,o){let l=t.subtract(n,e,An);t.normalize(l,l);let s=r-Qe,u=t.multiplyByScalar(l,s,Ye);t.add(e,u,a);let c=i-tn;u=t.multiplyByScalar(l,c,Ye),t.add(n,u,o)}var Mn=new t;function Gt(e,n){let r=jt.getPointDistance(Ut,e),i=jt.getPointDistance(Ut,n),a=Mn;p.equalsEpsilon(r,0,p.EPSILON2)?(a=nt(n,e,a),t.multiplyByScalar(a,p.EPSILON2,a),t.add(e,a,e)):p.equalsEpsilon(i,0,p.EPSILON2)&&(a=nt(e,n,a),t.multiplyByScalar(a,p.EPSILON2,a),t.add(n,a,n))}function Rn(t,e){let n=Math.abs(t.longitude),r=Math.abs(e.longitude);if(p.equalsEpsilon(n,p.PI,p.EPSILON11)){let r=p.sign(e.longitude);return t.longitude=r*(n-p.EPSILON11),1}if(p.equalsEpsilon(r,p.PI,p.EPSILON11)){let n=p.sign(t.longitude);return e.longitude=n*(r-p.EPSILON11),2}return 0}var nn=new u,on=new u,Ge=new t,re=new t,Ue=new t,We=new t,Pn=new t,qe=new t,bn=[nn,on],vn=new G,Bn=new t,zn=new t,jn=new t,Xn=new t,Yn=new t,Fn=new t,ae=new t,ce=new t,Gn=new t,Un=new t,Wn=new t,Ze=new t,qn=new t,Zn=new t,Vn=new _t,$n=new _t,Ve=new t,Jn=new t,$e=new t,Kn=[new U,new U],rn=[0,2,1,0,3,2,0,7,3,0,4,7,0,5,4,0,1,5,5,7,4,5,6,7,5,2,6,5,1,2,3,6,2,3,7,6],Je=rn.length;function Qn(e,n,r,i,a,o,l){let s,u,c,h,g,d,f=n._ellipsoid,w=r.length/3-1,m=8*w,O=4*m,y=36*w,T=m>65535?new Uint32Array(y):new Uint16Array(y),_=new Float64Array(3*m),P=new Float32Array(O),k=new Float32Array(O),E=new Float32Array(O),L=new Float32Array(O),b=new Float32Array(O);l&&(c=new Float32Array(O),h=new Float32Array(O),g=new Float32Array(O),d=new Float32Array(2*m));let A=o.length/2,I=0,v=nn;v.height=0;let S=on;S.height=0;let N=Ge,j=re;if(l)for(u=0,s=1;s<A;s++)v.latitude=o[u],v.longitude=o[u+1],S.latitude=o[u+2],S.longitude=o[u+3],N=n.project(v,N),j=n.project(S,j),I+=t.distance(N,j),u+=2;let z=i.length/3;j=t.unpack(i,0,j);let D,x=0;for(u=3,s=1;s<z;s++)N=t.clone(j,N),j=t.unpack(i,u,j),x+=t.distance(N,j),u+=3;u=3;let H=0,M=0,C=0,R=0,Y=!1,Z=t.unpack(r,0,We),X=t.unpack(i,0,re),B=t.unpack(a,0,qe);e&&ze(B,t.unpack(r,r.length-6,Ue),Z,X)&&(B=t.negate(B,B));let F=0,q=0,W=0;for(s=0;s<w;s++){let e,s,w,m,O=t.clone(Z,Ue),y=t.clone(X,Ge),T=t.clone(B,Pn);if(Y&&(T=t.negate(T,T)),Z=t.unpack(r,u,We),X=t.unpack(i,u,re),B=t.unpack(a,u,qe),Y=ze(B,O,Z,X),v.latitude=o[H],v.longitude=o[H+1],S.latitude=o[H+2],S.longitude=o[H+3],l){let r=Rn(v,S);e=n.project(v,Yn),s=n.project(S,Fn);let i=nt(s,e,Ve);i.y=Math.abs(i.y),w=ae,m=ce,0===r||t.dot(i,t.UNIT_Y)>Ke?(w=Dt(n,v,T,e,ae),m=Dt(n,S,B,s,ce)):1===r?(m=Dt(n,S,B,s,ce),w.x=0,w.y=p.sign(v.longitude-Math.abs(S.longitude)),w.z=0):(w=Dt(n,v,T,e,ae),m.x=0,m.y=p.sign(v.longitude-S.longitude),m.z=0)}let A=t.distance(y,X),N=_t.fromCartesian(O,Vn),j=t.subtract(Z,O,Gn),z=t.normalize(j,Ze),U=t.subtract(y,O,Un);U=t.normalize(U,U);let V=t.cross(z,U,Ze);V=t.normalize(V,V);let Q=t.cross(U,T,qn);Q=t.normalize(Q,Q);let J=t.subtract(X,Z,Wn);J=t.normalize(J,J);let K=t.cross(B,J,Zn);K=t.normalize(K,K);let $,tt,et,rt=A/x,it=F/x,at=0,ot=0,lt=0;if(l){at=t.distance(e,s),$=_t.fromCartesian(e,$n),tt=t.subtract(s,e,Ve),et=t.normalize(tt,Jn);let n=et.x;et.x=et.y,et.y=-n,ot=at/I,lt=q/I}for(D=0;D<8;D++){let e=R+4*D,n=M+2*D,r=e+3,i=D<4?1:-1,a=2===D||3===D||6===D||7===D?1:-1;t.pack(N.high,P,e),P[r]=j.x,t.pack(N.low,k,e),k[r]=j.y,t.pack(Q,E,e),E[r]=j.z,t.pack(K,L,e),L[r]=rt*i,t.pack(V,b,e);let o=it*a;0===o&&a<0&&(o=9),b[r]=o,l&&(c[e]=$.high.x,c[e+1]=$.high.y,c[e+2]=$.low.x,c[e+3]=$.low.y,g[e]=-w.y,g[e+1]=w.x,g[e+2]=m.y,g[e+3]=-m.x,h[e]=tt.x,h[e+1]=tt.y,h[e+2]=et.x,h[e+3]=et.y,d[n]=ot*i,o=lt*a,0===o&&a<0&&(o=9),d[n+1]=o)}let st=jn,ut=Xn,ct=Bn,pt=zn,ht=G.fromCartographicArray(bn,vn),gt=Xt.getMinimumMaximumHeights(ht,f),dt=gt.minimumTerrainHeight,ft=gt.maximumTerrainHeight;W+=Math.abs(dt),W+=Math.abs(ft),Fe(O,y,dt,ft,st,ct),Fe(Z,X,dt,ft,ut,pt);let wt=t.multiplyByScalar(V,p.EPSILON5,$e);t.add(st,wt,st),t.add(ut,wt,ut),t.add(ct,wt,ct),t.add(pt,wt,pt),Gt(st,ut),Gt(ct,pt),t.pack(st,_,C),t.pack(ut,_,C+3),t.pack(pt,_,C+6),t.pack(ct,_,C+9),wt=t.multiplyByScalar(V,-2*p.EPSILON5,$e),t.add(st,wt,st),t.add(ut,wt,ut),t.add(ct,wt,ct),t.add(pt,wt,pt),Gt(st,ut),Gt(ct,pt),t.pack(st,_,C+12),t.pack(ut,_,C+15),t.pack(pt,_,C+18),t.pack(ct,_,C+21),H+=2,u+=3,M+=16,C+=24,R+=32,F+=A,q+=at}u=0;let V=0;for(s=0;s<w;s++){for(D=0;D<Je;D++)T[u+D]=rn[D]+V;V+=8,u+=Je}let Q=Kn;U.fromVertices(r,t.ZERO,3,Q[0]),U.fromVertices(i,t.ZERO,3,Q[1]);let J=U.fromBoundingSpheres(Q);J.radius+=W/(2*w);let K={position:new zt({componentDatatype:vt.DOUBLE,componentsPerAttribute:3,normalize:!1,values:_}),startHiAndForwardOffsetX:at(P),startLoAndForwardOffsetY:at(k),startNormalAndForwardOffsetZ:at(E),endNormalAndTextureCoordinateNormalizationX:at(L),rightNormalAndTextureCoordinateNormalizationY:at(b)};return l&&(K.startHiLo2D=at(c),K.offsetAndRight2D=at(h),K.startEndNormals2D=at(g),K.texcoordNormalization2D=new zt({componentDatatype:vt.FLOAT,componentsPerAttribute:2,normalize:!1,values:d})),new Ce({attributes:K,indices:T,boundingSphere:J})}function at(t){return new zt({componentDatatype:vt.FLOAT,componentsPerAttribute:4,normalize:!1,values:t})}ct._projectNormal=Dt;var he=ct;function to(t,e){return Xt.initialize().then((function(){return g(e)&&(t=he.unpack(t,e)),he.createGeometry(t)}))}var ti=to;export{ti as default};
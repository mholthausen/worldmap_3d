/*! For license information please see createWallGeometry.js.LICENSE.txt */
import{a as nt}from"./chunk-MYZVCQ3M.js";import"./chunk-Y33I6CKI.js";import"./chunk-YXVAQU2G.js";import{a as _}from"./chunk-WIRUK4BS.js";import"./chunk-EFCSU2FF.js";import"./chunk-BSXS3UVL.js";import"./chunk-OH4CN3UY.js";import"./chunk-AAJ456AA.js";import{a as ot}from"./chunk-JZL634RF.js";import{a as it}from"./chunk-3UAKIC5Y.js";import{b as tt,c as et,d as R}from"./chunk-QEWKHB6D.js";import{d as I}from"./chunk-DV7DPSRL.js";import"./chunk-4FFHQQYZ.js";import"./chunk-KCIWEUSR.js";import{a as S}from"./chunk-7XDW3BZW.js";import{a as s,c as l}from"./chunk-F33YCXD2.js";import{a as J}from"./chunk-DUBQPPQZ.js";import"./chunk-CG3JQAX7.js";import"./chunk-P3JQY4NV.js";import{a as w}from"./chunk-K36PKEJW.js";import{a as P}from"./chunk-KD2PMTHD.js";import{e as r}from"./chunk-ZUCO5WNM.js";var Q=new s,Y=new s,lt=new s,st=new s,pt=new s,ut=new s,ft=new s;function k(t){let e=(t=w(t,w.EMPTY_OBJECT)).positions,i=t.maximumHeights,n=t.minimumHeights;if(!r(e))throw new P("options.positions is required.");if(r(i)&&i.length!==e.length)throw new P("options.positions and options.maximumHeights must have the same length.");if(r(n)&&n.length!==e.length)throw new P("options.positions and options.minimumHeights must have the same length.");let o=w(t.vertexFormat,_.DEFAULT),a=w(t.granularity,J.RADIANS_PER_DEGREE),m=w(t.ellipsoid,l.WGS84);this._positions=e,this._minimumHeights=n,this._maximumHeights=i,this._vertexFormat=_.clone(o),this._granularity=a,this._ellipsoid=l.clone(m),this._workerName="createWallGeometry";let p=1+e.length*s.packedLength+2;r(n)&&(p+=n.length),r(i)&&(p+=i.length),this.packedLength=p+l.packedLength+_.packedLength+1}k.pack=function(t,e,i){if(!r(t))throw new P("value is required");if(!r(e))throw new P("array is required");i=w(i,0);let n,o=t._positions,a=o.length;for(e[i++]=a,n=0;n<a;++n,i+=s.packedLength)s.pack(o[n],e,i);let m=t._minimumHeights;if(a=r(m)?m.length:0,e[i++]=a,r(m))for(n=0;n<a;++n)e[i++]=m[n];let p=t._maximumHeights;if(a=r(p)?p.length:0,e[i++]=a,r(p))for(n=0;n<a;++n)e[i++]=p[n];return l.pack(t._ellipsoid,e,i),i+=l.packedLength,_.pack(t._vertexFormat,e,i),e[i+=_.packedLength]=t._granularity,e};var mt=l.clone(l.UNIT_SPHERE),rt=new _,M={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:mt,vertexFormat:rt,granularity:void 0};k.unpack=function(t,e,i){if(!r(t))throw new P("array is required");e=w(e,0);let n,o,a,m=t[e++],p=new Array(m);for(n=0;n<m;++n,e+=s.packedLength)p[n]=s.unpack(t,e);if(m=t[e++],m>0)for(o=new Array(m),n=0;n<m;++n)o[n]=t[e++];if(m=t[e++],m>0)for(a=new Array(m),n=0;n<m;++n)a[n]=t[e++];let u=l.unpack(t,e,mt);e+=l.packedLength;let h=_.unpack(t,e,rt),c=t[e+=_.packedLength];return r(i)?(i._positions=p,i._minimumHeights=o,i._maximumHeights=a,i._ellipsoid=l.clone(u,i._ellipsoid),i._vertexFormat=_.clone(h,i._vertexFormat),i._granularity=c,i):(M.positions=p,M.minimumHeights=o,M.maximumHeights=a,M.granularity=c,new k(M))},k.fromConstantHeights=function(t){let e=(t=w(t,w.EMPTY_OBJECT)).positions;if(!r(e))throw new P("options.positions is required.");let i,n,o=t.minimumHeight,s=t.maximumHeight,a=r(o),m=r(s);if(a||m){let t=e.length;i=a?new Array(t):void 0,n=m?new Array(t):void 0;for(let e=0;e<t;++e)a&&(i[e]=o),m&&(n[e]=s)}return new k({positions:e,maximumHeights:n,minimumHeights:i,ellipsoid:t.ellipsoid,vertexFormat:t.vertexFormat})},k.createGeometry=function(t){let e=t._positions,i=t._minimumHeights,n=t._maximumHeights,o=t._vertexFormat,a=t._granularity,m=t._ellipsoid,l=nt.computePositions(m,e,n,i,a,!0);if(!r(l))return;let p=l.bottomPositions,u=l.topPositions,h=l.numCorners,c=u.length,g=2*c,f=o.position?new Float64Array(g):void 0,w=o.normal?new Float32Array(g):void 0,k=o.tangent?new Float32Array(g):void 0,d=o.bitangent?new Float32Array(g):void 0,_=o.st?new Float32Array(g/3*2):void 0,y=0,A=0,v=0,x=0,P=0,F=ft,H=ut,j=pt,E=!0;c/=3;let L,b=0,D=1/(c-h-1);for(L=0;L<c;++L){let t=3*L,e=s.fromArray(u,t,Q),i=s.fromArray(p,t,Y);if(o.position&&(f[y++]=i.x,f[y++]=i.y,f[y++]=i.z,f[y++]=e.x,f[y++]=e.y,f[y++]=e.z),o.st&&(_[P++]=b,_[P++]=0,_[P++]=b,_[P++]=1),o.normal||o.tangent||o.bitangent){let i=s.clone(s.ZERO,st),n=s.subtract(e,m.geodeticSurfaceNormal(e,Y),Y);if(L+1<c&&(i=s.fromArray(u,t+3,st)),E){let t=s.subtract(i,e,lt),r=s.subtract(n,e,Q);F=s.normalize(s.cross(r,t,F),F),E=!1}s.equalsEpsilon(e,i,J.EPSILON10)?E=!0:(b+=D,o.tangent&&(H=s.normalize(s.subtract(i,e,H),H)),o.bitangent&&(j=s.normalize(s.cross(F,H,j),j))),o.normal&&(w[A++]=F.x,w[A++]=F.y,w[A++]=F.z,w[A++]=F.x,w[A++]=F.y,w[A++]=F.z),o.tangent&&(k[x++]=H.x,k[x++]=H.y,k[x++]=H.z,k[x++]=H.x,k[x++]=H.y,k[x++]=H.z),o.bitangent&&(d[v++]=j.x,d[v++]=j.y,d[v++]=j.z,d[v++]=j.x,d[v++]=j.y,d[v++]=j.z)}}let O=new it;o.position&&(O.position=new R({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:f})),o.normal&&(O.normal=new R({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:w})),o.tangent&&(O.tangent=new R({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:k})),o.bitangent&&(O.bitangent=new R({componentDatatype:S.FLOAT,componentsPerAttribute:3,values:d})),o.st&&(O.st=new R({componentDatatype:S.FLOAT,componentsPerAttribute:2,values:_}));let T=g/3;g-=6*(h+1);let C=ot.createTypedArray(T,g),M=0;for(L=0;L<T-2;L+=2){let t=L,e=L+2,i=s.fromArray(f,3*t,Q),n=s.fromArray(f,3*e,Y);if(s.equalsEpsilon(i,n,J.EPSILON10))continue;let r=L+1,o=L+3;C[M++]=r,C[M++]=t,C[M++]=o,C[M++]=o,C[M++]=t,C[M++]=e}return new et({attributes:O,indices:C,primitiveType:tt.TRIANGLES,boundingSphere:new I.fromVertices(f)})};var X=k;function ht(t,e){return r(e)&&(t=X.unpack(t,e)),t._ellipsoid=l.clone(t._ellipsoid),X.createGeometry(t)}var Ot=ht;export{Ot as default};
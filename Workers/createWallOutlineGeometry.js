/*! For license information please see createWallOutlineGeometry.js.LICENSE.txt */
import{a as B}from"./chunk-DCNVB4XC.js";import"./chunk-D6NO7OEC.js";import"./chunk-NXLA2DOI.js";import"./chunk-2EHQCUJI.js";import"./chunk-EOT3UPEC.js";import"./chunk-ZKNXHPHD.js";import"./chunk-W5ZMPE2M.js";import{a as N}from"./chunk-EQ7PMEBC.js";import{a as M}from"./chunk-FDDSRMXI.js";import{b as q,c as R,d as W}from"./chunk-YYYI3I6L.js";import{d as D}from"./chunk-YIFABOF6.js";import"./chunk-PQVQONHO.js";import"./chunk-KDW4RGIR.js";import{a as S}from"./chunk-VNDUYYBJ.js";import{a as p,c as l}from"./chunk-V624RX7A.js";import{a as O}from"./chunk-VZ2RFJ3P.js";import"./chunk-RN5GA5QZ.js";import"./chunk-TWC6ISJU.js";import{a as d}from"./chunk-RKPKWH3Z.js";import{a as _}from"./chunk-BIYNNQRQ.js";import{e as m}from"./chunk-ZLUSVROX.js";var G=new p,U=new p;function w(i){let t=(i=d(i,d.EMPTY_OBJECT)).positions,e=i.maximumHeights,o=i.minimumHeights;if(!m(t))throw new _("options.positions is required.");if(m(e)&&e.length!==t.length)throw new _("options.positions and options.maximumHeights must have the same length.");if(m(o)&&o.length!==t.length)throw new _("options.positions and options.minimumHeights must have the same length.");let n=d(i.granularity,O.RADIANS_PER_DEGREE),r=d(i.ellipsoid,l.WGS84);this._positions=t,this._minimumHeights=o,this._maximumHeights=e,this._granularity=n,this._ellipsoid=l.clone(r),this._workerName="createWallOutlineGeometry";let s=1+t.length*p.packedLength+2;m(o)&&(s+=o.length),m(e)&&(s+=e.length),this.packedLength=s+l.packedLength+1}w.pack=function(i,t,e){if(!m(i))throw new _("value is required");if(!m(t))throw new _("array is required");e=d(e,0);let o,n=i._positions,r=n.length;for(t[e++]=r,o=0;o<r;++o,e+=p.packedLength)p.pack(n[o],t,e);let s=i._minimumHeights;if(r=m(s)?s.length:0,t[e++]=r,m(s))for(o=0;o<r;++o)t[e++]=s[o];let a=i._maximumHeights;if(r=m(a)?a.length:0,t[e++]=r,m(a))for(o=0;o<r;++o)t[e++]=a[o];return l.pack(i._ellipsoid,t,e),t[e+=l.packedLength]=i._granularity,t};var z=l.clone(l.UNIT_SPHERE),b={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:z,granularity:void 0};w.unpack=function(i,t,e){if(!m(i))throw new _("array is required");t=d(t,0);let o,n,r,s=i[t++],a=new Array(s);for(o=0;o<s;++o,t+=p.packedLength)a[o]=p.unpack(i,t);if(s=i[t++],s>0)for(n=new Array(s),o=0;o<s;++o)n[o]=i[t++];if(s=i[t++],s>0)for(r=new Array(s),o=0;o<s;++o)r[o]=i[t++];let h=l.unpack(i,t,z),u=i[t+=l.packedLength];return m(e)?(e._positions=a,e._minimumHeights=n,e._maximumHeights=r,e._ellipsoid=l.clone(h,e._ellipsoid),e._granularity=u,e):(b.positions=a,b.minimumHeights=n,b.maximumHeights=r,b.granularity=u,new w(b))},w.fromConstantHeights=function(i){let t=(i=d(i,d.EMPTY_OBJECT)).positions;if(!m(t))throw new _("options.positions is required.");let e,o,n=i.minimumHeight,r=i.maximumHeight,s=m(n),a=m(r);if(s||a){let i=t.length;e=s?new Array(i):void 0,o=a?new Array(i):void 0;for(let t=0;t<i;++t)s&&(e[t]=n),a&&(o[t]=r)}return new w({positions:t,maximumHeights:o,minimumHeights:e,ellipsoid:i.ellipsoid})},w.createGeometry=function(i){let t=i._positions,e=i._minimumHeights,o=i._maximumHeights,n=i._granularity,r=i._ellipsoid,s=B.computePositions(r,t,o,e,n,!1);if(!m(s))return;let a,l=s.bottomPositions,h=s.topPositions,u=h.length,c=2*u,g=new Float64Array(c),f=0;for(u/=3,a=0;a<u;++a){let i=3*a,t=p.fromArray(h,i,G),e=p.fromArray(l,i,U);g[f++]=e.x,g[f++]=e.y,g[f++]=e.z,g[f++]=t.x,g[f++]=t.y,g[f++]=t.z}let d=new M({position:new W({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:g})}),w=c/3;c=2*w-4+w;let _=N.createTypedArray(w,c),k=0;for(a=0;a<w-2;a+=2){let i=a,t=a+2,e=p.fromArray(g,3*i,G),o=p.fromArray(g,3*t,U);if(p.equalsEpsilon(e,o,O.EPSILON10))continue;let n=a+1,r=a+3;_[k++]=n,_[k++]=i,_[k++]=n,_[k++]=r,_[k++]=i,_[k++]=t}return _[k++]=w-2,_[k++]=w-1,new R({attributes:d,indices:_,primitiveType:q.LINES,boundingSphere:new D.fromVertices(g)})};var C=w;function J(i,t){return m(t)&&(i=C.unpack(i,t)),i._ellipsoid=l.clone(i._ellipsoid),C.createGeometry(i)}var pi=J;export{pi as default};
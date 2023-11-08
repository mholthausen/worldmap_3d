/*! For license information please see createPolylineVolumeGeometry.js.LICENSE.txt */
import{a as M}from"./chunk-4HIMVLZZ.js";import{a as W}from"./chunk-3ZQZIWLR.js";import"./chunk-PNRMC4IG.js";import"./chunk-V6ZHITEJ.js";import{a as x,b as j}from"./chunk-NLQJPKTT.js";import{a as I}from"./chunk-J4D4SQY2.js";import"./chunk-Y33I6CKI.js";import"./chunk-YXVAQU2G.js";import{a as g}from"./chunk-WIRUK4BS.js";import"./chunk-JMG4RN2X.js";import"./chunk-PG5ZS3T4.js";import{a as $,b as V}from"./chunk-BVOZOPDI.js";import{a as Z}from"./chunk-EFCSU2FF.js";import"./chunk-BSXS3UVL.js";import"./chunk-OH4CN3UY.js";import"./chunk-AAJ456AA.js";import{a as X}from"./chunk-JZL634RF.js";import{a as Q}from"./chunk-3UAKIC5Y.js";import{b as Y,c as z,d as U}from"./chunk-QEWKHB6D.js";import{d as K}from"./chunk-DV7DPSRL.js";import"./chunk-4FFHQQYZ.js";import{d as C}from"./chunk-KCIWEUSR.js";import{a as B}from"./chunk-7XDW3BZW.js";import{a as T,c as f}from"./chunk-F33YCXD2.js";import{a as J}from"./chunk-DUBQPPQZ.js";import"./chunk-CG3JQAX7.js";import"./chunk-P3JQY4NV.js";import{a as k}from"./chunk-K36PKEJW.js";import{a as D}from"./chunk-KD2PMTHD.js";import{e as _}from"./chunk-ZUCO5WNM.js";function oe(e,t,n,o){let r=new Q;o.position&&(r.position=new U({componentDatatype:B.DOUBLE,componentsPerAttribute:3,values:e}));let i,a,s,p,c,l,h=t.length,u=e.length/3,m=(u-2*h)/(2*h),k=V.triangulate(t),f=(m-1)*h*6+2*k.length,g=X.createTypedArray(u,f),d=2*h,y=0;for(i=0;i<m-1;i++){for(a=0;a<h-1;a++)s=2*a+i*h*2,l=s+d,p=s+1,c=p+d,g[y++]=p,g[y++]=s,g[y++]=c,g[y++]=c,g[y++]=s,g[y++]=l;s=2*h-2+i*h*2,p=s+1,c=p+d,l=s+d,g[y++]=p,g[y++]=s,g[y++]=c,g[y++]=c,g[y++]=s,g[y++]=l}if(o.st||o.tangent||o.bitangent){let e,o,s=new Float32Array(2*u),p=1/(m-1),c=1/n.height,l=n.height/2,k=0;for(i=0;i<m;i++){for(e=i*p,o=c*(t[0].y+l),s[k++]=e,s[k++]=o,a=1;a<h;a++)o=c*(t[a].y+l),s[k++]=e,s[k++]=o,s[k++]=e,s[k++]=o;o=c*(t[0].y+l),s[k++]=e,s[k++]=o}for(a=0;a<h;a++)e=0,o=c*(t[a].y+l),s[k++]=e,s[k++]=o;for(a=0;a<h;a++)e=(m-1)*p,o=c*(t[a].y+l),s[k++]=e,s[k++]=o;r.st=new U({componentDatatype:B.FLOAT,componentsPerAttribute:2,values:new Float32Array(s)})}let _=u-2*h;for(i=0;i<k.length;i+=3){let e=k[i]+_,t=k[i+1]+_,n=k[i+2]+_;g[y++]=e,g[y++]=t,g[y++]=n,g[y++]=n+h,g[y++]=t+h,g[y++]=e+h}let j=new z({attributes:r,indices:g,boundingSphere:K.fromVertices(e),primitiveType:Y.TRIANGLES});if(o.normal&&(j=W.computeNormal(j)),o.tangent||o.bitangent){try{j=W.computeTangentAndBitangent(j)}catch{I("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}o.tangent||(j.attributes.tangent=void 0),o.bitangent||(j.attributes.bitangent=void 0),o.st||(j.attributes.st=void 0)}return j}function R(e){let t=(e=k(e,k.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;if(!_(t))throw new D("options.polylinePositions is required.");if(!_(n))throw new D("options.shapePositions is required.");this._positions=t,this._shape=n,this._ellipsoid=f.clone(k(e.ellipsoid,f.WGS84)),this._cornerType=k(e.cornerType,x.ROUNDED),this._vertexFormat=g.clone(k(e.vertexFormat,g.DEFAULT)),this._granularity=k(e.granularity,J.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";let o=1+t.length*T.packedLength;o+=1+n.length*C.packedLength,this.packedLength=o+f.packedLength+g.packedLength+2}R.pack=function(e,t,n){if(!_(e))throw new D("value is required");if(!_(t))throw new D("array is required");n=k(n,0);let o,r=e._positions,i=r.length;for(t[n++]=i,o=0;o<i;++o,n+=T.packedLength)T.pack(r[o],t,n);let a=e._shape;for(i=a.length,t[n++]=i,o=0;o<i;++o,n+=C.packedLength)C.pack(a[o],t,n);return f.pack(e._ellipsoid,t,n),n+=f.packedLength,g.pack(e._vertexFormat,t,n),n+=g.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var ee=f.clone(f.UNIT_SPHERE),te=new g,v={polylinePositions:void 0,shapePositions:void 0,ellipsoid:ee,vertexFormat:te,cornerType:void 0,granularity:void 0};R.unpack=function(e,t,n){if(!_(e))throw new D("array is required");t=k(t,0);let o,r=e[t++],i=new Array(r);for(o=0;o<r;++o,t+=T.packedLength)i[o]=T.unpack(e,t);r=e[t++];let a=new Array(r);for(o=0;o<r;++o,t+=C.packedLength)a[o]=C.unpack(e,t);let s=f.unpack(e,t,ee);t+=f.packedLength;let p=g.unpack(e,t,te);t+=g.packedLength;let c=e[t++],l=e[t];return _(n)?(n._positions=i,n._shape=a,n._ellipsoid=f.clone(s,n._ellipsoid),n._vertexFormat=g.clone(p,n._vertexFormat),n._cornerType=c,n._granularity=l,n):(v.polylinePositions=i,v.shapePositions=a,v.cornerType=c,v.granularity=l,new R(v))};var ne=new M;R.createGeometry=function(e){let t=e._positions,n=Z(t,T.equalsEpsilon),o=e._shape;if(o=j.removeDuplicatesFromShape(o),n.length<2||o.length<3)return;V.computeWindingOrder2D(o)===$.CLOCKWISE&&o.reverse();let r=M.fromPoints(o,ne);return oe(j.computePositions(n,o,r,e,!0),o,r,e._vertexFormat)};var H=R;function ie(e,t){return _(t)&&(e=H.unpack(e,t)),e._ellipsoid=f.clone(e._ellipsoid),H.createGeometry(e)}var Re=ie;export{Re as default};
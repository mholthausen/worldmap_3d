/*! For license information please see chunk-DEMPH3MF.js.LICENSE.txt */
import{a as W}from"./chunk-N52FZRFP.js";import{a as Z}from"./chunk-JZL634RF.js";import{a as X}from"./chunk-3UAKIC5Y.js";import{b as K,c as Q,d as V}from"./chunk-QEWKHB6D.js";import{d as H}from"./chunk-DV7DPSRL.js";import{a as U}from"./chunk-7XDW3BZW.js";import{a as r,c as J}from"./chunk-F33YCXD2.js";import{a as B}from"./chunk-DUBQPPQZ.js";import{a as u}from"./chunk-K36PKEJW.js";import{a as P}from"./chunk-KD2PMTHD.js";import{e as T}from"./chunk-ZUCO5WNM.js";var ii=new r(1,1,1),S=Math.cos,q=Math.sin;function x(i){i=u(i,u.EMPTY_OBJECT);let t=u(i.radii,ii),e=u(i.innerRadii,t),o=u(i.minimumClock,0),n=u(i.maximumClock,B.TWO_PI),a=u(i.minimumCone,0),s=u(i.maximumCone,B.PI),m=Math.round(u(i.stackPartitions,10)),f=Math.round(u(i.slicePartitions,8)),c=Math.round(u(i.subdivisions,128));if(m<1)throw new P("options.stackPartitions cannot be less than 1");if(f<0)throw new P("options.slicePartitions cannot be less than 0");if(c<0)throw new P("options.subdivisions must be greater than or equal to zero.");if(T(i.offsetAttribute)&&i.offsetAttribute===W.TOP)throw new P("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._radii=r.clone(t),this._innerRadii=r.clone(e),this._minimumClock=o,this._maximumClock=n,this._minimumCone=a,this._maximumCone=s,this._stackPartitions=m,this._slicePartitions=f,this._subdivisions=c,this._offsetAttribute=i.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}x.packedLength=2*r.packedLength+8,x.pack=function(i,t,e){if(!T(i))throw new P("value is required");if(!T(t))throw new P("array is required");return e=u(e,0),r.pack(i._radii,t,e),e+=r.packedLength,r.pack(i._innerRadii,t,e),e+=r.packedLength,t[e++]=i._minimumClock,t[e++]=i._maximumClock,t[e++]=i._minimumCone,t[e++]=i._maximumCone,t[e++]=i._stackPartitions,t[e++]=i._slicePartitions,t[e++]=i._subdivisions,t[e]=u(i._offsetAttribute,-1),t};var $=new r,G=new r,b={radii:$,innerRadii:G,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};x.unpack=function(i,t,e){if(!T(i))throw new P("array is required");t=u(t,0);let o=r.unpack(i,t,$);t+=r.packedLength;let n=r.unpack(i,t,G);t+=r.packedLength;let a=i[t++],s=i[t++],m=i[t++],f=i[t++],c=i[t++],l=i[t++],h=i[t++],d=i[t];return T(e)?(e._radii=r.clone(o,e._radii),e._innerRadii=r.clone(n,e._innerRadii),e._minimumClock=a,e._maximumClock=s,e._minimumCone=m,e._maximumCone=f,e._stackPartitions=c,e._slicePartitions=l,e._subdivisions=h,e._offsetAttribute=-1===d?void 0:d,e):(b.minimumClock=a,b.maximumClock=s,b.minimumCone=m,b.maximumCone=f,b.stackPartitions=c,b.slicePartitions=l,b.subdivisions=h,b.offsetAttribute=-1===d?void 0:d,new x(b))},x.createGeometry=function(i){let t=i._radii;if(t.x<=0||t.y<=0||t.z<=0)return;let r=i._innerRadii;if(r.x<=0||r.y<=0||r.z<=0)return;let e=i._minimumClock,o=i._maximumClock,n=i._minimumCone,a=i._maximumCone,s=i._subdivisions,m=J.fromCartesian3(t),u=i._slicePartitions+1,f=i._stackPartitions+1;u=Math.round(u*Math.abs(o-e)/B.TWO_PI),f=Math.round(f*Math.abs(a-n)/B.PI),u<2&&(u=2),f<2&&(f=2);let c=0,l=1,h=r.x!==t.x||r.y!==t.y||r.z!==t.z,d=!1,_=!1;h&&(l=2,n>0&&(d=!0,c+=u),a<Math.PI&&(_=!0,c+=u));let k,p,b,P,C=s*l*(f+u),x=new Float64Array(3*C),w=2*(C+c-(u+f)*l),y=Z.createTypedArray(C,w),v=0,A=new Array(f),g=new Array(f);for(k=0;k<f;k++)P=n+k*(a-n)/(f-1),A[k]=q(P),g[k]=S(P);let M=new Array(s),D=new Array(s);for(k=0;k<s;k++)b=e+k*(o-e)/(s-1),M[k]=q(b),D[k]=S(b);for(k=0;k<f;k++)for(p=0;p<s;p++)x[v++]=t.x*A[k]*D[p],x[v++]=t.y*A[k]*M[p],x[v++]=t.z*g[k];if(h)for(k=0;k<f;k++)for(p=0;p<s;p++)x[v++]=r.x*A[k]*D[p],x[v++]=r.y*A[k]*M[p],x[v++]=r.z*g[k];for(A.length=s,g.length=s,k=0;k<s;k++)P=n+k*(a-n)/(s-1),A[k]=q(P),g[k]=S(P);for(M.length=u,D.length=u,k=0;k<u;k++)b=e+k*(o-e)/(u-1),M[k]=q(b),D[k]=S(b);for(k=0;k<s;k++)for(p=0;p<u;p++)x[v++]=t.x*A[k]*D[p],x[v++]=t.y*A[k]*M[p],x[v++]=t.z*g[k];if(h)for(k=0;k<s;k++)for(p=0;p<u;p++)x[v++]=r.x*A[k]*D[p],x[v++]=r.y*A[k]*M[p],x[v++]=r.z*g[k];for(v=0,k=0;k<f*l;k++){let i=k*s;for(p=0;p<s-1;p++)y[v++]=i+p,y[v++]=i+p+1}let j=f*s*l;for(k=0;k<u;k++)for(p=0;p<s-1;p++)y[v++]=j+k+p*u,y[v++]=j+k+(p+1)*u;if(h)for(j=f*s*l+u*s,k=0;k<u;k++)for(p=0;p<s-1;p++)y[v++]=j+k+p*u,y[v++]=j+k+(p+1)*u;if(h){let i=f*s*l,t=i+s*u;if(d)for(k=0;k<u;k++)y[v++]=i+k,y[v++]=t+k;if(_)for(i+=s*u-u,t+=s*u-u,k=0;k<u;k++)y[v++]=i+k,y[v++]=t+k}let E=new X({position:new V({componentDatatype:U.DOUBLE,componentsPerAttribute:3,values:x})});if(T(i._offsetAttribute)){let t=x.length,r=i._offsetAttribute===W.NONE?0:1,e=new Uint8Array(t/3).fill(r);E.applyOffset=new V({componentDatatype:U.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return new Q({attributes:E,indices:y,primitiveType:K.LINES,boundingSphere:H.fromEllipsoid(m),offsetAttribute:i._offsetAttribute})};var Ci=x;export{Ci as a};
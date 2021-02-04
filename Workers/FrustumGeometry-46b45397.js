define(["exports","./Transforms-e9dbfb40","./Cartesian2-49b1de22","./Check-6c0211bc","./ComponentDatatype-6d99a1ee","./when-54c2dc71","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./Math-44e92d6b","./Plane-8f7e53d1","./VertexFormat-7572c785"],(function(t,e,a,i,n,r,o,s,f,u,l){"use strict";function h(t){this.planes=r.defaultValue(t,[])}var p=[new a.Cartesian3,new a.Cartesian3,new a.Cartesian3];a.Cartesian3.clone(a.Cartesian3.UNIT_X,p[0]),a.Cartesian3.clone(a.Cartesian3.UNIT_Y,p[1]),a.Cartesian3.clone(a.Cartesian3.UNIT_Z,p[2]);var d=new a.Cartesian3,c=new a.Cartesian3,m=new u.Plane(new a.Cartesian3(1,0,0),0);function C(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._orthographicMatrix=new e.Matrix4}function _(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=e.Matrix4.computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}h.fromBoundingSphere=function(t,i){r.defined(i)||(i=new h);var n=p.length,o=i.planes;o.length=2*n;for(var s=t.center,f=t.radius,u=0,l=0;l<n;++l){var m=p[l],C=o[u],_=o[u+1];r.defined(C)||(C=o[u]=new e.Cartesian4),r.defined(_)||(_=o[u+1]=new e.Cartesian4),a.Cartesian3.multiplyByScalar(m,-f,d),a.Cartesian3.add(s,d,d),C.x=m.x,C.y=m.y,C.z=m.z,C.w=-a.Cartesian3.dot(m,d),a.Cartesian3.multiplyByScalar(m,f,d),a.Cartesian3.add(s,d,d),_.x=-m.x,_.y=-m.y,_.z=-m.z,_.w=-a.Cartesian3.dot(a.Cartesian3.negate(m,c),d),u+=2}return i},h.prototype.computeVisibility=function(t){for(var a=this.planes,i=!1,n=0,r=a.length;n<r;++n){var o=t.intersectPlane(u.Plane.fromCartesian4(a[n],m));if(o===e.Intersect.OUTSIDE)return e.Intersect.OUTSIDE;o===e.Intersect.INTERSECTING&&(i=!0)}return i?e.Intersect.INTERSECTING:e.Intersect.INSIDE},h.prototype.computeVisibilityWithPlaneMask=function(t,a){if(a===h.MASK_OUTSIDE||a===h.MASK_INSIDE)return a;for(var i=h.MASK_INSIDE,n=this.planes,r=0,o=n.length;r<o;++r){var s=r<31?1<<r:0;if(!(r<31&&0==(a&s))){var f=t.intersectPlane(u.Plane.fromCartesian4(n[r],m));if(f===e.Intersect.OUTSIDE)return h.MASK_OUTSIDE;f===e.Intersect.INTERSECTING&&(i|=s)}}return i},h.MASK_OUTSIDE=4294967295,h.MASK_INSIDE=0,h.MASK_INDETERMINATE=2147483647,Object.defineProperties(C.prototype,{projectionMatrix:{get:function(){return _(this),this._orthographicMatrix}}});var y=new a.Cartesian3,v=new a.Cartesian3,g=new a.Cartesian3,w=new a.Cartesian3;function x(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new C,this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far}function b(t){var e,a=t._offCenterFrustum;t.width===t._width&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far||(t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far,e=1/t.aspectRatio,a.right=.5*t.width,a.left=-a.right,a.top=e*a.right,a.bottom=-a.top,a.near=t.near,a.far=t.far)}function M(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._perspectiveMatrix=new e.Matrix4,this._infinitePerspective=new e.Matrix4}function F(t){var a=t.top,i=t.bottom,n=t.right,r=t.left,o=t.near,s=t.far;a===t._top&&i===t._bottom&&r===t._left&&n===t._right&&o===t._near&&s===t._far||(t._left=r,t._right=n,t._top=a,t._bottom=i,t._near=o,t._far=s,t._perspectiveMatrix=e.Matrix4.computePerspectiveOffCenter(r,n,i,a,o,s,t._perspectiveMatrix),t._infinitePerspective=e.Matrix4.computeInfinitePerspectiveOffCenter(r,n,i,a,o,t._infinitePerspective))}C.prototype.computeCullingVolume=function(t,i,n){var o=this._cullingVolume.planes,s=this.top,f=this.bottom,u=this.right,l=this.left,h=this.near,p=this.far,d=a.Cartesian3.cross(i,n,y);a.Cartesian3.normalize(d,d);var c=v;return a.Cartesian3.multiplyByScalar(i,h,c),a.Cartesian3.add(t,c,c),h=g,a.Cartesian3.multiplyByScalar(d,l,h),a.Cartesian3.add(c,h,h),l=o[0],(l=r.defined(l)?l:o[0]=new e.Cartesian4).x=d.x,l.y=d.y,l.z=d.z,l.w=-a.Cartesian3.dot(d,h),a.Cartesian3.multiplyByScalar(d,u,h),a.Cartesian3.add(c,h,h),l=o[1],(l=r.defined(l)?l:o[1]=new e.Cartesian4).x=-d.x,l.y=-d.y,l.z=-d.z,l.w=-a.Cartesian3.dot(a.Cartesian3.negate(d,w),h),a.Cartesian3.multiplyByScalar(n,f,h),a.Cartesian3.add(c,h,h),l=o[2],(l=r.defined(l)?l:o[2]=new e.Cartesian4).x=n.x,l.y=n.y,l.z=n.z,l.w=-a.Cartesian3.dot(n,h),a.Cartesian3.multiplyByScalar(n,s,h),a.Cartesian3.add(c,h,h),l=o[3],(l=r.defined(l)?l:o[3]=new e.Cartesian4).x=-n.x,l.y=-n.y,l.z=-n.z,l.w=-a.Cartesian3.dot(a.Cartesian3.negate(n,w),h),l=o[4],(l=r.defined(l)?l:o[4]=new e.Cartesian4).x=i.x,l.y=i.y,l.z=i.z,l.w=-a.Cartesian3.dot(i,c),a.Cartesian3.multiplyByScalar(i,p,h),a.Cartesian3.add(t,h,h),l=o[5],(l=r.defined(l)?l:o[5]=new e.Cartesian4).x=-i.x,l.y=-i.y,l.z=-i.z,l.w=-a.Cartesian3.dot(a.Cartesian3.negate(i,w),h),this._cullingVolume},C.prototype.getPixelDimensions=function(t,e,a,i,n){return _(this),t=i*(this.right-this.left)/t,e=i*(this.top-this.bottom)/e,n.x=t,n.y=e,n},C.prototype.clone=function(t){return(t=r.defined(t)?t:new C).left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},C.prototype.equals=function(t){return r.defined(t)&&t instanceof C&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},C.prototype.equalsEpsilon=function(t,e,a){return t===this||r.defined(t)&&t instanceof C&&f.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&f.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&f.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&f.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&f.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&f.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},x.packedLength=4,x.pack=function(t,e,a){return a=r.defaultValue(a,0),e[a++]=t.width,e[a++]=t.aspectRatio,e[a++]=t.near,e[a]=t.far,e},x.unpack=function(t,e,a){return e=r.defaultValue(e,0),(a=r.defined(a)?a:new x).width=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e],a},Object.defineProperties(x.prototype,{projectionMatrix:{get:function(){return b(this),this._offCenterFrustum.projectionMatrix}}}),x.prototype.computeCullingVolume=function(t,e,a){return b(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},x.prototype.getPixelDimensions=function(t,e,a,i,n){return b(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i,n)},x.prototype.clone=function(t){return(t=r.defined(t)?t:new x).aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},x.prototype.equals=function(t){return!!(r.defined(t)&&t instanceof x)&&(b(this),b(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},x.prototype.equalsEpsilon=function(t,e,a){return!!(r.defined(t)&&t instanceof x)&&(b(this),b(t),f.CesiumMath.equalsEpsilon(this.width,t.width,e,a)&&f.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))},Object.defineProperties(M.prototype,{projectionMatrix:{get:function(){return F(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return F(this),this._infinitePerspective}}});var V=new a.Cartesian3,E=new a.Cartesian3,O=new a.Cartesian3,P=new a.Cartesian3;function z(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new M,this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far,this.xOffset=r.defaultValue(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=r.defaultValue(t.yOffset,0),this._yOffset=this.yOffset}function R(t){var e=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,e.top=t.near*Math.tan(.5*t._fovy),e.bottom=-e.top,e.right=t.aspectRatio*e.top,e.left=-e.right,e.near=t.near,e.far=t.far,e.right+=t.xOffset,e.left+=t.xOffset,e.top+=t.yOffset,e.bottom+=t.yOffset)}function S(t){var i,n,o=t.frustum,s=t.orientation,f=t.origin,u=r.defaultValue(t.vertexFormat,l.VertexFormat.DEFAULT);t=r.defaultValue(t._drawNearPlane,!0),o instanceof z?(i=0,n=z.packedLength):o instanceof x&&(i=1,n=x.packedLength),this._frustumType=i,this._frustum=o.clone(),this._origin=a.Cartesian3.clone(f),this._orientation=e.Quaternion.clone(s),this._drawNearPlane=t,this._vertexFormat=u,this._workerName="createFrustumGeometry",this.packedLength=2+n+a.Cartesian3.packedLength+e.Quaternion.packedLength+l.VertexFormat.packedLength}M.prototype.computeCullingVolume=function(t,i,n){var o=this._cullingVolume.planes,s=this.top,f=this.bottom,u=this.right,l=this.left,h=this.near,p=this.far,d=a.Cartesian3.cross(i,n,V),c=E;return a.Cartesian3.multiplyByScalar(i,h,c),a.Cartesian3.add(t,c,c),h=O,a.Cartesian3.multiplyByScalar(i,p,h),a.Cartesian3.add(t,h,h),p=P,a.Cartesian3.multiplyByScalar(d,l,p),a.Cartesian3.add(c,p,p),a.Cartesian3.subtract(p,t,p),a.Cartesian3.normalize(p,p),a.Cartesian3.cross(p,n,p),a.Cartesian3.normalize(p,p),l=o[0],(l=r.defined(l)?l:o[0]=new e.Cartesian4).x=p.x,l.y=p.y,l.z=p.z,l.w=-a.Cartesian3.dot(p,t),a.Cartesian3.multiplyByScalar(d,u,p),a.Cartesian3.add(c,p,p),a.Cartesian3.subtract(p,t,p),a.Cartesian3.cross(n,p,p),a.Cartesian3.normalize(p,p),l=o[1],(l=r.defined(l)?l:o[1]=new e.Cartesian4).x=p.x,l.y=p.y,l.z=p.z,l.w=-a.Cartesian3.dot(p,t),a.Cartesian3.multiplyByScalar(n,f,p),a.Cartesian3.add(c,p,p),a.Cartesian3.subtract(p,t,p),a.Cartesian3.cross(d,p,p),a.Cartesian3.normalize(p,p),l=o[2],(l=r.defined(l)?l:o[2]=new e.Cartesian4).x=p.x,l.y=p.y,l.z=p.z,l.w=-a.Cartesian3.dot(p,t),a.Cartesian3.multiplyByScalar(n,s,p),a.Cartesian3.add(c,p,p),a.Cartesian3.subtract(p,t,p),a.Cartesian3.cross(p,d,p),a.Cartesian3.normalize(p,p),l=o[3],(l=r.defined(l)?l:o[3]=new e.Cartesian4).x=p.x,l.y=p.y,l.z=p.z,l.w=-a.Cartesian3.dot(p,t),l=o[4],(l=r.defined(l)?l:o[4]=new e.Cartesian4).x=i.x,l.y=i.y,l.z=i.z,l.w=-a.Cartesian3.dot(i,c),a.Cartesian3.negate(i,p),l=o[5],(l=r.defined(l)?l:o[5]=new e.Cartesian4).x=p.x,l.y=p.y,l.z=p.z,l.w=-a.Cartesian3.dot(p,h),this._cullingVolume},M.prototype.getPixelDimensions=function(t,e,a,i,n){F(this);var r=1/this.near;return e=2*i*a*(this.top*r)/e,t=2*i*a*(this.right*r)/t,n.x=t,n.y=e,n},M.prototype.clone=function(t){return(t=r.defined(t)?t:new M).right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},M.prototype.equals=function(t){return r.defined(t)&&t instanceof M&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},M.prototype.equalsEpsilon=function(t,e,a){return t===this||r.defined(t)&&t instanceof M&&f.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&f.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&f.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&f.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&f.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&f.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},z.packedLength=6,z.pack=function(t,e,a){return a=r.defaultValue(a,0),e[a++]=t.fov,e[a++]=t.aspectRatio,e[a++]=t.near,e[a++]=t.far,e[a++]=t.xOffset,e[a]=t.yOffset,e},z.unpack=function(t,e,a){return e=r.defaultValue(e,0),(a=r.defined(a)?a:new z).fov=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e++],a.xOffset=t[e++],a.yOffset=t[e],a},Object.defineProperties(z.prototype,{projectionMatrix:{get:function(){return R(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return R(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return R(this),this._fovy}},sseDenominator:{get:function(){return R(this),this._sseDenominator}}}),z.prototype.computeCullingVolume=function(t,e,a){return R(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},z.prototype.getPixelDimensions=function(t,e,a,i,n){return R(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i,n)},z.prototype.clone=function(t){return(t=r.defined(t)?t:new z).aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},z.prototype.equals=function(t){return!!(r.defined(t)&&t instanceof z)&&(R(this),R(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},z.prototype.equalsEpsilon=function(t,e,a){return!!(r.defined(t)&&t instanceof z)&&(R(this),R(t),f.CesiumMath.equalsEpsilon(this.fov,t.fov,e,a)&&f.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))},S.pack=function(t,i,n){n=r.defaultValue(n,0);var o=t._frustumType,s=t._frustum;return 0===(i[n++]=o)?(z.pack(s,i,n),n+=z.packedLength):(x.pack(s,i,n),n+=x.packedLength),a.Cartesian3.pack(t._origin,i,n),n+=a.Cartesian3.packedLength,e.Quaternion.pack(t._orientation,i,n),n+=e.Quaternion.packedLength,l.VertexFormat.pack(t._vertexFormat,i,n),i[n+=l.VertexFormat.packedLength]=t._drawNearPlane?1:0,i};var T=new z,k=new x,A=new e.Quaternion,D=new a.Cartesian3,I=new l.VertexFormat;function q(t,e,a,i,n,o,s,f){for(var u=t/3*2,l=0;l<4;++l)r.defined(e)&&(e[t]=o.x,e[t+1]=o.y,e[t+2]=o.z),r.defined(a)&&(a[t]=s.x,a[t+1]=s.y,a[t+2]=s.z),r.defined(i)&&(i[t]=f.x,i[t+1]=f.y,i[t+2]=f.z),t+=3;n[u]=0,n[1+u]=0,n[2+u]=1,n[3+u]=0,n[4+u]=1,n[5+u]=1,n[6+u]=0,n[7+u]=1}S.unpack=function(t,i,n){i=r.defaultValue(i,0);var o,s=t[i++];0===s?(o=z.unpack(t,i,T),i+=z.packedLength):(o=x.unpack(t,i,k),i+=x.packedLength);var f=a.Cartesian3.unpack(t,i,D);i+=a.Cartesian3.packedLength;var u=e.Quaternion.unpack(t,i,A);i+=e.Quaternion.packedLength;var h=l.VertexFormat.unpack(t,i,I);return t=1===t[i+=l.VertexFormat.packedLength],r.defined(n)?(i=s===n._frustumType?n._frustum:void 0,n._frustum=o.clone(i),n._frustumType=s,n._origin=a.Cartesian3.clone(f,n._origin),n._orientation=e.Quaternion.clone(u,n._orientation),n._vertexFormat=l.VertexFormat.clone(h,n._vertexFormat),n._drawNearPlane=t,n):new S({frustum:o,origin:f,orientation:u,vertexFormat:h,_drawNearPlane:t})};var B=new e.Matrix3,L=new e.Matrix4,N=new e.Matrix4,G=new a.Cartesian3,j=new a.Cartesian3,U=new a.Cartesian3,Q=new a.Cartesian3,K=new a.Cartesian3,Y=new a.Cartesian3,J=new Array(3),W=new Array(4);W[0]=new e.Cartesian4(-1,-1,1,1),W[1]=new e.Cartesian4(1,-1,1,1),W[2]=new e.Cartesian4(1,1,1,1),W[3]=new e.Cartesian4(-1,1,1,1);for(var X=new Array(4),Z=0;Z<4;++Z)X[Z]=new e.Cartesian4;S._computeNearFarPlanes=function(t,i,n,o,s,f,u,l){i=e.Matrix3.fromQuaternion(i,B),f=r.defaultValue(f,G),u=r.defaultValue(u,j);var h,p,d=r.defaultValue(l,U);f=e.Matrix3.getColumn(i,0,f),u=e.Matrix3.getColumn(i,1,u),d=e.Matrix3.getColumn(i,2,d),a.Cartesian3.normalize(f,f),a.Cartesian3.normalize(u,u),a.Cartesian3.normalize(d,d),a.Cartesian3.negate(f,f),f=e.Matrix4.computeView(t,d,u,f,L),0===n?(n=o.projectionMatrix,n=e.Matrix4.multiply(n,f,N),p=e.Matrix4.inverse(n,N)):h=e.Matrix4.inverseTransformation(f,N),r.defined(p)?(J[0]=o.near,J[1]=o.far):(J[0]=0,J[1]=o.near,J[2]=o.far);for(var c=0;c<2;++c)for(var m=0;m<4;++m){var C,_,y=e.Cartesian4.clone(W[m],X[m]);r.defined(p)?(C=1/(y=e.Matrix4.multiplyByVector(p,y,y)).w,a.Cartesian3.multiplyByScalar(y,C,y),a.Cartesian3.subtract(y,t,y),a.Cartesian3.normalize(y,y),_=a.Cartesian3.dot(d,y),a.Cartesian3.multiplyByScalar(y,J[c]/_,y),a.Cartesian3.add(y,t,y)):(r.defined(o._offCenterFrustum)&&(o=o._offCenterFrustum),C=J[c],_=J[c+1],y.x=.5*(y.x*(o.right-o.left)+o.left+o.right),y.y=.5*(y.y*(o.top-o.bottom)+o.bottom+o.top),y.z=.5*(y.z*(C-_)-C-_),y.w=1,e.Matrix4.multiplyByVector(h,y,y)),s[12*c+3*m]=y.x,s[12*c+3*m+1]=y.y,s[12*c+3*m+2]=y.z}},S.createGeometry=function(t){var i=t._frustumType,f=t._frustum,u=t._origin,l=t._orientation,h=t._drawNearPlane,p=t._vertexFormat,d=h?6:5,c=new Float64Array(72);S._computeNearFarPlanes(u,l,i,f,c);var m=24;c[m]=c[12],c[m+1]=c[13],c[m+2]=c[14],c[m+3]=c[0],c[m+4]=c[1],c[m+5]=c[2],c[m+6]=c[9],c[m+7]=c[10],c[m+8]=c[11],c[m+9]=c[21],c[m+10]=c[22],c[m+11]=c[23],c[m+=12]=c[15],c[m+1]=c[16],c[m+2]=c[17],c[m+3]=c[3],c[m+4]=c[4],c[m+5]=c[5],c[m+6]=c[0],c[m+7]=c[1],c[m+8]=c[2],c[m+9]=c[12],c[m+10]=c[13],c[m+11]=c[14],c[m+=12]=c[3],c[m+1]=c[4],c[m+2]=c[5],c[m+3]=c[15],c[m+4]=c[16],c[m+5]=c[17],c[m+6]=c[18],c[m+7]=c[19],c[m+8]=c[20],c[m+9]=c[6],c[m+10]=c[7],c[m+11]=c[8],c[m+=12]=c[6],c[m+1]=c[7],c[m+2]=c[8],c[m+3]=c[18],c[m+4]=c[19],c[m+5]=c[20],c[m+6]=c[21],c[m+7]=c[22],c[m+8]=c[23],c[m+9]=c[9],c[m+10]=c[10],c[m+11]=c[11],h||(c=c.subarray(12));var C,_,y,v,g=new s.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c})});(r.defined(p.normal)||r.defined(p.tangent)||r.defined(p.bitangent)||r.defined(p.st))&&(C=r.defined(p.normal)?new Float32Array(12*d):void 0,_=r.defined(p.tangent)?new Float32Array(12*d):void 0,y=r.defined(p.bitangent)?new Float32Array(12*d):void 0,v=r.defined(p.st)?new Float32Array(8*d):void 0,t=G,u=j,l=U,i=a.Cartesian3.negate(t,Q),f=a.Cartesian3.negate(u,K),p=a.Cartesian3.negate(l,Y),m=0,h&&(q(m,C,_,y,v,p,t,u),m+=12),q(m,C,_,y,v,l,i,u),q(m+=12,C,_,y,v,i,p,u),q(m+=12,C,_,y,v,f,p,i),q(m+=12,C,_,y,v,t,l,u),q(m+=12,C,_,y,v,u,l,i),r.defined(C)&&(g.normal=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C})),r.defined(_)&&(g.tangent=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:_})),r.defined(y)&&(g.bitangent=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),r.defined(v)&&(g.st=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:v})));for(var w=new Uint16Array(6*d),x=0;x<d;++x){var b=6*x,M=4*x;w[b]=M,w[1+b]=1+M,w[2+b]=2+M,w[3+b]=M,w[4+b]=2+M,w[5+b]=3+M}return new o.Geometry({attributes:g,indices:w,primitiveType:o.PrimitiveType.TRIANGLES,boundingSphere:e.BoundingSphere.fromVertices(c)})},t.FrustumGeometry=S,t.OrthographicFrustum=x,t.PerspectiveFrustum=z}));
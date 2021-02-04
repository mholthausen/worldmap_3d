define(["./when-54c2dc71","./Transforms-e9dbfb40","./Cartesian2-49b1de22","./Check-6c0211bc","./ComponentDatatype-6d99a1ee","./FrustumGeometry-46b45397","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./Math-44e92d6b","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./Plane-8f7e53d1","./VertexFormat-7572c785"],(function(e,t,r,n,a,u,i,o,c,s,p,m,d){"use strict";function h(n){var a,i,o=n.frustum,c=n.orientation,s=n.origin;n=e.defaultValue(n._drawNearPlane,!0),o instanceof u.PerspectiveFrustum?(a=0,i=u.PerspectiveFrustum.packedLength):o instanceof u.OrthographicFrustum&&(a=1,i=u.OrthographicFrustum.packedLength),this._frustumType=a,this._frustum=o.clone(),this._origin=r.Cartesian3.clone(s),this._orientation=t.Quaternion.clone(c),this._drawNearPlane=n,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+i+r.Cartesian3.packedLength+t.Quaternion.packedLength}h.pack=function(n,a,i){i=e.defaultValue(i,0);var o=n._frustumType,c=n._frustum;return 0===(a[i++]=o)?(u.PerspectiveFrustum.pack(c,a,i),i+=u.PerspectiveFrustum.packedLength):(u.OrthographicFrustum.pack(c,a,i),i+=u.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,a,i),i+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,a,i),a[i+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,a};var f=new u.PerspectiveFrustum,g=new u.OrthographicFrustum,_=new t.Quaternion,k=new r.Cartesian3;return h.unpack=function(n,a,i){a=e.defaultValue(a,0);var o,c=n[a++];0===c?(o=u.PerspectiveFrustum.unpack(n,a,f),a+=u.PerspectiveFrustum.packedLength):(o=u.OrthographicFrustum.unpack(n,a,g),a+=u.OrthographicFrustum.packedLength);var s=r.Cartesian3.unpack(n,a,k);a+=r.Cartesian3.packedLength;var p=t.Quaternion.unpack(n,a,_);return n=1===n[a+=t.Quaternion.packedLength],e.defined(i)?(a=c===i._frustumType?i._frustum:void 0,i._frustum=o.clone(a),i._frustumType=c,i._origin=r.Cartesian3.clone(s,i._origin),i._orientation=t.Quaternion.clone(p,i._orientation),i._drawNearPlane=n,i):new h({frustum:o,origin:s,orientation:p,_drawNearPlane:n})},h.createGeometry=function(e){var r=e._frustumType,n=e._frustum,c=e._origin,s=e._orientation,p=e._drawNearPlane;e=new Float64Array(24),u.FrustumGeometry._computeNearFarPlanes(c,s,r,n,e),n=new o.GeometryAttributes({position:new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e})});for(var m,d,h=p?2:1,f=new Uint16Array(8*(1+h)),g=p?0:1;g<2;++g)d=4*g,f[m=p?8*g:0]=d,f[m+1]=d+1,f[m+2]=d+1,f[m+3]=d+2,f[m+4]=d+2,f[m+5]=d+3,f[m+6]=d+3,f[m+7]=d;for(g=0;g<2;++g)d=4*g,f[m=8*(h+g)]=d,f[m+1]=d+4,f[m+2]=d+1,f[m+3]=d+5,f[m+4]=d+2,f[m+5]=d+6,f[m+6]=d+3,f[m+7]=d+7;return new i.Geometry({attributes:n,indices:f,primitiveType:i.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(e)})},function(t,r){return e.defined(r)&&(t=h.unpack(t,r)),h.createGeometry(t)}}));
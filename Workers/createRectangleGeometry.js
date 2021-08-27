define(["./when-ad3237a0","./Cartesian2-08065eec","./GeometryOffsetAttribute-03006e80","./Transforms-1142ce48","./Check-be2d5acb","./ComponentDatatype-a867ddaa","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./GeometryInstance-42129c83","./GeometryPipeline-3334f964","./IndexDatatype-9504f550","./Math-5ca9b250","./PolygonPipeline-ac773b7c","./RectangleGeometryLibrary-93ea1205","./VertexFormat-fc4fc84a","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./AttributeCompression-9fbb8447","./EncodedCartesian3-a785c24c","./IntersectionTests-75083888","./Plane-bb88dd7e","./EllipsoidRhumbLine-4a6ed5de"],(function(t,e,a,r,n,i,o,s,l,u,c,m,d,p,g,y,f,h,b,v,_,A,x){"use strict";var w=new e.Cartesian3,C=new e.Cartesian3,R=new e.Cartesian3,E=new e.Cartesian3,F=new e.Rectangle,G=new e.Cartesian2,P=new r.BoundingSphere,V=new r.BoundingSphere;function L(t,e){var a=new o.Geometry({attributes:new s.GeometryAttributes,primitiveType:o.PrimitiveType.TRIANGLES});return a.attributes.position=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(a.attributes.normal=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(a.attributes.tangent=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(a.attributes.bitangent=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),a}var D=new e.Cartesian3,M=new e.Cartesian3;function T(t,a){var n=t._vertexFormat,s=t._ellipsoid,l=a.height,u=a.width,m=a.northCap,d=a.southCap,g=0,y=l,f=l;t=0,m&&(--f,t+=g=1),d&&(--y,--f,t+=1),t+=u*f;for(var h=n.position?new Float64Array(3*t):void 0,b=n.st?new Float32Array(2*t):void 0,v=0,_=0,A=w,x=G,F=Number.MAX_VALUE,P=Number.MAX_VALUE,V=-Number.MAX_VALUE,D=-Number.MAX_VALUE,M=g;M<y;++M)for(var T=0;T<u;++T)p.RectangleGeometryLibrary.computePosition(a,s,n.st,M,T,A,x),h[v++]=A.x,h[v++]=A.y,h[v++]=A.z,n.st&&(b[_++]=x.x,b[_++]=x.y,F=Math.min(F,x.x),P=Math.min(P,x.y),V=Math.max(V,x.x),D=Math.max(D,x.y));if(m&&(p.RectangleGeometryLibrary.computePosition(a,s,n.st,0,0,A,x),h[v++]=A.x,h[v++]=A.y,h[v++]=A.z,n.st&&(b[_++]=x.x,b[_++]=x.y,F=x.x,P=x.y,V=x.x,D=x.y)),d&&(p.RectangleGeometryLibrary.computePosition(a,s,n.st,l-1,0,A,x),h[v++]=A.x,h[v++]=A.y,h[v]=A.z,n.st&&(b[_++]=x.x,b[_]=x.y,F=Math.min(F,x.x),P=Math.min(P,x.y),V=Math.max(V,x.x),D=Math.max(D,x.y))),n.st&&(F<0||P<0||1<V||1<D))for(var O=0;O<b.length;O+=2)b[O]=(b[O]-F)/(V-F),b[O+1]=(b[O+1]-P)/(D-P);g=function(t,a,n,i){var o=t.length,s=a.normal?new Float32Array(o):void 0,l=a.tangent?new Float32Array(o):void 0,u=a.bitangent?new Float32Array(o):void 0,c=0,m=E,d=R,p=C;if(a.normal||a.tangent||a.bitangent)for(var g=0;g<o;g+=3){var y=e.Cartesian3.fromArray(t,g,w),f=c+1,h=c+2;p=n.geodeticSurfaceNormal(y,p),(a.tangent||a.bitangent)&&(e.Cartesian3.cross(e.Cartesian3.UNIT_Z,p,d),r.Matrix3.multiplyByVector(i,d,d),e.Cartesian3.normalize(d,d),a.bitangent&&e.Cartesian3.normalize(e.Cartesian3.cross(p,d,m),m)),a.normal&&(s[c]=p.x,s[f]=p.y,s[h]=p.z),a.tangent&&(l[c]=d.x,l[f]=d.y,l[h]=d.z),a.bitangent&&(u[c]=m.x,u[f]=m.y,u[h]=m.z),c+=3}return L(a,{positions:t,normals:s,tangents:l,bitangents:u})}(h,n,s,a.tangentRotationMatrix),l=6*(u-1)*(f-1),m&&(l+=3*(u-1)),d&&(l+=3*(u-1));for(var N=c.IndexDatatype.createTypedArray(t,l),S=0,I=0,k=0;k<f-1;++k){for(var H=0;H<u-1;++H){var z=S,B=z+u,U=B+1,Y=z+1;N[I++]=z,N[I++]=B,N[I++]=Y,N[I++]=Y,N[I++]=B,N[I++]=U,++S}++S}if(m||d){var q,X,Q=t-1,W=t-1;if(m&&d&&(Q=t-2),S=0,m)for(k=0;k<u-1;k++)X=(q=S)+1,N[I++]=Q,N[I++]=q,N[I++]=X,++S;if(d)for(S=(f-1)*u,k=0;k<u-1;k++)X=(q=S)+1,N[I++]=q,N[I++]=W,N[I++]=X,++S}return g.indices=N,n.st&&(g.attributes.st=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:b})),g}function O(t,e,a,r,n){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a+2],t[e++]=n[a],t[e++]=n[a+1],t[e]=n[a+2],t}function N(t,e,a,r){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a],t[e]=r[a+1],t}var S=new g.VertexFormat,I=[new e.Cartesian3,new e.Cartesian3,new e.Cartesian3,new e.Cartesian3],k=new e.Cartographic,H=new e.Cartographic;function z(t,a,r,n,i){if(0===r)return e.Rectangle.clone(t,i);var o=p.RectangleGeometryLibrary.computeOptions(t,a,r,0,F,k);return t=o.height,a=o.width,r=I,p.RectangleGeometryLibrary.computePosition(o,n,!1,0,0,r[0]),p.RectangleGeometryLibrary.computePosition(o,n,!1,0,a-1,r[1]),p.RectangleGeometryLibrary.computePosition(o,n,!1,t-1,0,r[2]),p.RectangleGeometryLibrary.computePosition(o,n,!1,t-1,a-1,r[3]),e.Rectangle.fromCartesianArray(r,n,i)}function B(a){var r=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle,n=t.defaultValue(a.height,0),i=t.defaultValue(a.extrudedHeight,n);this._rectangle=e.Rectangle.clone(r),this._granularity=t.defaultValue(a.granularity,m.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.Ellipsoid.clone(t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(n,i),this._rotation=t.defaultValue(a.rotation,0),this._stRotation=t.defaultValue(a.stRotation,0),this._vertexFormat=g.VertexFormat.clone(t.defaultValue(a.vertexFormat,g.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(n,i),this._shadowVolume=t.defaultValue(a.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=a.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}B.packedLength=e.Rectangle.packedLength+e.Ellipsoid.packedLength+g.VertexFormat.packedLength+7,B.pack=function(a,r,n){return n=t.defaultValue(n,0),e.Rectangle.pack(a._rectangle,r,n),n+=e.Rectangle.packedLength,e.Ellipsoid.pack(a._ellipsoid,r,n),n+=e.Ellipsoid.packedLength,g.VertexFormat.pack(a._vertexFormat,r,n),n+=g.VertexFormat.packedLength,r[n++]=a._granularity,r[n++]=a._surfaceHeight,r[n++]=a._rotation,r[n++]=a._stRotation,r[n++]=a._extrudedHeight,r[n++]=a._shadowVolume?1:0,r[n]=t.defaultValue(a._offsetAttribute,-1),r};var U=new e.Rectangle,Y=e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),q={rectangle:U,ellipsoid:Y,vertexFormat:S,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};B.unpack=function(a,r,n){r=t.defaultValue(r,0);var i=e.Rectangle.unpack(a,r,U);r+=e.Rectangle.packedLength;var o=e.Ellipsoid.unpack(a,r,Y);r+=e.Ellipsoid.packedLength;var s=g.VertexFormat.unpack(a,r,S);r+=g.VertexFormat.packedLength;var l=a[r++],u=a[r++],c=a[r++],m=a[r++],d=a[r++],p=1===a[r++];return r=a[r],t.defined(n)?(n._rectangle=e.Rectangle.clone(i,n._rectangle),n._ellipsoid=e.Ellipsoid.clone(o,n._ellipsoid),n._vertexFormat=g.VertexFormat.clone(s,n._vertexFormat),n._granularity=l,n._surfaceHeight=u,n._rotation=c,n._stRotation=m,n._extrudedHeight=d,n._shadowVolume=p,n._offsetAttribute=-1===r?void 0:r,n):(q.granularity=l,q.height=u,q.rotation=c,q.stRotation=m,q.extrudedHeight=d,q.shadowVolume=p,q.offsetAttribute=-1===r?void 0:r,new B(q))},B.computeRectangle=function(a,r){var n=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle,i=t.defaultValue(a.granularity,m.CesiumMath.RADIANS_PER_DEGREE),o=t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84);return z(n,i,t.defaultValue(a.rotation,0),o,r)};var X=new r.Matrix3,Q=new r.Quaternion,W=new e.Cartographic;B.createGeometry=function(n){if(!m.CesiumMath.equalsEpsilon(n._rectangle.north,n._rectangle.south,m.CesiumMath.EPSILON10)&&!m.CesiumMath.equalsEpsilon(n._rectangle.east,n._rectangle.west,m.CesiumMath.EPSILON10)){var s=n._rectangle,y=n._ellipsoid,f=n._rotation,h=n._stRotation,b=n._vertexFormat,v=p.RectangleGeometryLibrary.computeOptions(s,n._granularity,f,h,F,k,H),_=X;0!==h||0!==f?(G=e.Rectangle.center(s,W),I=y.geodeticSurfaceNormalCartographic(G,D),r.Quaternion.fromAxisAngle(I,-h,Q),r.Matrix3.fromQuaternion(Q,_)):r.Matrix3.clone(r.Matrix3.IDENTITY,_);var A,x,G=n._surfaceHeight,I=n._extrudedHeight;return h=!m.CesiumMath.equalsEpsilon(G,I,0,m.CesiumMath.EPSILON2),v.lonScalar=1/n._rectangle.width,v.latScalar=1/n._rectangle.height,v.tangentRotationMatrix=_,s=n._rectangle,G=h?(A=function(r,n){var s=r._shadowVolume,p=r._offsetAttribute,y=r._vertexFormat,f=r._extrudedHeight,h=r._surfaceHeight,b=r._ellipsoid,v=n.height,_=n.width;s&&((H=g.VertexFormat.clone(y,S)).normal=!0,r._vertexFormat=H);var A=T(r,n);s&&(r._vertexFormat=y);var x=d.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,h,b,!1),F=2*(ut=(x=new Float64Array(x)).length),G=new Float64Array(F);G.set(x);var P=d.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,f,b);G.set(P,ut),A.attributes.position.values=G;var V,I,k,H=y.normal?new Float32Array(F):void 0;if(r=y.tangent?new Float32Array(F):void 0,h=y.bitangent?new Float32Array(F):void 0,f=y.st?new Float32Array(F/3*2):void 0,y.normal){for(I=A.attributes.normal.values,H.set(I),B=0;B<ut;B++)I[B]=-I[B];H.set(I,ut),A.attributes.normal.values=H}if(s){I=A.attributes.normal.values,y.normal||(A.attributes.normal=void 0);for(var z=new Float32Array(F),B=0;B<ut;B++)I[B]=-I[B];z.set(I,ut),A.attributes.extrudeDirection=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:z})}if((G=t.defined(p))&&(H=ut/3*2,z=new Uint8Array(H),z=p===a.GeometryOffsetAttribute.TOP?a.arrayFill(z,1,0,H/2):(k=p===a.GeometryOffsetAttribute.NONE?0:1,a.arrayFill(z,k)),A.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})),y.tangent){var U=A.attributes.tangent.values;for(r.set(U),B=0;B<ut;B++)U[B]=-U[B];r.set(U,ut),A.attributes.tangent.values=r}y.bitangent&&(W=A.attributes.bitangent.values,h.set(W),h.set(W,ut),A.attributes.bitangent.values=h),y.st&&(V=A.attributes.st.values,f.set(V),f.set(V,ut/3*2),A.attributes.st.values=f);var Y=A.indices,q=Y.length,X=ut/3,Q=c.IndexDatatype.createTypedArray(F/3,2*q);for(Q.set(Y),B=0;B<q;B+=3)Q[B+q]=Y[B+2]+X,Q[B+1+q]=Y[B+1]+X,Q[B+2+q]=Y[B]+X;A.indices=Q,r=n.northCap;var W=n.southCap;h=v,f=2,F=0,n=4,v=4,r&&(--f,--h,F+=1,n-=2,--v),W&&(--f,--h,F+=1,n-=2,--v),v=2*((F+=f*_+2*h-n)+v);var J=new Float64Array(3*v),j=s?new Float32Array(3*v):void 0,Z=G?new Uint8Array(v):void 0,K=y.st?new Float32Array(2*v):void 0,$=p===a.GeometryOffsetAttribute.TOP;G&&!$&&(k=p===a.GeometryOffsetAttribute.ALL?1:0,Z=a.arrayFill(Z,k));var tt=0,et=0,at=0,rt=0,nt=_*h;for(B=0;B<nt;B+=_)J=O(J,tt,ot=3*B,x,P),tt+=6,y.st&&(K=N(K,et,2*B,V),et+=4),s&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);if(W){var it=r?1+nt:nt,ot=3*it;for(B=0;B<2;B++)J=O(J,tt,ot,x,P),tt+=6,y.st&&(K=N(K,et,2*it,V),et+=4),s&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1)}else for(B=nt-_;B<nt;B++)J=O(J,tt,ot=3*B,x,P),tt+=6,y.st&&(K=N(K,et,2*B,V),et+=4),s&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);for(B=nt-1;0<B;B-=_)J=O(J,tt,ot=3*B,x,P),tt+=6,y.st&&(K=N(K,et,2*B,V),et+=4),s&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);if(r){var st=nt;for(ot=3*st,B=0;B<2;B++)J=O(J,tt,ot,x,P),tt+=6,y.st&&(K=N(K,et,2*st,V),et+=4),s&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1)}else for(B=_-1;0<=B;B--)J=O(J,tt,ot=3*B,x,P),tt+=6,y.st&&(K=N(K,et,2*B,V),et+=4),s&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);b=function(t,a,r){var n=t.length,i=a.normal?new Float32Array(n):void 0,o=a.tangent?new Float32Array(n):void 0,s=a.bitangent?new Float32Array(n):void 0,l=0,u=0,c=0,d=!0,p=E,g=R,y=C;if(a.normal||a.tangent||a.bitangent)for(var f=0;f<n;f+=6){var h,b=e.Cartesian3.fromArray(t,f,w),v=e.Cartesian3.fromArray(t,(f+6)%n,D);d&&(h=e.Cartesian3.fromArray(t,(f+3)%n,M),e.Cartesian3.subtract(v,b,v),e.Cartesian3.subtract(h,b,h),y=e.Cartesian3.normalize(e.Cartesian3.cross(h,v,y),y),d=!1),e.Cartesian3.equalsEpsilon(v,b,m.CesiumMath.EPSILON10)&&(d=!0),(a.tangent||a.bitangent)&&(p=r.geodeticSurfaceNormal(b,p),a.tangent&&(g=e.Cartesian3.normalize(e.Cartesian3.cross(p,y,g),g))),a.normal&&(i[l++]=y.x,i[l++]=y.y,i[l++]=y.z,i[l++]=y.x,i[l++]=y.y,i[l++]=y.z),a.tangent&&(o[u++]=g.x,o[u++]=g.y,o[u++]=g.z,o[u++]=g.x,o[u++]=g.y,o[u++]=g.z),a.bitangent&&(s[c++]=p.x,s[c++]=p.y,s[c++]=p.z,s[c++]=p.x,s[c++]=p.y,s[c++]=p.z)}return L(a,{positions:t,normals:i,tangents:o,bitangents:s})}(J,y,b),y.st&&(b.attributes.st=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:K})),s&&(b.attributes.extrudeDirection=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),G&&(b.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Z}));var lt=c.IndexDatatype.createTypedArray(v,6*F),ut=J.length/3,ct=0;for(B=0;B<ut-1;B+=2){var mt,dt=((mt=B)+2)%ut,pt=e.Cartesian3.fromArray(J,3*mt,D),gt=e.Cartesian3.fromArray(J,3*dt,M);e.Cartesian3.equalsEpsilon(pt,gt,m.CesiumMath.EPSILON10)||(gt=(2+(pt=(mt+1)%ut))%ut,lt[ct++]=mt,lt[ct++]=pt,lt[ct++]=dt,lt[ct++]=dt,lt[ct++]=pt,lt[ct++]=gt)}return b.indices=lt,(b=u.GeometryPipeline.combineInstances([new l.GeometryInstance({geometry:A}),new l.GeometryInstance({geometry:b})]))[0]}(n,v),h=r.BoundingSphere.fromRectangle3D(s,y,G,V),x=r.BoundingSphere.fromRectangle3D(s,y,I,P),r.BoundingSphere.union(h,x)):((A=T(n,v)).attributes.position.values=d.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,G,y,!1),t.defined(n._offsetAttribute)&&(x=A.attributes.position.values.length,v=new Uint8Array(x/3),x=n._offsetAttribute===a.GeometryOffsetAttribute.NONE?0:1,a.arrayFill(v,x),A.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:v})),r.BoundingSphere.fromRectangle3D(s,y,G)),b.position||delete A.attributes.position,new o.Geometry({attributes:A.attributes,indices:A.indices,primitiveType:A.primitiveType,boundingSphere:G,offsetAttribute:n._offsetAttribute})}},B.createShadowVolume=function(t,e,a){var r=t._granularity,n=t._ellipsoid;return e=e(r,n),a=a(r,n),new B({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:n,stRotation:t._stRotation,granularity:r,extrudedHeight:a,height:e,vertexFormat:g.VertexFormat.POSITION_ONLY,shadowVolume:!0})};var J=new e.Rectangle,j=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],Z=new o.Matrix2,K=new e.Cartographic;return Object.defineProperties(B.prototype,{rectangle:{get:function(){return t.defined(this._rotatedRectangle)||(this._rotatedRectangle=z(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return t.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];var a=e.Rectangle.clone(t._rectangle,J),r=t._granularity,n=t._ellipsoid,i=(a=z(a,r,t._rotation-t._stRotation,n,J),j);i[0].x=a.west,i[0].y=a.south,i[1].x=a.west,i[1].y=a.north,i[2].x=a.east,i[2].y=a.south;for(var s=t.rectangle,l=o.Matrix2.fromRotation(t._stRotation,Z),u=e.Rectangle.center(s,K),c=0;c<3;++c){var m=i[c];m.x-=u.longitude,m.y-=u.latitude,o.Matrix2.multiplyByVector(l,m,m),m.x+=u.longitude,m.y+=u.latitude,m.x=(m.x-s.west)/s.width,m.y=(m.y-s.south)/s.height}return r=i[0],n=i[1],a=i[2],t=new Array(6),e.Cartesian2.pack(r,t),e.Cartesian2.pack(n,t,2),e.Cartesian2.pack(a,t,4),t}(this)),this._textureCoordinateRotationPoints}}}),function(a,r){return(a=t.defined(r)?B.unpack(a,r):a)._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),a._rectangle=e.Rectangle.clone(a._rectangle),B.createGeometry(a)}}));
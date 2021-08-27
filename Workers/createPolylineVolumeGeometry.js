define(["./when-ad3237a0","./Cartesian2-08065eec","./arrayRemoveDuplicates-707c233c","./BoundingRectangle-8fed902e","./Transforms-1142ce48","./ComponentDatatype-a867ddaa","./PolylineVolumeGeometryLibrary-0e3fa363","./Check-be2d5acb","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./GeometryPipeline-3334f964","./IndexDatatype-9504f550","./Math-5ca9b250","./PolygonPipeline-ac773b7c","./VertexFormat-fc4fc84a","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-f8b1fc8b","./AxisAlignedBoundingBox-718a9087","./IntersectionTests-75083888","./Plane-bb88dd7e","./PolylinePipeline-05927ee2","./EllipsoidGeodesic-dc284f08","./EllipsoidRhumbLine-4a6ed5de","./AttributeCompression-9fbb8447","./EncodedCartesian3-a785c24c"],(function(e,t,n,a,i,r,o,l,s,p,c,d,u,m,y,g,h,f,v,b,P,E,_,k,C,L,V){"use strict";function F(n){var a=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).polylinePositions,i=n.shapePositions;this._positions=a,this._shape=i,this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(n.cornerType,o.CornerType.ROUNDED),this._vertexFormat=y.VertexFormat.clone(e.defaultValue(n.vertexFormat,y.VertexFormat.DEFAULT)),this._granularity=e.defaultValue(n.granularity,u.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry",a=1+a.length*t.Cartesian3.packedLength,a+=1+i.length*t.Cartesian2.packedLength,this.packedLength=a+t.Ellipsoid.packedLength+y.VertexFormat.packedLength+2}F.pack=function(n,a,i){var r;i=e.defaultValue(i,0);var o=n._positions,l=o.length;for(a[i++]=l,r=0;r<l;++r,i+=t.Cartesian3.packedLength)t.Cartesian3.pack(o[r],a,i);var s=n._shape;for(l=s.length,a[i++]=l,r=0;r<l;++r,i+=t.Cartesian2.packedLength)t.Cartesian2.pack(s[r],a,i);return t.Ellipsoid.pack(n._ellipsoid,a,i),i+=t.Ellipsoid.packedLength,y.VertexFormat.pack(n._vertexFormat,a,i),i+=y.VertexFormat.packedLength,a[i++]=n._cornerType,a[i]=n._granularity,a};var x=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),A=new y.VertexFormat,T={polylinePositions:void 0,shapePositions:void 0,ellipsoid:x,vertexFormat:A,cornerType:void 0,granularity:void 0};F.unpack=function(n,a,i){a=e.defaultValue(a,0);for(var r=n[a++],o=new Array(r),l=0;l<r;++l,a+=t.Cartesian3.packedLength)o[l]=t.Cartesian3.unpack(n,a);r=n[a++];var s=new Array(r);for(l=0;l<r;++l,a+=t.Cartesian2.packedLength)s[l]=t.Cartesian2.unpack(n,a);var p=t.Ellipsoid.unpack(n,a,x);a+=t.Ellipsoid.packedLength;var c=y.VertexFormat.unpack(n,a,A);a+=y.VertexFormat.packedLength;var d=n[a++],u=n[a];return e.defined(i)?(i._positions=o,i._shape=s,i._ellipsoid=t.Ellipsoid.clone(p,i._ellipsoid),i._vertexFormat=y.VertexFormat.clone(c,i._vertexFormat),i._cornerType=d,i._granularity=u,i):(T.polylinePositions=o,T.shapePositions=s,T.cornerType=d,T.granularity=u,new F(T))};var G=new a.BoundingRectangle;return F.createGeometry=function(e){var l=e._positions,u=n.arrayRemoveDuplicates(l,t.Cartesian3.equalsEpsilon),y=e._shape;if(y=o.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(y),!(u.length<2||y.length<3))return m.PolygonPipeline.computeWindingOrder2D(y)===m.WindingOrder.CLOCKWISE&&y.reverse(),l=a.BoundingRectangle.fromPoints(y,G),function(e,t,n,a){var l=new p.GeometryAttributes;a.position&&(l.position=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var u,y,g,h,f,v=t.length,b=e.length/3,P=(b-2*v)/(2*v),E=m.PolygonPipeline.triangulate(t),_=(P-1)*v*6+2*E.length,k=d.IndexDatatype.createTypedArray(b,_),C=2*v,L=0;for(w=0;w<P-1;w++){for(u=0;u<v-1;u++)f=(y=2*u+w*v*2)+C,h=(g=y+1)+C,k[L++]=g,k[L++]=y,k[L++]=h,k[L++]=h,k[L++]=y,k[L++]=f;h=(g=1+(y=2*v-2+w*v*2))+C,f=y+C,k[L++]=g,k[L++]=y,k[L++]=h,k[L++]=h,k[L++]=y,k[L++]=f}if(a.st||a.tangent||a.bitangent){for(var V,F,x=new Float32Array(2*b),A=1/(P-1),T=1/n.height,G=n.height/2,D=0,w=0;w<P;w++){for(F=T*(t[0].y+G),x[D++]=V=w*A,x[D++]=F,u=1;u<v;u++)F=T*(t[u].y+G),x[D++]=V,x[D++]=F,x[D++]=V,x[D++]=F;F=T*(t[0].y+G),x[D++]=V,x[D++]=F}for(u=0;u<v;u++)F=T*(t[u].y+G),x[D++]=V=0,x[D++]=F;for(u=0;u<v;u++)F=T*(t[u].y+G),x[D++]=V=(P-1)*A,x[D++]=F;l.st=new s.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(x)})}var R=b-2*v;for(w=0;w<E.length;w+=3){var B=E[w]+R,S=E[w+1]+R,I=E[w+2]+R;k[L++]=B,k[L++]=S,k[L++]=I,k[L++]=I+v,k[L++]=S+v,k[L++]=B+v}if(e=new s.Geometry({attributes:l,indices:k,boundingSphere:i.BoundingSphere.fromVertices(e),primitiveType:s.PrimitiveType.TRIANGLES}),a.normal&&(e=c.GeometryPipeline.computeNormal(e)),a.tangent||a.bitangent){try{e=c.GeometryPipeline.computeTangentAndBitangent(e)}catch(e){o.oneTimeWarning("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}a.tangent||(e.attributes.tangent=void 0),a.bitangent||(e.attributes.bitangent=void 0),a.st||(e.attributes.st=void 0)}return e}(o.PolylineVolumeGeometryLibrary.computePositions(u,y,l,e,!0),y,l,e._vertexFormat)},function(n,a){return(n=e.defined(a)?F.unpack(n,a):n)._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),F.createGeometry(n)}}));
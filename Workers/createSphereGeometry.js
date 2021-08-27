define(["./when-ad3237a0","./Cartesian2-08065eec","./Check-be2d5acb","./EllipsoidGeometry-3051a04d","./VertexFormat-fc4fc84a","./Math-5ca9b250","./GeometryOffsetAttribute-03006e80","./Transforms-1142ce48","./combine-1510933d","./RuntimeError-767bd866","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550"],(function(e,t,r,i,a,o,n,s,c,d,l,m,u,p,y){"use strict";function G(r){var a=e.defaultValue(r.radius,1);r={radii:new t.Cartesian3(a,a,a),stackPartitions:r.stackPartitions,slicePartitions:r.slicePartitions,vertexFormat:r.vertexFormat},this._ellipsoidGeometry=new i.EllipsoidGeometry(r),this._workerName="createSphereGeometry"}G.packedLength=i.EllipsoidGeometry.packedLength,G.pack=function(e,t,r){return i.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var f=new i.EllipsoidGeometry,k={radius:void 0,radii:new t.Cartesian3,vertexFormat:new a.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return G.unpack=function(r,o,n){return o=i.EllipsoidGeometry.unpack(r,o,f),k.vertexFormat=a.VertexFormat.clone(o._vertexFormat,k.vertexFormat),k.stackPartitions=o._stackPartitions,k.slicePartitions=o._slicePartitions,e.defined(n)?(t.Cartesian3.clone(o._radii,k.radii),n._ellipsoidGeometry=new i.EllipsoidGeometry(k),n):(k.radius=o._radii.x,new G(k))},G.createGeometry=function(e){return i.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,r){return e.defined(r)&&(t=G.unpack(t,r)),G.createGeometry(t)}}));
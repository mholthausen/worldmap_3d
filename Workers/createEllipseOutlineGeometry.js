define(["./Matrix3-a348023f","./defaultValue-0a909f67","./EllipseOutlineGeometry-63241999","./Math-e97915da","./Transforms-01e95659","./Matrix2-7146c9ca","./RuntimeError-06c93819","./combine-ca22a614","./ComponentDatatype-77274976","./WebGLConstants-a8cc3e8c","./EllipseGeometryLibrary-e689e77b","./GeometryAttribute-f5d71750","./GeometryAttributes-f06a2792","./GeometryOffsetAttribute-04332ce7","./IndexDatatype-2149f06c"],(function(e,t,r,i,n,a,l,o,c,s,u,f,m,p,y){"use strict";return function(i,n){return t.defined(n)&&(i=r.EllipseOutlineGeometry.unpack(i,n)),i._center=e.Cartesian3.clone(i._center),i._ellipsoid=e.Ellipsoid.clone(i._ellipsoid),r.EllipseOutlineGeometry.createGeometry(i)}}));
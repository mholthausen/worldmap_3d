define(["./Cartesian2-08065eec","./when-ad3237a0","./EllipseOutlineGeometry-df33fba6","./Check-be2d5acb","./Math-5ca9b250","./GeometryOffsetAttribute-03006e80","./Transforms-1142ce48","./combine-1510933d","./RuntimeError-767bd866","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./EllipseGeometryLibrary-002b2f96","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550"],(function(e,t,r,n,i,a,o,c,l,d,s,u,b,m,f){"use strict";return function(n,i){return(n=t.defined(i)?r.EllipseOutlineGeometry.unpack(n,i):n)._center=e.Cartesian3.clone(n._center),n._ellipsoid=e.Ellipsoid.clone(n._ellipsoid),r.EllipseOutlineGeometry.createGeometry(n)}}));
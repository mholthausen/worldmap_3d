define(["exports","./Cartesian2-49b1de22","./when-54c2dc71","./Check-6c0211bc","./Transforms-e9dbfb40","./Math-44e92d6b","./GeometryAttribute-669569db"],(function(t,n,a,r,e,o,s){"use strict";var i=Math.cos,g=Math.sin,h=Math.sqrt,u={computePosition:function(t,n,r,e,o,s,u){var c=n.radiiSquared,C=t.nwCorner,l=t.boundingRectangle,d=C.latitude-t.granYCos*e+o*t.granXSin,S=i(d),w=g(d),M=c.z*w,X=C.longitude+e*t.granYSin+o*t.granXCos;n=S*i(X),C=S*g(X),S=c.x*n,c=c.y*C,w=h(S*n+c*C+M*w),s.x=S/w,s.y=c/w,s.z=M/w,r&&(r=t.stNwCorner,a.defined(r)?(d=r.latitude-t.stGranYCos*e+o*t.stGranXSin,X=r.longitude+e*t.stGranYSin+o*t.stGranXCos,u.x=(X-t.stWest)*t.lonScalar,u.y=(d-t.stSouth)*t.latScalar):(u.x=(X-l.west)*t.lonScalar,u.y=(d-l.south)*t.latScalar))}},c=new s.Matrix2,C=new n.Cartesian3,l=new n.Cartographic,d=new n.Cartesian3,S=new e.GeographicProjection;function w(t,a,r,e,o,i,g){var h=Math.cos(a),u=e*h,l=r*h,w=Math.sin(a),M=e*w,X=r*w;return C=S.project(t,C),C=n.Cartesian3.subtract(C,d,C),h=s.Matrix2.fromRotation(a,c),C=s.Matrix2.multiplyByVector(h,C,C),C=n.Cartesian3.add(C,d,C),--i,--g,r=(e=(t=S.unproject(C,t)).latitude)+i*X,w=e-u*g,a=e-u*g+i*X,h=Math.max(e,r,w,a),e=Math.min(e,r,w,a),w=(r=t.longitude)+i*l,a=r+g*M,i=r+g*M+i*l,{north:h,south:e,east:Math.max(r,w,a,i),west:Math.min(r,w,a,i),granYCos:u,granYSin:M,granXCos:l,granXSin:X,nwCorner:t}}u.computeOptions=function(t,a,r,e,s,i,g){var h=t.east,u=t.west,c=t.north,C=t.south,M=!1,X=!1;c===o.CesiumMath.PI_OVER_TWO&&(M=!0),C===-o.CesiumMath.PI_OVER_TWO&&(X=!0);var Y,m,p=c-C,b=(G=h<u?o.CesiumMath.TWO_PI-u+h:h-u)/((Y=Math.ceil(G/a)+1)-1),G=p/((m=Math.ceil(p/a)+1)-1);return p=n.Rectangle.northwest(t,i),a=n.Rectangle.center(t,l),0===r&&0===e||(a.longitude<p.longitude&&(a.longitude+=o.CesiumMath.TWO_PI),d=S.project(a,d)),X={granYCos:i=G,granYSin:0,granXCos:a=b,granXSin:0,nwCorner:p,boundingRectangle:s=n.Rectangle.clone(t,s),width:Y,height:m,northCap:M,southCap:X},0!==r&&(c=(p=w(p,r,b,G,0,Y,m)).north,C=p.south,h=p.east,u=p.west,X.granYCos=p.granYCos,X.granYSin=p.granYSin,X.granXCos=p.granXCos,X.granXSin=p.granXSin,s.north=c,s.south=C,s.east=h,s.west=u),0!==e&&(r-=e,m=w(g=n.Rectangle.northwest(s,g),r,b,G,0,Y,m),X.stGranYCos=m.granYCos,X.stGranXCos=m.granXCos,X.stGranYSin=m.granYSin,X.stGranXSin=m.granXSin,X.stNwCorner=g,X.stWest=m.west,X.stSouth=m.south),X},t.RectangleGeometryLibrary=u}));
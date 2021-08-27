define(["exports","./Cartesian2-08065eec","./PolylineVolumeGeometryLibrary-0e3fa363","./when-ad3237a0","./Math-5ca9b250","./Transforms-1142ce48","./PolylinePipeline-05927ee2"],(function(a,e,r,n,t,i,s){"use strict";var o={},C=new e.Cartesian3,l=new e.Cartesian3,y=new e.Cartesian3,u=new e.Cartesian3,c=[new e.Cartesian3,new e.Cartesian3],d=new e.Cartesian3,p=new e.Cartesian3,m=new e.Cartesian3,g=new e.Cartesian3,h=new e.Cartesian3,f=new e.Cartesian3,w=new e.Cartesian3,z=new e.Cartesian3,x=new e.Cartesian3,P=new e.Cartesian3,A=new i.Quaternion,B=new i.Matrix3;function v(a,n,s,o,y){var u=e.Cartesian3.angleBetween(e.Cartesian3.subtract(n,a,C),e.Cartesian3.subtract(s,a,l)),c=o===r.CornerType.BEVELED?1:Math.ceil(u/t.CesiumMath.toRadians(5))+1,d=(o=3*c,new Array(o));d[o-3]=s.x,d[o-2]=s.y,d[o-1]=s.z;var p=y?i.Matrix3.fromQuaternion(i.Quaternion.fromAxisAngle(e.Cartesian3.negate(a,C),u/c,A),B):i.Matrix3.fromQuaternion(i.Quaternion.fromAxisAngle(a,u/c,A),B),m=0;n=e.Cartesian3.clone(n,C);for(var g=0;g<c;g++)n=i.Matrix3.multiplyByVector(p,n,n),d[m++]=n.x,d[m++]=n.y,d[m++]=n.z;return d}function E(a,r,n,t){var i=C;return[(t||(r=e.Cartesian3.negate(r,r)),i=e.Cartesian3.add(a,r,i)).x,i.y,i.z,n.x,n.y,n.z]}function S(a,r,n,t){for(var i=new Array(a.length),s=new Array(a.length),o=e.Cartesian3.multiplyByScalar(r,n,C),c=e.Cartesian3.negate(o,l),d=0,p=a.length-1,m=0;m<a.length;m+=3){var g=e.Cartesian3.fromArray(a,m,y),h=e.Cartesian3.add(g,c,u);i[d++]=h.x,i[d++]=h.y,i[d++]=h.z,g=e.Cartesian3.add(g,o,u),s[p--]=g.z,s[p--]=g.y,s[p--]=g.x}return t.push(i,s),t}o.addAttribute=function(a,e,r,t){var i=e.x,s=e.y;e=e.z,n.defined(r)&&(a[r]=i,a[r+1]=s,a[r+2]=e),n.defined(t)&&(a[t]=e,a[t-1]=s,a[t-2]=i)};var b=new e.Cartesian3,D=new e.Cartesian3;o.computePositions=function(a){var n=a.granularity,i=a.positions,o=a.ellipsoid,l=a.width/2,y=a.cornerType,u=a.saveAttributes,A=d,B=p,M=m,T=g,N=h,L=f,O=w,R=z,V=x,Q=P,U=[],G=u?[]:void 0,I=u?[]:void 0,q=i[0],j=i[1];B=e.Cartesian3.normalize(e.Cartesian3.subtract(j,q,B),B),A=o.geodeticSurfaceNormal(q,A),T=e.Cartesian3.normalize(e.Cartesian3.cross(A,B,T),T),u&&(G.push(T.x,T.y,T.z),I.push(A.x,A.y,A.z)),O=e.Cartesian3.clone(q,O),q=j,M=e.Cartesian3.negate(B,M);for(var k,F,H,J,K,W,X,Y=[],Z=i.length,$=1;$<Z-1;$++){A=o.geodeticSurfaceNormal(q,A),j=i[$+1],B=e.Cartesian3.normalize(e.Cartesian3.subtract(j,q,B),B),N=e.Cartesian3.normalize(e.Cartesian3.add(B,M,N),N);var _=e.Cartesian3.multiplyByScalar(A,e.Cartesian3.dot(B,A),b);e.Cartesian3.subtract(B,_,_),e.Cartesian3.normalize(_,_);var aa=e.Cartesian3.multiplyByScalar(A,e.Cartesian3.dot(M,A),D);e.Cartesian3.subtract(M,aa,aa),e.Cartesian3.normalize(aa,aa),t.CesiumMath.equalsEpsilon(Math.abs(e.Cartesian3.dot(_,aa)),1,t.CesiumMath.EPSILON7)||(N=e.Cartesian3.cross(N,A,N),N=e.Cartesian3.cross(A,N,N),N=e.Cartesian3.normalize(N,N),_=l/Math.max(.25,e.Cartesian3.magnitude(e.Cartesian3.cross(N,M,C))),aa=r.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(B,M,q,o),N=e.Cartesian3.multiplyByScalar(N,_,N),aa?(R=e.Cartesian3.add(q,N,R),Q=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(T,l,Q),Q),V=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(T,2*l,V),V),c[0]=e.Cartesian3.clone(O,c[0]),c[1]=e.Cartesian3.clone(Q,c[1]),U=S(s.PolylinePipeline.generateArc({positions:c,granularity:n,ellipsoid:o}),T,l,U),u&&(G.push(T.x,T.y,T.z),I.push(A.x,A.y,A.z)),L=e.Cartesian3.clone(V,L),T=e.Cartesian3.normalize(e.Cartesian3.cross(A,B,T),T),V=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(T,2*l,V),V),O=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(T,l,O),O),y===r.CornerType.ROUNDED||y===r.CornerType.BEVELED?Y.push({leftPositions:v(R,L,V,y,aa)}):Y.push({leftPositions:E(q,e.Cartesian3.negate(N,N),V,aa)})):(V=e.Cartesian3.add(q,N,V),Q=e.Cartesian3.add(V,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(T,l,Q),Q),Q),R=e.Cartesian3.add(V,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(T,2*l,R),R),R),c[0]=e.Cartesian3.clone(O,c[0]),c[1]=e.Cartesian3.clone(Q,c[1]),U=S(s.PolylinePipeline.generateArc({positions:c,granularity:n,ellipsoid:o}),T,l,U),u&&(G.push(T.x,T.y,T.z),I.push(A.x,A.y,A.z)),L=e.Cartesian3.clone(R,L),T=e.Cartesian3.normalize(e.Cartesian3.cross(A,B,T),T),R=e.Cartesian3.add(V,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(T,2*l,R),R),R),O=e.Cartesian3.add(V,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(T,l,O),O),O),y===r.CornerType.ROUNDED||y===r.CornerType.BEVELED?Y.push({rightPositions:v(V,L,R,y,aa)}):Y.push({rightPositions:E(q,N,R,aa)})),M=e.Cartesian3.negate(B,M)),q=j}return A=o.geodeticSurfaceNormal(q,A),c[0]=e.Cartesian3.clone(O,c[0]),c[1]=e.Cartesian3.clone(q,c[1]),U=S(s.PolylinePipeline.generateArc({positions:c,granularity:n,ellipsoid:o}),T,l,U),u&&(G.push(T.x,T.y,T.z),I.push(A.x,A.y,A.z)),y===r.CornerType.ROUNDED&&(F=d,H=m,J=(k=U)[1],K=e.Cartesian3.fromArray(k[1],J.length-3,p),H=e.Cartesian3.fromArray(k[0],0,H),W=v(F=e.Cartesian3.midpoint(K,H,F),K,H,r.CornerType.ROUNDED,!1),a=k[(X=k.length-1)-1],J=k[X],K=e.Cartesian3.fromArray(a,a.length-3,K),H=e.Cartesian3.fromArray(J,0,H),H=[W,v(F=e.Cartesian3.midpoint(K,H,F),K,H,r.CornerType.ROUNDED,!1)]),{positions:U,corners:Y,lefts:G,normals:I,endPositions:H}},a.CorridorGeometryLibrary=o}));
define(["./GeometryOffsetAttribute-03006e80","./arrayRemoveDuplicates-707c233c","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./ComponentDatatype-a867ddaa","./PolylineVolumeGeometryLibrary-0e3fa363","./CorridorGeometryLibrary-0fba23cb","./when-ad3237a0","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550","./Math-5ca9b250","./PolygonPipeline-ac773b7c","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-f8b1fc8b","./AxisAlignedBoundingBox-718a9087","./IntersectionTests-75083888","./Plane-bb88dd7e","./PolylinePipeline-05927ee2","./EllipsoidGeodesic-dc284f08","./EllipsoidRhumbLine-4a6ed5de"],(function(e,t,i,r,o,a,n,s,l,d,u,p,h,f,y,c,g,b,m,A,v,_,E,C){"use strict";var G=new r.Cartesian3,T=new r.Cartesian3,P=new r.Cartesian3;function w(e,t){var i,o=[],h=e.positions,f=e.corners,y=e.endPositions,c=new u.GeometryAttributes,g=0,b=0,m=0;for(M=0;M<h.length;M+=2)g+=i=h[M].length-3,m+=i/3*4,b+=h[M+1].length-3;for(g+=3,b+=3,M=0;M<f.length;M++){var A=f[M],v=f[M].leftPositions;l.defined(v)?g+=i=v.length:b+=i=f[M].rightPositions.length,m+=i/3*2}var _,E=l.defined(y);E&&(g+=_=y[0].length-3,b+=_,m+=4*(_/=3)),e=g+b;var C,w,L,D,k=new Float64Array(e),x=0,N=e-1,O=_/2,V=p.IndexDatatype.createTypedArray(e/3,m+4),H=0;if(V[H++]=x/3,V[H++]=(N-2)/3,E){o.push(x/3);for(var I=G,S=T,B=y[0],M=0;M<O;M++)I=r.Cartesian3.fromArray(B,3*(O-1-M),I),S=r.Cartesian3.fromArray(B,3*(O+M),S),s.CorridorGeometryLibrary.addAttribute(k,S,x),s.CorridorGeometryLibrary.addAttribute(k,I,void 0,N),D=1+(w=x/3),L=(C=(N-2)/3)-1,V[H++]=C,V[H++]=L,V[H++]=w,V[H++]=D,x+=3,N-=3}var R=0,U=h[R++],F=h[R++];for(k.set(U,x),k.set(F,N-F.length+1),i=F.length-3,o.push(x/3,(N-2)/3),M=0;M<i;M+=3)D=1+(w=x/3),L=(C=(N-2)/3)-1,V[H++]=C,V[H++]=L,V[H++]=w,V[H++]=D,x+=3,N-=3;for(M=0;M<f.length;M++){var Y,q,W=(A=f[M]).leftPositions,J=A.rightPositions,j=P;if(l.defined(W)){for(N-=3,q=L,o.push(D),Y=0;Y<W.length/3;Y++)j=r.Cartesian3.fromArray(W,3*Y,j),V[H++]=q-Y-1,V[H++]=q-Y,s.CorridorGeometryLibrary.addAttribute(k,j,void 0,N),N-=3;o.push(q-Math.floor(W.length/6)),t===n.CornerType.BEVELED&&o.push((N-2)/3+1),x+=3}else{for(x+=3,q=D,o.push(L),Y=0;Y<J.length/3;Y++)j=r.Cartesian3.fromArray(J,3*Y,j),V[H++]=q+Y,V[H++]=q+Y+1,s.CorridorGeometryLibrary.addAttribute(k,j,x),x+=3;o.push(q+Math.floor(J.length/6)),t===n.CornerType.BEVELED&&o.push(x/3-1),N-=3}for(U=h[R++],F=h[R++],U.splice(0,3),F.splice(F.length-3,3),k.set(U,x),k.set(F,N-F.length+1),i=F.length-3,Y=0;Y<F.length;Y+=3)w=(D=x/3)-1,V[H++]=C=1+(L=(N-2)/3),V[H++]=L,V[H++]=w,V[H++]=D,x+=3,N-=3;x-=3,N+=3,o.push(x/3,(N-2)/3)}if(E){x+=3,N-=3,I=G,S=T;var z=y[1];for(M=0;M<O;M++)I=r.Cartesian3.fromArray(z,3*(_-M-1),I),S=r.Cartesian3.fromArray(z,3*M,S),s.CorridorGeometryLibrary.addAttribute(k,I,void 0,N),s.CorridorGeometryLibrary.addAttribute(k,S,x),w=(D=x/3)-1,V[H++]=C=1+(L=(N-2)/3),V[H++]=L,V[H++]=w,V[H++]=D,x+=3,N-=3;o.push(x/3)}else o.push(x/3,(N-2)/3);return V[H++]=x/3,V[H++]=(N-2)/3,c.position=new d.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:k}),{attributes:c,indices:V,wallIndices:o}}function L(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions,i=e.width,o=l.defaultValue(e.height,0),a=l.defaultValue(e.extrudedHeight,o);this._positions=t,this._ellipsoid=r.Ellipsoid.clone(l.defaultValue(e.ellipsoid,r.Ellipsoid.WGS84)),this._width=i,this._height=Math.max(o,a),this._extrudedHeight=Math.min(o,a),this._cornerType=l.defaultValue(e.cornerType,n.CornerType.ROUNDED),this._granularity=l.defaultValue(e.granularity,h.CesiumMath.RADIANS_PER_DEGREE),this._offsetAttribute=e.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+t.length*r.Cartesian3.packedLength+r.Ellipsoid.packedLength+6}L.pack=function(e,t,i){i=l.defaultValue(i,0);var o=e._positions,a=o.length;t[i++]=a;for(var n=0;n<a;++n,i+=r.Cartesian3.packedLength)r.Cartesian3.pack(o[n],t,i);return r.Ellipsoid.pack(e._ellipsoid,t,i),i+=r.Ellipsoid.packedLength,t[i++]=e._width,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._cornerType,t[i++]=e._granularity,t[i]=l.defaultValue(e._offsetAttribute,-1),t};var D=r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),k={positions:void 0,ellipsoid:D,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};return L.unpack=function(e,t,i){t=l.defaultValue(t,0);for(var o=e[t++],a=new Array(o),n=0;n<o;++n,t+=r.Cartesian3.packedLength)a[n]=r.Cartesian3.unpack(e,t);var s=r.Ellipsoid.unpack(e,t,D);t+=r.Ellipsoid.packedLength;var d=e[t++],u=e[t++],p=e[t++],h=e[t++],f=e[t++],y=e[t];return l.defined(i)?(i._positions=a,i._ellipsoid=r.Ellipsoid.clone(s,i._ellipsoid),i._width=d,i._height=u,i._extrudedHeight=p,i._cornerType=h,i._granularity=f,i._offsetAttribute=-1===y?void 0:y,i):(k.positions=a,k.width=d,k.height=u,k.extrudedHeight=p,k.cornerType=h,k.granularity=f,k.offsetAttribute=-1===y?void 0:y,new L(k))},L.createGeometry=function(o){var n=o._positions,u=o._width,y=o._ellipsoid,c=(n=function(e,t){for(var i=0;i<e.length;i++)e[i]=t.scaleToGeodeticSurface(e[i],e[i]);return e}(n,y),t.arrayRemoveDuplicates(n,r.Cartesian3.equalsEpsilon));if(!(c.length<2||u<=0)){var g,b=o._height,m=o._extrudedHeight;n=!h.CesiumMath.equalsEpsilon(b,m,0,h.CesiumMath.EPSILON2),u={ellipsoid:y,positions:c,width:u,cornerType:o._cornerType,granularity:o._granularity,saveAttributes:!1},n?(u.height=b,u.extrudedHeight=m,u.offsetAttribute=o._offsetAttribute,g=function(t){var i=t.ellipsoid,r=(c=w(s.CorridorGeometryLibrary.computePositions(t),t.cornerType)).wallIndices,o=t.height,n=t.extrudedHeight,u=c.attributes,h=c.indices,y=(g=u.position.values).length;(b=new Float64Array(y)).set(g);var c=new Float64Array(2*y),g=f.PolygonPipeline.scaleToGeodeticHeight(g,o,i),b=f.PolygonPipeline.scaleToGeodeticHeight(b,n,i);c.set(g),c.set(b,y),u.position.values=c,y/=3,l.defined(t.offsetAttribute)&&(b=new Uint8Array(2*y),b=t.offsetAttribute===e.GeometryOffsetAttribute.TOP?e.arrayFill(b,1,0,y):(t=t.offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1,e.arrayFill(b,t)),u.applyOffset=new d.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:b}));var m=h.length,A=p.IndexDatatype.createTypedArray(c.length/3,2*(m+r.length));A.set(h);for(var v,_,E=m,C=0;C<m;C+=2){var G=h[C],T=h[C+1];A[E++]=G+y,A[E++]=T+y}for(C=0;C<r.length;C++)_=(v=r[C])+y,A[E++]=v,A[E++]=_;return{attributes:u,indices:A}}(u)):((g=w(s.CorridorGeometryLibrary.computePositions(u),u.cornerType)).attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(g.attributes.position.values,b,y),l.defined(o._offsetAttribute)&&(A=g.attributes.position.values.length,v=new Uint8Array(A/3),A=o._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1,e.arrayFill(v,A),g.attributes.applyOffset=new d.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:v})));var A=g.attributes,v=i.BoundingSphere.fromVertices(A.position.values,void 0,3);return new d.Geometry({attributes:A,indices:g.indices,primitiveType:d.PrimitiveType.LINES,boundingSphere:v,offsetAttribute:o._offsetAttribute})}},function(e,t){return(e=l.defined(t)?L.unpack(e,t):e)._ellipsoid=r.Ellipsoid.clone(e._ellipsoid),L.createGeometry(e)}}));
define(["./AttributeCompression-9711314b","./EllipsoidTangentPlane-7dd3130c","./Transforms-d5dbea8d","./Cartesian2-b4b7b0b3","./when-208fe5b0","./TerrainEncoding-cdabb65b","./IndexDatatype-da7c58eb","./Math-8386669c","./OrientedBoundingBox-9c75ee89","./Check-5e798bbf","./WebMercatorProjection-1b058022","./createTaskProcessorWorker","./IntersectionTests-eb44dd99","./Plane-06d5a63d","./RuntimeError-7f634f5d","./ComponentDatatype-ce69354e","./WebGLConstants-76bb35d1"],(function(e,t,r,n,i,o,a,s,d,c,u,h,l,I,m,g,T){"use strict";function p(){c.DeveloperError.throwInstantiationError()}Object.defineProperties(p.prototype,{errorEvent:{get:c.DeveloperError.throwInstantiationError},credit:{get:c.DeveloperError.throwInstantiationError},tilingScheme:{get:c.DeveloperError.throwInstantiationError},ready:{get:c.DeveloperError.throwInstantiationError},readyPromise:{get:c.DeveloperError.throwInstantiationError},hasWaterMask:{get:c.DeveloperError.throwInstantiationError},hasVertexNormals:{get:c.DeveloperError.throwInstantiationError},availability:{get:c.DeveloperError.throwInstantiationError}});var E=[];p.getRegularGridIndices=function(e,t){var r=E[e];i.defined(r)||(E[e]=r=[]);var n=r[t];return i.defined(n)||N(e,t,n=e*t<s.CesiumMath.SIXTY_FOUR_KILOBYTES?r[t]=new Uint16Array((e-1)*(t-1)*6):r[t]=new Uint32Array((e-1)*(t-1)*6),0),n};var y=[];p.getRegularGridIndicesAndEdgeIndices=function(e,t){var r=y[e];i.defined(r)||(y[e]=r=[]);var n,o,a,s,d=r[t];return i.defined(d)||(n=p.getRegularGridIndices(e,t),o=(s=v(e,t)).westIndicesSouthToNorth,a=s.southIndicesEastToWest,e=s.eastIndicesNorthToSouth,s=s.northIndicesWestToEast,d=r[t]={indices:n,westIndicesSouthToNorth:o,southIndicesEastToWest:a,eastIndicesNorthToSouth:e,northIndicesWestToEast:s}),d};var f=[];function v(e,t){for(var r=new Array(t),n=new Array(e),i=new Array(t),o=new Array(e),a=0;a<e;++a)n[o[a]=a]=e*t-1-a;for(a=0;a<t;++a)i[a]=(a+1)*e-1,r[a]=(t-a-1)*e;return{westIndicesSouthToNorth:r,southIndicesEastToWest:n,eastIndicesNorthToSouth:i,northIndicesWestToEast:o}}function N(e,t,r,n){for(var i=0,o=0;o<t-1;++o){for(var a=0;a<e-1;++a){var s=i+e,d=s+1,c=i+1;r[n++]=i,r[n++]=s,r[n++]=c,r[n++]=c,r[n++]=s,r[n++]=d,++i}++i}}function b(e,t,r,n){for(var i=e[0],o=e.length,a=1;a<o;++a){var s=e[a];r[n++]=i,r[n++]=s,r[n++]=t,r[n++]=t,r[n++]=s,r[n++]=t+1,i=s,++t}return n}p.getRegularGridAndSkirtIndicesAndEdgeIndices=function(e,t){var r=f[e];i.defined(r)||(f[e]=r=[]);var n,o,s,d,c,u,h,l,I=r[t];return i.defined(I)||(s=(n=e*t)+(u=2*e+2*t),l=(o=(e-1)*(t-1)*6)+6*Math.max(0,u-4),d=(h=v(e,t)).westIndicesSouthToNorth,c=h.southIndicesEastToWest,u=h.eastIndicesNorthToSouth,h=h.northIndicesWestToEast,N(e,t,l=a.IndexDatatype.createTypedArray(s,l),0),p.addSkirtIndices(d,c,u,h,n,l,o),I=r[t]={indices:l,westIndicesSouthToNorth:d,southIndicesEastToWest:c,eastIndicesNorthToSouth:u,northIndicesWestToEast:h,indexCountWithoutSkirts:o}),I},p.addSkirtIndices=function(e,t,r,n,i,o,a){a=b(e,i,o,a),a=b(t,i+=e.length,o,a),a=b(r,i+=t.length,o,a),b(n,i+=r.length,o,a)},p.heightmapTerrainQuality=.25,p.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(e,t,r){return 2*e.maximumRadius*Math.PI*p.heightmapTerrainQuality/(t*r)},p.prototype.requestTileGeometry=c.DeveloperError.throwInstantiationError,p.prototype.getLevelMaximumGeometricError=c.DeveloperError.throwInstantiationError,p.prototype.getTileDataAvailable=c.DeveloperError.throwInstantiationError,p.prototype.loadTileDataAvailability=c.DeveloperError.throwInstantiationError;var w=32767,x=new n.Cartesian3,M=new n.Cartesian3,C=new n.Cartesian3,S=new n.Cartographic,A=new n.Cartesian2,P=new n.Cartesian3,W=new r.Matrix4,D=new r.Matrix4;function B(e,t,i,o,a,d,c,u,h){var l=Number.POSITIVE_INFINITY,I=a.north,m=a.south,g=a.east,T=a.west;g<T&&(g+=s.CesiumMath.TWO_PI);for(var p=e.length,E=0;E<p;++E){var y=i[f=e[E]],f=o[f];S.longitude=s.CesiumMath.lerp(T,g,f.x),S.latitude=s.CesiumMath.lerp(m,I,f.y),S.height=y-t,y=d.cartographicToCartesian(S,x),r.Matrix4.multiplyByPoint(c,y,y),n.Cartesian3.minimumByComponent(y,u,u),n.Cartesian3.maximumByComponent(y,h,h),l=Math.min(l,S.height)}return l}function F(t,o,a,d,c,h,l,I,m,g,T,p,E,y,f){var v=i.defined(l),N=m.north,b=m.south,w=m.east,M=m.west;w<M&&(w+=s.CesiumMath.TWO_PI);for(var C=a.length,B=0;B<C;++B){var F=a[B],k=c[F],V=h[F];S.longitude=s.CesiumMath.lerp(M,w,V.x)+y,S.latitude=s.CesiumMath.lerp(b,N,V.y)+f,S.height=k-g;var _,H,O=I.cartographicToCartesian(S,x);v&&(A.x=l[_=2*F],A.y=l[1+_],1!==T&&(k=e.AttributeCompression.octDecode(A.x,A.y,P),F=r.Transforms.eastNorthUpToFixedFrame(x,I,D),_=r.Matrix4.inverseTransformation(F,W),r.Matrix4.multiplyByPointAsVector(_,k,k),k.z*=T,n.Cartesian3.normalize(k,k),r.Matrix4.multiplyByPointAsVector(F,k,k),n.Cartesian3.normalize(k,k),e.AttributeCompression.octEncode(k,A))),d.hasWebMercatorT&&(H=(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(S.latitude)-p)*E),o=d.encode(t,o,O,V,S.height,A,H)}}function k(e,t){var r;return"function"==typeof e.slice&&"function"!=typeof(r=e.slice()).sort&&(r=void 0),(r=i.defined(r)?r:Array.prototype.slice.call(e)).sort(t),r}return h((function(c,h){var l,I,m=(Me=c.quantizedVertices).length/3,g=c.octEncodedNormals,T=c.westIndices.length+c.eastIndices.length+c.southIndices.length+c.northIndices.length,E=c.includeWebMercatorT,y=n.Rectangle.clone(c.rectangle),f=y.west,v=y.south,N=y.east,b=y.north,V=n.Ellipsoid.clone(c.ellipsoid),_=c.exaggeration,H=c.minimumHeight*_,O=c.maximumHeight*_,G=c.relativeToCenter,Y=r.Transforms.eastNorthUpToFixedFrame(G,V),z=r.Matrix4.inverseTransformation(Y,new r.Matrix4);E&&(l=u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(v),I=1/(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(b)-l));var R=Me.subarray(0,m),L=Me.subarray(m,2*m),U=Me.subarray(2*m,3*m),j=i.defined(g),q=new Array(m),Q=new Array(m),K=new Array(m),X=E?new Array(m):[],Z=M;Z.x=Number.POSITIVE_INFINITY,Z.y=Number.POSITIVE_INFINITY,Z.z=Number.POSITIVE_INFINITY;var J=C;J.x=Number.NEGATIVE_INFINITY,J.y=Number.NEGATIVE_INFINITY,J.z=Number.NEGATIVE_INFINITY;for(var $=Number.POSITIVE_INFINITY,ee=Number.NEGATIVE_INFINITY,te=Number.POSITIVE_INFINITY,re=Number.NEGATIVE_INFINITY,ne=0;ne<m;++ne){var ie=R[ne],oe=L[ne],ae=ie/w,se=oe/w;ie=s.CesiumMath.lerp(H,O,U[ne]/w),S.longitude=s.CesiumMath.lerp(f,N,ae),S.latitude=s.CesiumMath.lerp(v,b,se),S.height=ie,$=Math.min(S.longitude,$),ee=Math.max(S.longitude,ee),te=Math.min(S.latitude,te),re=Math.max(S.latitude,re),oe=V.cartographicToCartesian(S),q[ne]=new n.Cartesian2(ae,se),Q[ne]=ie,K[ne]=oe,E&&(X[ne]=(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(S.latitude)-l)*I),r.Matrix4.multiplyByPoint(z,oe,x),n.Cartesian3.minimumByComponent(x,Z,Z),n.Cartesian3.maximumByComponent(x,J,J)}var de,ce,ue,he=k(c.westIndices,(function(e,t){return q[e].y-q[t].y})),le=k(c.eastIndices,(function(e,t){return q[t].y-q[e].y})),Ie=k(c.southIndices,(function(e,t){return q[t].x-q[e].x})),me=k(c.northIndices,(function(e,t){return q[e].x-q[t].x}));1!==_&&(ce=r.BoundingSphere.fromPoints(K),de=d.OrientedBoundingBox.fromRectangle(y,H,O,V)),(1!==_||H<0)&&(ue=new o.EllipsoidalOccluder(V).computeHorizonCullingPointPossiblyUnderEllipsoid(G,K,H));var ge=Math.min(H,B(c.westIndices,c.westSkirtHeight,Q,q,y,V,z,Z,J));ge=Math.min(ge,B(c.southIndices,c.southSkirtHeight,Q,q,y,V,z,Z,J)),ge=Math.min(ge,B(c.eastIndices,c.eastSkirtHeight,Q,q,y,V,z,Z,J)),ge=Math.min(ge,B(c.northIndices,c.northSkirtHeight,Q,q,y,V,z,Z,J));for(var Te,pe,Ee,ye=new t.AxisAlignedBoundingBox(Z,J,G),fe=new o.TerrainEncoding(ye,ge,O,Y,j,E),ve=fe.getStride(),Ne=new Float32Array(m*ve+T*ve),be=0,we=0;we<m;++we)j&&(A.x=g[Ee=2*we],A.y=g[1+Ee],1!==_&&(Te=e.AttributeCompression.octDecode(A.x,A.y,P),pe=r.Transforms.eastNorthUpToFixedFrame(K[we],V,D),Ee=r.Matrix4.inverseTransformation(pe,W),r.Matrix4.multiplyByPointAsVector(Ee,Te,Te),Te.z*=_,n.Cartesian3.normalize(Te,Te),r.Matrix4.multiplyByPointAsVector(pe,Te,Te),n.Cartesian3.normalize(Te,Te),e.AttributeCompression.octEncode(Te,A))),be=fe.encode(Ne,be,K[we],q[we],Q[we],A,X[we]);var xe=Math.max(0,2*(T-4)),Me=c.indices.length+3*xe;return(ye=a.IndexDatatype.createTypedArray(m+T,Me)).set(c.indices,0),xe=ge=1e-4*(ee-$),Me=-(T=Y=1e-4*(re-te)),F(Ne,Y=m*ve,he,fe,Q,q,g,V,y,c.westSkirtHeight,_,l,I,-ge,0),F(Ne,Y+=c.westIndices.length*ve,Ie,fe,Q,q,g,V,y,c.southSkirtHeight,_,l,I,0,Me),F(Ne,Y+=c.southIndices.length*ve,le,fe,Q,q,g,V,y,c.eastSkirtHeight,_,l,I,xe,0),F(Ne,Y+=c.eastIndices.length*ve,me,fe,Q,q,g,V,y,c.northSkirtHeight,_,l,I,0,T),p.addSkirtIndices(he,Ie,le,me,m,ye,c.indices.length),h.push(Ne.buffer,ye.buffer),{vertices:Ne.buffer,indices:ye.buffer,westIndicesSouthToNorth:he,southIndicesEastToWest:Ie,eastIndicesNorthToSouth:le,northIndicesWestToEast:me,vertexStride:ve,center:G,minimumHeight:H,maximumHeight:O,boundingSphere:ce,orientedBoundingBox:de,occludeePointInScaledSpace:ue,encoding:fe,indexCountWithoutSkirts:c.indices.length}}))}));
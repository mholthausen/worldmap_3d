define(["./EllipsoidTangentPlane-c4704d0f","./Transforms-e9dbfb40","./Cartesian2-49b1de22","./when-54c2dc71","./TerrainEncoding-2b05357a","./Math-44e92d6b","./OrientedBoundingBox-3669ebd4","./RuntimeError-2109023a","./WebMercatorProjection-8d5f5f84","./createTaskProcessorWorker","./Check-6c0211bc","./IntersectionTests-6ead8677","./Plane-8f7e53d1","./AttributeCompression-8ecc041c","./ComponentDatatype-6d99a1ee","./WebGLConstants-76bb35d1"],(function(e,t,i,n,r,a,o,s,u,h,c,d,g,l,m,p){"use strict";var I=Uint16Array.BYTES_PER_ELEMENT,E=Int32Array.BYTES_PER_ELEMENT,T=Uint32Array.BYTES_PER_ELEMENT,C=Float32Array.BYTES_PER_ELEMENT,f=Float64Array.BYTES_PER_ELEMENT;function M(e,t,i){i=n.defaultValue(i,a.CesiumMath);for(var r=e.length,o=0;o<r;++o)if(i.equalsEpsilon(e[o],t,a.CesiumMath.EPSILON12))return o;return-1}var v=new i.Cartographic,N=new i.Cartesian3,x=new i.Cartesian3,b=new i.Cartesian3,S=new t.Matrix4;function w(e,r,o,s,u,h,c,d,g,l){for(var m=c.length,p=0;p<m;++p){var I=c[p],E=I.cartographic,T=I.index,C=e.length,f=E.longitude,M=E.latitude;M=a.CesiumMath.clamp(M,-a.CesiumMath.PI_OVER_TWO,a.CesiumMath.PI_OVER_TWO),E=E.height-h.skirtHeight,h.hMin=Math.min(h.hMin,E),i.Cartographic.fromRadians(f,M,E,v),g&&(v.longitude+=d),g?p===m-1?v.latitude+=l:0===p&&(v.latitude-=l):v.latitude+=d,M=h.ellipsoid.cartographicToCartesian(v),e.push(M),r.push(E),o.push(i.Cartesian2.clone(o[T])),0<s.length&&s.push(s[T]),t.Matrix4.multiplyByPoint(h.toENU,M,N),E=h.minimum,M=h.maximum,i.Cartesian3.minimumByComponent(N,E,E),i.Cartesian3.maximumByComponent(N,M,M),M=h.lastBorderPoint,n.defined(M)&&(M=M.index,u.push(M,C-1,C,C,T,M)),h.lastBorderPoint=I}}return h((function(h,c){h.ellipsoid=i.Ellipsoid.clone(h.ellipsoid),h.rectangle=i.Rectangle.clone(h.rectangle);var d=function(h,c,d,g,l,m,p,P,B,y){var A,R,_,W,F;ye=n.defined(g)?(A=g.west,R=g.south,_=g.east,W=g.north,F=g.width,g.height):(A=a.CesiumMath.toRadians(l.west),R=a.CesiumMath.toRadians(l.south),_=a.CesiumMath.toRadians(l.east),W=a.CesiumMath.toRadians(l.north),F=a.CesiumMath.toRadians(g.width),a.CesiumMath.toRadians(g.height));var O,Y,k=[R,W],U=[A,_],V=t.Transforms.eastNorthUpToFixedFrame(c,d),H=t.Matrix4.inverseTransformation(V,S);P&&(O=u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(R),Y=1/(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(W)-O));var L=new DataView(h),D=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY,j=x;j.x=Number.POSITIVE_INFINITY,j.y=Number.POSITIVE_INFINITY,j.z=Number.POSITIVE_INFINITY;var z=b;z.x=Number.NEGATIVE_INFINITY,z.y=Number.NEGATIVE_INFINITY,z.z=Number.NEGATIVE_INFINITY;var q,J,K=0,Q=0,X=0;for(J=0;J<4;++J){var Z=K;q=L.getUint32(Z,!0),Z+=T;var $=a.CesiumMath.toRadians(180*L.getFloat64(Z,!0));Z+=f,-1===M(U,$)&&U.push($),$=a.CesiumMath.toRadians(180*L.getFloat64(Z,!0)),Z+=f,-1===M(k,$)&&k.push($),Z+=2*f,$=L.getInt32(Z,!0),Z+=E,Q+=$,X+=3*($=L.getInt32(Z,!0)),K+=q+T}var ee=[],te=[],ie=new Array(Q),ne=new Array(Q),re=new Array(Q),ae=P?new Array(Q):[],oe=new Array(X),se=[],ue=[],he=[],ce=[],de=0,ge=0;for(J=K=0;J<4;++J){q=L.getUint32(K,!0);var le=K+=T,me=a.CesiumMath.toRadians(180*L.getFloat64(K,!0));K+=f;var pe=a.CesiumMath.toRadians(180*L.getFloat64(K,!0));K+=f;var Ie=a.CesiumMath.toRadians(180*L.getFloat64(K,!0)),Ee=.5*Ie;K+=f;var Te=a.CesiumMath.toRadians(180*L.getFloat64(K,!0)),Ce=.5*Te;K+=f;var fe=L.getInt32(K,!0);K+=E;var Me=L.getInt32(K,!0);K+=E,K+=E;for(var ve=new Array(fe),Ne=0;Ne<fe;++Ne){var xe=me+L.getUint8(K++)*Ie;v.longitude=xe;var be=pe+L.getUint8(K++)*Te;v.latitude=be;var Se=L.getFloat32(K,!0);if(K+=C,0!==Se&&Se<y&&(Se*=-Math.pow(2,B)),Se*=6371010*m,v.height=Se,-1!==M(U,xe)||-1!==M(k,be)){var we=M(ee,v,i.Cartographic);if(-1!==we){ve[Ne]=te[we];continue}ee.push(i.Cartographic.clone(v)),te.push(de)}ve[Ne]=de,Math.abs(xe-A)<Ee?se.push({index:de,cartographic:i.Cartographic.clone(v)}):Math.abs(xe-_)<Ee?he.push({index:de,cartographic:i.Cartographic.clone(v)}):Math.abs(be-R)<Ce?ue.push({index:de,cartographic:i.Cartographic.clone(v)}):Math.abs(be-W)<Ce&&ce.push({index:de,cartographic:i.Cartographic.clone(v)}),D=Math.min(Se,D),G=Math.max(Se,G),re[de]=Se,Se=d.cartographicToCartesian(v),ie[de]=Se,P&&(ae[de]=(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(be)-O)*Y),t.Matrix4.multiplyByPoint(H,Se,N),i.Cartesian3.minimumByComponent(N,j,j),i.Cartesian3.maximumByComponent(N,z,z),xe=(xe-A)/(_-A),xe=a.CesiumMath.clamp(xe,0,1),be=(be-R)/(W-R),be=a.CesiumMath.clamp(be,0,1),ne[de]=new i.Cartesian2(xe,be),++de}for(var Pe=3*Me,Be=0;Be<Pe;++Be,++ge)oe[ge]=ve[L.getUint16(K,!0)],K+=I;if(q!==K-le)throw new s.RuntimeError("Invalid terrain tile.")}ie.length=de,ne.length=de,re.length=de,P&&(ae.length=de);var ye,Ae=de;l=ge,h={hMin:D,lastBorderPoint:void 0,skirtHeight:p,toENU:H,ellipsoid:d,minimum:j,maximum:z},se.sort((function(e,t){return t.cartographic.latitude-e.cartographic.latitude})),ue.sort((function(e,t){return e.cartographic.longitude-t.cartographic.longitude})),he.sort((function(e,t){return e.cartographic.latitude-t.cartographic.latitude})),ce.sort((function(e,t){return t.cartographic.longitude-e.cartographic.longitude})),w(ie,re,ne,ae,oe,h,se,-(p=1e-5)*F,!0,-p*ye),w(ie,re,ne,ae,oe,h,ue,-p*ye,!1),w(ie,re,ne,ae,oe,h,he,p*F,!0,p*ye),w(ie,re,ne,ae,oe,h,ce,p*ye,!1),0<se.length&&0<ce.length&&(_e=se[0].index,We=ce[ce.length-1].index,ye=ie.length-1,oe.push(We,ye,Ae,Ae,_e,We)),Q=ie.length;var Re,_e=t.BoundingSphere.fromPoints(ie);n.defined(g)&&(Re=o.OrientedBoundingBox.fromRectangle(g,D,G,d));for(var We=new r.EllipsoidalOccluder(d).computeHorizonCullingPointPossiblyUnderEllipsoid(c,ie,D),Fe=(g=new e.AxisAlignedBoundingBox(j,z,c),new r.TerrainEncoding(g,h.hMin,G,V,!1,P)),Oe=new Float32Array(Q*Fe.getStride()),Ye=0,ke=0;ke<Q;++ke)Ye=Fe.encode(Oe,Ye,ie[ke],ne[ke],re[ke],void 0,ae[ke]);return c=se.map((function(e){return e.index})).reverse(),g=ue.map((function(e){return e.index})).reverse(),h=he.map((function(e){return e.index})).reverse(),V=ce.map((function(e){return e.index})).reverse(),g.unshift(h[h.length-1]),g.push(c[0]),V.unshift(c[c.length-1]),V.push(h[0]),{vertices:Oe,indices:new Uint16Array(oe),maximumHeight:G,minimumHeight:D,encoding:Fe,boundingSphere3D:_e,orientedBoundingBox:Re,occludeePointInScaledSpace:We,vertexCountWithoutSkirts:Ae,indexCountWithoutSkirts:l,westIndicesSouthToNorth:c,southIndicesEastToWest:g,eastIndicesNorthToSouth:h,northIndicesWestToEast:V}}(h.buffer,h.relativeToCenter,h.ellipsoid,h.rectangle,h.nativeRectangle,h.exaggeration,h.skirtHeight,h.includeWebMercatorT,h.negativeAltitudeExponentBias,h.negativeElevationThreshold),g=d.vertices;return c.push(g.buffer),h=d.indices,c.push(h.buffer),{vertices:g.buffer,indices:h.buffer,numberOfAttributes:d.encoding.getStride(),minimumHeight:d.minimumHeight,maximumHeight:d.maximumHeight,boundingSphere3D:d.boundingSphere3D,orientedBoundingBox:d.orientedBoundingBox,occludeePointInScaledSpace:d.occludeePointInScaledSpace,encoding:d.encoding,vertexCountWithoutSkirts:d.vertexCountWithoutSkirts,indexCountWithoutSkirts:d.indexCountWithoutSkirts,westIndicesSouthToNorth:d.westIndicesSouthToNorth,southIndicesEastToWest:d.southIndicesEastToWest,eastIndicesNorthToSouth:d.eastIndicesNorthToSouth,northIndicesWestToEast:d.northIndicesWestToEast}}))}));
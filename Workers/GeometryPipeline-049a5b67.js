define(["exports","./AttributeCompression-50c9aeba","./Matrix2-7146c9ca","./Matrix3-a348023f","./defaultValue-0a909f67","./Math-e97915da","./Transforms-01e95659","./ComponentDatatype-77274976","./EncodedCartesian3-0fb84db0","./GeometryAttribute-f5d71750","./IndexDatatype-2149f06c","./IntersectionTests-0bb04fde","./Plane-8575e17c"],(function(e,t,n,i,r,a,s,o,u,c,l,p,d){"use strict";const f=new i.Cartesian3,y=new i.Cartesian3,m=new i.Cartesian3,C={calculateACMR:function(e){const t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).indices;let n=e.maximumIndex;const i=r.defaultValue(e.cacheSize,24),a=t.length;if(!r.defined(n)){n=0;let e=0,i=t[e];for(;e<a;)i>n&&(n=i),++e,i=t[e]}const s=[];for(let e=0;e<n+1;e++)s[e]=0;let o=i+1;for(let e=0;e<a;++e)o-s[t[e]]>i&&(s[t[e]]=o,++o);return(o-i+1)/(a/3)},tipsify:function(e){const t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).indices,n=e.maximumIndex,i=r.defaultValue(e.cacheSize,24);let a;function s(e,t,n,i,r,s,o){let u,c=-1,l=-1,p=0;for(;p<n.length;){const e=n[p];i[e].numLiveTriangles&&(u=0,r-i[e].timeStamp+2*i[e].numLiveTriangles<=t&&(u=r-i[e].timeStamp),(u>l||-1===l)&&(l=u,c=e)),++p}return-1===c?function(e,t,n,i){for(;t.length>=1;){const n=t[t.length-1];if(t.splice(t.length-1,1),e[n].numLiveTriangles>0)return n}for(;a<i;){if(e[a].numLiveTriangles>0)return++a,a-1;++a}return-1}(i,s,0,o):c}const o=t.length;let u=0,c=0,l=t[c];const p=o;if(r.defined(n))u=n+1;else{for(;c<p;)l>u&&(u=l),++c,l=t[c];if(-1===u)return 0;++u}const d=[];let f;for(f=0;f<u;f++)d[f]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};c=0;let y=0;for(;c<p;)d[t[c]].vertexTriangles.push(y),++d[t[c]].numLiveTriangles,d[t[c+1]].vertexTriangles.push(y),++d[t[c+1]].numLiveTriangles,d[t[c+2]].vertexTriangles.push(y),++d[t[c+2]].numLiveTriangles,++y,c+=3;let m=0,C=i+1;a=1;let h=[];const v=[];let b,g,A=0;const T=[],x=o/3,P=[];for(f=0;f<x;f++)P[f]=!1;let w,S;for(;-1!==m;){h=[],g=d[m],S=g.vertexTriangles.length;for(let e=0;e<S;++e)if(y=g.vertexTriangles[e],!P[y]){P[y]=!0,c=y+y+y;for(let e=0;e<3;++e)w=t[c],h.push(w),v.push(w),T[A]=w,++A,b=d[w],--b.numLiveTriangles,C-b.timeStamp>i&&(b.timeStamp=C,++C),++c}m=s(0,i,h,d,C,v,u)}return T}};var h=C;const v={};function b(e,t,n,i,r){e[t++]=n,e[t++]=i,e[t++]=i,e[t++]=r,e[t++]=r,e[t]=n}function g(e){const t={};for(const n in e)if(e.hasOwnProperty(n)&&r.defined(e[n])&&r.defined(e[n].values)){const i=e[n];t[n]=new c.GeometryAttribute({componentDatatype:i.componentDatatype,componentsPerAttribute:i.componentsPerAttribute,normalize:i.normalize,values:[]})}return t}function A(e,t,n){for(const i in t)if(t.hasOwnProperty(i)&&r.defined(t[i])&&r.defined(t[i].values)){const r=t[i];for(let t=0;t<r.componentsPerAttribute;++t)e[i].values.push(r.values[n*r.componentsPerAttribute+t])}}v.toWireframe=function(e){const t=e.indices;if(r.defined(t)){switch(e.primitiveType){case c.PrimitiveType.TRIANGLES:e.indices=function(e){const t=e.length,n=t/3*6,i=l.IndexDatatype.createTypedArray(t,n);let r=0;for(let n=0;n<t;n+=3,r+=6)b(i,r,e[n],e[n+1],e[n+2]);return i}(t);break;case c.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){const t=e.length;if(t>=3){const n=6*(t-2),i=l.IndexDatatype.createTypedArray(t,n);b(i,0,e[0],e[1],e[2]);let r=6;for(let n=3;n<t;++n,r+=6)b(i,r,e[n-1],e[n],e[n-2]);return i}return new Uint16Array}(t);break;case c.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){const t=e.length-1,n=6*(t-1),i=l.IndexDatatype.createTypedArray(t,n),r=e[0];let a=0;for(let n=1;n<t;++n,a+=6)b(i,a,r,e[n],e[n+1]);return i}return new Uint16Array}(t)}e.primitiveType=c.PrimitiveType.LINES}return e},v.createLineSegmentsForVectors=function(e,t,n){t=r.defaultValue(t,"normal"),n=r.defaultValue(n,1e4);const i=e.attributes.position.values,a=e.attributes[t].values,u=i.length,l=new Float64Array(2*u);let p,d=0;for(let e=0;e<u;e+=3)l[d++]=i[e],l[d++]=i[e+1],l[d++]=i[e+2],l[d++]=i[e]+a[e]*n,l[d++]=i[e+1]+a[e+1]*n,l[d++]=i[e+2]+a[e+2]*n;const f=e.boundingSphere;return r.defined(f)&&(p=new s.BoundingSphere(f.center,f.radius+n)),new c.Geometry({attributes:{position:new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},primitiveType:c.PrimitiveType.LINES,boundingSphere:p})},v.createAttributeLocations=function(e){const t=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],n=e.attributes,i={};let a,s=0;const o=t.length;for(a=0;a<o;++a){const e=t[a];r.defined(n[e])&&(i[e]=s++)}for(const e in n)n.hasOwnProperty(e)&&!r.defined(i[e])&&(i[e]=s++);return i},v.reorderForPreVertexCache=function(e){const t=c.Geometry.computeNumberOfVertices(e),n=e.indices;if(r.defined(n)){const i=new Int32Array(t);for(let e=0;e<t;e++)i[e]=-1;const a=n,s=a.length,u=l.IndexDatatype.createTypedArray(t,s);let c,p=0,d=0,f=0;for(;p<s;)c=i[a[p]],-1!==c?u[d]=c:(c=a[p],i[c]=f,u[d]=f,++f),++p,++d;e.indices=u;const y=e.attributes;for(const e in y)if(y.hasOwnProperty(e)&&r.defined(y[e])&&r.defined(y[e].values)){const n=y[e],r=n.values;let a=0;const s=n.componentsPerAttribute,u=o.ComponentDatatype.createTypedArray(n.componentDatatype,f*s);for(;a<t;){const e=i[a];if(-1!==e)for(let t=0;t<s;t++)u[s*e+t]=r[s*a+t];++a}n.values=u}}return e},v.reorderForPostVertexCache=function(e,t){const n=e.indices;if(e.primitiveType===c.PrimitiveType.TRIANGLES&&r.defined(n)){const i=n.length;let r=0;for(let e=0;e<i;e++)n[e]>r&&(r=n[e]);e.indices=h.tipsify({indices:n,maximumIndex:r,cacheSize:t})}return e},v.fitToUnsignedShortIndices=function(e){const t=[],n=c.Geometry.computeNumberOfVertices(e);if(r.defined(e.indices)&&n>=a.CesiumMath.SIXTY_FOUR_KILOBYTES){let n=[],i=[],s=0,o=g(e.attributes);const u=e.indices,l=u.length;let p;e.primitiveType===c.PrimitiveType.TRIANGLES?p=3:e.primitiveType===c.PrimitiveType.LINES?p=2:e.primitiveType===c.PrimitiveType.POINTS&&(p=1);for(let d=0;d<l;d+=p){for(let t=0;t<p;++t){const a=u[d+t];let c=n[a];r.defined(c)||(c=s++,n[a]=c,A(o,e.attributes,a)),i.push(c)}s+p>=a.CesiumMath.SIXTY_FOUR_KILOBYTES&&(t.push(new c.Geometry({attributes:o,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),n=[],i=[],s=0,o=g(e.attributes))}0!==i.length&&t.push(new c.Geometry({attributes:o,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};const T=new i.Cartesian3,x=new i.Cartographic;v.projectTo2D=function(e,t,n,a,u){const l=e.attributes[t],p=(u=r.defined(u)?u:new s.GeographicProjection).ellipsoid,d=l.values,f=new Float64Array(d.length);let y=0;for(let e=0;e<d.length;e+=3){const t=i.Cartesian3.fromArray(d,e,T),n=p.cartesianToCartographic(t,x),r=u.project(n,T);f[y++]=r.x,f[y++]=r.y,f[y++]=r.z}return e.attributes[n]=l,e.attributes[a]=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f}),delete e.attributes[t],e};const P={high:0,low:0};v.encodeAttribute=function(e,t,n,i){const r=e.attributes[t],a=r.values,s=a.length,l=new Float32Array(s),p=new Float32Array(s);for(let e=0;e<s;++e)u.EncodedCartesian3.encode(a[e],P),l[e]=P.high,p[e]=P.low;const d=r.componentsPerAttribute;return e.attributes[n]=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:d,values:l}),e.attributes[i]=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:d,values:p}),delete e.attributes[t],e};let w=new i.Cartesian3;function S(e,t){if(r.defined(t)){const r=t.values,a=r.length;for(let t=0;t<a;t+=3)i.Cartesian3.unpack(r,t,w),n.Matrix4.multiplyByPoint(e,w,w),i.Cartesian3.pack(w,r,t)}}function I(e,t){if(r.defined(t)){const n=t.values,r=n.length;for(let t=0;t<r;t+=3)i.Cartesian3.unpack(n,t,w),i.Matrix3.multiplyByVector(e,w,w),w=i.Cartesian3.normalize(w,w),i.Cartesian3.pack(w,n,t)}}const O=new n.Matrix4,E=new i.Matrix3;v.transformToWorldCoordinates=function(e){const t=e.modelMatrix;if(n.Matrix4.equals(t,n.Matrix4.IDENTITY))return e;const i=e.geometry.attributes;S(t,i.position),S(t,i.prevPosition),S(t,i.nextPosition),(r.defined(i.normal)||r.defined(i.tangent)||r.defined(i.bitangent))&&(n.Matrix4.inverse(t,O),n.Matrix4.transpose(O,O),n.Matrix4.getMatrix3(O,E),I(E,i.normal),I(E,i.tangent),I(E,i.bitangent));const a=e.geometry.boundingSphere;return r.defined(a)&&(e.geometry.boundingSphere=s.BoundingSphere.transform(a,t,a)),e.modelMatrix=n.Matrix4.clone(n.Matrix4.IDENTITY),e};const N=new i.Cartesian3;function L(e,t){const n=e.length;let a,u,p,d;e[0].modelMatrix;const f=r.defined(e[0][t].indices),y=e[0][t].primitiveType,m=function(e,t){const n=e.length,i={},a=e[0][t].attributes;let s;for(s in a)if(a.hasOwnProperty(s)&&r.defined(a[s])&&r.defined(a[s].values)){const u=a[s];let l=u.values.length,p=!0;for(let i=1;i<n;++i){const n=e[i][t].attributes[s];if(!r.defined(n)||u.componentDatatype!==n.componentDatatype||u.componentsPerAttribute!==n.componentsPerAttribute||u.normalize!==n.normalize){p=!1;break}l+=n.values.length}p&&(i[s]=new c.GeometryAttribute({componentDatatype:u.componentDatatype,componentsPerAttribute:u.componentsPerAttribute,normalize:u.normalize,values:o.ComponentDatatype.createTypedArray(u.componentDatatype,l)}))}return i}(e,t);let C,h,v,b;for(a in m)if(m.hasOwnProperty(a))for(C=m[a].values,d=0,u=0;u<n;++u)for(h=e[u][t].attributes[a].values,v=h.length,p=0;p<v;++p)C[d++]=h[p];if(f){let i=0;for(u=0;u<n;++u)i+=e[u][t].indices.length;const r=c.Geometry.computeNumberOfVertices(new c.Geometry({attributes:m,primitiveType:c.PrimitiveType.POINTS})),a=l.IndexDatatype.createTypedArray(r,i);let s=0,o=0;for(u=0;u<n;++u){const n=e[u][t].indices,i=n.length;for(d=0;d<i;++d)a[s++]=o+n[d];o+=c.Geometry.computeNumberOfVertices(e[u][t])}b=a}let g,A=new i.Cartesian3,T=0;for(u=0;u<n;++u){if(g=e[u][t].boundingSphere,!r.defined(g)){A=void 0;break}i.Cartesian3.add(g.center,A,A)}if(r.defined(A))for(i.Cartesian3.divideByScalar(A,n,A),u=0;u<n;++u){g=e[u][t].boundingSphere;const n=i.Cartesian3.magnitude(i.Cartesian3.subtract(g.center,A,N))+g.radius;n>T&&(T=n)}return new c.Geometry({attributes:m,indices:b,primitiveType:y,boundingSphere:r.defined(A)?new s.BoundingSphere(A,T):void 0})}v.combineInstances=function(e){const t=[],n=[],i=e.length;for(let a=0;a<i;++a){const i=e[a];r.defined(i.geometry)?t.push(i):r.defined(i.westHemisphereGeometry)&&r.defined(i.eastHemisphereGeometry)&&n.push(i)}const a=[];return t.length>0&&a.push(L(t,"geometry")),n.length>0&&(a.push(L(n,"westHemisphereGeometry")),a.push(L(n,"eastHemisphereGeometry"))),a};const M=new i.Cartesian3,z=new i.Cartesian3,D=new i.Cartesian3,G=new i.Cartesian3;v.computeNormal=function(e){const t=e.indices,n=e.attributes,r=n.position.values,s=n.position.values.length/3,u=t.length,l=new Array(s),p=new Array(u/3),d=new Array(u);let f;for(f=0;f<s;f++)l[f]={indexOffset:0,count:0,currentCount:0};let y=0;for(f=0;f<u;f+=3){const e=t[f],n=t[f+1],a=t[f+2],s=3*e,o=3*n,u=3*a;z.x=r[s],z.y=r[s+1],z.z=r[s+2],D.x=r[o],D.y=r[o+1],D.z=r[o+2],G.x=r[u],G.y=r[u+1],G.z=r[u+2],l[e].count++,l[n].count++,l[a].count++,i.Cartesian3.subtract(D,z,D),i.Cartesian3.subtract(G,z,G),p[y]=i.Cartesian3.cross(D,G,new i.Cartesian3),y++}let m,C=0;for(f=0;f<s;f++)l[f].indexOffset+=C,C+=l[f].count;for(y=0,f=0;f<u;f+=3){m=l[t[f]];let e=m.indexOffset+m.currentCount;d[e]=y,m.currentCount++,m=l[t[f+1]],e=m.indexOffset+m.currentCount,d[e]=y,m.currentCount++,m=l[t[f+2]],e=m.indexOffset+m.currentCount,d[e]=y,m.currentCount++,y++}const h=new Float32Array(3*s);for(f=0;f<s;f++){const e=3*f;if(m=l[f],i.Cartesian3.clone(i.Cartesian3.ZERO,M),m.count>0){for(y=0;y<m.count;y++)i.Cartesian3.add(M,p[d[m.indexOffset+y]],M);i.Cartesian3.equalsEpsilon(i.Cartesian3.ZERO,M,a.CesiumMath.EPSILON10)&&i.Cartesian3.clone(p[d[m.indexOffset]],M)}i.Cartesian3.equalsEpsilon(i.Cartesian3.ZERO,M,a.CesiumMath.EPSILON10)&&(M.z=1),i.Cartesian3.normalize(M,M),h[e]=M.x,h[e+1]=M.y,h[e+2]=M.z}return e.attributes.normal=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h}),e};const V=new i.Cartesian3,R=new i.Cartesian3,F=new i.Cartesian3;v.computeTangentAndBitangent=function(e){e.attributes;const t=e.indices,n=e.attributes.position.values,r=e.attributes.normal.values,a=e.attributes.st.values,s=e.attributes.position.values.length/3,u=t.length,l=new Array(3*s);let p,d,f,y;for(p=0;p<l.length;p++)l[p]=0;for(p=0;p<u;p+=3){const e=t[p],i=t[p+1],r=t[p+2];d=3*e,f=3*i,y=3*r;const s=2*e,o=2*i,u=2*r,c=n[d],m=n[d+1],C=n[d+2],h=a[s],v=a[s+1],b=a[o+1]-v,g=a[u+1]-v,A=1/((a[o]-h)*g-(a[u]-h)*b),T=(g*(n[f]-c)-b*(n[y]-c))*A,x=(g*(n[f+1]-m)-b*(n[y+1]-m))*A,P=(g*(n[f+2]-C)-b*(n[y+2]-C))*A;l[d]+=T,l[d+1]+=x,l[d+2]+=P,l[f]+=T,l[f+1]+=x,l[f+2]+=P,l[y]+=T,l[y+1]+=x,l[y+2]+=P}const m=new Float32Array(3*s),C=new Float32Array(3*s);for(p=0;p<s;p++){d=3*p,f=d+1,y=d+2;const e=i.Cartesian3.fromArray(r,d,V),t=i.Cartesian3.fromArray(l,d,F),n=i.Cartesian3.dot(e,t);i.Cartesian3.multiplyByScalar(e,n,R),i.Cartesian3.normalize(i.Cartesian3.subtract(t,R,t),t),m[d]=t.x,m[f]=t.y,m[y]=t.z,i.Cartesian3.normalize(i.Cartesian3.cross(e,t,t),t),C[d]=t.x,C[f]=t.y,C[y]=t.z}return e.attributes.tangent=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:m}),e.attributes.bitangent=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C}),e};const B=new n.Cartesian2,_=new i.Cartesian3,k=new i.Cartesian3,q=new i.Cartesian3;let U=new n.Cartesian2;function Y(e,t){Math.abs(e.y)<a.CesiumMath.EPSILON6&&(e.y=t?-a.CesiumMath.EPSILON6:a.CesiumMath.EPSILON6)}v.compressVertices=function(e){const a=e.attributes.extrudeDirection;let s,u;if(r.defined(a)){const n=a.values;u=n.length/3;const r=new Float32Array(2*u);let l=0;for(s=0;s<u;++s)i.Cartesian3.fromArray(n,3*s,_),i.Cartesian3.equals(_,i.Cartesian3.ZERO)?l+=2:(U=t.AttributeCompression.octEncodeInRange(_,65535,U),r[l++]=U.x,r[l++]=U.y);return e.attributes.compressedAttributes=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:r}),delete e.attributes.extrudeDirection,e}const l=e.attributes.normal,p=e.attributes.st,d=r.defined(l),f=r.defined(p);if(!d&&!f)return e;const y=e.attributes.tangent,m=e.attributes.bitangent,C=r.defined(y),h=r.defined(m);let v,b,g,A;d&&(v=l.values),f&&(b=p.values),C&&(g=y.values),h&&(A=m.values),u=(d?v.length:b.length)/(d?3:2);let T=u,x=f&&d?2:1;x+=C||h?1:0,T*=x;const P=new Float32Array(T);let w=0;for(s=0;s<u;++s){f&&(n.Cartesian2.fromArray(b,2*s,B),P[w++]=t.AttributeCompression.compressTextureCoordinates(B));const e=3*s;d&&r.defined(g)&&r.defined(A)?(i.Cartesian3.fromArray(v,e,_),i.Cartesian3.fromArray(g,e,k),i.Cartesian3.fromArray(A,e,q),t.AttributeCompression.octPack(_,k,q,B),P[w++]=B.x,P[w++]=B.y):(d&&(i.Cartesian3.fromArray(v,e,_),P[w++]=t.AttributeCompression.octEncodeFloat(_)),C&&(i.Cartesian3.fromArray(g,e,_),P[w++]=t.AttributeCompression.octEncodeFloat(_)),h&&(i.Cartesian3.fromArray(A,e,_),P[w++]=t.AttributeCompression.octEncodeFloat(_)))}return e.attributes.compressedAttributes=new c.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:x,values:P}),d&&delete e.attributes.normal,f&&delete e.attributes.st,h&&delete e.attributes.bitangent,C&&delete e.attributes.tangent,e};const Z=new i.Cartesian3;function H(e,t,n,r){i.Cartesian3.add(e,i.Cartesian3.multiplyByScalar(i.Cartesian3.subtract(t,e,Z),e.y/(e.y-t.y),Z),n),i.Cartesian3.clone(n,r),Y(n,!0),Y(r,!1)}const W=new i.Cartesian3,X=new i.Cartesian3,j=new i.Cartesian3,J=new i.Cartesian3,K={positions:new Array(7),indices:new Array(9)};function Q(e,t,n){if(e.x>=0||t.x>=0||n.x>=0)return;!function(e,t,n){if(0!==e.y&&0!==t.y&&0!==n.y)return Y(e,e.y<0),Y(t,t.y<0),void Y(n,n.y<0);const i=Math.abs(e.y),r=Math.abs(t.y),s=Math.abs(n.y);let o;o=i>r?i>s?a.CesiumMath.sign(e.y):a.CesiumMath.sign(n.y):r>s?a.CesiumMath.sign(t.y):a.CesiumMath.sign(n.y);const u=o<0;Y(e,u),Y(t,u),Y(n,u)}(e,t,n);const i=e.y<0,r=t.y<0,s=n.y<0;let o=0;o+=i?1:0,o+=r?1:0,o+=s?1:0;const u=K.indices;1===o?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,i?(H(e,t,W,j),H(e,n,X,J),u[0]=0,u[3]=1,u[4]=2,u[6]=1):r?(H(t,n,W,j),H(t,e,X,J),u[0]=1,u[3]=2,u[4]=0,u[6]=2):s&&(H(n,e,W,j),H(n,t,X,J),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===o&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,i?r?s||(H(n,e,W,j),H(n,t,X,J),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(H(t,n,W,j),H(t,e,X,J),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(H(e,t,W,j),H(e,n,X,J),u[0]=1,u[1]=2,u[3]=1,u[6]=0));const c=K.positions;return c[0]=e,c[1]=t,c[2]=n,c.length=3,1!==o&&2!==o||(c[3]=W,c[4]=X,c[5]=j,c[6]=J,c.length=7),K}function $(e,t){const n=e.attributes;if(0===n.position.values.length)return;for(const e in n)if(n.hasOwnProperty(e)&&r.defined(n[e])&&r.defined(n[e].values)){const t=n[e];t.values=o.ComponentDatatype.createTypedArray(t.componentDatatype,t.values)}const i=c.Geometry.computeNumberOfVertices(e);return e.indices=l.IndexDatatype.createTypedArray(i,e.indices),t&&(e.boundingSphere=s.BoundingSphere.fromVertices(n.position.values)),e}function ee(e){const t=e.attributes,n={};for(const e in t)if(t.hasOwnProperty(e)&&r.defined(t[e])&&r.defined(t[e].values)){const i=t[e];n[e]=new c.GeometryAttribute({componentDatatype:i.componentDatatype,componentsPerAttribute:i.componentsPerAttribute,normalize:i.normalize,values:[]})}return new c.Geometry({attributes:n,indices:[],primitiveType:e.primitiveType})}function te(e,t,n){const i=r.defined(e.geometry.boundingSphere);t=$(t,i),n=$(n,i),r.defined(n)&&!r.defined(t)?e.geometry=n:!r.defined(n)&&r.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=n,e.geometry=void 0)}function ne(e,t){const n=new e,i=new e,r=new e;return function(a,s,o,u,c,l,p,d){const f=e.fromArray(c,a*t,n),y=e.fromArray(c,s*t,i),m=e.fromArray(c,o*t,r);e.multiplyByScalar(f,u.x,f),e.multiplyByScalar(y,u.y,y),e.multiplyByScalar(m,u.z,m);const C=e.add(f,y,f);e.add(C,m,C),d&&e.normalize(C,C),e.pack(C,l,p*t)}}const ie=ne(n.Cartesian4,4),re=ne(i.Cartesian3,3),ae=ne(n.Cartesian2,2),se=new i.Cartesian3,oe=new i.Cartesian3,ue=new i.Cartesian3,ce=new i.Cartesian3;function le(e,t,s,o,u,c,l,p,d,C,h,v,b,g,A,T){if(!(r.defined(c)||r.defined(l)||r.defined(p)||r.defined(d)||r.defined(C)||0!==g))return;const x=function(e,t,s,o,u){let c,l,p,d,C,h,v,b;if(r.defined(u)||(u=new i.Cartesian3),r.defined(t.z)){if(i.Cartesian3.equalsEpsilon(e,t,a.CesiumMath.EPSILON14))return i.Cartesian3.clone(i.Cartesian3.UNIT_X,u);if(i.Cartesian3.equalsEpsilon(e,s,a.CesiumMath.EPSILON14))return i.Cartesian3.clone(i.Cartesian3.UNIT_Y,u);if(i.Cartesian3.equalsEpsilon(e,o,a.CesiumMath.EPSILON14))return i.Cartesian3.clone(i.Cartesian3.UNIT_Z,u);c=i.Cartesian3.subtract(s,t,f),l=i.Cartesian3.subtract(o,t,y),p=i.Cartesian3.subtract(e,t,m),d=i.Cartesian3.dot(c,c),C=i.Cartesian3.dot(c,l),h=i.Cartesian3.dot(c,p),v=i.Cartesian3.dot(l,l),b=i.Cartesian3.dot(l,p)}else{if(n.Cartesian2.equalsEpsilon(e,t,a.CesiumMath.EPSILON14))return i.Cartesian3.clone(i.Cartesian3.UNIT_X,u);if(n.Cartesian2.equalsEpsilon(e,s,a.CesiumMath.EPSILON14))return i.Cartesian3.clone(i.Cartesian3.UNIT_Y,u);if(n.Cartesian2.equalsEpsilon(e,o,a.CesiumMath.EPSILON14))return i.Cartesian3.clone(i.Cartesian3.UNIT_Z,u);c=n.Cartesian2.subtract(s,t,f),l=n.Cartesian2.subtract(o,t,y),p=n.Cartesian2.subtract(e,t,m),d=n.Cartesian2.dot(c,c),C=n.Cartesian2.dot(c,l),h=n.Cartesian2.dot(c,p),v=n.Cartesian2.dot(l,l),b=n.Cartesian2.dot(l,p)}u.y=v*h-C*b,u.z=d*b-C*h;const g=d*v-C*C;if(0!==g)return u.y/=g,u.z/=g,u.x=1-u.y-u.z,u}(o,i.Cartesian3.fromArray(u,3*e,se),i.Cartesian3.fromArray(u,3*t,oe),i.Cartesian3.fromArray(u,3*s,ue),ce);if(r.defined(x)){if(r.defined(c)&&re(e,t,s,x,c,v.normal.values,T,!0),r.defined(C)){const n=i.Cartesian3.fromArray(C,3*e,se),r=i.Cartesian3.fromArray(C,3*t,oe),a=i.Cartesian3.fromArray(C,3*s,ue);let o;i.Cartesian3.multiplyByScalar(n,x.x,n),i.Cartesian3.multiplyByScalar(r,x.y,r),i.Cartesian3.multiplyByScalar(a,x.z,a),i.Cartesian3.equals(n,i.Cartesian3.ZERO)&&i.Cartesian3.equals(r,i.Cartesian3.ZERO)&&i.Cartesian3.equals(a,i.Cartesian3.ZERO)?(o=se,o.x=0,o.y=0,o.z=0):(o=i.Cartesian3.add(n,r,n),i.Cartesian3.add(o,a,o),i.Cartesian3.normalize(o,o)),i.Cartesian3.pack(o,v.extrudeDirection.values,3*T)}if(r.defined(h)&&function(e,t,n,i,r,s,o){const u=r[e]*i.x,c=r[t]*i.y,l=r[n]*i.z;s[o]=u+c+l>a.CesiumMath.EPSILON6?1:0}(e,t,s,x,h,v.applyOffset.values,T),r.defined(l)&&re(e,t,s,x,l,v.tangent.values,T,!0),r.defined(p)&&re(e,t,s,x,p,v.bitangent.values,T,!0),r.defined(d)&&ae(e,t,s,x,d,v.st.values,T),g>0)for(let n=0;n<g;n++){const i=b[n];pe(e,t,s,x,T,A[i],v[i])}}}function pe(e,t,n,i,r,a,s){const o=a.componentsPerAttribute,u=a.values,c=s.values;switch(o){case 4:ie(e,t,n,i,u,c,r,!1);break;case 3:re(e,t,n,i,u,c,r,!1);break;case 2:ae(e,t,n,i,u,c,r,!1);break;default:c[r]=u[e]*i.x+u[t]*i.y+u[n]*i.z}}function de(e,t,n,i,r,a){const s=e.position.values.length/3;if(-1!==r){const o=i[r],u=n[o];return-1===u?(n[o]=s,e.position.values.push(a.x,a.y,a.z),t.push(s),s):(t.push(u),u)}return e.position.values.push(a.x,a.y,a.z),t.push(s),s}const fe={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function ye(e){const t=e.geometry,n=t.attributes,a=n.position.values,s=r.defined(n.normal)?n.normal.values:void 0,o=r.defined(n.bitangent)?n.bitangent.values:void 0,u=r.defined(n.tangent)?n.tangent.values:void 0,c=r.defined(n.st)?n.st.values:void 0,l=r.defined(n.extrudeDirection)?n.extrudeDirection.values:void 0,p=r.defined(n.applyOffset)?n.applyOffset.values:void 0,d=t.indices,f=[];for(const e in n)n.hasOwnProperty(e)&&!fe[e]&&r.defined(n[e])&&f.push(e);const y=f.length,m=ee(t),C=ee(t);let h,v,b,g,A;const T=[];T.length=a.length/3;const x=[];for(x.length=a.length/3,A=0;A<T.length;++A)T[A]=-1,x[A]=-1;const P=d.length;for(A=0;A<P;A+=3){const e=d[A],t=d[A+1],P=d[A+2];let w=i.Cartesian3.fromArray(a,3*e),S=i.Cartesian3.fromArray(a,3*t),I=i.Cartesian3.fromArray(a,3*P);const O=Q(w,S,I);if(r.defined(O)&&O.positions.length>3){const i=O.positions,r=O.indices,w=r.length;for(let S=0;S<w;++S){const w=r[S],I=i[w];I.y<0?(h=C.attributes,v=C.indices,b=T):(h=m.attributes,v=m.indices,b=x),g=de(h,v,b,d,w<3?A+w:-1,I),le(e,t,P,I,a,s,u,o,c,l,p,h,f,y,n,g)}}else r.defined(O)&&(w=O.positions[0],S=O.positions[1],I=O.positions[2]),w.y<0?(h=C.attributes,v=C.indices,b=T):(h=m.attributes,v=m.indices,b=x),g=de(h,v,b,d,A,w),le(e,t,P,w,a,s,u,o,c,l,p,h,f,y,n,g),g=de(h,v,b,d,A+1,S),le(e,t,P,S,a,s,u,o,c,l,p,h,f,y,n,g),g=de(h,v,b,d,A+2,I),le(e,t,P,I,a,s,u,o,c,l,p,h,f,y,n,g)}te(e,C,m)}const me=d.Plane.fromPointNormal(i.Cartesian3.ZERO,i.Cartesian3.UNIT_Y),Ce=new i.Cartesian3,he=new i.Cartesian3;function ve(e,t,n,s,o,u,c){if(!r.defined(c))return;const l=i.Cartesian3.fromArray(s,3*e,se);i.Cartesian3.equalsEpsilon(l,n,a.CesiumMath.EPSILON10)?u.applyOffset.values[o]=c[e]:u.applyOffset.values[o]=c[t]}function be(e){const t=e.geometry,n=t.attributes,s=n.position.values,o=r.defined(n.applyOffset)?n.applyOffset.values:void 0,u=t.indices,c=ee(t),l=ee(t);let d;const f=u.length,y=[];y.length=s.length/3;const m=[];for(m.length=s.length/3,d=0;d<y.length;++d)y[d]=-1,m[d]=-1;for(d=0;d<f;d+=2){const e=u[d],t=u[d+1],n=i.Cartesian3.fromArray(s,3*e,se),f=i.Cartesian3.fromArray(s,3*t,oe);let C;Math.abs(n.y)<a.CesiumMath.EPSILON6&&(n.y<0?n.y=-a.CesiumMath.EPSILON6:n.y=a.CesiumMath.EPSILON6),Math.abs(f.y)<a.CesiumMath.EPSILON6&&(f.y<0?f.y=-a.CesiumMath.EPSILON6:f.y=a.CesiumMath.EPSILON6);let h=c.attributes,v=c.indices,b=m,g=l.attributes,A=l.indices,T=y;const x=p.IntersectionTests.lineSegmentPlane(n,f,me,ue);if(r.defined(x)){const r=i.Cartesian3.multiplyByScalar(i.Cartesian3.UNIT_Y,5*a.CesiumMath.EPSILON9,Ce);n.y<0&&(i.Cartesian3.negate(r,r),h=l.attributes,v=l.indices,b=y,g=c.attributes,A=c.indices,T=m);const p=i.Cartesian3.add(x,r,he);C=de(h,v,b,u,d,n),ve(e,t,n,s,C,h,o),C=de(h,v,b,u,-1,p),ve(e,t,p,s,C,h,o),i.Cartesian3.negate(r,r),i.Cartesian3.add(x,r,p),C=de(g,A,T,u,-1,p),ve(e,t,p,s,C,g,o),C=de(g,A,T,u,d+1,f),ve(e,t,f,s,C,g,o)}else{let i,r,a;n.y<0?(i=l.attributes,r=l.indices,a=y):(i=c.attributes,r=c.indices,a=m),C=de(i,r,a,u,d,n),ve(e,t,n,s,C,i,o),C=de(i,r,a,u,d+1,f),ve(e,t,f,s,C,i,o)}}te(e,l,c)}const ge=new n.Cartesian2,Ae=new n.Cartesian2,Te=new i.Cartesian3,xe=new i.Cartesian3,Pe=new i.Cartesian3,we=new i.Cartesian3,Se=new i.Cartesian3,Ie=new i.Cartesian3,Oe=new n.Cartesian4;function Ee(e){const t=e.attributes,n=t.position.values,r=t.prevPosition.values,a=t.nextPosition.values,s=n.length;for(let e=0;e<s;e+=3){const t=i.Cartesian3.unpack(n,e,Te);if(t.x>0)continue;const o=i.Cartesian3.unpack(r,e,xe);(t.y<0&&o.y>0||t.y>0&&o.y<0)&&(e-3>0?(r[e]=n[e-3],r[e+1]=n[e-2],r[e+2]=n[e-1]):i.Cartesian3.pack(t,r,e));const u=i.Cartesian3.unpack(a,e,Pe);(t.y<0&&u.y>0||t.y>0&&u.y<0)&&(e+3<s?(a[e]=n[e+3],a[e+1]=n[e+4],a[e+2]=n[e+5]):i.Cartesian3.pack(t,a,e))}}const Ne=5*a.CesiumMath.EPSILON9,Le=a.CesiumMath.EPSILON6;v.splitLongitude=function(e){const t=e.geometry,o=t.boundingSphere;if(r.defined(o)&&(o.center.x-o.radius>0||s.BoundingSphere.intersectPlane(o,d.Plane.ORIGIN_ZX_PLANE)!==s.Intersect.INTERSECTING))return e;if(t.geometryType!==c.GeometryType.NONE)switch(t.geometryType){case c.GeometryType.POLYLINES:!function(e){const t=e.geometry,s=t.attributes,o=s.position.values,u=s.prevPosition.values,c=s.nextPosition.values,l=s.expandAndWidth.values,d=r.defined(s.st)?s.st.values:void 0,f=r.defined(s.color)?s.color.values:void 0,y=ee(t),m=ee(t);let C,h,v,b=!1;const g=o.length/3;for(C=0;C<g;C+=4){const e=C,t=C+2,s=i.Cartesian3.fromArray(o,3*e,Te),g=i.Cartesian3.fromArray(o,3*t,xe);if(Math.abs(s.y)<Le)for(s.y=Le*(g.y<0?-1:1),o[3*C+1]=s.y,o[3*(C+1)+1]=s.y,h=3*e;h<3*e+12;h+=3)u[h]=o[3*C],u[h+1]=o[3*C+1],u[h+2]=o[3*C+2];if(Math.abs(g.y)<Le)for(g.y=Le*(s.y<0?-1:1),o[3*(C+2)+1]=g.y,o[3*(C+3)+1]=g.y,h=3*e;h<3*e+12;h+=3)c[h]=o[3*(C+2)],c[h+1]=o[3*(C+2)+1],c[h+2]=o[3*(C+2)+2];let A=y.attributes,T=y.indices,x=m.attributes,P=m.indices;const w=p.IntersectionTests.lineSegmentPlane(s,g,me,we);if(r.defined(w)){b=!0;const o=i.Cartesian3.multiplyByScalar(i.Cartesian3.UNIT_Y,Ne,Se);s.y<0&&(i.Cartesian3.negate(o,o),A=m.attributes,T=m.indices,x=y.attributes,P=y.indices);const p=i.Cartesian3.add(w,o,Ie);A.position.values.push(s.x,s.y,s.z,s.x,s.y,s.z),A.position.values.push(p.x,p.y,p.z),A.position.values.push(p.x,p.y,p.z),A.prevPosition.values.push(u[3*e],u[3*e+1],u[3*e+2]),A.prevPosition.values.push(u[3*e+3],u[3*e+4],u[3*e+5]),A.prevPosition.values.push(s.x,s.y,s.z,s.x,s.y,s.z),A.nextPosition.values.push(p.x,p.y,p.z),A.nextPosition.values.push(p.x,p.y,p.z),A.nextPosition.values.push(p.x,p.y,p.z),A.nextPosition.values.push(p.x,p.y,p.z),i.Cartesian3.negate(o,o),i.Cartesian3.add(w,o,p),x.position.values.push(p.x,p.y,p.z),x.position.values.push(p.x,p.y,p.z),x.position.values.push(g.x,g.y,g.z,g.x,g.y,g.z),x.prevPosition.values.push(p.x,p.y,p.z),x.prevPosition.values.push(p.x,p.y,p.z),x.prevPosition.values.push(p.x,p.y,p.z),x.prevPosition.values.push(p.x,p.y,p.z),x.nextPosition.values.push(g.x,g.y,g.z,g.x,g.y,g.z),x.nextPosition.values.push(c[3*t],c[3*t+1],c[3*t+2]),x.nextPosition.values.push(c[3*t+3],c[3*t+4],c[3*t+5]);const S=n.Cartesian2.fromArray(l,2*e,ge),I=Math.abs(S.y);A.expandAndWidth.values.push(-1,I,1,I),A.expandAndWidth.values.push(-1,-I,1,-I),x.expandAndWidth.values.push(-1,I,1,I),x.expandAndWidth.values.push(-1,-I,1,-I);let O=i.Cartesian3.magnitudeSquared(i.Cartesian3.subtract(w,s,Pe));if(O/=i.Cartesian3.magnitudeSquared(i.Cartesian3.subtract(g,s,Pe)),r.defined(f)){const i=n.Cartesian4.fromArray(f,4*e,Oe),r=n.Cartesian4.fromArray(f,4*t,Oe),s=a.CesiumMath.lerp(i.x,r.x,O),o=a.CesiumMath.lerp(i.y,r.y,O),u=a.CesiumMath.lerp(i.z,r.z,O),c=a.CesiumMath.lerp(i.w,r.w,O);for(h=4*e;h<4*e+8;++h)A.color.values.push(f[h]);for(A.color.values.push(s,o,u,c),A.color.values.push(s,o,u,c),x.color.values.push(s,o,u,c),x.color.values.push(s,o,u,c),h=4*t;h<4*t+8;++h)x.color.values.push(f[h])}if(r.defined(d)){const i=n.Cartesian2.fromArray(d,2*e,ge),r=n.Cartesian2.fromArray(d,2*(C+3),Ae),s=a.CesiumMath.lerp(i.x,r.x,O);for(h=2*e;h<2*e+4;++h)A.st.values.push(d[h]);for(A.st.values.push(s,i.y),A.st.values.push(s,r.y),x.st.values.push(s,i.y),x.st.values.push(s,r.y),h=2*t;h<2*t+4;++h)x.st.values.push(d[h])}v=A.position.values.length/3-4,T.push(v,v+2,v+1),T.push(v+1,v+2,v+3),v=x.position.values.length/3-4,P.push(v,v+2,v+1),P.push(v+1,v+2,v+3)}else{let e,t;for(s.y<0?(e=m.attributes,t=m.indices):(e=y.attributes,t=y.indices),e.position.values.push(s.x,s.y,s.z),e.position.values.push(s.x,s.y,s.z),e.position.values.push(g.x,g.y,g.z),e.position.values.push(g.x,g.y,g.z),h=3*C;h<3*C+12;++h)e.prevPosition.values.push(u[h]),e.nextPosition.values.push(c[h]);for(h=2*C;h<2*C+8;++h)e.expandAndWidth.values.push(l[h]),r.defined(d)&&e.st.values.push(d[h]);if(r.defined(f))for(h=4*C;h<4*C+16;++h)e.color.values.push(f[h]);v=e.position.values.length/3-4,t.push(v,v+2,v+1),t.push(v+1,v+2,v+3)}}b&&(Ee(m),Ee(y)),te(e,m,y)}(e);break;case c.GeometryType.TRIANGLES:ye(e);break;case c.GeometryType.LINES:be(e)}else(function(e){switch(e.primitiveType){case c.PrimitiveType.TRIANGLE_FAN:return function(e){const t=c.Geometry.computeNumberOfVertices(e),n=l.IndexDatatype.createTypedArray(t,3*(t-2));n[0]=1,n[1]=0,n[2]=2;let i=3;for(let e=3;e<t;++e)n[i++]=e-1,n[i++]=0,n[i++]=e;return e.indices=n,e.primitiveType=c.PrimitiveType.TRIANGLES,e}(e);case c.PrimitiveType.TRIANGLE_STRIP:return function(e){const t=c.Geometry.computeNumberOfVertices(e),n=l.IndexDatatype.createTypedArray(t,3*(t-2));n[0]=0,n[1]=1,n[2]=2,t>3&&(n[3]=0,n[4]=2,n[5]=3);let i=6;for(let e=3;e<t-1;e+=2)n[i++]=e,n[i++]=e-1,n[i++]=e+1,e+2<t&&(n[i++]=e,n[i++]=e+1,n[i++]=e+2);return e.indices=n,e.primitiveType=c.PrimitiveType.TRIANGLES,e}(e);case c.PrimitiveType.TRIANGLES:return function(e){if(r.defined(e.indices))return e;const t=c.Geometry.computeNumberOfVertices(e),n=l.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)n[e]=e;return e.indices=n,e}(e);case c.PrimitiveType.LINE_STRIP:return function(e){const t=c.Geometry.computeNumberOfVertices(e),n=l.IndexDatatype.createTypedArray(t,2*(t-1));n[0]=0,n[1]=1;let i=2;for(let e=2;e<t;++e)n[i++]=e-1,n[i++]=e;return e.indices=n,e.primitiveType=c.PrimitiveType.LINES,e}(e);case c.PrimitiveType.LINE_LOOP:return function(e){const t=c.Geometry.computeNumberOfVertices(e),n=l.IndexDatatype.createTypedArray(t,2*t);n[0]=0,n[1]=1;let i=2;for(let e=2;e<t;++e)n[i++]=e-1,n[i++]=e;return n[i++]=t-1,n[i]=0,e.indices=n,e.primitiveType=c.PrimitiveType.LINES,e}(e);case c.PrimitiveType.LINES:(function(e){if(r.defined(e.indices))return e;const t=c.Geometry.computeNumberOfVertices(e),n=l.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)n[e]=e;e.indices=n})(e)}})(t),t.primitiveType===c.PrimitiveType.TRIANGLES?ye(e):t.primitiveType===c.PrimitiveType.LINES&&be(e);return e};var Me=v;e.GeometryPipeline=Me}));
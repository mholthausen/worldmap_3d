define(["exports","./Transforms-e9dbfb40","./ComponentDatatype-6d99a1ee","./when-54c2dc71","./Check-6c0211bc","./Cartesian2-49b1de22","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./GeometryPipeline-39e647e8","./IndexDatatype-46306178","./WebMercatorProjection-8d5f5f84"],(function(e,t,r,n,i,o,a,s,d,p,u){"use strict";function f(e,t,r){e=n.defaultValue(e,0),t=n.defaultValue(t,0),r=n.defaultValue(r,0),this.value=new Float32Array([e,t,r])}function c(e,t){var n=e.attributes,i=(e=n.position).values.length/e.componentsPerAttribute;n.batchId=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(i)});for(var o=n.batchId.values,s=0;s<i;++s)o[s]=t}function m(e,t,r,i){var o,a,s,d=i.length-1;s=0<=d?(o=(d=i[d]).offset+d.count,r[a=d.index].indices.length):r[a=o=0].indices.length;for(var p=e.length,u=0;u<p;++u){var f=e[u][t];n.defined(f)&&(s<o+(f=f.indices.length)&&(o=0,s=r[++a].indices.length),i.push({index:a,offset:o,count:f}),o+=f)}}Object.defineProperties(f.prototype,{componentDatatype:{get:function(){return r.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),f.fromCartesian3=function(e){return new f(e.x,e.y,e.z)},f.toValue=function(e,t){return(t=n.defined(t)?t:new Float32Array([e.x,e.y,e.z]))[0]=e.x,t[1]=e.y,t[2]=e.z,t};var h={};function l(e){var r=e.length,i=1+(t.BoundingSphere.packedLength+1)*r,o=new Float32Array(i),a=0;o[a++]=r;for(var s=0;s<r;++s){var d=e[s];n.defined(d)?(o[a++]=1,t.BoundingSphere.pack(e[s],o,a)):o[a++]=0,a+=t.BoundingSphere.packedLength}return o}function g(e){for(var r=new Array(e[0]),n=0,i=1;i<e.length;)1===e[i++]&&(r[n]=t.BoundingSphere.unpack(e,i)),++n,i+=t.BoundingSphere.packedLength;return r}h.combineGeometry=function(e){var i,o,a,s,p,u,f=e.instances,h=f.length,l=!1;0<h&&(0<(i=function(e){var i,o=e.instances,a=e.projection,s=e.elementIndexUintSupported,p=e.scene3DOnly,u=e.vertexCacheOptimize,f=e.compressVertices,m=(e=e.modelMatrix,o.length);for(x=0;x<m;++x)if(n.defined(o[x].geometry)){o[x].geometry.primitiveType;break}if(function(e,r){var i=!p,o=e.length;if(!i&&1<o)for(var a=e[0].modelMatrix,s=1;s<o;++s)if(!t.Matrix4.equals(a,e[s].modelMatrix)){i=!0;break}if(i)for(s=0;s<o;++s)n.defined(e[s].geometry)&&d.GeometryPipeline.transformToWorldCoordinates(e[s]);else t.Matrix4.multiplyTransformation(r,e[0].modelMatrix,r)}(o,e),!p)for(x=0;x<m;++x)n.defined(o[x].geometry)&&d.GeometryPipeline.splitLongitude(o[x]);if(function(e){for(var t=e.length,r=0;r<t;++r){var i=e[r];n.defined(i.geometry)?c(i.geometry,r):n.defined(i.westHemisphereGeometry)&&n.defined(i.eastHemisphereGeometry)&&(c(i.westHemisphereGeometry,r),c(i.eastHemisphereGeometry,r))}}(o),u)for(x=0;x<m;++x){var h=o[x];n.defined(h.geometry)?(d.GeometryPipeline.reorderForPostVertexCache(h.geometry),d.GeometryPipeline.reorderForPreVertexCache(h.geometry)):n.defined(h.westHemisphereGeometry)&&n.defined(h.eastHemisphereGeometry)&&(d.GeometryPipeline.reorderForPostVertexCache(h.westHemisphereGeometry),d.GeometryPipeline.reorderForPreVertexCache(h.westHemisphereGeometry),d.GeometryPipeline.reorderForPostVertexCache(h.eastHemisphereGeometry),d.GeometryPipeline.reorderForPreVertexCache(h.eastHemisphereGeometry))}var l=d.GeometryPipeline.combineInstances(o);for(m=l.length,x=0;x<m;++x){var g,y,b,v=(i=l[x]).attributes;if(p)for(g in v)v.hasOwnProperty(g)&&v[g].componentDatatype===r.ComponentDatatype.DOUBLE&&d.GeometryPipeline.encodeAttribute(i,g,g+"3DHigh",g+"3DLow");else for(g in v)v.hasOwnProperty(g)&&v[g].componentDatatype===r.ComponentDatatype.DOUBLE&&(y=g+"3D",b=g+"2D",d.GeometryPipeline.projectTo2D(i,g,y,b,a),n.defined(i.boundingSphere)&&"position"===g&&(i.boundingSphereCV=t.BoundingSphere.fromVertices(i.attributes.position2D.values)),d.GeometryPipeline.encodeAttribute(i,y,y+"High",y+"Low"),d.GeometryPipeline.encodeAttribute(i,b,b+"High",b+"Low"));f&&d.GeometryPipeline.compressVertices(i)}if(!s){for(var G=[],x=(m=l.length,0);x<m;++x)i=l[x],G=G.concat(d.GeometryPipeline.fitToUnsignedShortIndices(i));l=G}return l}(e)).length&&(o=d.GeometryPipeline.createAttributeLocations(i[0]),e.createPickOffsets&&(m(s=f,"geometry",p=i,u=[]),m(s,"westHemisphereGeometry",p,u),m(s,"eastHemisphereGeometry",p,u),u=u)),n.defined(f[0].attributes)&&n.defined(f[0].attributes.offset)&&(a=new Array(h),l=!0));for(var g=new Array(h),y=new Array(h),b=0;b<h;++b){var v=f[b],G=v.geometry;n.defined(G)&&(g[b]=G.boundingSphere,y[b]=G.boundingSphereCV,l&&(a[b]=v.geometry.offsetAttribute)),G=v.eastHemisphereGeometry,v=v.westHemisphereGeometry,n.defined(G)&&n.defined(v)&&(n.defined(G.boundingSphere)&&n.defined(v.boundingSphere)&&(g[b]=t.BoundingSphere.union(G.boundingSphere,v.boundingSphere)),n.defined(G.boundingSphereCV)&&n.defined(v.boundingSphereCV)&&(y[b]=t.BoundingSphere.union(G.boundingSphereCV,v.boundingSphereCV)))}return{geometries:i,modelMatrix:e.modelMatrix,attributeLocations:o,pickOffsets:u,offsetInstanceExtend:a,boundingSpheres:g,boundingSpheresCV:y}},h.packCreateGeometryResults=function(e,r){var i=new Float64Array(function(e){for(var r=1,i=e.length,o=0;o<i;o++){var a=e[o];if(++r,n.defined(a)){var s,d=a.attributes;for(s in r+=7+2*t.BoundingSphere.packedLength+(n.defined(a.indices)?a.indices.length:0),d)d.hasOwnProperty(s)&&n.defined(d[s])&&(r+=5+d[s].values.length)}}return r}(e)),o=[],a={},s=e.length,d=0;i[d++]=s;for(var p=0;p<s;p++){var u=e[p],f=n.defined(u);if(i[d++]=f?1:0,f){i[d++]=u.primitiveType,i[d++]=u.geometryType,i[d++]=n.defaultValue(u.offsetAttribute,-1),f=n.defined(u.boundingSphere)?1:0,(i[d++]=f)&&t.BoundingSphere.pack(u.boundingSphere,i,d),d+=t.BoundingSphere.packedLength,f=n.defined(u.boundingSphereCV)?1:0,(i[d++]=f)&&t.BoundingSphere.pack(u.boundingSphereCV,i,d),d+=t.BoundingSphere.packedLength;var c,m=u.attributes,h=[];for(c in m)m.hasOwnProperty(c)&&n.defined(m[c])&&(h.push(c),n.defined(a[c])||(a[c]=o.length,o.push(c)));i[d++]=h.length;for(var l=0;l<h.length;l++){var g=h[l],y=m[g];i[d++]=a[g],i[d++]=y.componentDatatype,i[d++]=y.componentsPerAttribute,i[d++]=y.normalize?1:0,i[d++]=y.values.length,i.set(y.values,d),d+=y.values.length}f=n.defined(u.indices)?u.indices.length:0,0<(i[d++]=f)&&(i.set(u.indices,d),d+=f)}}return r.push(i.buffer),{stringTable:o,packedData:i}},h.unpackCreateGeometryResults=function(e){for(var n=e.stringTable,i=e.packedData,o=new Array(i[0]),d=0,u=1;u<i.length;)if(1===i[u++]){var f,c,m=i[u++],h=i[u++],l=i[u++];-1===l&&(l=void 0),1===i[u++]&&(f=t.BoundingSphere.unpack(i,u)),u+=t.BoundingSphere.packedLength,1===i[u++]&&(c=t.BoundingSphere.unpack(i,u)),u+=t.BoundingSphere.packedLength;var g=new s.GeometryAttributes,y=i[u++];for(A=0;A<y;A++){for(var b=n[i[u++]],v=i[u++],G=i[u++],x=0!==i[u++],S=i[u++],P=r.ComponentDatatype.createTypedArray(v,S),k=0;k<S;k++)P[k]=i[u++];g[b]=new a.GeometryAttribute({componentDatatype:v,componentsPerAttribute:G,normalize:x,values:P})}if(0<(S=i[u++]))for(var C=P.length/G,w=p.IndexDatatype.createTypedArray(C,S),A=0;A<S;A++)w[A]=i[u++];o[d++]=new a.Geometry({primitiveType:m,geometryType:h,boundingSphere:f,boundingSphereCV:c,indices:w,attributes:g,offsetAttribute:l})}else o[d++]=void 0;return o},h.packCombineGeometryParameters=function(e,r){for(var i=e.createGeometryResults,o=i.length,a=0;a<o;a++)r.push(i[a].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:function(e,r){var i=e.length,o=new Float64Array(1+19*i),a=0;o[a++]=i;for(var s=0;s<i;s++){var d=e[s];t.Matrix4.pack(d.modelMatrix,o,a),a+=t.Matrix4.packedLength,n.defined(d.attributes)&&n.defined(d.attributes.offset)&&(d=d.attributes.offset.value,o[a]=d[0],o[a+1]=d[1],o[a+2]=d[2]),a+=3}return r.push(o.buffer),o}(e.instances,r),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof t.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},h.unpackCombineGeometryParameters=function(e){for(var r=function(e){for(var r=e,i=new Array(r[0]),o=0,a=1;a<r.length;){var s,d=t.Matrix4.unpack(r,a);a+=t.Matrix4.packedLength,n.defined(r[a])&&(s={offset:new f(r[a],r[a+1],r[a+2])}),a+=3,i[o++]={modelMatrix:d,attributes:s}}return i}(e.packedInstances),i=e.createGeometryResults,a=i.length,s=0,d=0;d<a;d++)for(var p=h.unpackCreateGeometryResults(i[d]),c=p.length,m=0;m<c;m++){var l=p[m];r[s].geometry=l,++s}var g=o.Ellipsoid.clone(e.ellipsoid);return{instances:r,ellipsoid:g,projection:new(e.isGeographic?t.GeographicProjection:u.WebMercatorProjection)(g),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:t.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},h.packCombineGeometryResults=function(e,t){n.defined(e.geometries)&&function(e,t){for(var r=e.length,i=0;i<r;++i)!function(e,t){var r,i,o=e.attributes;for(r in o)o.hasOwnProperty(r)&&(i=o[r],n.defined(i)&&n.defined(i.values)&&t.push(i.values.buffer));n.defined(e.indices)&&t.push(e.indices.buffer)}(e[i],t)}(e.geometries,t);var r=l(e.boundingSpheres),i=l(e.boundingSpheresCV);return t.push(r.buffer,i.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r,boundingSpheresCV:i}},h.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:g(e.boundingSpheres),boundingSpheresCV:g(e.boundingSpheresCV)}},e.PrimitivePipeline=h}));
(this["webpackJsonpzyrafo-inator"]=this["webpackJsonpzyrafo-inator"]||[]).push([[0],{41:function(t,r,a){},44:function(t,r,a){},45:function(t,r,a){"use strict";a.r(r);var n=a(4),e=a.n(n),o=a(14),c=a.n(o),l=(a(41),a(3)),i=a(0),d=function(){for(var t=i.b("svg"),r=800/3,a=[],n=0;n<3;n++)for(var e=0;e<4;e++)a.push({x:Math.random()*((n+1)*r*.95-n*r*1.05)+n*r*1.1,y:Math.random()*(200*(e+1)*.95-200*e*1.05)+200*e*1.1});var o=i.a.from(a,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]);return t.append("g").attr("fill","#6b371f").attr("pointer-events","all").selectAll("path").data(a).join("path").attr("d",(function(t,r){return o.renderCell(r)})),t.append("g").attr("fill","none").attr("stroke","#ccc").attr("stroke-width",25).selectAll("path").data(a).join("path").attr("d",(function(t,r){return o.renderCell(r)})),t.node()},f=function(){for(var t=i.b("svg"),r=[],a=0;a<4;a++)for(var n=0;n<4;n++)r.push({x:Math.random()*(200*(a+1)*.9-200*a*1.1)+200*a*1.1,y:Math.random()*(200*(n+1)*.9-200*n*1.1)+200*n*1.1});for(var e=i.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#c09e72"},{offset:"100%",color:"#b48b57"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",170).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#f5e6cf").attr("stroke-width",25).selectAll("path").data(r).join("path").attr("d",(function(t,r){return e.renderCell(r)})),t.node()},p=function(){for(var t=i.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<4;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(200*(n+1)*.95-200*n*1.05)+200*n*1.1});for(var e=i.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#7d5d36"},{offset:"50%",color:"#8f6a3d"},{offset:"100%",color:"#a97e49"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",200).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#e4d5ab").selectAll("path").data(r).join("path").attr("d",(function(t,r){return e.renderCell(r)})).attr("stroke-width",(function(){return 8*Math.random()+12})),t.node()},s=function(){for(var t=i.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<5;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(160*(n+1)*.95-160*n*1.05)+160*n*1.1});for(var e=i.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#846948"},{offset:"100%",color:"#a6865e"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",160).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#e4d5ab").selectAll("path").data(r).join("polygon").attr("points",(function(t,r){return function(t){var r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=e.renderCell(t);r.setAttribute("d",a);for(var n=r.getTotalLength(),o=[],c=0;c<80;c++){var l=r.getPointAtLength(c*n/79);c>=5&&c<=75&&(l.x+=6*Math.random()-3,l.y+=6*Math.random()-3),o.push([l.x,l.y])}return o}(r)})).attr("stroke-width",(function(){return 10*Math.random()+20})),t.node()},u=function(){for(var t=i.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<5;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(160*(n+1)*.95-160*n*1.05)+160*n*1.1});for(var e=i.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#6d4e2c"},{offset:"100%",color:"#886138"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",170).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#d1ba8e").selectAll("path").data(r).join("polygon").attr("points",(function(t,r){return function(t){var r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=e.renderCell(t);r.setAttribute("d",a);for(var n=r.getTotalLength(),o=[],c=0;c<80;c++){var l=r.getPointAtLength(c*n/79);l.x+=6*Math.random()-3,l.y+=6*Math.random()-3,o.push([l.x,l.y])}return o}(r)})).attr("stroke-width",(function(){return 10*Math.random()+17})),t.node()},h=function(){for(var t=i.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<5;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(160*(n+1)*.95-160*n*1.05)+160*n*1.1});for(var e=i.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#754b24"},{offset:"100%",color:"#95602e"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",170).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#d4b18a").selectAll("path").data(r).join("polygon").attr("points",(function(t,r){return function(t){var r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=e.renderCell(t);r.setAttribute("d",a);for(var n=r.getTotalLength(),o=[],c=0;c<80;c++){var l=r.getPointAtLength(c*n/79);l.x+=8*Math.random()-4,l.y+=8*Math.random()-4,Math.random()<.015&&(l.x+=34*Math.random()-17,l.y+=34*Math.random()-17),o.push([l.x,l.y])}return o}(r)})).attr("stroke-width",(function(){return 15*Math.random()+10})),t.node()},m=function(){for(var t=i.b("svg"),r=[],a=0;a<4;a++)for(var n=0;n<4;n++)r.push({x:Math.random()*(200*(a+1)*.9-200*a*1.1)+200*a*1.1,y:Math.random()*(200*(n+1)*.9-200*n*1.1)+200*n*1.1});for(var e=i.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=["#8b5f41","#795339","#684731","#573b29"],c=t.append("defs"),l=0;l<r.length;l++)c.append("linearGradient").attr("id",l).selectAll("stop").data([{offset:"0%",color:o[Math.floor(Math.random()*o.length)]},{offset:"30%",color:o[Math.floor(Math.random()*o.length)]},{offset:"60%",color:o[Math.floor(Math.random()*o.length)]},{offset:"100%",color:o[Math.floor(Math.random()*o.length)]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),c.append("clipPath").attr("id","clipPath".concat(l)).append("path").attr("d",e.renderCell(l)),t.append("circle").attr("r",200).attr("cx",r[l].x).attr("cy",r[l].y).attr("clip-path","url(#clipPath".concat(l,")")).attr("spreadMethod","reflect").style("fill","url('#".concat(l,"')"));return t.append("g").attr("fill","none").attr("stroke","#ffe3cb").selectAll("path").data(r).join("polygon").attr("points",(function(t,r){return function(t){var r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=e.renderCell(t);r.setAttribute("d",a);for(var n=r.getTotalLength(),o=[],c=0;c<80;c++){var l=r.getPointAtLength(c*n/79);l.x+=6*Math.random()-3,l.y+=6*Math.random()-3,Math.random()<.015&&(l.x+=34*Math.random()-17,l.y+=34*Math.random()-17),o.push([l.x,l.y])}return o}(r)})).attr("stroke-width",(function(){return 10*Math.random()+10})),t.node()},y=function(){for(var t=i.b("svg"),r=800/6,a=[],n=0;n<6;n++)for(var e=0;e<5;e++)a.push({x:Math.random()*((n+1)*r*.95-n*r*1.15)+n*r*1.1,y:Math.random()*(160*(e+1)*.95-160*e*1.15)+160*e*1.1});for(var o=i.a.from(a,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),c=["#8b5f41"],l=t.append("defs"),d=0;d<a.length;d++)l.append("linearGradient").attr("id",d).selectAll("stop").data([{offset:"0%",color:c[Math.floor(Math.random()*c.length)]},{offset:"30%",color:c[Math.floor(Math.random()*c.length)]},{offset:"60%",color:c[Math.floor(Math.random()*c.length)]},{offset:"100%",color:c[Math.floor(Math.random()*c.length)]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),l.append("clipPath").attr("id","clipPath".concat(d)).append("path").attr("d",o.renderCell(d)),t.append("circle").attr("r",200).attr("cx",a[d].x).attr("cy",a[d].y).attr("clip-path","url(#clipPath".concat(d,")")).attr("spreadMethod","reflect").style("fill","url('#".concat(d,"')"));return t.append("g").attr("fill","none").attr("stroke","#ffe3cb").selectAll("path").data(a).join("polygon").attr("points",(function(r,n){return function(r){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),e=o.renderCell(r);n.setAttribute("d",e);for(var c=n.getTotalLength(),l=[],i=0;i<80;i++){var d=n.getPointAtLength(i*c/79);if(Math.random()<.005){var f=n.getPointAtLength(i*c/75);void 0!=a[r]&&t.append("polygon").attr("points",[d.x,d.y,f.x,f.y,a[r].x,a[r].y]).attr("fill","#ffe3cb").attr("stroke-width",10).attr("stroke-linejoin","round")}else d.x+=4*Math.random()-1,d.y+=4*Math.random()-1;l.push([d.x,d.y])}return l}(n)})).attr("stroke-width",(function(){return 10*Math.random()+10})),t.node()},g=a(1);var b=function(t){var r;switch(t.species){case 0:r=d();break;case 1:r=f();break;case 2:r=p();break;case 3:r=s();break;case 4:r=u();break;case 5:r=h();break;case 6:r=m();break;case 7:r=y();break;default:r=d()}return Object(g.jsx)("svg",{dangerouslySetInnerHTML:{__html:r.innerHTML},className:"Giraffe",viewBox:"100, 100, 600, 600"})};a(44);var v=function(){var t=function(){var t=Object(n.useState)(0),r=Object(l.a)(t,2),a=r[0],e=r[1];return[function(){return e((function(t){return t+1}))},a]}(),r=Object(l.a)(t,2),a=r[0],e=r[1],o=Object(n.useState)(0),c=Object(l.a)(o,2),i=c[0],d=c[1],f=function(t){d(i=t),a()};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{className:"App-header",children:"\u017bYRAFO-INATOR"}),Object(g.jsxs)("main",{className:"Container",children:[Object(g.jsxs)("div",{className:"ButtonList",children:[Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(0)},children:"\u017byrafa siatkowana"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(1)},children:"\u017byrafa zachodnioafryka\u0144ska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(2)},children:"\u017byrafa nubijska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(3)},children:"\u017byrafa kordofa\u0144ska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(4)},children:"\u017byrafa angolska"})]}),Object(g.jsx)(b,{species:i},e),Object(g.jsxs)("div",{className:"ButtonList",children:[Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(5)},children:"\u017byrafa po\u0142udniowoafryka\u0144ska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(6)},children:"\u017byrafa rotszylda"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return f(7)},children:"\u017byrafa thornicrofta"})]})]})]})},x=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(r){var a=r.getCLS,n=r.getFID,e=r.getFCP,o=r.getLCP,c=r.getTTFB;a(t),n(t),e(t),o(t),c(t)}))};c.a.render(Object(g.jsx)(e.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.3253ff37.chunk.js.map
(this["webpackJsonpzyrafo-inator"]=this["webpackJsonpzyrafo-inator"]||[]).push([[0],{41:function(t,r,a){},44:function(t,r,a){},45:function(t,r,a){"use strict";a.r(r);var n=a(4),e=a.n(n),o=a(14),c=a.n(o),l=(a(41),a(3)),p=a(0),d=function(){for(var t=p.b("svg"),r=800/3,a=[],n=0;n<3;n++)for(var e=0;e<4;e++)a.push({x:Math.random()*((n+1)*r*.95-n*r*1.05)+n*r*1.1,y:Math.random()*(200*(e+1)*.95-200*e*1.05)+200*e*1.1});var o=p.a.from(a,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]);return t.append("g").attr("fill","#6b371f").attr("pointer-events","all").selectAll("path").data(a).join("path").attr("d",(function(t,r){return o.renderCell(r)})),t.append("g").attr("fill","none").attr("stroke","#ccc").attr("stroke-width",25).selectAll("path").data(a).join("path").attr("d",(function(t,r){return o.renderCell(r)})),t.node()},i=function(){for(var t=p.b("svg"),r=[],a=0;a<4;a++)for(var n=0;n<4;n++)r.push({x:Math.random()*(200*(a+1)*.9-200*a*1.1)+200*a*1.1,y:Math.random()*(200*(n+1)*.9-200*n*1.1)+200*n*1.1});for(var e=p.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#c09e72"},{offset:"100%",color:"#b48b57"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",170).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#f5e6cf").attr("stroke-width",25).selectAll("path").data(r).join("path").attr("d",(function(t,r){return e.renderCell(r)})),t.node()},f=function(){for(var t=p.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<4;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(200*(n+1)*.95-200*n*1.05)+200*n*1.1});for(var e=p.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#7d5d36"},{offset:"50%",color:"#8f6a3d"},{offset:"100%",color:"#a97e49"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",200).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#e4d5ab").selectAll("path").data(r).join("path").attr("d",(function(t,r){return e.renderCell(r)})).attr("stroke-width",(function(){return 8*Math.random()+12})),t.node()},s=function(){for(var t=p.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<5;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(160*(n+1)*.95-160*n*1.05)+160*n*1.1});for(var e=p.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#846948"},{offset:"100%",color:"#a6865e"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",160).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#e4d5ab").selectAll("path").data(r).join("polygon").attr("points",(function(t,r){return function(t){var r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=e.renderCell(t);r.setAttribute("d",a);for(var n=r.getTotalLength(),o=[],c=0;c<80;c++){var l=r.getPointAtLength(c*n/79);c>=5&&c<=75&&(l.x+=6*Math.random()-3,l.y+=6*Math.random()-3),o.push([l.x,l.y])}return o}(r)})).attr("stroke-width",(function(){return 10*Math.random()+20})),t.node()},u=function(){for(var t=p.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<5;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(160*(n+1)*.95-160*n*1.05)+160*n*1.1});for(var e=p.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#6d4e2c"},{offset:"100%",color:"#886138"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",170).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#d1ba8e").selectAll("path").data(r).join("polygon").attr("points",(function(t,r){return function(t){var r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=e.renderCell(t);r.setAttribute("d",a);for(var n=r.getTotalLength(),o=[],c=0;c<80;c++){var l=r.getPointAtLength(c*n/79);l.x+=6*Math.random()-3,l.y+=6*Math.random()-3,o.push([l.x,l.y])}return o}(r)})).attr("stroke-width",(function(){return 10*Math.random()+17})),t.node()},h=function(){for(var t=p.b("svg"),r=[],a=0;a<5;a++)for(var n=0;n<5;n++)r.push({x:Math.random()*(160*(a+1)*.95-160*a*1.05)+160*a*1.1,y:Math.random()*(160*(n+1)*.95-160*n*1.05)+160*n*1.1});for(var e=p.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=t.append("defs"),c=0;c<r.length;c++)o.append("radialGradient").attr("id",c).selectAll("stop").data([{offset:"0%",color:"#754b24"},{offset:"100%",color:"#95602e"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("clipPath").attr("id","clipPath".concat(c)).append("path").attr("d",e.renderCell(c)),t.append("circle").attr("r",170).attr("cx",r[c].x).attr("cy",r[c].y).attr("clip-path","url(#clipPath".concat(c,")")).style("fill","url('#".concat(c,"')"));return t.append("g").attr("fill","none").attr("stroke","#d4b18a").selectAll("path").data(r).join("polygon").attr("points",(function(a,n){return function(a){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),o=e.renderCell(a);n.setAttribute("d",o);for(var c=n.getTotalLength(),l=[],p=0;p<80;p++){var d=n.getPointAtLength(p*c/79);if(Math.random()<.015){var i=n.getPointAtLength(p*c/85);if(Math.abs(d.x-i.x)>25||Math.abs(d.y-i.y)>25){for(var f=(d.x+i.x)/2,s=(d.y+i.y)/2,u=f+.8*(r[a].x-f),h=s+.8*(r[a].y-s),y=[],m=0;m<20;m++)y.push(d.x+m/20*(u-d.x)+6*Math.random()-3),y.push(d.y+m/20*(h-d.y)+6*Math.random()-3);for(var x=[],g=0;g<20;g++)x.push(u+g/30*(i.x-u)+6*Math.random()-3),x.push(h+g/30*(i.y-h)+6*Math.random()-3);t.append("polygon").attr("points",[d.x,d.y,y,x,i.x,i.y]).attr("fill","#d4b18a")}}d.x+=8*Math.random()-4,d.y+=8*Math.random()-4,l.push([d.x,d.y])}return l}(n)})).attr("stroke-width",(function(){return 15*Math.random()+10})),t.node()},y=function(){for(var t=p.b("svg"),r=[],a=0;a<4;a++)for(var n=0;n<4;n++)r.push({x:Math.random()*(200*(a+1)*.9-200*a*1.1)+200*a*1.1,y:Math.random()*(200*(n+1)*.9-200*n*1.1)+200*n*1.1});for(var e=p.a.from(r,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),o=["#9c6a49","#8b5f41","#795339","#684731"],c=t.append("defs"),l=0;l<r.length;l++)c.append("linearGradient").attr("id",l).selectAll("stop").data([{offset:"0%",color:o[Math.floor(Math.random()*o.length)]},{offset:"30%",color:o[Math.floor(Math.random()*o.length)]},{offset:"60%",color:o[Math.floor(Math.random()*o.length)]},{offset:"100%",color:o[Math.floor(Math.random()*o.length)]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),c.append("clipPath").attr("id","clipPath".concat(l)).append("path").attr("d",e.renderCell(l)),t.append("circle").attr("r",200).attr("cx",r[l].x).attr("cy",r[l].y).attr("clip-path","url(#clipPath".concat(l,")")).attr("spreadMethod","reflect").style("fill","url('#".concat(l,"')"));return t.append("g").attr("fill","none").attr("stroke","#ffe3cb").selectAll("path").data(r).join("polygon").attr("points",(function(t,r){return function(t){var r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=e.renderCell(t);r.setAttribute("d",a);for(var n=r.getTotalLength(),o=[],c=0;c<80;c++){var l=r.getPointAtLength(c*n/79);l.x+=6*Math.random()-3,l.y+=6*Math.random()-3,Math.random()<.015&&(l.x+=34*Math.random()-17,l.y+=34*Math.random()-17),o.push([l.x,l.y])}return o}(r)})).attr("stroke-width",(function(){return 10*Math.random()+10})),t.node()},m=function(){for(var t=p.b("svg"),r=800/6,a=[],n=0;n<6;n++)for(var e=0;e<5;e++)a.push({x:Math.random()*((n+1)*r*.95-n*r*1.15)+n*r*1.1,y:Math.random()*(160*(e+1)*.95-160*e*1.15)+160*e*1.1});for(var o=p.a.from(a,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),c=["#785541","#74523e","#634636"],l=t.append("defs"),d=0;d<a.length;d++)l.append("radialGradient").attr("id",d).selectAll("stop").data([{offset:"0%",color:c[Math.floor(Math.random()*c.length)]},{offset:"20%",color:c[Math.floor(Math.random()*c.length)]},{offset:"40%",color:c[Math.floor(Math.random()*c.length)]},{offset:"100%",color:c[Math.floor(Math.random()*c.length)]}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),l.append("clipPath").attr("id","clipPath".concat(d)).append("path").attr("d",o.renderCell(d)),t.append("circle").attr("r",200).attr("cx",a[d].x).attr("cy",a[d].y).attr("clip-path","url(#clipPath".concat(d,")")).attr("spreadMethod","reflect").style("fill","url('#".concat(d,"')"));return t.append("g").attr("fill","none").attr("stroke","#dac2b7").selectAll("path").data(a).join("polygon").attr("points",(function(r,n){return function(r){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),e=o.renderCell(r);n.setAttribute("d",e);for(var c=n.getTotalLength(),l=[],p=0;p<80;p++){var d=n.getPointAtLength(p*c/79);if(Math.random()<.015){var i=n.getPointAtLength(p*c/85);if(Math.abs(d.x-i.x)>15||Math.abs(d.y-i.y)>15){for(var f=(d.x+i.x)/2,s=(d.y+i.y)/2,u=f+.4*(a[r].x-f),h=s+.4*(a[r].y-s),y=[],m=0;m<5;m++)y.push(d.x+m/6*(u-d.x)+6*Math.random()-3),y.push(d.y+m/6*(h-d.y)+6*Math.random()-3);for(var x=[],g=0;g<5;g++)x.push(u+g/6*(i.x-u)+6*Math.random()-3),x.push(h+g/6*(i.y-h)+6*Math.random()-3);t.append("polygon").attr("points",[d.x,d.y,y,x,i.x,i.y]).attr("fill","#dac2b7")}}d.x+=6*Math.random()-3,d.y+=6*Math.random()-3,l.push([d.x,d.y])}return l}(n)})).attr("stroke-width",(function(){return 10*Math.random()+10})),t.node()},x=function(){for(var t=p.b("svg"),r=800/3,a=800/3,n=[],e=0;e<3;e++)for(var o=0;o<3;o++)n.push({x:Math.random()*((e+1)*r*.9-e*r*1.1)+e*r*1.1,y:Math.random()*((o+1)*a*.9-o*a*1.1)+o*a*1.1});for(var c=p.a.from(n,(function(t){return t.x}),(function(t){return t.y})).voronoi([0,0,800,800]),l=t.append("defs"),d=0;d<n.length;d++)l.append("radialGradient").attr("id",d).selectAll("stop").data([{offset:"0%",color:"#574342"},{offset:"30%",color:"#574342"},{offset:"100%",color:"#3d2f2e"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),l.append("clipPath").attr("id","clipPath".concat(d)).append("path").attr("d",c.renderCell(d)),t.append("circle").attr("r",260).attr("cx",n[d].x).attr("cy",n[d].y).attr("clip-path","url(#clipPath".concat(d,")")).attr("spreadMethod","reflect").style("fill","url('#".concat(d,"')"));return t.append("g").attr("fill","none").attr("stroke","#ceb19f").selectAll("path").data(n).join("polygon").attr("points",(function(r,a){return function(r){var a=document.createElementNS("http://www.w3.org/2000/svg","path"),e=c.renderCell(r);a.setAttribute("d",e);for(var o=a.getTotalLength(),l=[],p=0,d=0;d<80;d++){var i=a.getPointAtLength(d*o/79);if(p>=16){var f=a.getPointAtLength(d*o/85);if(Math.abs(i.x-f.x)>25||Math.abs(i.y-f.y)>25){for(var s=(i.x+f.x)/2,u=(i.y+f.y)/2,h=s+.8*(n[r].x-s),y=u+.8*(n[r].y-u),m=[],x=0;x<20;x++)m.push(i.x+x/20*(h-i.x)+6*Math.random()-3),m.push(i.y+x/20*(y-i.y)+6*Math.random()-3);for(var g=[],v=0;v<20;v++)g.push(h+v/30*(f.x-h)+6*Math.random()-3),g.push(y+v/30*(f.y-y)+6*Math.random()-3);t.append("polygon").attr("points",[i.x,i.y,m,g,f.x,f.y]).attr("fill","#ceb19f")}p=0}p+=1,i.x+=16*Math.random()-8,i.y+=16*Math.random()-8,l.push([i.x,i.y])}return l}(a)})).attr("stroke-width",30),t.node()},g=a(1);var v=function(t){var r;switch(t.species){case 0:r=d();break;case 1:r=i();break;case 2:r=f();break;case 3:r=s();break;case 4:r=u();break;case 5:r=h();break;case 6:r=y();break;case 7:r=m();break;case 8:r=x();break;default:r=d()}return Object(g.jsx)("svg",{dangerouslySetInnerHTML:{__html:r.innerHTML},className:"Giraffe",viewBox:"100, 100, 600, 600"})};a(44);var b=function(){var t=function(){var t=Object(n.useState)(0),r=Object(l.a)(t,2),a=r[0],e=r[1];return[function(){return e((function(t){return t+1}))},a]}(),r=Object(l.a)(t,2),a=r[0],e=r[1],o=Object(n.useState)(0),c=Object(l.a)(o,2),p=c[0],d=c[1],i=function(t){d(p=t),a()};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{className:"App-header",children:"\u017bYRAFO-INATOR"}),Object(g.jsxs)("main",{className:"Container",children:[Object(g.jsxs)("div",{className:"ButtonList",children:[Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(0)},children:"\u017byrafa siatkowana"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(1)},children:"\u017byrafa zachodnioafryka\u0144ska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(2)},children:"\u017byrafa nubijska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(3)},children:"\u017byrafa kordofa\u0144ska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(4)},children:"\u017byrafa angolska"})]}),Object(g.jsx)(v,{species:p},e),Object(g.jsxs)("div",{className:"ButtonList",children:[Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(5)},children:"\u017byrafa po\u0142udniowoafryka\u0144ska"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(6)},children:"\u017byrafa rotszylda"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(7)},children:"\u017byrafa thornicrofta"}),Object(g.jsx)("button",{type:"button",className:"Button",onClick:function(){return i(8)},children:"\u017byrafa Masajska"})]})]})]})},M=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(r){var a=r.getCLS,n=r.getFID,e=r.getFCP,o=r.getLCP,c=r.getTTFB;a(t),n(t),e(t),o(t),c(t)}))};c.a.render(Object(g.jsx)(e.a.StrictMode,{children:Object(g.jsx)(b,{})}),document.getElementById("root")),M()}},[[45,1,2]]]);
//# sourceMappingURL=main.6fa971e9.chunk.js.map
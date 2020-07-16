(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__16xtL",card:"Cards_card__t47JG",infected:"Cards_infected__1Nk-x",recovered:"Cards_recovered__3j2tn",deaths:"Cards_deaths__3qTnW",details:"Cards_details__1BHk7",cardMedia:"Cards_cardMedia__3AtDT",media:"Cards_media__2lDfw"}},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(76),o=a.n(c),l=a(6),A=a.n(l),u=a(10),s=a(32),i=a(33),m=a(38),p=a(36),d=a(226),g=a(231),E=a(227),b=a(228),S=a(229),y=a(11),B=a.n(y),f=a(23),k=a.n(f),L=a(24),C=a.n(L),I=a(77),x=a.n(I),h=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate,l=e.countryData,A=l.population,u=l.region,s=l.flag,i=l.area,m=(l.capital,e.country);if(!a)return"Loading...";m||(A=78e8,m="World",u="Earth",i="510 million");var p=x.a;return"World"!==m&&(p=s),console.log(),n.a.createElement("div",{className:B.a.container},n.a.createElement(d.a,{container:!0,spacing:0,justify:"center"},n.a.createElement(d.a,{item:!0,component:g.a,xs:12,md:2,className:C()(B.a.card,B.a.details)},n.a.createElement(g.a,null,n.a.createElement(E.a,{className:B.a.media,image:p}),n.a.createElement(b.a,null,n.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Population"),n.a.createElement(S.a,{variant:"h6"},n.a.createElement(k.a,{start:0,end:A,duration:2.5,separator:","})),n.a.createElement("br",null),n.a.createElement(d.a,{container:!0,justify:"space-between"},n.a.createElement(S.a,{inline:"true",align:"left",color:"textSecondary"},"Area"),n.a.createElement(S.a,{inline:"true",variant:"body2",align:"right"},i," km\xb2")),n.a.createElement(d.a,{container:!0,justify:"space-between"},n.a.createElement(S.a,{inline:"true",align:"right",color:"textSecondary"},"Region"),n.a.createElement(S.a,{inline:"true",variant:"body2",align:"right"},u))))),n.a.createElement(d.a,{item:!0,component:g.a,xs:12,md:2,className:C()(B.a.card,B.a.infected)},n.a.createElement(b.a,null,n.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(S.a,{variant:"h5"},n.a.createElement(k.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement("br",null),n.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(S.a,{variant:"body1"},"Number of active cases from COVID-19"))),n.a.createElement(d.a,{item:!0,component:g.a,xs:12,md:2,className:C()(B.a.card,B.a.recovered)},n.a.createElement(b.a,null,n.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(S.a,{variant:"h5"},n.a.createElement(k.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement("br",null),n.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(S.a,{variant:"body1"},"Number of recoveries from COVID-19"))),n.a.createElement(d.a,{item:!0,component:g.a,xs:12,md:2,className:C()(B.a.card,B.a.deaths)},n.a.createElement(b.a,null,n.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(S.a,{variant:"h5"},n.a.createElement(k.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement("br",null),n.a.createElement(S.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(S.a,{variant:"body1"},"Number of deaths from COVID-19")))))},v=a(37),J=a(25),Q=a.n(J),O="https://covid19.mathdro.id/api",j=function(){var e=Object(u.a)(A.a.mark((function e(t){var a,r,n,c,o,l,u;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O,t&&(a="".concat(O,"/countries/").concat(t)),e.prev=2,e.next=5,Q.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,l=n.deaths,u=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(A.a.mark((function e(){var t,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.a.get("".concat(O,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.a.get("".concat(O,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(A.a.mark((function e(t){var a,r,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://restcountries.eu/rest/v2/name",a=t?"".concat(a,"/").concat(t):"https://restcountries.eu/rest/v2/name/India",e.prev=2,e.next=5,Q.a.get(a);case 5:if(r=e.sent,n=r.data,"India"!==t){e.next=11;break}return e.abrupt("return",n[1]);case 11:return e.abrupt("return",n[0]);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),X=a(49),w=a(83),Z=a.n(w),M=function(e){var t=e.data,a=e.country,c=Object(r.useState)([]),o=Object(v.a)(c,2),l=o[0],s=o[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=l.length?n.a.createElement(X.b,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,m=t.confirmed?n.a.createElement(X.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255, 0.5)","rgba(0,255,0, 0.5)","rgba(255,0,0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return n.a.createElement("div",{className:Z.a.container},a?m:i)},V=a(232),T=a(230),G=a(84),U=a.n(G),F=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(v.a)(a,2),o=c[0],l=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),n.a.createElement(V.a,{className:U.a.formControl},n.a.createElement(T.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},K=a(50),P=a.n(K),q=a(85),H=a.n(q),Y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(a,[{key:"render",value:function(){return this.state.hasError?n.a.createElement("h3",null,"Country '",this.props.country,"' not found in records. Please reload page & tray again!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.Component),z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},countryData:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(A.a.mark((function t(a){var r,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(a);case 2:return r=t.sent,t.next=5,D(a);case 5:n=t.sent,e.setState({data:r,country:a,countryData:n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country,r=e.countryData;return n.a.createElement("div",{className:P.a.container},n.a.createElement("img",{className:P.a.image,src:H.a,alt:"COVID-19"}),n.a.createElement(Y,{country:a},n.a.createElement(F,{handleCountryChange:this.handleCountryChange}),n.a.createElement(h,{data:t,countryData:r,country:a}),n.a.createElement(M,{data:t,country:a})))}}]),a}(r.Component);o.a.render(n.a.createElement(z,null),document.getElementById("root"))},50:function(e,t,a){e.exports={container:"App_container__1gnB7",image:"App_image__3-Afi"}},77:function(e,t){e.exports="data:image/png;base64,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"},83:function(e,t,a){e.exports={container:"Chart_container__16eCD"}},84:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__34tvG"}},85:function(e,t,a){e.exports=a.p+"static/media/corona.c14459f2.PNG"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.cf48d847.chunk.js.map
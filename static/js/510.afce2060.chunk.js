"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[510],{9245:function(e,r,t){t.d(r,{a:function(){return s}});var n,c=t(9822),a=t(168),i=t(9942).Z.div(n||(n=(0,a.Z)(["\nwidth: 180px;\n  height: auto;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;"]))),o=t(184),s=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(c.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})}},1510:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(4165),c=t(5861),a=t(9439),i=t(7689),o=t(1087),s=t(2791),u=t(9245),l=t(409),h=t(184),f=function(e){var r=e.movies||{},t=r.overview,n=r.poster_path,c=r.original_title,a=r.vote_average,i=r.genres;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)("img",{src:"".concat(l.UB,"w500").concat(n),alt:c}),c&&(0,h.jsx)("p",{children:c}),a&&(0,h.jsxs)("p",{children:["User score: ",Math.round(10*Number(a))," %"]}),t&&(0,h.jsx)("p",{children:t}),i&&i.length>0&&(0,h.jsxs)("ul",{children:["Genres: ",i.map((function(e){return e.name})).join(", ")]})]})},p=function(){var e,r,t=(0,i.TH)(),p=(0,s.useRef)(null!==(e=null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),d=(0,i.UO)().movieId,v=(0,s.useState)(null),g=(0,a.Z)(v,2),m=g[0],x=g[1],j=(0,s.useState)(null),Z=(0,a.Z)(j,2),w=Z[0],b=Z[1],y=(0,s.useState)(!1),k=(0,a.Z)(y,2),I=k[0],N=k[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Y5(d);case 3:r=e.sent,x(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(e.t0);case 10:return e.prev=10,N(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e(d)}),[d]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.rU,{to:p.current,children:"\u041d\u0430\u0437\u0430\u0434 \u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"}),(0,h.jsxs)("h1",{children:["Movie Details:",(null===m||void 0===m?void 0:m.title)||"Title not available"]}),(0,h.jsxs)(h.Fragment,{children:[w&&(0,h.jsx)("p",{children:"Something goes wrong"}),I&&(0,h.jsx)(u.a,{}),(0,h.jsx)(f,{movies:m,posterImgUrl:"https://image.tmdb.org/t/p/w500"})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"cast",children:"Actors"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"reviews",children:"About"})})]}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:"LOADING SUBPAGE..."}),children:(0,h.jsx)(i.j3,{})})]})}},409:function(e,r,t){t.d(r,{UB:function(){return o},WZ:function(){return f},Y5:function(){return l},Yb:function(){return h},k1:function(){return u},zR:function(){return p}});var n=t(4165),c=t(5861),a=t(1243),i="https://api.themoviedb.org/3/",o="https://image.tmdb.org/t/p/",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIzMmM2NWVkOGEyYzk3YzJjZDZkN2Y2NjJhNThhNiIsInN1YiI6IjY0ZGNjNzQ2NTllOGE5MDBhYzA3ZjkyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEfQXLXm8dTFjmSR93bdP0x3SCZbTJRytNBaFFU8fLo"}},u=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.Z.get("".concat(i,"search/movie?query=").concat(r),s),e.next=4,t;case 4:return e.abrupt("return",e.sent.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching search movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(i,"movie/").concat(r),s);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching  movies:",e.t0),e.t0;case 11:case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(i,"movie/").concat(r,"/reviews?language=en-US&page=1"),s);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching reviews movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(e){return a.Z.get("".concat(i,"movie/").concat(e,"/credits?language=en-US"),s).then((function(e){return e.data})).catch((function(e){throw console.error("Error fetching credits movies:",e),e}))},p=function(){return a.Z.get("".concat(i,"trending/movie/day"),s).then((function(e){return e.data.results})).catch((function(e){throw console.error("Error fetching trending movies:",e),e}))}}}]);
//# sourceMappingURL=510.afce2060.chunk.js.map
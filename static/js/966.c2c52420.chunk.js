"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[966],{886:function(n,e,t){t.d(e,{Dx:function(){return d},Ei:function(){return f},Li:function(){return p},Ul:function(){return h},ZC:function(){return v}});var r,o,c,i,a,s=t(168),u=t(7109),l=t(1087),h=u.Z.ul(r||(r=(0,s.Z)(["\nlist-style: none;\npadding: 0%;\n\n"]))),f=(0,u.Z)(l.rU)(o||(o=(0,s.Z)(["\ntext-decoration: none;\nfont-size: medium;\nfont-weight: bold;\ncolor: black;\nfont-size: 15px;\n&:hover,:focus, ::after{\n    color: blue;\n}"]))),p=u.Z.li(c||(c=(0,s.Z)(["\nmargin-bottom: 10px;\npadding-left: 20px;\n"]))),d=u.Z.h2(i||(i=(0,s.Z)(["\nfont-size: medium;\n\n"]))),v=u.Z.div(a||(a=(0,s.Z)(["\n\n"])))},9966:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,o,c,i,a,s=t(4165),u=t(5861),l=t(9439),h=t(7689),f=t(2791),p=t(409),d=t(168),v=t(7109),x=t(1087),m=(0,v.Z)(x.rU)(r||(r=(0,d.Z)(["\nfont-weight: 800;\n  font-size: 18px;\n  line-height: 1.33;\n  letter-spacing: 0.03em;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: black;\n  &:hover, :focus {\n    color: blue;\n  }"]))),Z=v.Z.div(o||(o=(0,d.Z)(["\n  margin-top: 20px;\n  display: flex; \n  gap: 32px;\n flex-direction: row;\n \n  "]))),g=v.Z.section(c||(c=(0,d.Z)(["\nmax-width: 1158px;\npadding: 20px;\n/* display: flex; */\n    \n\nborder-bottom: solid 2px rgba(0,0,0,0.3);"]))),j=v.Z.img(i||(i=(0,d.Z)(["\ndisplay: flex;\nmax-width: 100%;\n  height: auto;\n margin-left: auto;\n    margin-right: auto; "]))),w=v.Z.span(a||(a=(0,d.Z)(["\nwidth: 100%;\nheight: auto;"]))),b=t(184),k=function(n){var e,t,r=n.movies,o=(0,h.TH)(),c=(0,f.useRef)(null!==(e=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),i="".concat(p.UB,"w342").concat(r.poster_path),a=r||{},s=a.overview,u=a.poster_path,l=a.original_title,d=a.vote_average,v=a.genres;return(0,b.jsxs)(g,{children:[(0,b.jsx)(m,{to:c.current,children:"<<Go back<<"}),(0,b.jsxs)(Z,{children:[(0,b.jsx)(w,{children:u&&(0,b.jsx)(j,{src:i,alt:l})}),(0,b.jsxs)("div",{children:[l&&(0,b.jsx)("h3",{children:l}),d&&(0,b.jsxs)("p",{children:["User score: ",Math.round(10*Number(d))," %"]}),s&&(0,b.jsx)("p",{children:s}),v&&v.length>0&&(0,b.jsxs)("p",{children:["Genres: ",v.map((function(n){return n.name})).join(", ")]})]})]})]})},y=t(886),I=function(){return(0,b.jsxs)(y.Ul,{children:[(0,b.jsx)(y.Li,{children:(0,b.jsx)(y.Ei,{to:"cast",children:"Actors"})}),(0,b.jsx)(y.Li,{children:(0,b.jsx)(y.Ei,{to:"reviews",children:"About"})})]})},N=function(){var n=(0,h.UO)().movieId,e=(0,f.useState)(null),t=(0,l.Z)(e,2),r=t[0],o=t[1],c=function(){var n=(0,u.Z)((0,s.Z)().mark((function n(e){var t;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Y5(e);case 3:t=n.sent,o(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,f.useEffect)((function(){c(n)}),[n]),(0,b.jsxs)(b.Fragment,{children:[r&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{movies:r}),(0,b.jsx)(I,{})]}),(0,b.jsx)(f.Suspense,{fallback:(0,b.jsx)("div",{children:"LOADING ..."}),children:(0,b.jsx)(h.j3,{})})]})}},409:function(n,e,t){t.d(e,{UB:function(){return a},WZ:function(){return f},Y5:function(){return l},Yb:function(){return h},k1:function(){return u},zR:function(){return p}});var r=t(4165),o=t(5861),c=t(1243),i="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTIzMmM2NWVkOGEyYzk3YzJjZDZkN2Y2NjJhNThhNiIsInN1YiI6IjY0ZGNjNzQ2NTllOGE5MDBhYzA3ZjkyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEfQXLXm8dTFjmSR93bdP0x3SCZbTJRytNBaFFU8fLo"}},u=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=c.Z.get("".concat(i,"search/movie?query=").concat(e),s),n.next=4,t;case 4:return n.abrupt("return",n.sent.data);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching search movies:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(i,"movie/").concat(e),s);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching  movies:",n.t0),n.t0;case 11:case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(i,"movie/").concat(e,"/reviews?language=en-US&page=1"),s);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("Error fetching reviews movies:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(n){return c.Z.get("".concat(i,"movie/").concat(n,"/credits?language=en-US"),s).then((function(n){return n.data})).catch((function(n){throw console.error("Error fetching credits movies:",n),n}))},p=function(){return c.Z.get("".concat(i,"trending/movie/day"),s).then((function(n){return n.data.results})).catch((function(n){throw console.error("Error fetching trending movies:",n),n}))}}}]);
//# sourceMappingURL=966.c2c52420.chunk.js.map
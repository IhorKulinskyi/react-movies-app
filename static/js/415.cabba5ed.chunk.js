"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{937:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(87),c=n(184),a=function(t){var e=t.movies,n=t.location;return(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.title;return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(e),state:{from:n},children:a})},e)}))})}},415:function(t,e,n){n.r(e);var r=n(439),c=n(243),a=n(791),u=n(689),o=n(937),s=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1],p=(0,u.TH)();return(0,a.useEffect)((function(){(0,c.Aj)().then((function(t){return i(t)}))}),[]),(0,s.jsx)(o.Z,{movies:n,location:p})}},243:function(t,e,n){n.d(e,{Aj:function(){return i},Pg:function(){return p},Ph:function(){return l},s_:function(){return f}});var r=n(861),c=n(757),a=n.n(c),u=n(924),o="5e238007a1f6fff0496d2b1889fa1199",s="https://api.themoviedb.org/3/",i=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e,n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"movie/").concat(e,"/").concat(n,"?api_key=").concat(o));case 3:r=t.sent,t.t0=n,t.next="credits"===t.t0?7:"reviews"===t.t0?8:9;break;case 7:return t.abrupt("return",r.data.cast);case 8:return t.abrupt("return",r.data.results);case 9:return t.abrupt("return");case 10:t.next=15;break;case 12:t.prev=12,t.t1=t.catch(0),console.log(t.t1);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.cabba5ed.chunk.js.map
(this.webpackJsonppokemon_tailwind_test=this.webpackJsonppokemon_tailwind_test||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(18),s=n.n(a),o=(n(24),n(19)),i=n(5),u=n.n(i),l=n(8),b=n(3),m=n(9),d=n.n(m),p=(n(44),n(0)),j=function(e){var t=e.pokemon,n=e.setPokemon;return Object(p.jsxs)("div",{onClick:function(){n([t])},className:"cursor-pointer max-w-full rounded overflow-hidden shadow-2xl",children:[Object(p.jsx)("img",{src:t.sprites.front_default,alt:"",className:"w-1/2 m-auto mt-4 "}),Object(p.jsxs)("div",{className:"px-6 py-4",children:[Object(p.jsx)("div",{className:"font-bold text-xl mb-2 text-center",children:t.name[0].toUpperCase()+t.name.substring(1)}),Object(p.jsxs)("p",{className:"text-gray-100 text-base text-center bg-gray-800",children:["ID: ",t.id]})]}),Object(p.jsx)("div",{className:"px-6 pt-4 pb-2",children:t.types.map((function(e){return Object(p.jsx)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:e.type.name})}))})]})},x=function(e){var t=e.searchPokemon,n=e.error,c=e.setError,a=e.pokemonArray,s=e.goBack,o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],l=i[1];return Object(p.jsx)("div",{className:"w-full bg-red-600 h-auto py-2",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u?t(u):c(!0)},className:"shadow-md w-full max-w-sm m-auto my-10 bg-blue-100 text-blue-800 flex flex-col justify-center items-center ",children:[Object(p.jsx)("h1",{className:"text-center text-xl p-5",children:"Search for a Pokemon or Pokedex ID"}),Object(p.jsx)("input",{type:"text",className:"w-11/12 mx-auto mb-5 px-2 py-1 text-blue-800 border \n          ".concat(n?"border-red-500 border-8":"border-blue-500 border-4"),placeholder:"Ex. Charizard or 6",onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"w-full mx-auto px-3 py-1 bg-blue-500 text-blue-100",children:"Submit"}),1===a.length?Object(p.jsx)("button",{className:"w-full mx-auto px-3 py-1 border-2 border-blue-400  text-blue-400",onClick:function(){return s()},children:"Go Back"}):""]})})};var f=function(){var e=Object(r.useState)("1"),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),i=s[0],m=s[1],f=Object(r.useState)(!0),h=Object(b.a)(f,2),O=h[0],g=h[1],k=Object(r.useState)(!1),y=Object(b.a)(k,2),v=y[0],w=y[1];function N(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m([]),w(!1),t=1;case 3:if(!(t<=151)){e.next=9;break}return e.next=6,d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return m((function(t){return[].concat(Object(o.a)(t),[e.data])}))}),g(!1),w(!1));case 6:t++,e.next=3;break;case 9:g(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){return N()}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toLowerCase(),e.next=3,d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n)).then((function(e){return m((function(){return[e.data]}))}),g(!1),w(!1)).catch((function(e){console.log(e),w(!0)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(n)}),[n]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{goBack:N,pokemonArray:i,setError:w,error:v,searchPokemon:function(e){return c(e)}}),Object(p.jsxs)("div",{className:"container mx-auto",children:[!O&&0===i.length&&Object(p.jsx)("h1",{className:"text-center",children:"No Results"}),O?Object(p.jsx)("h1",{className:"text-center",children:"Loading..."}):1===i.length?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"grid sm:m-auto sm:grid-cols-1 sm:w-1/2",children:Object(p.jsx)(j,{pokemon:i[0]})})}):Object(p.jsx)("div",{className:"grid m-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4",children:i.map((function(e){return Object(p.jsx)(j,{setPokemon:m,pokemon:e},e.number)}))})]})]})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4024ab8d.chunk.js.map
(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(5),u=a.n(l),c=(a(4),a(2));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return Math.floor(Math.random()*(t-e+1)+e)}var v=function(e,t,a){for(var n=[],r=[],l=0;l<e;l++){for(var u=[],c=0;c<t;c++)u.push({value:0,revealed:!1,x:l,y:c,flagged:!1});n.push(u)}for(var v=0;v<a;){var o=i(0,e-1),s=i(0,t-1);0===n[o][s].value&&(n[o][s].value="X",r.push([o,s]),v++)}for(var d=0;d<e;d++)for(var x=0;x<t;x++)"X"!==n[d][x].value&&(d>0&&"X"===n[d-1][x].value&&n[d][x].value++,d>0&&x<t-1&&"X"===n[d-1][x+1].value&&n[d][x].value++,x<t-1&&"X"===n[d][x+1].value&&n[d][x].value++,d<e-1&&x<t-1&&"X"===n[d+1][x+1].value&&n[d][x].value++,d<e-1&&"X"===n[d+1][x].value&&n[d][x].value++,d<e-1&&x>0&&"X"===n[d+1][x-1].value&&n[d][x].value++,x>0&&"X"===n[d][x-1].value&&n[d][x].value++,d>0&&x>0&&"X"===n[d-1][x-1].value&&n[d][x].value++);return{board:n,mineLocation:r}},o=function(){var e=["orange","darkgreen","cyan","violet","yellow"];return e[Math.floor(Math.random()*e.length)]},s=a(0);function d(){return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(s.jsx)("div",{style:{height:23,width:23,borderRadius:20,background:"rgba(0,0,0,0.4)"}})})}function x(e){var t=e.details,a=e.updateFlag,n=e.revealCell,r={background:t.revealed?"X"===t.value?o():y(t.x,t.y):f(t.x,t.y),color:h(t.value)};return Object(s.jsx)("div",{onContextMenu:function(e){return a(e,t.x,t.y)},onClick:function(){return n(t.x,t.y)},style:r,className:"cellStyle",children:!t.revealed&&t.flagged?"\ud83d\udea9":t.revealed&&0!==t.value?"X"===t.value?Object(s.jsx)(d,{}):t.value:""})}var y=function(e,t){return e%2===0&&t%2===0?"#e5c29f":e%2===0&&t%2!==0||e%2!==0&&t%2===0?"#d7b899":"#e5c29f"},f=function(e,t){return e%2===0&&t%2===0?"#aad751":e%2===0&&t%2!==0||e%2!==0&&t%2===0?"#a2d249":"#aad751"},h=function(e){return 1===e?"#1976d2":2===e?"#388d3c":3===e?"#d33030":4===e?"#7c21a2":5===e||6===e?"#1976d2":"white"};function j(e){var t=e.restartGame,a=Object(n.useState)(!1),r=Object(c.a)(a,2),l=r[0],u=r[1];return Object(n.useEffect)((function(){setTimeout((function(){u(!0)}),1e3)}),[]),Object(s.jsxs)("div",{style:{opacity:l?1:0,height:"100%",width:"100%",position:"absolute",background:"rgba(0,0,0,0.3)"},children:[Object(s.jsx)("div",{id:"gameOverImage"}),Object(s.jsx)("div",{className:"tryAgain",onClick:function(){return t()},children:"Try Again"})]})}function b(e){e.gameOver,e.sendTime;var t=Object(n.useState)(0),a=Object(c.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){setTimeout((function(){l(r+1)}),1e3)}),[r]),console.log(undefined),Object(s.jsxs)("div",{style:{color:"white",fontSize:20,background:"maroon"},children:[Object(s.jsx)("span",{role:"img","aria-label":"clock",style:{paddingRight:10},children:"\u23f0"}),r]})}var g=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),u=Object(c.a)(l,2),i=u[0],o=u[1],d=Object(n.useState)([]),y=Object(c.a)(d,2),f=y[0],h=y[1],g=Object(n.useState)(!1),O=Object(c.a)(g,2),p=O[0],m=O[1];Object(n.useEffect)((function(){w()}),[]);var w=function(){var e=v(10,15,15);o(135),h(e.mineLocation),r(e.board)},S=function(e,t,n){e.preventDefault();var l=JSON.parse(JSON.stringify(a));console.log(l[t][n]),l[t][n].flagged=!0,r(l)},X=function(e,t){if(!a[e][t].revealed&&!p){var n=JSON.parse(JSON.stringify(a));if("X"===n[e][t].value){for(var l=0;l<f.length;l++)n[f[l][0]][f[l][1]].revealed=!0;r(n),m(!0)}else{var u=function(e,t,a,n){if(console.log(e[t][a]),!e[t][a].revealed){var r=[];for(r.push(e[t][a]);0!==r.length;){var l=r.pop();if(l.revealed||(n--,l.revealed=!0),0!==l.value)break;l.x>0&&l.y>0&&0===e[l.x-1][l.y-1].value&&!e[l.x-1][l.y-1].revealed&&r.push(e[l.x-1][l.y-1]),l.x<e.length-1&&l.y<e[0].length-1&&0===e[l.x+1][l.y+1].value&&!e[l.x+1][l.y+1].revealed&&r.push(e[l.x+1][l.y+1]),l.x<e.length-1&&l.y>0&&0===e[l.x+1][l.y-1].value&&!e[l.x+1][l.y-1].revealed&&r.push(e[l.x+1][l.y-1]),l.x>0&&l.y<e[0].length-1&&0===e[l.x-1][l.y+1].value&&!e[l.x-1][l.y+1].revealed&&r.push(e[l.x-1][l.y+1]),l.x>0&&0===e[l.x-1][l.y].value&&!e[l.x-1][l.y].revealed&&r.push(e[l.x-1][l.y]),l.x<e.length-1&&0===e[l.x+1][l.y].value&&!e[l.x+1][l.y].revealed&&r.push(e[l.x+1][l.y]),l.y>0&&0===e[l.x][l.y-1].value&&!e[l.x][l.y-1].revealed&&r.push(e[l.x][l.y-1]),l.y<e[0].length-1&&0===e[l.x][l.y+1].value&&!e[l.x][l.y+1].revealed&&r.push(e[l.x][l.y+1]),l.x>0&&l.y>0&&!e[l.x-1][l.y-1].revealed&&(e[l.x-1][l.y-1].revealed=!0,n--),l.y>0&&!e[l.x][l.y-1].revealed&&(e[l.x][l.y-1].revealed=!0,n--),l.x<e.length-1&&l.y>0&&!e[l.x+1][l.y-1].revealed&&(e[l.x+1][l.y-1].revealed=!0,n--),l.x>0&&!e[l.x-1][l.y].revealed&&(e[l.x-1][l.y].revealed=!0,n--),l.x<e.length-1&&!e[l.x+1][l.y].revealed&&(e[l.x+1][l.y].revealed=!0,n--),l.x>0&&l.y<e[0].length-1&&!e[l.x-1][l.y+1].revealed&&(e[l.x-1][l.y+1].revealed=!0,n--),l.y<e[0].length-1&&!e[l.x][l.y+1].revealed&&(e[l.x][l.y+1].revealed=!0,n--),l.x<e.length-1&&l.y<e[0].length-1&&!e[l.x+1][l.y+1].revealed&&(e[l.x+1][l.y+1].revealed=!0,n--)}return{arr:e,newNonMinesCount:n}}}(n,e,t,i);r(u.arr),o(u.newNonMinesCount),0===u.newNonMinesCount&&m(!0)}}};return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Minesweeper"}),Object(s.jsx)(b,{}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},children:[p&&Object(s.jsx)(j,{restartGame:function(){w(),m(!1)}}),a.map((function(e,t){return Object(s.jsx)("div",{style:{display:"flex"},children:e.map((function(e,t){return Object(s.jsx)(x,{revealCell:X,details:e,updateFlag:S},t)}))},t)}))]})]})};var O=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Minesweeper"}),Object(s.jsx)(g,{})]})};u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.af2ab541.chunk.js.map
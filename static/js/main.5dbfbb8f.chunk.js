(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,s){e.exports=s(32)},23:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(8),c=s.n(r),u=(s(23),s(4)),i=s(1),l=s(16),o=s(17),d=s(6),m=s(3),q="DONE",p="IN_PROGRESS",v="NOT_STARTED";s(7),s(13);var g="TOGGLE_QUEST_CARD";var E={"Demon Slayer":{name:"Demon Slayer",requirements:["Silverlight"]},"Prince Ali Rescue":{name:"Prince Ali Rescue",requirements:["Pink Skirt"]},"Recipe for Disaster":{name:"Recipe for Disaster",requirements:["A fuck ton"]},"Black Knight's Fortress":{name:"Black Knight's Fortress",requirements:["None"]},"Underground Pass":{name:"Underground Pass",requirements:["Bow, 40 ranged"]}},f={"Demon Slayer":{status:q,reqsMet:!1,collapsed:!0},"Underground Pass":{status:v,reqsMet:!1,collapsed:!0},"Black Knight's Fortress":{status:v,reqsMet:!0,collapsed:!0},"Recipe for Disaster":{status:p,reqsMet:!1,collapsed:!0},"Prince Ali Rescue":{status:q,reqsMet:!0,collapsed:!0}};var O=Object(i.c)({quests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return(arguments.length>1?arguments[1]:void 0).type,e},pageOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,e},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var s=t.questId;return Object(m.a)({},e,Object(d.a)({},s,Object(m.a)({},e[s],{collapsed:!e[s].collapsed})));default:return e}}}),b=Object(i.c)({quests:O}),h=Object(o.createLogger)(),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d;s(29),s(30),s(31);var j,k=function(e,t){switch(e){case q:return"quest-done";case p:return"quest-in-progress";default:return t?"quest-can-start":"quest-cannot-start"}},w=function(e){var t=e.quest,s=e.status,n=e.reqsMet,r=e.collapsed,c=e.toggleCard,u=t.name,i=t.requirements;return a.a.createElement("div",{className:"quest"},a.a.createElement("div",{className:"quest-header",onClick:function(){return c(u)}},a.a.createElement("div",{className:"quest-checkbox"},a.a.createElement("input",{type:"checkbox",checked:s===q})),a.a.createElement("div",{className:"quest-name ".concat(k(s,n))},u),a.a.createElement("div",{className:"chevron ".concat(r?"chevron-right":"chevron-down")})),a.a.createElement("div",{className:r?"quest-collapsed":"quest-content"},a.a.createElement("div",{className:"quest-requirements"},"Requirements: ",i)))},R=Object(u.b)(function(e,t){var s=t.questId;return Object(m.a)({quest:e.quests.quests[s]},e.quests.cards[s])},function(e){return{toggleCard:function(t){return e({type:g,questId:t})}}})(w),S=function(e){e.quests,e.pageOptions;var t=e.cards;return a.a.createElement("div",{className:"quest-list"},Object.keys(t).map(function(e){return a.a.createElement(R,Object.assign({key:e,questId:e},t[e]))}))},y=Object(u.b)(function(e){return{quests:e.quests.quests,pageOptions:e.quests.pageOptions,cards:e.quests.cards}})(S),D=function(){return a.a.createElement("div",{className:"page-content quest-page"},a.a.createElement("div",{className:"quest-page-title"},"Quests"),a.a.createElement("div",{className:"quest-filters"},"Filters bruh"),a.a.createElement("div",{className:"quest-list-container"},a.a.createElement(y,null)))},_=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(D,null))},P=Object(u.b)()(_),I=Object(i.e)(b,j,N(Object(i.a)(l.a,h)));c.a.render(a.a.createElement(u.a,{store:I},a.a.createElement(P,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5dbfbb8f.chunk.js.map
(this["webpackJsonpmy-dashboard"]=this["webpackJsonpmy-dashboard"]||[]).push([[0],{20:function(e,t,a){e.exports=a(57)},30:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),i=a(1),l=a(5),s=a(13),d={user:{name:"",email:""},loginPending:!1,error:""},u={navigation:"login"},m={tasks:[],tasksPending:!1,error:"",createWindow:!1},p={tickers:[{symbol:"",market:""},{symbol:"",market:""},{symbol:"",market:""},{symbol:"",market:""},{symbol:"",market:""},{symbol:"",market:""},{symbol:"",market:""},{symbol:"",market:""}],tickerData:[],news:[],tickerPending:!1,editMode:!1,len:8,error:""},E={postings:[],postingsPending:!1,error:""},g=a(14),b=a(15),S=a(19),f=a(17),y=(a(30),a(18)),O=a(4),N=a.n(O),k=a(10),v=a.n(k),h=a(16);var _=Object(i.b)((function(e){return{user:e.loginStatus.user}}),(function(e){return{onUserLogOut:function(){e((function(e){e({type:"LOGOUT_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","users/logoutall"),{method:"post",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.token}}).then((function(){sessionStorage.clear()})).then((function(){e({type:"LOGOUT_SUCCESS"})})).then((function(){return e({type:"LOGIN"})})).catch((function(t){return e({type:"LOGOUT_ERROR",payload:t})}))}))}}}))((function(e){var t=e.user,a=e.onUserLogOut,o=Object(n.useState)(new Date),c=Object(y.a)(o,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){var e=setInterval((function(){l(new Date)}),3e4);return function(){clearInterval(e)}}),[i]),r.a.createElement("div",{className:"header bg-dark"},r.a.createElement("div",{className:"title h2 text-light font-weight-bold d-flex align-items-center"},"Hello ".concat(t.name,"! It is ").concat(N()(i).format("LLLL"))),r.a.createElement("div",{className:"logout"},r.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(e){e.target.disabled=!0,a(),e.target.disabled=!1}},"LOGOUT")))})),T=a(3),C=a.n(T);var R=Object(i.b)((function(e){return{tickers:e.updateStockTickers.tickers,tickerData:e.updateStockTickers.tickerData,editMode:e.updateStockTickers.editMode,len:e.updateStockTickers.len,tickerPending:e.updateStockTickers.tickerPending}}),(function(e){return{onEditModeOn:function(){e({type:"EDIT_MODE_ON"})},onEditModeOff:function(){e({type:"EDIT_MODE_OFF"})},onUpdateTickerData:function(t){e(function(e){return function(t){t({type:"TICKER_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","tickers"),{method:"post",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.token},body:JSON.stringify({tickers:e})}).then((function(e){return e.json()})).then((function(e){t({type:"TICKER_SUCCESS",payload:e})})).catch((function(e){return t({type:"TICKER_ERROR",payload:e})}))}}(t))}}}))((function(e){var t=e.tickers,a=e.tickerData,o=e.editMode,c=e.len,i=e.onEditModeOn,l=e.onEditModeOff,s=e.onUpdateTickerData,d=e.tickerPending;Object(n.useEffect)((function(){var e=setInterval((function(){a.length>0&&s(t)}),12e5);return function(){clearInterval(e)}}),[s,a,t]);var u=function(){for(var e=[],t=0;t<c;t++)e.push({symbol:"",market:""});return e};return o?r.a.createElement("div",{className:"stock-ticker bg-light d-flex flex-row flex-wrap justify-content-start align-items-center"},r.a.createElement("div",{className:"send-stock-data"},r.a.createElement("button",{type:"button",className:"send-stock-data-button-1 btn btn-info",onClick:function(e){e.disabled=!0;var t=Array.from(document.querySelectorAll("div > input.ticker-symbol")).map((function(e){return e.value.length>0&&e.nextSibling.value.length>0?{symbol:e.value,market:e.nextSibling.value}:null})).filter((function(e){return e}));l(),s(t),e.disabled=!1}},"Update"),r.a.createElement("button",{type:"button",className:"send-stock-data-button-2 btn btn-info",onClick:l},"Cancel")),t.map((function(e,t){return r.a.createElement("div",{className:"row-item border border-dark",key:t},r.a.createElement("input",{type:"text",className:"ticker-symbol",placeholder:"Ticker Symbol...",defaultValue:e.symbol}),r.a.createElement("select",{name:"market",className:"markets",defaultValue:e.market},r.a.createElement("option",{value:"",className:"default-market"}),r.a.createElement("option",{value:"TO",className:"market"},"TSX"),r.a.createElement("option",{value:"VN",className:"market"},"TSXV"),r.a.createElement("option",{value:"CN",className:"market"},"CSE"),r.a.createElement("option",{value:"NASDAQ",className:"market"},"Nasdaq"),r.a.createElement("option",{value:"NYSE",className:"market"},"NYSE"),r.a.createElement("option",{value:"CRYPTO",className:"market"},"Cryptocurrency")))})),u().map((function(e,t){return r.a.createElement("div",{className:"row-item border border-dark",key:t},r.a.createElement("input",{type:"text",className:"ticker-symbol",placeholder:"Ticker Symbol...",defaultValue:e.symbol}),r.a.createElement("select",{name:"market",className:"markets",defaultValue:e.market},r.a.createElement("option",{value:"",className:"default-market"}),r.a.createElement("option",{value:"TO",className:"market"},"TSX"),r.a.createElement("option",{value:"VN",className:"market"},"TSXV"),r.a.createElement("option",{value:"CN",className:"market"},"CSE"),r.a.createElement("option",{value:"NASDAQ",className:"market"},"Nasdaq"),r.a.createElement("option",{value:"NYSE",className:"market"},"NYSE"),r.a.createElement("option",{value:"CRYPTO",className:"market"},"Cryptocurrency")))}))):r.a.createElement("div",{className:"stock-ticker bg-light d-flex flex-row flex-wrap justify-content-start align-items-center"},a.map((function(e,t){return d?r.a.createElement("div",{className:"row-item border border-dark",key:t,onClick:i},r.a.createElement(C.a,{type:"Oval",color:"#00BFFF",height:50,width:50})):e.change.includes("+")?r.a.createElement("div",{className:"stock-ticker-row border border-dark bg-success text-light",key:t,onClick:i},r.a.createElement("div",null,e.ticker),r.a.createElement("div",null,e.price),r.a.createElement("div",null,e.change),r.a.createElement("div",null,e.status)):e.change.includes("-")?r.a.createElement("div",{className:"stock-ticker-row border border-dark bg-danger text-light",key:t,onClick:i},r.a.createElement("div",null,e.ticker),r.a.createElement("div",null,e.price),r.a.createElement("div",null,e.change),r.a.createElement("div",null,e.status)):r.a.createElement("div",{className:"stock-ticker-row border border-dark bg-primary text-light",key:t,onClick:i},r.a.createElement("div",null,e.ticker),r.a.createElement("div",null,e.price),r.a.createElement("div",null,e.change),r.a.createElement("div",null,e.status))})),u().map((function(e,t){return r.a.createElement("div",{className:"row-item border border-dark",key:t,onClick:i})})))}));var P=Object(i.b)((function(e){return{news:e.updateStockTickers.news,tickerPending:e.updateStockTickers.tickerPending}}))((function(e){var t=e.news;return e.tickerPending?r.a.createElement("div",{className:"news bg-dark d-inline-block text-light"},r.a.createElement("div",{className:"news-loader"},r.a.createElement(C.a,{type:"Bars",color:"#00BFFF",height:100,width:100}))):r.a.createElement("div",{className:"news bg-dark d-inline-block text-light"},t.map((function(e,t){return r.a.createElement("div",{className:"news-story border border-secondary",key:t},r.a.createElement("div",null,r.a.createElement("a",{className:"text-light",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title)),r.a.createElement("div",null,e.date))})))}));var D=Object(i.b)((function(e){return{postings:e.updateJobPostings.postings,postingsPending:e.updateJobPostings.postingsPending}}),(function(e){return{onGetPostingsData:function(){e((function(e){e({type:"JOBS_POSTINGS_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","postings"),{method:"get",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(t){e({type:"JOBS_POSTINGS_SUCCESS",payload:t})})).catch((function(t){return e({type:"JOBS_POSTINGS_ERROR",payload:t})}))}))}}}))((function(e){var t=e.postings,a=e.onGetPostingsData;return e.postingsPending?r.a.createElement("div",{className:"main bg-secondary d-inline-block"},r.a.createElement("div",{className:"main-loader"},r.a.createElement(C.a,{type:"Circles",color:"#00BFFF",height:100,width:100}))):r.a.createElement("div",{className:"main bg-secondary d-inline-block"},r.a.createElement("div",{className:"main-refresh"},r.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:a},"Refresh")),t.map((function(e,t){return r.a.createElement("div",{className:"main-listing border border-dark text-light",key:t},r.a.createElement("div",null,r.a.createElement("a",{className:"listing-link text-light",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title)),r.a.createElement("div",null,e.company),r.a.createElement("div",null,e.location),r.a.createElement("div",null,e.summary))})))}));var I=Object(i.b)((function(e){return{tasks:e.toDoListStatus.tasks}}),(function(e){return{onCompleteTask:function(t){e(function(e){return function(t){t({type:"TASK_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","tasks/").concat(e),{method:"post",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(e){t({type:"COMPLETE_TASK",payload:e})})).catch((function(e){return t({type:"TASK_ERROR",payload:e})}))}}(t))},onDeleteTask:function(t){e(function(e){return function(t){t({type:"TASK_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","tasks/").concat(e),{method:"delete",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(e){t({type:"DELETE_TASK",payload:e})})).catch((function(e){return t({type:"TASK_ERROR",payload:e})}))}}(t))}}}))((function(e){var t=e.onCompleteTask,a=e.onDeleteTask,n=e.tasks,o=function(e){t(e)},c=function(e){a(e)};return n.map((function(e,t){return e.completed?r.a.createElement("div",{className:"task border border-secondary text-light",key:t},r.a.createElement("div",{className:"description completed",onClick:function(){return o(e._id)}},r.a.createElement("p",null,"".concat(e.description)),r.a.createElement("p",null,"Complete By: ".concat(N()(e.deadline).format("YYYY-MM-DD")))),r.a.createElement("div",{className:"task-delete",onClick:function(){return c(e._id)}},r.a.createElement("div",null,"X"))):r.a.createElement("div",{className:"task border border-secondary text-light",key:t},r.a.createElement("div",{className:"description",onClick:function(){return o(e._id)}},r.a.createElement("p",null,"".concat(e.description)),r.a.createElement("p",null,"Complete By: ".concat(N()(e.deadline).format("YYYY-MM-DD")))),r.a.createElement("div",{className:"task-delete",onClick:function(){return c(e._id)}},r.a.createElement("div",null,"X")))}))}));var A=Object(i.b)((function(e){return{}}),(function(e){return{onCloseWindow:function(){e({type:"CLOSE_WINDOW"})},onCreateNewTask:function(t,a){e(function(e,t){return function(a){a({type:"TASK_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","tasks"),{method:"post",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.token},body:JSON.stringify({description:e,deadline:t})}).then((function(e){return e.json()})).then((function(e){a({type:"CREATE_TASK",payload:e}),a({type:"CLOSE_WINDOW"})})).catch((function(e){return a({type:"TASK_ERROR",payload:e})}))}}(t,a))}}}))((function(e){var t=e.onCloseWindow,a=e.onCreateNewTask;return r.a.createElement("div",{className:"task-create bg-dark"},r.a.createElement("div",{className:"task-create-buttons"},r.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:t},"X")),r.a.createElement("div",{className:"task-description text-light"},r.a.createElement("h6",null,"To Do:"),r.a.createElement("textarea",{className:"border border-dark",rows:"6"}),r.a.createElement("h6",null,"Deadline:"),r.a.createElement("input",{type:"date",defaultValue:N()(new Date).format("YYYY-MM-DD")})),r.a.createElement("div",{className:"create-task"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(e){e.target.disabled=!0;var t=document.querySelector(".task-description textarea").value,n=document.querySelector(".task-description input").value;t.length>0&&a(t,n),e.target.disabled=!1}},"Create Task")))}));var L=Object(i.b)((function(e){return{createWindow:e.toDoListStatus.createWindow}}),(function(e){return{onOpenWindow:function(){e({type:"OPEN_WINDOW"})}}}))((function(e){var t=e.createWindow,a=e.onOpenWindow;return r.a.createElement("div",{className:"todo bg-dark d-inline-block"},t?r.a.createElement(A,null):r.a.createElement("div",null),r.a.createElement("div",{className:"todo-add"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:a},"New Task")),r.a.createElement(I,null))})),j=function(e){Object(S.a)(a,e);var t=Object(f.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-page bg-secondary"},r.a.createElement(_,null),r.a.createElement(R,null),r.a.createElement(P,null),r.a.createElement(D,null),r.a.createElement(L,null))}}]),a}(r.a.Component),K=(a(52),function(){var e=Array.from(document.querySelectorAll("#register-form input"));e.forEach((function(e){return e.classList.remove("border","border-danger")})),0===e[0].value.length?(alert("Input valid email..."),e[0].classList.add("border","border-danger")):0===e[1].value.length?(alert("Input valid username..."),e[1].classList.add("border","border-danger")):0===e[2].value.length?(alert("Input valid password..."),e[2].classList.add("border","border-danger"),e[3].classList.add("border","border-danger")):e[2].value!==e[3].value&&(alert("Please confirm your password..."),e[2].classList.add("border","border-danger"),e[3].classList.add("border","border-danger"))});var G=Object(i.b)((function(e){return{error:e.loginStatus.error}}),(function(e){return{onUserLogin:function(t){e(function(e){return function(t){t({type:"LOGIN_PENDING"}),t({type:"TASK_PENDING"}),t({type:"TICKER_PENDING"}),t({type:"JOBS_POSTINGS_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","users/login"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:e[0],password:e[1]})}).then((function(e){return e.json()})).then((function(e){t({type:"LOGIN_SUCCESS",payload:{name:e.user.name,email:e.user.email}}),t({type:"GET_TASKS",payload:e.tasks}),t({type:"TICKER_SUCCESS",payload:e.tickers}),t({type:"JOBS_POSTINGS_SUCCESS",payload:e.postings}),sessionStorage.token=e.token})).then((function(){return t({type:"MAIN"})})).catch((function(e){t({type:"LOGIN_ERROR",payload:e}),t({type:"TASK_ERROR",payload:e}),t({type:"TICKER_ERROR",payload:e}),t({type:"JOBS_POSTINGS_ERROR",payload:e})}))}}(t))},onNavigateToRegister:function(){e({type:"REGISTER"})}}}))((function(e){var t=e.onUserLogin,a=e.onNavigateToRegister;return r.a.createElement("div",{className:"login bg-dark"},r.a.createElement("div",{className:"login-container border border-light center text-light"},r.a.createElement("div",{className:"login-header"},r.a.createElement("h2",null,"Log In Form")),r.a.createElement("div",{className:"login-main"},r.a.createElement("form",{id:"login-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email",defaultValue:"tester@example.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",defaultValue:"test123"})),r.a.createElement("div",{className:"login-buttons"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary",onClick:function(e){e.preventDefault(),e.target.disabled=!0;var a=Array.from(document.querySelectorAll(".login-main input")).map((function(e){return e.value}));a[0].length>0&&a[1].length>0?(document.querySelector("#login-form").reset(),Array.from(document.querySelectorAll("#login-form input")).forEach((function(e){return e.classList.remove("border","border-danger")})),t(a)):function(){var e=Array.from(document.querySelectorAll("#login-form input"));e.forEach((function(e){return e.classList.remove("border","border-danger")})),0===e[0].value.length?(alert("Input valid email..."),e[0].classList.add("border","border-danger")):0===e[1].value.length&&(alert("Input valid password..."),e[1].classList.add("border","border-danger"))}(),e.target.disabled=!1}},"Login"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:a},"Register"))))))}));a(53);var w=Object(i.b)((function(e){return{}}),(function(e){return{onRegisterUser:function(t){e(function(e){return function(t){t({type:"REGISTER_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","users"),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:e[0],name:e[1],password:e[2]})}).then((function(e){return e.json()})).then((function(e){t({type:"REGISTER_SUCCESS",payload:{name:e.user.name,email:e.user.email}}),sessionStorage.token=e.token})).then((function(){return t({type:"MAIN"})})).catch((function(e){t({type:"REGISTER_ERROR",payload:e}),t({type:"TASK_ERROR",payload:e}),t({type:"TICKER_ERROR",payload:e}),t({type:"JOBS_POSTINGS_ERROR",payload:e})}))}}(t))},onNavigateToLogin:function(){e({type:"LOGIN"})}}}))((function(e){var t=e.onRegisterUser,a=e.onNavigateToLogin;return r.a.createElement("div",{className:"register bg-dark"},r.a.createElement("div",{className:"register-container border border-light center text-light"},r.a.createElement("div",{className:"register-header"},r.a.createElement("h2",null,"Register Form")),r.a.createElement("div",{className:"register-main"},r.a.createElement("form",{id:"register-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter Email",defaultValue:"tester@example.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Username",defaultValue:"Tester"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",defaultValue:"test123"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",defaultValue:"test123"})),r.a.createElement("div",{className:"register-buttons"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary",onClick:function(e){e.preventDefault(),e.target.disabled=!0;var a=Array.from(document.querySelectorAll(".register-main input")).map((function(e){return e.value}));a[0].length>0&&a[1].length>0&&a[2].length>0&&a[3].length>0&&a[2]===a[3]?(document.querySelector("#register-form").reset(),Array.from(document.querySelectorAll("#register-form input")).forEach((function(e){return e.classList.remove("border","border-danger")})),t(a)):K(),e.target.disabled=!1}},"Register"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:a},"Login"))))))}));var U=function(){return r.a.createElement("div",{className:"loading bg-dark"},r.a.createElement("div",{className:"spinner"},"\\",r.a.createElement(C.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})),r.a.createElement("div",{className:"loading-message"},r.a.createElement("h4",null,"May Take a Few Seconds to Load...")))};a(54),a(55),a(56);var W=Object(i.b)((function(e){return{navigation:e.navigationStatus.navigation,loginPending:e.loginStatus.loginPending}}),(function(e){return{onRefreshPage:function(){console.log("ON REFRESH"),e(function(){var e=Object(h.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGIN_PENDING"}),t({type:"TASK_PENDING"}),t({type:"TICKER_PENDING"}),t({type:"JOBS_POSTINGS_PENDING"}),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/my-dashboard-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://ikim91-my-dashboard.herokuapp.com/","users/me"),{method:"get",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(e){t({type:"LOGIN_SUCCESS",payload:{name:e.user.name,email:e.user.email}}),t({type:"GET_TASKS",payload:e.tasks}),t({type:"TICKER_SUCCESS",payload:e.tickers}),t({type:"JOBS_POSTINGS_SUCCESS",payload:e.postings}),console.log("DATA LOADED")})).then((function(){console.log("LOAD PAGE"),t({type:"MAIN"})})).catch((function(e){t({type:"LOGIN_ERROR",payload:e}),t({type:"TASK_ERROR",payload:e}),t({type:"TICKER_ERROR",payload:e}),t({type:"JOBS_POSTINGS_ERROR",payload:e})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onNavigateToMain:function(){e({type:"MAIN"})}}}))((function(e){var t=e.navigation,a=e.loginPending,o=e.onRefreshPage;switch(Object(n.useEffect)((function(){sessionStorage.token&&o()}),[o]),t){case"login":return r.a.createElement("div",{className:"App"},a?r.a.createElement(U,null):r.a.createElement(G,null));case"register":return r.a.createElement("div",{className:"App"},a?r.a.createElement(U,null):r.a.createElement(w,null));case"main":return r.a.createElement("div",{className:"App"},r.a.createElement(j,null));default:return r.a.createElement("div",{className:"App"},r.a.createElement(G,null))}})),B=Object(l.c)({loginStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOGIN_PENDING":return Object.assign({},e,{loginPending:!0});case"LOGIN_SUCCESS":return Object.assign({},e,{loginPending:!1,user:t.payload});case"REGISTER_PENDING":return Object.assign({},e,{loginPending:!0});case"REGISTER_SUCCESS":return Object.assign({},e,{loginPending:!1,user:t.payload});case"REGISTER_ERROR":case"LOGIN_ERROR":return Object.assign({},e,{error:t.payload,loginPending:!1});case"LOGOUT_PENDING":return Object.assign({},e,{loginPending:!0});case"LOGOUT_SUCCESS":return Object.assign({},e,d);case"LOGOUT_ERROR":return Object.assign({},e,{error:t.payload,loginPending:!1});default:return e}},navigationStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOGIN":return Object.assign({},e,{navigation:"login"});case"REGISTER":return Object.assign({},e,{navigation:"register"});case"MAIN":return Object.assign({},e,{navigation:"main"});default:return e}},toDoListStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"TASK_PENDING":return Object.assign({},e,{tasksPending:!0});case"CREATE_TASK":case"GET_TASKS":case"COMPLETE_TASK":case"DELETE_TASK":return Object.assign({},e,{tasks:t.payload,tasksPending:!1});case"TASK_ERROR":return Object.assign({},e,{error:t.payload,tasksPending:!1});case"OPEN_WINDOW":return Object.assign({},e,{createWindow:!0});case"CLOSE_WINDOW":return Object.assign({},e,{createWindow:!1});case"LOGOUT_SUCCESS":return Object.assign({},e,m);default:return e}},updateStockTickers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"TICKER_PENDING":return Object.assign({},e,{tickerPending:!0});case"TICKER_SUCCESS":return Object.assign({},e,{tickerPending:!1,tickers:t.payload.tickers,tickerData:t.payload.tickerData,news:t.payload.news,len:8-t.payload.tickers.length});case"TICKER_ERROR":return Object.assign({},e,{tickerPending:!1,error:t.payload});case"EDIT_MODE_ON":return Object.assign({},e,{editMode:!0});case"EDIT_MODE_OFF":return Object.assign({},e,{editMode:!1});case"LOGOUT_SUCCESS":return Object.assign({},e,p);default:return e}},updateJobPostings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"JOBS_POSTINGS_PENDING":return Object.assign({},e,{postingsPending:!0});case"JOBS_POSTINGS_SUCCESS":return Object.assign({},e,{postingsPending:!1,postings:t.payload.postings});case"JOBS_POSTINGS_ERROR":return Object.assign({},e,{postingsPending:!1,error:t.payload});case"LOGOUT_SUCCESS":return Object.assign({},e,E);default:return e}}}),x=Object(l.d)(B,Object(l.a)(s.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:x},r.a.createElement(W,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8e7449ce.chunk.js.map
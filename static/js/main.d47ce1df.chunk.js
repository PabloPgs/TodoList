(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),o=a.n(l),r=a(6),s=a(14),m=a(24),i=a(11),d={todos:JSON.parse(localStorage.getItem("todos"))||[]},u=Object(s.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(i.a)({},e,{todos:[].concat(Object(m.a)(e.todos),[t.payload])});case"CHANGE_TODO_STATUS":return Object(i.a)({},e,{todos:e.todos.map((function(e){return e.id===t.payload.id?Object(i.a)({},e,{completed:t.payload.status}):e}))});case"DELETE_TODO":return Object(i.a)({},e,{todos:e.todos.filter((function(e){return e.id!==t.payload}))});default:return e}}));u.subscribe((function(){var e=u.getState().todos;localStorage.setItem("todos",JSON.stringify(e))}));var E=a(4),p=(a(34),a(1)),_=function(){return c.a.createElement("div",{className:"home page"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"home__content"},c.a.createElement("h2",{className:"home__title"},"Home page"),c.a.createElement("p",{className:"home__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt, alias sequi id iusto qui laboriosam esse voluptas molestias itaque quo ipsa repellat adipisci ipsam."),c.a.createElement("p",{className:"home__descr"},c.a.createElement(E.b,{to:"/inbox"},c.a.createElement("button",{className:"btn btn-primary"},"Inbox")),c.a.createElement(E.b,{to:"/completed"},c.a.createElement("button",{className:"btn btn-primary"},"Completed"))))))},N=a(7),b=a(2),v=function(e){var t=e.show,a=e.setShow;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__inner"},c.a.createElement("div",null,t?c.a.createElement(b.h,{className:"header__icon",onClick:a}):c.a.createElement(b.a,{className:"header__icon",onClick:a}),c.a.createElement(E.b,{to:"/"},c.a.createElement(b.d,{className:"header__icon"}))),c.a.createElement(E.b,{to:"/",className:"header__logo"},"TodoApp")))},f=function(e){var t=e.show,a=e.setShow,n=Object(r.c)((function(e){return e.todos}));return c.a.createElement("nav",{className:"sidebar "+(t?"active":"")},c.a.createElement(E.c,{to:"/inbox",className:"sidebar__link",activeClassName:"sidebar__link--active",onClick:a},c.a.createElement(b.c,{className:"red"}),"Inbox ",c.a.createElement("span",null,n.reduce((function(e,t){return t.completed?e:e+=1}),0))),c.a.createElement(E.c,{to:"/completed",className:"sidebar__link",activeClassName:"sidebar__link--active",onClick:a},c.a.createElement(b.b,{className:"green"}),"Completed ",c.a.createElement("span",null,n.reduce((function(e,t){return t.completed?e+=1:e}),0))))},h=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],l=t[1],o=function(){l(!a)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{show:a,setShow:o}),c.a.createElement(f,{show:a,setShow:o}))},O=[{className:"red"},{className:"green"},{className:"orange"},{className:"grey"}],g=function(e){var t=e.onCancel,a=e.onAdd,l=Object(n.useState)(""),o=Object(N.a)(l,2),r=o[0],s=o[1],m=Object(n.useState)("grey"),i=Object(N.a)(m,2),d=i[0],u=i[1],E=Object(n.useState)(!1),p=Object(N.a)(E,2),_=p[0],v=p[1],f=Object(n.useState)(!1),h=Object(N.a)(f,2),g=h[0],k=h[1];return c.a.createElement("div",{className:"add-task"},220===r.length&&c.a.createElement("div",{className:"add-task__error red"},"Max length of task 200 characters!"),_&&c.a.createElement("div",{className:"add-task__error red"},"Cant add empty task!"),c.a.createElement(b.g,{className:d,onClick:function(){k(!g)}}),g&&c.a.createElement("div",{className:"add-task__modal"},O.map((function(e){return c.a.createElement(b.f,{key:e.className,className:e.className,onClick:function(){return function(e){u(e),k(!g)}(e.className)}})}))),c.a.createElement("input",{autoFocus:!0,spellCheck:"false",maxLength:"220",value:r,onChange:function(e){return s(e.target.value)},className:"add-task__field"}),c.a.createElement("div",{className:"add-task__btns"},c.a.createElement("button",{onClick:function(){if(r.length<1)v(!0);else{var e={id:Date.now(),color:d,completed:!1,text:r};a(e),s(""),u("grey"),v(!1)}},className:"btn btn-primary"},"Add task"),c.a.createElement("button",{onClick:t,className:"btn btn-secondary"},"Cancel")))},k=function(e){var t=e.id,a=e.text,n=e.color,l=e.onComplete,o=e.onDelete;return c.a.createElement("div",{className:"active-todo"},c.a.createElement("div",{className:"active-todo__icon-wrapper",onClick:function(){return l(t)}},c.a.createElement(b.b,null)),c.a.createElement("div",{className:"active-todo__content"},a),c.a.createElement("div",{className:"active-todo__actions"},c.a.createElement(b.f,{className:n||"grey"}),c.a.createElement(b.i,{className:"red",onClick:function(){return o(t)}})),c.a.createElement("div",{className:"active-todo__date"},"Creation date: ",new Date(t).toLocaleDateString()))},C=function(e){var t=e.id,a=e.text,n=e.color,l=e.onDelete,o=e.onReturn;return c.a.createElement("div",{className:"completed-todo"},c.a.createElement("div",{className:"completed-todo__icon-wrapper",onClick:function(){return o(t)}},c.a.createElement(b.j,{className:"red"})),c.a.createElement("div",{className:"completed-todo__content"},a),c.a.createElement("div",{className:"completed-todo__actions"},c.a.createElement(b.i,{className:"red",onClick:l}),c.a.createElement(b.f,{className:n||"grey"})),c.a.createElement("div",{className:"completed-todo__date"},"Creation date: ",new Date(t).toLocaleDateString()))},y=function(e){var t=e.children;return c.a.createElement("h4",{className:"default-message"},t)},j=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],l=t[1],o=Object(r.b)(),s=Object(r.c)((function(e){return e.todos.filter((function(e){return!e.completed}))})),m=function(){l(!a)},i=function(e){o({type:"CHANGE_TODO_STATUS",payload:{id:e,status:!0}})},d=function(e){o({type:"DELETE_TODO",payload:e})};return c.a.createElement("div",{className:"inbox page"},c.a.createElement("div",{className:"small-container inbox__inner"},0===s.length&&c.a.createElement(y,null,"Click add task to create a new task"),c.a.createElement("div",{className:"inbox__header"},c.a.createElement("h5",{className:"inbox__header-title"},"Inbox"),c.a.createElement("div",{className:"inbox__add",onClick:m},"Add Task",c.a.createElement(b.e,null))),c.a.createElement("div",{className:"inbox__modal"},a&&c.a.createElement(g,{onCancel:m,onAdd:function(e){o({type:"ADD_TODO",payload:e})}})),c.a.createElement("div",{className:"inbox__content"},s&&s.map((function(e){return c.a.createElement(k,Object.assign({onDelete:d,onComplete:i,key:e.id},e))})))))},D=function(){var e=Object(r.c)((function(e){return e.todos.filter((function(e){return e.completed}))})),t=Object(r.b)(),a=function(e){t({type:"CHANGE_TODO_STATUS",payload:{id:e,status:!1}})};return c.a.createElement("div",{className:"completed page"},c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"completed__title"},"Completed Todos"),0===e.length&&c.a.createElement(y,null,"No completed tasks yet"),c.a.createElement("div",{className:"small-container"},e&&e.map((function(e){return c.a.createElement(C,Object.assign({onDelete:function(){return a=e.id,void t({type:"DELETE_TODO",payload:a});var a},onReturn:a,key:e.id},e))})))))},S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/",exact:!0,component:_}),c.a.createElement(p.a,{path:"/inbox",component:j}),c.a.createElement(p.a,{path:"/completed",component:D})))};o.a.render(c.a.createElement(r.a,{store:u},c.a.createElement(E.a,null,c.a.createElement(S,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d47ce1df.chunk.js.map
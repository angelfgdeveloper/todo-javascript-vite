(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const C=`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tareas</title>
</head>

<body>

  <section class="todoapp">
    <header class="header">
      <h1>Tareas</h1>
      <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>

    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
        <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
        <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
      </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be "0 items left" by default -->
      <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="filtro" class="selected" href="#/">Todos</a>
        </li>
        <li>
          <a class="filtro" href="#/active">Pendientes</a>
        </li>
        <li>
          <a class="filtro" href="#/completed">Completados</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed">Borrar completados</button>
    </footer>
  </section>


  <footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>

</body>

</html>`;let w;const L=new Uint8Array(16);function S(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(L)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function E(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:P};function k(e,t,i){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const d=e.random||(e.rng||S)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return E(d)}class h{constructor(t){this.id=k(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},s={todos:[new h("Piedra del alma"),new h("Piedra del infinito"),new h("Piedra del tiempo"),new h("Piedra del poder"),new h("Piedra del realidad")],filter:c.All},A=()=>{v(),console.log("InitStore 🥑")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(s))},I=(e=c.All)=>{switch(e){case c.All:return[...s.todos];case c.Completed:return s.todos.filter(t=>t.done);case c.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},U=e=>{if(!e)throw new Error("Description is required");s.todos.push(new h(e)),f()},q=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},x=e=>{s.todos=s.todos.filter(t=>t.id!==e),f()},D=()=>{s.todos=s.todos.filter(e=>!e.done),f()},F=(e=c.All)=>{s.filter=e,f()},M=()=>s.filter,a={addTodo:U,deleteCompleted:D,deleteTodo:x,getCurrentFilter:M,getTodos:I,initStore:A,loadStore:v,setFilter:F,toggleTodo:q},O=e=>{if(!e)throw new Error("A TODO object is required");const{done:t,description:i,id:d}=e,o=`
    <div class="view">
      <input class="toggle" type="checkbox" ${t?"checked":""}>
      <label>${i}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),e.done&&n.classList.add("completed"),n};let b;const N=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Element ${e} not found`);b.innerHTML=a.getTodos(c.Pending).length};let g;const H=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(i=>{g.append(O(i))})},m={ClearCompletedButton:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const r=a.getTodos(a.getCurrentFilter());H(m.TodoList,r),i()},i=()=>{N(m.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=C,document.querySelector(e).append(r),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompletedButton),u=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(a.addTodo(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const p=r.target.closest("[data-id]");a.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",r=>{const p=r.target.className==="destroy",y=r.target.closest("[data-id]");!y||!p||(a.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{a.deleteCompleted(),t()}),u.forEach(r=>{r.addEventListener("click",p=>{switch(u.forEach(y=>y.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":a.setFilter(c.All);break;case"Pendientes":a.setFilter(c.Pending);break;case"Completados":a.setFilter(c.Completed);break}t()})})};a.initStore();V("#app");

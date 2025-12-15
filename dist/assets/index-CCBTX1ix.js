(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();function M(r){const e=[{icon:"grid",active:!0},{icon:"book"},{icon:"calendar"},{icon:"chart"},{icon:"folder"}],o={grid:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />',book:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />',calendar:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />',chart:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />',folder:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />',chat:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />',globe:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />'},i=e.map(t=>`
        <li class="cursor-pointer p-2.5 rounded-full transition-all duration-300 ${t.active?"bg-dark text-white shadow-lg":"text-gray-400 hover:text-primary hover:bg-white/50"} flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                ${o[t.icon]}
            </svg>
        </li>
    `).join("");r.innerHTML=`
        <div class="flex flex-col h-full items-center py-4 w-full relative z-10 transition-all duration-300">
            <!-- Glass Vertical Rectangle Menu -->
            <div class="glass flex-1 w-auto rounded-full py-3 px-1.5 flex flex-col items-center gap-3 border border-white/50 shadow-xl bg-white/40 backdrop-blur-xl mb-2 transition-all duration-300 mx-2">
                <ul class="flex flex-col gap-2 w-full items-center pt-2">
                    ${i}
                </ul>
                
                 <div class="mt-auto flex flex-col gap-3 w-full items-center pt-3 border-t border-gray-200/30">
                    <button class="p-2.5 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-white/50">
                       <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    </button>
                </div>
            </div>
        </div>
    `}const g={user:{name:"Mostafiz",avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"},stats:{courses:{total:24,new:3},completed:{total:4,label:"Will complete in July",count:3},challenges:{total:8,label:"Complated"},streak:{total:24,label:"Pro level"}},chartData:[{day:"Mon",study:8,exam:0},{day:"Tue",study:10,exam:0},{day:"Wed",study:7,exam:0},{day:"Thu",study:5,exam:4},{day:"Fri",study:9,exam:0},{day:"Sat",study:4,exam:0},{day:"Sun",study:11,exam:0}],todos:[{title:"Newton's third law of motion",subject:"Physics",time:"08:00 AM",completed:!1,date:"2025-12-10"},{title:"Finishes the math",subject:"",time:"",completed:!1,date:"2025-12-12"},{title:"Submit The Test",subject:"",time:"",completed:!1,date:"2025-12-15"},{title:"Relation Between Kp And Kc",subject:"Chemistry",time:"08:00 AM",completed:!1,date:"2025-12-08"}]};function $(r){return[{title:"Total Courses",value:r.courses.total,subtitle:`${r.courses.new} New released`,icon:'<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',iconBg:"bg-gray-100",iconColor:"text-gray-400"},{title:"Completed",value:r.completed.total,subtitle:`${r.completed.count} ${r.completed.label}`,icon:'<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>',iconBg:"bg-green-50",iconColor:"text-green-600"},{title:"Challenges",value:r.challenges.total,subtitle:r.challenges.label,icon:'<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>',iconBg:"bg-pink-50",iconColor:"text-pink-400"},{title:"Total Streak",value:`${r.streak.total} days`,subtitle:r.streak.label,icon:'<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>',iconBg:"bg-orange-50",iconColor:"text-orange-400"}]}function C(r,e){r.innerHTML=`
        <div class="h-full bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all relative group overflow-hidden flex flex-col justify-between">
            <!-- Hover Gradients -->
            <div class="absolute -top-12 -right-12 w-24 h-24 ${e.iconBg.replace("bg-","bg-")}/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
            
             <div class="flex justify-between items-start mb-4 relative z-10">
                <div class="p-3 ${e.iconBg} ${e.iconColor} rounded-full text-xl flex items-center justify-center">
                  ${e.icon}
                </div>
                <span class="text-gray-300 cursor-pointer hover:text-gray-500">
                   <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </span>
             </div>
             <div class="relative z-10">
                 <div class="text-3xl font-bold text-dark mb-1">${e.value}</div>
                 <div class="text-gray-500 text-sm font-medium flex items-center gap-1 leading-tight">
                    ${e.subtitle}
                 </div>
             </div>
        </div>
    `}function j(r,e){const o=Math.max(...e.map(t=>t.study+t.exam)),i=e.map(t=>{const a=t.study/o*100,l=t.exam/o*100;return`
      <div class="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
        <div class="w-full h-full flex flex-col justify-end relative rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors">
            <!-- Tooltip Placeholder -->
            <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap pointer-events-none">
              ${t.study}h Study, ${t.exam}h Exam
            </div>
            
            <!-- Exam part (top) -->
            ${t.exam>0?`<div style="height: ${l}%" class="w-full bg-primary/30 pattern-diagonal-lines"></div>`:""}
            <!-- Study part (bottom or remaining) -->
            <div style="height: ${a}%" class="w-full bg-primary rounded-t-sm"></div>
        </div>
        <span class="text-xs text-gray-400 font-medium group-hover:text-primary transition-colors">${t.day}</span>
      </div>
    `}).join("");r.innerHTML=`
    <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-bold text-dark flex items-center gap-2">
            Hours Spent 
            <span class="flex items-center gap-1 text-xs font-normal text-gray-500 ml-2">
                <span class="w-2 h-2 rounded-full bg-primary"></span> Study
                <span class="w-2 h-2 rounded-full bg-primary/30"></span> Exam
            </span>
        </h3>
        <select class="text-sm text-gray-500 border-none bg-transparent focus:ring-0 cursor-pointer outline-none font-medium">
            <option>Weekday</option>
            <option>Weekend</option>
        </select>
      </div>
      
      <div class="flex-1 flex gap-3 items-end h-40">
         <div class="flex flex-col justify-between h-full text-xs text-gray-400 py-1 pr-2">
             <span>15 Hr</span>
             <span>10 Hr</span>
             <span>5 Hr</span>
             <span>0 Hr</span>
         </div>
         <div class="flex-1 flex items-end justify-between gap-2 h-full pb-1 border-b border-dashed border-gray-200">
            ${i}
         </div>
      </div>
    </div>
  `}function b(r,e){const o=new Date;let i=o.getMonth(),t=o.getFullYear(),a=null;const l=()=>{const d=["January","February","March","April","May","June","July","August","September","October","November","December"],n=new Date(t,i+1,0).getDate(),c=new Date(t,i,1).getDay(),h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p={};e.forEach(s=>{s.date&&(p[s.date]||(p[s.date]=[]),p[s.date].push(s))});let m="";for(let s=0;s<c;s++)m+='<div class="h-8"></div>';for(let s=1;s<=n;s++){const u=`${t}-${String(i+1).padStart(2,"0")}-${String(s).padStart(2,"0")}`,f=p[u]&&p[u].length>0,x=a===u,k=u===o.toISOString().split("T")[0];m+=`
                <div class="h-9 w-9 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-all text-xs font-medium relative group
                    ${x?"bg-primary text-white shadow-lg scale-110":k?"bg-primary/20 text-primary":"hover:bg-gray-50 text-gray-500"}
                    ${f&&!x?"font-bold text-dark":""}
                " onclick="selectDate('${u}')">
                    ${s}
                    ${f?`<div class="absolute bottom-1 w-1 h-1 rounded-full ${x?"bg-white":"bg-primary"}"></div>`:""}
                </div>
            `}let v="";if(a){const s=p[a]||[];v=`
                <div class="mt-6 border-t border-gray-100 pt-4 animate-fade-in">
                    <div class="flex justify-between items-center mb-3">
                        <h4 class="text-sm font-bold text-dark">Events on ${a.split("-").reverse().join("/")}</h4>
                        <button class="text-xs text-primary font-bold hover:underline" onclick="addEvent('${a}')">+ Add</button>
                    </div>
                    ${s.length===0?'<p class="text-xs text-gray-400 italic">No events scheduled.</p>':`
                        <div class="space-y-2">
                             ${s.map(u=>`
                                <div class="bg-gray-50 p-2 rounded-lg flex items-center justify-between group">
                                    <div class="flex-1">
                                        <div class="text-xs font-bold text-gray-700 ${u.completed?"line-through opacity-50":""}">${u.title}</div>
                                        ${u.subject?`<div class="text-[10px] text-gray-400">${u.subject}</div>`:""}
                                    </div>
                                     <button class="text-gray-300 hover:text-red-400 p-1 opacity-0 group-hover:opacity-100 transition-opacity" onclick="removeEvent('${u.title}')">
                                        &times;
                                     </button>
                                </div>
                             `).join("")}
                        </div>
                    `}
                </div>
            `}r.innerHTML=`
        <div class="bg-white p-6 rounded-3xl shadow-sm mb-6">
           <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Calendar
            </h3>
            <div class="flex items-center gap-2">
                <button class="p-1 hover:bg-gray-50 rounded-full" onclick="changeMonth(-1)">
                    <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span class="text-xs font-bold text-dark w-24 text-center select-none">${d[i]} ${t}</span>
                <button class="p-1 hover:bg-gray-50 rounded-full" onclick="changeMonth(1)">
                    <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
           </div>
           
           <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-wider">
             ${h.map(s=>`<span>${s}</span>`).join("")}
           </div>
           
           <div class="grid grid-cols-7 gap-y-2">
                ${m}
           </div>

           ${v}
        </div>
        `,r.selectDate=s=>{a=s,l()},r.changeMonth=s=>{i+=s,i>11&&(i=0,t++),i<0&&(i=11,t--),l()},r.addEvent=s=>{const u=s.split("-").reverse().join("/"),f=prompt(`Add Task for ${u}:`);f&&(e.push({title:f,subject:"Personal",time:"All Day",completed:!1,date:s}),l(),document.dispatchEvent(new Event("dataChanged")))},r.removeEvent=s=>{const u=e.findIndex(f=>f.title===s);u>-1&&(e.splice(u,1),l(),document.dispatchEvent(new Event("dataChanged")))}};window.selectDate=d=>r.selectDate(d),window.changeMonth=d=>r.changeMonth(d),window.addEvent=d=>r.addEvent(d),window.removeEvent=d=>r.removeEvent(d),l()}function w(r,e){r.innerHTML=`
        <div class="bg-white p-6 rounded-3xl shadow-sm h-full">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold text-dark">Todo list</h3>
                <button class="flex items-center gap-1 text-xs font-medium text-gray-500 border border-gray-200 px-2 py-1 rounded-lg hover:border-primary hover:text-primary transition-colors">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    Add Todo
                </button>
            </div>
            
            <ul class="space-y-4">
                ${e.map((o,i)=>`
                    <li class="flex items-start gap-3 group justify-between" data-index="${i}">
                        <div class="flex items-start gap-3 flex-1">
                            <div class="mt-1 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:border-primary transition-colors toggle-btn">
                                ${o.completed?'<div class="w-3 h-3 bg-primary rounded-full"></div>':""}
                            </div>
                            <div>
                                <div class="text-sm font-bold text-dark group-hover:text-primary transition-colors cursor-pointer toggle-text">${o.title}</div>
                                <div class="flex flex-wrap gap-2 text-xs text-gray-400 mt-1">
                                    ${o.date?`<span class="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">${o.date.split("-").reverse().join("/")}</span>`:""}
                                    ${o.subject?`<span>${o.subject}</span>`:""}
                                    ${o.time?`<span class="text-gray-300">|</span> <span>${o.time}</span>`:""}
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button class="p-1.5 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 transition-colors edit-btn">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                             </button>
                             <button class="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors delete-btn">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                             </button>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </div>
    `}function y(r,e){e.school||(e.school="Dhaka College"),e.department||(e.department="Science"),r.innerHTML=`
        <div class="h-full bg-white rounded-3xl shadow-sm relative overflow-hidden group p-8 flex flex-col items-center justify-center text-center isolate transition-all hover:shadow-md">
            <!-- Decorative Modern Gradient Backgrounds -->
             <div class="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-60"></div>
             <div class="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            
            <!-- Edit Button -->
            <button class="edit-profile-btn absolute top-4 right-4 p-2 text-gray-400 hover:text-primary transition-all z-20 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:shadow-md hover:scale-105" title="Edit Profile">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </button>
            
            <!-- Avatar Section -->
            <div class="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                <!-- Glowing effect behind avatar -->
                <div class="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div class="w-28 h-28 rounded-full p-1 bg-white relative z-10 shadow-xl ring-1 ring-gray-100">
                    <img src="${e.avatar}" alt="User" class="w-full h-full rounded-full object-cover">
                </div>
            </div>
            
            <!-- Info Section -->
            <div class="relative z-10 flex flex-col items-center">
                <h3 class="text-2xl font-black text-dark mb-2 tracking-tight">${e.name}</h3>
                
                <div class="flex flex-col items-center gap-2">
                    <span class="px-4 py-1.5 rounded-full bg-gray-50 text-sm font-semibold text-gray-700 border border-gray-100 shadow-sm">${e.school}</span>
                    <span class="text-xs text-primary font-bold tracking-wider uppercase bg-primary/5 px-3 py-1 rounded-md border border-primary/10">${e.department}</span>
                </div>
            </div>
        </div>
    `,r.querySelector(".edit-profile-btn").onclick=()=>{const o=prompt("Enter Name:",e.name);if(o!==null){const i=prompt("Enter School:",e.school),t=prompt("Enter Department:",e.department);o&&(e.name=o),i!==null&&(e.school=i),t!==null&&(e.department=t),y(r,e),document.dispatchEvent(new Event("profileUpdated"))}}}function S(r){let e=JSON.parse(localStorage.getItem("dashboard_notes_list")||"[]"),o=-1,i=!1;const t=()=>{const a=e.map((v,s)=>`
            <div class="group flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border-b border-gray-50 last:border-0" data-index="${s}">
                <div class="flex-1 truncate text-sm text-gray-600 font-medium pr-2" onclick="loadNote(${s})">
                    ${v.split(`
`)[0]||"Untitled Note"}
                    <div class="text-xs text-gray-400 font-normal truncate mt-0.5">${v.substring(0,40)}...</div>
                </div>
                <button class="text-gray-300 hover:text-red-400 transition-colors p-2" onclick="deleteNote(${s}, event)">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            </div>
        `).join(""),l=`
            <div class="flex flex-col items-center justify-center h-full text-gray-400 py-8">
                <svg class="w-12 h-12 mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <p class="text-xs">No saved notes yet</p>
                <button id="create-first-note" class="mt-4 text-xs font-bold text-primary hover:underline">Create one</button>
            </div>
        `;r.innerHTML=`
            <div class="bg-white p-6 rounded-3xl shadow-sm h-full flex flex-col relative overflow-hidden">
                <div class="flex justify-between items-center mb-4 shrink-0">
                    <h3 class="text-lg font-bold text-dark flex items-center gap-2">
                        <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        Quick Notes
                    </h3>
                    <div class="flex items-center gap-2">
                         <button id="browse-btn" class="text-xs font-medium ${i?"text-primary":"text-gray-400"} hover:text-primary transition-colors flex items-center gap-1">
                            Browse
                        </button>
                         <span class="text-gray-300">|</span>
                        <button id="new-note-btn" class="text-xs font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                            + New
                        </button>
                    </div>
                </div>
                
                <div class="relative flex-1 min-h-0">
                    <!-- Editor View -->
                    <div class="absolute inset-0 flex flex-col transition-all duration-300 ${i?"opacity-0 pointer-events-none translate-x-full":"opacity-100 translate-x-0"}">
                         <textarea id="note-area" class="w-full flex-1 bg-gray-50 rounded-xl p-4 text-sm text-gray-600 outline-none border border-transparent focus:border-primary/20 focus:bg-white transition-all resize-none placeholder-gray-400" placeholder="Type your ideas here...">${o!==-1?e[o]:""}</textarea>
                         <div class="flex justify-between items-center mt-4">
                            <span id="note-status" class="text-xs text-gray-400 font-medium h-4"></span>
                            <button id="save-note" class="px-6 py-2 bg-dark text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg active:scale-95 transform">
                                ${o===-1?"Add Note":"Update Note"}
                            </button>
                        </div>
                    </div>

                    <!-- List View -->
                    <div class="absolute inset-0 flex flex-col bg-white transition-all duration-300 ${i?"opacity-100 translate-x-0":"opacity-0 pointer-events-none -translate-x-full"} z-10">
                         <div class="flex-1 overflow-y-auto custom-scrollbar">
                           ${e.length?a:l}
                         </div>
                    </div>
                </div>
            </div>
        `;const d=r.querySelector("#note-area"),n=r.querySelector("#save-note"),c=r.querySelector("#new-note-btn"),h=r.querySelector("#browse-btn"),p=r.querySelector("#create-first-note"),m=r.querySelector("#note-status");n&&(n.onclick=()=>{const v=d.value.trim();v&&(o===-1?(e.push(v),o=e.length-1):e[o]=v,localStorage.setItem("dashboard_notes_list",JSON.stringify(e)),m.textContent="Saved!",m.classList.add("text-green-500"),setTimeout(()=>{m&&(m.textContent="",m.classList.remove("text-green-500"))},2e3))}),c.onclick=()=>{o=-1,i=!1,t()},h.onclick=()=>{i=!i,t()},p&&(p.onclick=()=>{i=!1,o=-1,t()}),r.querySelectorAll('button[onclick^="deleteNote"]').forEach(v=>{v.onclick=s=>{s.stopPropagation();const u=parseInt(v.parentElement.dataset.index);e.splice(u,1),localStorage.setItem("dashboard_notes_list",JSON.stringify(e)),o===u?o=-1:o>u&&o--,t()}}),r.querySelectorAll('div[onclick^="loadNote"]').forEach(v=>{v.onclick=()=>{o=parseInt(v.parentElement.dataset.index),i=!1,t()}})};t()}function E(r){r.innerHTML=`
    <!-- Header -->
    <header class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <div class="w-full md:w-auto">
        <h1 id="header-greeting" class="text-3xl font-bold text-dark">Hello, ${g.user.name}!</h1>
        <p class="text-gray-500 mt-1">You have today <span class="font-bold text-dark">1 class</span> & <span class="font-bold text-dark">3 to-dos</span>, Upcoming exam <span class="font-bold text-dark">march 24, 2025</span></p>
      </div>
      <div class="flex items-center gap-4 w-full md:w-auto justify-end">

        <button id="help-btn" class="w-12 h-12 flex items-center justify-center bg-white text-gray-400 rounded-full hover:bg-gray-50 hover:text-primary transition-colors shadow-sm border border-gray-100 group relative">
           <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           
           <!-- Tooltip/Popover -->
           <div class="absolute top-full right-0 mt-2 w-64 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 transform origin-top-right scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
                <h4 class="font-bold text-dark mb-1">Student Workload Manager</h4>
                <p class="text-xs text-gray-500 leading-relaxed">
                    Manage your courses, exams, and tasks efficiently.
                    <br><br>
                    • Drag & Drop widgets to customize layout.
                    <br>
                    • Use Quick Notes to jot down ideas.
                    <br>
                    • Click bottom-right corner to Resize cards.
                </p>
           </div>
        </button>
      </div>
    </header>
    
    <!-- Main Widget Grid -->
    <div id="dashboard-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
        <!-- Stat Cards (Integrated) -->
        <div id="stat-card-0" class="col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>
        <div id="stat-card-1" class="col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>
        <div id="stat-card-2" class="col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>
        <div id="stat-card-3" class="col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>
        
        <!-- Chart (Default: 2 Cols) -->
        <div id="chart-wrapper" class="col-span-1 md:col-span-2 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out overflow-hidden" draggable="true">
             <!-- Hover Blobs Injected Here or via renderChart if wrapper -->
             <!-- Note: renderChart replaces innerHTML of the INNER container. We need to preserve wrapper structure in Dashboard if we want Drag/Drop on wrapper. -->
             <!-- But wait, if I put 'bg-white' here, it covers blobs inside? No, blobs are z-0. -->
             <!-- The content rendered by renderChart has bg-white? Yes. -->
             <!-- So I should NOT handle blobs here if renderChart handles them. renderChart NOW handles them. -->
             <!-- Just need the container. -->
             <!-- Wait, renderChart takes 'chart-wrapper' or inner? -->
             <!-- renderChart overwrites innerHTML. So if I pass 'chart-wrapper', it overwrites everything including any preset blobs. -->
             <!-- renderChart ADDS blobs now. So I pass the wrapper. -->
        </div>

        <!-- Notes (Default: 1 Col) -->
        <div id="notes-wrapper" class="col-span-1 h-80 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>

        <!-- Profile (Default: 1 Col) -->
        <div id="profile-container" class="col-span-1 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>

        <!-- Calendar (Default: 2 Cols) -->
        <div id="exam-wrapper" class="col-span-1 md:col-span-2 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>

        <!-- Todo (Default: 2 Cols) -->
        <div id="todo-wrapper" class="col-span-1 md:col-span-2 bg-white rounded-3xl shadow-sm draggable-item relative group transition-all duration-300 ease-in-out" draggable="true"></div>
    </div>
  `,$(g.stats).forEach((a,l)=>{const d=document.getElementById(`stat-card-${l}`);d&&C(d,a)}),j(document.querySelector("#chart-wrapper"),g.chartData),S(document.querySelector("#notes-wrapper")),b(document.querySelector("#exam-wrapper"),g.todos),y(document.querySelector("#profile-container"),g.user),w(document.querySelector("#todo-wrapper"),g.todos),window.dashboardHandlersInitialized||(window.addNewTodo=()=>{const a=prompt("Enter new todo:");if(a){const l=prompt("Enter date (DD/MM/YYYY) (optional):",new Date().toLocaleDateString("en-GB")),d=prompt("Enter time (e.g. 09:00 AM) (optional):","09:00 AM");let n=null;if(l){const c=l.split("/");c.length===3&&(n=`${c[2]}-${c[1]}-${c[0]}`)}g.todos.push({title:a,subject:"General",time:d||"All Day",completed:!1,date:n}),document.dispatchEvent(new Event("dataChanged"))}},window.toggleTodo=a=>{g.todos[a].completed=!g.todos[a].completed,document.dispatchEvent(new Event("dataChanged"))},window.editTodo=a=>{const l=g.todos[a],d=prompt("Edit Title:",l.title);if(d!==null){const n=l.date?l.date.split("-").reverse().join("/"):"",c=prompt("Edit Date (DD/MM/YYYY):",n),h=prompt("Edit Time:",l.time);if(l.title=d||l.title,l.time=h||l.time,c){const p=c.split("/");p.length===3&&(l.date=`${p[2]}-${p[1]}-${p[0]}`)}else l.date=null;document.dispatchEvent(new Event("dataChanged"))}},window.deleteTodo=a=>{confirm("Delete this todo?")&&(g.todos.splice(a,1),document.dispatchEvent(new Event("dataChanged")))},window.dashboardHandlersInitialized=!0);const o=()=>{w(todoContainer,g.todos)};o();const i=()=>{o(),b(document.querySelector("#exam-schedule-container"),g.todos)};document.removeEventListener("dataChanged",i),document.addEventListener("dataChanged",i);const t=()=>{const a=document.getElementById("header-greeting");a&&(a.innerText=`Hello, ${g.user.name}!`)};document.removeEventListener("profileUpdated",t),document.addEventListener("profileUpdated",t),setTimeout(()=>{const a=document.getElementById("dashboard-grid"),l=a.querySelectorAll(".draggable-item");l.forEach(n=>{if(n.querySelector(".resize-handle"))return;const c=document.createElement("div");c.className="resize-handle absolute bottom-2 right-2 w-6 h-6 bg-gray-100 hover:bg-primary rounded-full cursor-nwse-resize flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all z-20",c.innerHTML='<svg class="w-3 h-3 text-gray-500 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>',c.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),n.classList.contains("md:col-span-2")?(n.classList.remove("md:col-span-2"),n.classList.add("col-span-1"),c.title="Maximize"):(n.classList.remove("col-span-1"),n.classList.add("md:col-span-2"),c.title="Minimize")}),n.appendChild(c)});let d=null;l.forEach(n=>{n.addEventListener("dragstart",c=>{d=n,setTimeout(()=>n.classList.add("opacity-50","scale-95"),0)}),n.addEventListener("dragend",()=>{n.classList.remove("opacity-50","scale-95"),d=null,l.forEach(c=>c.classList.remove("ring-2","ring-primary","ring-offset-2"))}),n.addEventListener("dragover",c=>{c.preventDefault(),n!==d&&n.classList.add("ring-2","ring-primary","ring-offset-2")}),n.addEventListener("dragleave",()=>{n.classList.remove("ring-2","ring-primary","ring-offset-2")}),n.addEventListener("drop",c=>{if(c.preventDefault(),n.classList.remove("ring-2","ring-primary","ring-offset-2"),d&&d!==n){const h=a;n.nextSibling===d||n.nextSibling;const p=document.createElement("div"),m=document.createElement("div");h.insertBefore(p,n),h.insertBefore(m,d),h.insertBefore(d,p),h.insertBefore(n,m),h.removeChild(p),h.removeChild(m)}})})},500)}document.querySelector("#app").innerHTML=`
  <nav id="sidebar" class="w-16 h-full bg-white border-r border-gray-200 flex flex-col items-center py-6 shrink-0 transition-all duration-300"></nav>
  <main id="dashboard" class="flex-1 h-full overflow-y-auto p-8 relative"></main>
`;M(document.querySelector("#sidebar"));E(document.querySelector("#dashboard"));

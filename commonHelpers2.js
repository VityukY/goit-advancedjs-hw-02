import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l}from"./assets/vendor-77e16229.js";const m=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),o=document.querySelector(".timer");a.disabled=!0;let n;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(n=Date.parse(t)-Date.now(),n<=0){window.alert("Please choose a date in the future");return}s(n),a.disabled=!1}};l(m,f);function r(t){return t.toString().padStart(2,"0")}function h(t){const c=r(Math.floor(t/864e5)),u=r(Math.floor(t%864e5/36e5)),d=r(Math.floor(t%864e5%36e5/6e4)),i=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:c,hours:u,minutes:d,seconds:i}}function s(t){const e=h(t);o.querySelector("[data-days]").textContent=e.days,o.querySelector("[data-hours]").textContent=e.hours,o.querySelector("[data-minutes]").textContent=e.minutes,o.querySelector("[data-seconds]").textContent=e.seconds}a.addEventListener("click",()=>{a.disabled=!0;const t=setInterval(()=>{n-=1e3,n>=0?s(n):clearInterval(t)},1e3)});
//# sourceMappingURL=commonHelpers2.js.map
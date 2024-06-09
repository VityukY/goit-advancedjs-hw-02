import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputRef = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerContainer = document.querySelector('.timer');

startBtn.disabled = true;
let restTime

const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
      const unixSelected = Date.parse(selectedDates);
      restTime = unixSelected - Date.now();
      if(restTime <= 0 ) {
         window.alert("Please choose a date in the future");
         return
      }
      
      timerUpdateHandler (restTime)
      startBtn.disabled = false;
   },
   };

flatpickr(inputRef, options) 

function addLeadingZero(value) {
   return value.toString().padStart(2, '0')
   }

function convertMs(ms) {
   // Number of milliseconds per unit of time
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;
   
   // Remaining days
   const days = addLeadingZero(Math.floor(ms / day));
   // Remaining hours
   const hours = addLeadingZero(Math.floor((ms % day) / hour));
   // Remaining minutes
   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
   // Remaining seconds
   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
   
   return { days, hours, minutes, seconds };
   }

function timerUpdateHandler (restTime) {
      const timerData = convertMs(restTime);
      timerContainer.querySelector('[data-days]').textContent = timerData.days;
      timerContainer.querySelector('[data-hours]').textContent = timerData.hours;
      timerContainer.querySelector('[data-minutes]').textContent = timerData.minutes;
      timerContainer.querySelector('[data-seconds]').textContent = timerData.seconds;
   
}

startBtn.addEventListener('click', () => {
   startBtn.disabled = true;
   const timerITem = setInterval (()=> {
         restTime-=1000;
         if (restTime>=0) {
            timerUpdateHandler (restTime)
         }
         else {
            clearInterval(timerITem)
         }
      
   }, 1000)
   

})
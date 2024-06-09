
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formRef = document.querySelector('.form')

formRef.addEventListener('submit', (e)=> {
  e.preventDefault();


  const delay = Number(e.target.delay.value) 
  const step = Number (e.target.step.value)
  const amount =  Number (e.target.amount.value)

  for (let i = 1; i<= amount; i++) {
    const currentDelay = delay + ((i-1) * step);
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        iziToast.show({
          title: 'Promise',
          backgroundColor: 'green',
          messageColor: 'white',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`
      });
      })
      .catch(({ position, delay }) => {
        iziToast.show({
          title: 'Promise',
          backgroundColor: 'red',
          messageColor: 'white',
          message: `❌ Rejected promise ${position} in ${delay}ms`
      });

      });  
    }
  }
)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
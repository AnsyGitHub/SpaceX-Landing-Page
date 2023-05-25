const counters = document.querySelectorAll('.counter');
let scrollStarting = false;
document.addEventListener('scroll',scrollPage);


function scrollPage(){
    const s = window.scrollY;
    if(s>100 && !scrollStarting)
    {
        countUp();
        scrollStarting = true;
    }
    else if(s<100 && scrollStarting)
    {
        reset();
        scrollStarting = false;
    }

}

function countUp() {
    counters.forEach((counter) => {
      counter.innerText = '0';
  
      const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        // Get current counter value
        const c = +counter.innerText;
  
        // Create an increment
        const increment = target / 100;
  
        // If counter is less than target, add increment
        if (c < target) {
          // Round up and set counter value
          counter.innerText = `${Math.ceil(c + increment)}`;
  
          setTimeout(updateCounter, 150);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  }
  
  function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
  }
countUp();
var checkHeader = _.throttle(() => { 
   let scrollPosition = Math.round(window.scrollY);

   if (scrollPosition > 100){
       document.querySelector('header').classList.add('sticky');
   }else {
       document.querySelector('header').classList.remove('sticky');
   }
}, 300);

window.addEventListener('scroll', checkHeader);
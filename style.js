window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
  })
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.TopNav');
    scroll.classList.toggle("active", window.scrollY > 100)
  })
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.TopNav');
    scroll.classList.toggle("shadow", window.scrollY > 100)
  })

  function openNav() {
    document.getElementById("myNav").style.height = "100%";   
}
function closeNav(){
    document.getElementById("myNav").style.height = "0%";
    
}

var achieve = document.getElementsByClassName("achievement");
achieve.height;
console.log(achieve);

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
   });

   // ScrollReveal().reveal('.MY', { delay: 100, origin: 'right' });
   ScrollReveal().reveal('.main-title', { delay: 200, origin: 'left' });
   // ScrollReveal().reveal('.lead', { delay: 200, origin: 'right' });
   ScrollReveal().reveal('.svg', { delay: 500, origin: 'bottom', interval: 200});
   ScrollReveal().reveal('.Wole', { delay: 200, origin: 'bottom'});
   ScrollReveal().reveal('.feature-icon', { delay: 300, origin: 'left', interval: 200});
   ScrollReveal().reveal('.achievement', { delay: 500, origin: 'bottom', interval: 200});
   ScrollReveal().reveal('.main-port', { delay: 300, origin: 'bottom' });
   ScrollReveal().reveal('.jade', { delay: 500, origin: 'top' });
   ScrollReveal().reveal('#song-1', { delay: 500, origin: 'bottom' });

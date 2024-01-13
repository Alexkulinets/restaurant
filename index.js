const parallax = gsap.timeline();
parallax  
    .to('.main', {
        scale:3,
        x:"-20wh"
    })
    .to('.gsap-image', {
        x:"65vw",
        y:"-26vw",
        scale:3
    })
    .to('.gsap-image', {
        x:"64.5vw",
        y:"-25.5vw",
        scale:2.95  
    })
    .to('.image.two', {
        x:"-20vw",
        y:"65vw",
        scale:3
    })  
    .to('.image.two', {
        x:"-19.5vw",
        y:"64.5vw",
        scale:2.95
    })
    let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
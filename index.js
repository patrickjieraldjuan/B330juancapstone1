/*

  let backtotop = select('#back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }*/



/*function navSelect(item) {
   item.style.color = "teal";
   item.style.textShadow = "0px 0px 20px white";
 } 

 function navDeselect(item) {
   item.style.textShadow = "0px 0px 20px black";
   item.style.color = "White";
 } */


const navLink = document.querySelectorAll('.nav-link');

  for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
      document.querySelector('#navbarTogglerDemo02').style.height = "0vh !important";
    })
  }



// Mouse Pointer
/*
document.addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}
*/


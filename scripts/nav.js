const toggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");
let clicked = false;

toggle.addEventListener("click", function(){
  if (clicked === false){
    nav.style.transform = "translateX(0)";
    toggle.style.backgroundImage = "url('../assets/icons/menuClose.svg')";
    clicked = true;
  } else if (clicked){
    nav.style.transform = "translateX(450px)";
    toggle.style.backgroundImage = "url('../assets/icons/menu.svg')";
    clicked = false;
  }
})
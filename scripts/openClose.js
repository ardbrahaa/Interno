let openBtn = document.querySelectorAll(".faqQuestion");

for (let i = 0; i < openBtn.length; i++){
  openBtn[i].addEventListener("click", function() {
    openBtn[i].classList.toggle("gold");
    const arrow = document.querySelector(`.arrow-${i}`);
    const answer = document.querySelector(`.faqAnswer-${i}`);
    answer.classList.toggle("open");
    arrow.getAttribute("src") === "../assets/icons/arrowRight.svg" ? arrow.setAttribute("src", "../assets/icons/arrowDown.svg") : arrow.setAttribute("src", "../assets/icons/arrowRight.svg")
  })
};
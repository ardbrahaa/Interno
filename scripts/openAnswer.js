const question = document.querySelectorAll(".qAndA");

for (let i = 0; i < question.length; i++){
  question[i].addEventListener("click", function(){
    const answer = document.querySelector(`.answer-${i}`);
    const icon = document.querySelector(`.icon-${i}`);
    answer.classList.toggle("open");
    question[i].classList.toggle("clicked");
    icon.getAttribute('src') === '../../assets/icons/minus.svg' ? icon.setAttribute('src', '../../assets/icons/plus.svg') : icon.setAttribute('src', '../../assets/icons/minus.svg')
  })
};
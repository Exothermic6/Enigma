const button=document.getElementsByClassName("submit")[0];
console.log(button)

const questions = [
    {
      question:
        "If you were running in an athletic competition and you pass the second person,what position willl you be?",
      A: "Second",
      B: "Third",
      C: "First",
      D: "None of the above",
      correct: "Second",
    },
    {
      question:
        "Which one weighs heavier? tens pound of feathers or ten pounds of bricks",
      A: "ten pounds of feathers",
      B: "ten pounds of bricks",
      C: "they weigh the same",
      D: "none of the above",
      correct: "they weigh the same",
    },
    {
      question:
        "You have a bowl containing six apples. You take away four apples. how many apples do you have?",
      A: "six",
      B: "two",
      C: "none",
      D: "four",
      correct: "four",
    },
    {
      question: "How many mpnths have 28 days ?",
      A: "one",
      B: "february",
      C: "none of the months",
      D: "all twelve months",
      correct: "all twelve months",
    },
    {
      question:
        " I have cities but no houses, forests but no trees, and rivers but no water. What am I ?",
      A: "globe",
      B: "country",
      C: "map",
      D: "globe",
      correct: "map",
    },
    {
      question: " You have a bee in your hand. What's in your eye ?",
      A: "tears",
      B: "beauty",
      c: "focus",
      D: "vision",
      correct: "vision",
    },
  ];
  
let p = document.createElement("div");
let currentIndex = 0;
let currentQuestion=questions[currentIndex]

const loadQuestions=()=>{
    p.innerHTML = `
    <div class="container">
    <div class="quiz__major">
        <p>${currentQuestion.question}</p>
    </div>
        <div class="quiz__container__top">
            <div class="quiz__container__top--a">A. ${currentQuestion.A}</div>
            <div class="quiz__container__top--b">B. ${currentQuestion.B}</div>
        </div>
        <div class="quiz__container">
            <div class="quiz__container__top--c">C. ${currentQuestion.C}</div>
            <div class="quiz__container__top--d">D. ${currentQuestion.D}</div>
        </div>
  </div>
    `

    quest.appendChild(p);
}

window.addEventListener("DOMContentLoaded",loadQuestions);


const btn = document.querySelector(".button i");
const quest = document.getElementById("quest");
console.log(quest);


btn.addEventListener("click", function (e) {
    currentIndex+=1;
    currentQuestion = questions[currentIndex];
    if(currentIndex<=5){
    console.log(currentQuestion);
    console.log(p);
    loadQuestions()

    quest.appendChild(p); 
}

else{
    console.log()
    button.style.display="block"
    btn.style.display="none"
  }

});




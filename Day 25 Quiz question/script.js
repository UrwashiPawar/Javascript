const questionList =[
  {
    "question": "Why don’t skeletons fight each other?",
    "options": {
      "A": "They are too slow",
      "B": "They don’t have guts",
      "C": "They are invisible",
      "D": "They forget how"
    },
    "answer": "B",
    "detail_answer": "Skeletons literally don’t have guts, so they have no courage to fight!"
  },
  {
    "question": "What do you call cheese that isn’t yours?",
    "options": {
      "A": "Fake cheese",
      "B": "Nacho cheese",
      "C": "Lost cheese",
      "D": "Cold cheese"
    },
    "answer": "B",
    "detail_answer": "‘Nacho cheese’ sounds like ‘not your cheese’—a classic pun!"
  },
  {
    "question": "Why did the math book look sad?",
    "options": {
      "A": "It lost its cover",
      "B": "Too many problems",
      "C": "Bad teacher",
      "D": "No answers"
    },
    "answer": "B",
    "detail_answer": "Math books are full of problems… and apparently, that’s stressful!"
  },
  {
    "question": "Why did the computer go to the doctor?",
    "options": {
      "A": "It had a virus",
      "B": "It was old",
      "C": "It broke down",
      "D": "No internet"
    },
    "answer": "A",
    "detail_answer": "Computers get ‘viruses’ just like humans get sick—time for a digital check-up!"
  },
  {
    "question": "What do you call a bear with no teeth?",
    "options": {
      "A": "Soft bear",
      "B": "Gummy bear",
      "C": "Toothless bear",
      "D": "Lazy bear"
    },
    "answer": "B",
    "detail_answer": "A bear with no teeth can only gum things… just like a gummy candy!"
  },
  {
    "question": "Why did the student eat his homework?",
    "options": {
      "A": "He was hungry",
      "B": "Teacher said it was a piece of cake",
      "C": "He forgot lunch",
      "D": "Lost his book"
    },
    "answer": "B",
    "detail_answer": "If homework is a ‘piece of cake,’ why not eat it?"
  },
  {
    "question": "Why don’t eggs tell jokes?",
    "options": {
      "A": "They are shy",
      "B": "They might crack up",
      "C": "Too small",
      "D": "No voice"
    },
    "answer": "B",
    "detail_answer": "Eggs might ‘crack up’—which means both laughing and breaking!"
  },
  {
    "question": "What do you call a sleeping bull?",
    "options": {
      "A": "Lazy bull",
      "B": "Snoring bull",
      "C": "Bulldozer",
      "D": "Dream bull"
    },
    "answer": "C",
    "detail_answer": "A ‘bulldozer’ sounds like a bull that dozes (sleeps)!"
  },
  {
    "question": "Why was the broom late?",
    "options": {
      "A": "Traffic",
      "B": "Overslept",
      "C": "It swept in",
      "D": "No alarm"
    },
    "answer": "C",
    "detail_answer": "Brooms sweep, so it ‘swept in’ late—pun intended!"
  },
  {
    "question": "Why did the scarecrow win an award?",
    "options": {
      "A": "He was funny",
      "B": "Best dressed",
      "C": "Outstanding in his field",
      "D": "Scared birds"
    },
    "answer": "C",
    "detail_answer": "Scarecrows stand in fields, so being ‘outstanding in his field’ is literally true!"
  }
];

const timer = document.getElementById("timer")

const question_index= document.getElementById("question-index")
const question= document.getElementById("question")

const question_a= document.getElementById("option-A")
const question_b= document.getElementById("option-B")
const question_c= document.getElementById("option-C")
const question_d= document.getElementById("option-D")



const optBoxA =document.getElementById("option-box-A")
const optBoxB =document.getElementById("option-box-B")
const optBoxC =document.getElementById("option-box-C")
const optBoxD =document.getElementById("option-box-D")



const next_button= document.getElementById("next-button")


let currentIndex = 0;
let timeCounter = 60;
let intervalId;
let ansList = [];
let score = 0;

function displayQuestion(){
if(currentIndex > questionList.length -1){
  next_button.textContent ="SUBMIT";
  clearInterval(intervalId);

}else{
  startTimer();
  question_index.textContent ="Q. " + (currentIndex + 1);
question.textContent = questionList[currentIndex].question;

question_a.textContent = questionList[currentIndex].options.A;
question_b.textContent = questionList[currentIndex].options.B;
question_c.textContent = questionList[currentIndex].options.C;
question_d.textContent = questionList[currentIndex].options.D;
}
}

next_button.addEventListener("click",() => {
    currentIndex++;
    if (currentIndex < questionList.length){
        displayQuestion();
    if(currentIndex == questionList.length -1){
      next_button.textContent ="SUBMIT";
    }
    }else{
        // alert("All question attemped !!");
        scoreCounter();
    }
});

function startTimer(){
  clearInterval(intervalId);
  timeCounter = 60;
  intervalId = setInterval(()=> {
    timeCounter--;
    timer.textContent =timeCounter;
    if(timeCounter <= 0){
      currentIndex++;
      displayQuestion();
    }
  },1000);
}


function scoreCounter(){
  questionList.forEach((que,i) => {
    if (que.answer == ansList[i]) {
      score++;
    }
  });
  console.log(score);
  document.getElementById("score-display").textContent =
  "Your score:"+ score + "/" +questionList.length;

  alert("your score :" + score);

  if(score >= 6){
    document.getElementById("pass-fail").textContent ="you'r passed";
  } else {
    document.getElementById("pass-fail").textContent ="you'r failed";
  }
}

optBoxA.addEventListener("click", () => {
  ansList.push("A");
});
optBoxB.addEventListener("click", () => {
  ansList.push("B");
})
optBoxC.addEventListener("click", () => {
  ansList.push("C");
})
optBoxD.addEventListener("click", () => {
  ansList.push("D");
});

displayQuestion();

// const setTimer = () =>{
//      const timerid = setInterval(() =>{
//       timeCounter--;
//       time.textContent = timeCounter;
//       if(timeCounter <= 0 || currentIndex >= questionList.length -1){
//         clearInterval(timerid);
//         currentIndex++;
//         displayQuestion();
//         timeCounter = 5;
//         time.textContent = timeCounter;
//         setTimer();
//       }

//      }, 1000);
  
// }
// setTimer();

// const stopid = setInterval(()=> {
//   setTimer();
//   if(currentIndex == questionList.length + 1){
//     console.log("stoped..")
//     clearInterval(stopid)

//   }
// },5000)
// displayQuestion();


// const timeManager =() => {
//       setTimer();


// }
 
  
  
// displayQuestion();



// question_index.textContent ="Q. " + (currentIndex + 1);
// question.textContent = questionList[currentIndex].options;

// question_a.textContent = questionList[currentIndex].options.A;
// question_b.textContent = questionList[currentIndex].options.B;
// question_c.textContent = questionList[currentIndex].options.C;
// question_d.textContent = questionList[currentIndex].options.D;
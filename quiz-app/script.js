const quizData = [{
        question: 'Qual é o filme preferido do Murilo?',
        a: 'Vingadores Ultimato',
        b: 'Shrek',
        c: 'Expresso Polar',
        d: 'Gente Grande',
        correct: 'c'
    },
    {
        question: 'Qual é a sobremesa preferida do Murilo?',
        a: 'Sorvete',
        b: 'Bolo de Chocolate',
        c: 'Goiabada',
        d: 'Pavê',
        correct: 'a'
    },
    {
        question: 'Qual é o jogo preferido do Murilo?',
        a: 'God of War',
        b: 'Dark Souls',
        c: 'Rocket League',
        d: 'Ori and the Will of the Wisps',
        correct: 'b'
    },
    {
        question: 'Qual é a série de TV preferida do Murilo?',
        a: 'La Casa de Papel',
        b: 'The Big Bang Theory',
        c: "Grey's Anatomy",
        d: 'Lucifer',
        correct: 'b'
    },
    {
        question: 'Qual é o cantor(a) preferido do Murilo?',
        a: 'Gerard Way',
        b: 'Bebe Rexha',
        c: 'Dan Reynolds',
        d: 'Brendon Urie',
        correct: 'd'
    },
]

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("botao");
const answersEls = document.querySelectorAll(".answer");
let currentQuiz = 0;
let score = 0;
loadQuiz();



// function startQuiz(){
//     quiz.innerHTML = `<h2>Esse quiz contém 5 perguntas gerais sobre o Murilo</h2> <button onclick="loadQuiz()">Clique aqui para começar o quiz</button>`
// }

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {

    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}
submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Você acertou ${score}/${quizData.length} perguntas </h2> <button onclick="location.reload()">Clique aqui para refazer o quiz</button>`
        }
    }

})
const quizData = [
	{
		question: "1. When is my birthday?",
		a: "Oct 4",
		b: "Oct 8",
		c: "Oct 16",
		d: "Oct 18",
		correct: "b",
	},
	{
		question: "2. What was my first programming language?",
		a: "Python",
		b: "C",
		c: "JavaScript",
		d: "Java",
		correct: "d",
	},
	{
		question: "3. What is my dog's name?",
		a: "London",
		b: "Berlin",
		c: "Las Vegas",
		d: "Tokyo",
		correct: "a",
	},
	{
		question: "4. Who was my roommate first-year at college?",
		a: "Reid",
		b: "Oscar",
		c: "David",
		d: "Didn't have one!",
		correct: "a",
	},
	{
		question: "5. Where was I born?",
		a: "United States",
		b: "Germany",
		c: "England",
		d: "Mars - I'm an alien",
		correct: "a",
	},
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("header");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
	const currentQuizData = quizData[currentQuestion];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

	answersEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
    answersEls.forEach((answersEls) => {
        answersEls.checked = false;
    }
    );
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();
    console.log(answer);

	if (answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++;
        }

		currentQuestion++;
		if (currentQuestion < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2 class="score__header">Your Score: ${score}/${quizData.length}</h2>`;
		}
	}
});


loadQuiz();
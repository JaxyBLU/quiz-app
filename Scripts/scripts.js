/* Array consisting of objects. Each object is one question with answers. */

const quizData = [
	{
		question: "Which hero has the bar?",
		a: "Viper",
		b: "Monkey King",
		c: "Zeus",
		d: "Topias",
		correct: "b"
	}, {
		question: "How Bektur's company is called?",
		a: "Stand weak",
		b: "In the middle",
		c: "Stay Strong INC",
		d: "Middle finger",
		correct: "c"
	}, {
		question: "What is Irish Baba?",
		a: "Chocolate cake with whiskey",
		b: "Father from Ireland",
		c: "Nothing at all",
		d: "Creepy feeling",
		correct: "a"
	}, {
		question: "What is 'Davidoff'?",
		a: "cigarettes",
		b: "shoe market",
		c: "laptop brand",
		d: "airlines company",
		correct: "a"
	}
];

/*Let's assign HTML Elements to some variables for convenience */
const questionBox = document.getElementById('questionh2');
const answera = document.getElementById('a_text');
const answerb = document.getElementById('b_text');
const answerc = document.getElementById('c_text');
const answerd = document.getElementById('d_text');
const submitbutton = document.getElementById('submitb');

/* Variable which is assigned initially to zero. Indicates which question is current one */
var questionNumber = 0;

/* We need variable to store choosen answer id. Initially we assign undefined to it */
var choosenAnswer = undefined;

/* We need a variable to store correct number of answers. Initially it's zero. */
var correctAnswers = 0;

/*Loading Quiz */
loadQuiz();

/* Let's disable submit button initially when answer is not chosen */
submitbutton.disabled = true;

/* Let's add event listener which activates submit button upon choosing answer */
document.getElementsByName('answer').forEach(item => {
  item.addEventListener('change', event => {
    submitbutton.disabled = false;
  })
})

/* Function which loads the Quiz */
function loadQuiz(){
	questionBox.innerHTML = quizData[questionNumber].question;
	answera.innerHTML = quizData[questionNumber].a;
	answerb.innerHTML = quizData[questionNumber].b;
	answerc.innerHTML = quizData[questionNumber].c;
	answerd.innerHTML = quizData[questionNumber].d;
	submitbutton.disabled = true;
}

/* Action on pressing the button */
submitbutton.addEventListener('click', function(){
	getSelectedAnswer();
	if(choosenAnswer == quizData[questionNumber].correct){correctAnswers++};
	if(questionNumber < quizData.length-1){
		questionNumber++;
		loadQuiz();
	} else {
		alert("You finished the Quiz!!!");
		alert(`You answered: ${correctAnswers} answers correct!`);
	};
});

/* We need a function to get correct answer */
function getSelectedAnswer(){
	const allAnswers = document.querySelectorAll(".answer");

	allAnswers.forEach(function(value){
		if(value.checked){
			choosenAnswer = value.id;
			value.checked = false;
		};
	});
}
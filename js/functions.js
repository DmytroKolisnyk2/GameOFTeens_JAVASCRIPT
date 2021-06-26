const answersArray = ["", "", "", "", "", "", "", "", "", ""];
let questionIndex = 0;
export const addAnswer = function () {
	const inputRadios = document.querySelectorAll('.question__form--variant');

	for (let i = 0, length = inputRadios.length; i < length; i++) {
	if (inputRadios[i].checked) {
		localStorage.setItem("index", questionIndex);
		answersArray.splice(localStorage.getItem("index"), 1, inputRadios[i].value);
		localStorage.setItem("answers", answersArray);
		alert(answersArray);
		questionIndex++;
		break;
	}
	}
}

document.querySelector('.question__submit').addEventListener('click', addAnswer);
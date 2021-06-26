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
import questions from './arrayTests.js';
const questionRef = document.querySelector('.question');
export const makeQuestion = (section, questionIndex) => {
    questionRef.classList.remove('hidden-modal');
    const questionPath = questions[section - 1][questionIndex - 1];
    questionRef.querySelector('.question__title').textContent = questionPath.headlineOfQuestion;
    const formString = `<div class="question__form--label-wrapper">
                <input checked type="radio" class="question__form--variant" id="question__form--answer1" data-question-index="1" name="answer" value="css">
                <label class="question__form--label" for="question__form--answer1" id="question__form--label-1">${questionPath.answer1}</label>
            </div>
            <div class="question__form--label-wrapper">
                <input type="radio" class="question__form--variant" id="question__form--answer2" data-question-index="2" name="answer" value="css">
                <label class="question__form--label" for="question__form--answer2" id="question__form--label-2">${questionPath.answer2}</label>
            </div>
            <div class="question__form--label-wrapper">
                <input type="radio" class="question__form--variant" id="question__form--answer3" data-question-index="3" name="answer" value="css">
                <label class="question__form--label" for="question__form--answer3" id="question__form--label-3">${questionPath.answer3}</label>
            </div>
            <div class="question__form--label-wrapper">
                <input type="radio" class="question__form--variant" id="question__form--answer4" data-question-index="4" name="answer" value="css">
                <label class="question__form--label" id="question__form--label-4" for="question__form--answer4">${questionPath.answer4}</label>
            </div>`;
    questionRef.querySelector('.question__form').innerHTML = formString;
    document.querySelector('.question__counter').classList.remove('hidden-modal');
    document.querySelector('.question__counter').textContent = `${questionIndex}/${questions[section - 1].length}`;
};
function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}
export const Piechart = function (options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function () {
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data) {
            var val = this.options.data[categ];
            total_value += val;
        }

        var start_angle = 0;
        for (categ in this.options.data) {
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;

            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                start_angle,
                start_angle + slice_angle,
                this.colors[color_index % this.colors.length]
            );

            start_angle += slice_angle;
            color_index++;
        }

    }
}
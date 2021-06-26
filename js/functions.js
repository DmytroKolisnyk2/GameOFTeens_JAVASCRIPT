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
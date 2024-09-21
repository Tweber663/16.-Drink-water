"use strict";
const cups = document.querySelectorAll('.cup-small');
const filledCups = document.querySelectorAll('.cup-small.full');
const countingCups = () => {
    console.log(filledCups);
};
const selectingCups = (e, index) => {
    if (!e.target.classList.contains('full')) {
        for (let i = 0; i < index; i++) {
            Array.from(cups)[i].classList.add('full');
        }
    }
    else {
        for (let i = 8; index - 1 < i; i--) {
            Array.from(cups)[i - 1].classList.remove('full');
        }
    }
    countingCups();
};
Array.from(cups).forEach((smallCup, index) => {
    smallCup.addEventListener('click', (e) => selectingCups(e, index + 1));
});
//# sourceMappingURL=app.js.map
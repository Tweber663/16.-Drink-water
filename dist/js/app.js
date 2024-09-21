"use strict";
const cups = document.querySelectorAll('.cup-small');
const selectingCups = (e, index) => {
    console.log(index);
    console.log(e.target);
    if (!e.target.classList.contains('full')) {
        console.log('clicked on full');
        for (let i = 0; i < index; i++) {
            setTimeout(() => {
                Array.from(cups)[i].classList.add('full');
            }, 100);
        }
    }
    else {
        console.log('clicked on Empty');
    }
};
Array.from(cups).forEach((smallCup, index) => {
    smallCup.addEventListener('click', (e) => selectingCups(e, index + 1));
});
//# sourceMappingURL=app.js.map
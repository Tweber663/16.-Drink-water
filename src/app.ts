const cups = document.querySelectorAll('.cup-small') as NodeListOf<HTMLDivElement>; 
const waterPrecentage = document.getElementById('precentage') as HTMLDivElement; 
const remainedAmount = document.getElementById('remained') as HTMLDivElement;
const waterGoal = document.querySelector('.liters') as HTMLSpanElement;

const addingCups = () => {
    const numOfFilledCups = countingCups();
    const numOfWater = 12.5 * numOfFilledCups; 
    const waterRemainingHeight = 100 - numOfWater; 
    const numOfLitersRemaining = 2 - numOfFilledCups * 0.25;
    console.log(numOfWater);
    waterPrecentage.style.height = `${numOfWater}%`;
    waterPrecentage.innerText = `${numOfWater}%`;
    remainedAmount.style.height = `${waterRemainingHeight}%`;
    waterGoal.innerText = `${numOfLitersRemaining}L`;
}

const countingCups = () => document.querySelectorAll('.full').length;

const selectingCups = (e: Event, index: number) => {
    if (!e.target.classList.contains('full')) {
        for(let i = 0; i < index; i++) {
            Array.from(cups)[i].classList.add('full'); 
        }
    } else {
        for(let i = 8; index - 1 < i; i--) {
            Array.from(cups)[i - 1].classList.remove('full');
        }
    }
    addingCups(); 
}

Array.from(cups).forEach((smallCup, index) => {
    smallCup.addEventListener('click', (e) => selectingCups(e, index + 1)); 
})


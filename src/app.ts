const cups = document.querySelectorAll('.cup-small') as NodeListOf<HTMLDivElement>; 


Array.from(cups).forEach((smallCup, index) => {
    console.log(index + 1)
})
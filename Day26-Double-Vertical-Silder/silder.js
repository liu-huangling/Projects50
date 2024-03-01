let sliderDiv = document.querySelector(".slider");
let rightDiv = document.querySelector(".right-group");
let leftDiv = document.querySelector(".left-group");
let upBtn = document.querySelector(".upBtn");
let downBtn = document.querySelector(".downBtn");
let sliderDivLength = document.querySelectorAll(".right-group > div").length;

let activeIndex = 0;
leftDiv.style.top = -(sliderDivLength - 1)*100 + 'vh';

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {
    let sliderHeight = sliderDiv.clientHeight;
    if(direction === 'up') {
        activeIndex ++;
        if(activeIndex > sliderDivLength - 1) {
            activeIndex = 0;
        }
    } else if(direction === 'down') {
        activeIndex--;
        if(activeIndex < 0) {
            activeIndex = sliderDivLength - 1;
        }
    }

    rightDiv.style.transform = "translateY("+ -(activeIndex * sliderHeight) +"px)";
    leftDiv.style.transform = "translateY("+ activeIndex * sliderHeight+"px)";
}
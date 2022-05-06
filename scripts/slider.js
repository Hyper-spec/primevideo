//It defines the total slides avaiable in div (.slider-item)
let totalSlides = document.querySelectorAll(".slider-item").length;


//let (variable)
let currentSlide = 0;


document.querySelector(".slider-width").style.width = `calc(100vw * ${totalSlides})`;

//Button height
document.querySelector(".slider-controls").style.height = `${document.querySelector(".slider-width").clientHeight}px`;

var counter = 0;
var indicate = 1;
let totalIndicators = document.querySelectorAll('.indicator label').length;


function goPrev() {
    currentSlide--;
    indicate --;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    document.getElementById('radio' + indicate).checked = true;
    if (currentSlide < 1){
        indicate = totalSlides + 1;
    }
    updateMargin();
    console.log(counter)
}

function goNext() {
    currentSlide++;
    indicate ++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }

    document.getElementById('radio' + indicate).checked = true;
    if (currentSlide > (totalSlides - 2)){
        indicate = 0;
    }
    updateMargin();
}


function updateMargin() {
    let sliderItemWidth = document.querySelector(".slider-item").clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;

}


//Automatic slider with setInterval (it can be changed).
setInterval(goNext, 6000);




function indicator1() {
    currentSlide --;
    indicate --;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 0) {
        currentSlide = 0;
        indicate = 1;
    }
    
    updateMargin();
}

function indicator2() {
    currentSlide ++;
    indicate ++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 1) {
        currentSlide = 1;
        indicate = 2;
    }
    updateMargin();
}

function indicator3() {
    currentSlide ++;
    indicate ++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 2) {
        currentSlide = 2;
        indicate = 3;
    }
    updateMargin();
}

function indicator4() {
    currentSlide ++;
    indicate ++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 3) {
        currentSlide = 3;
        indicate = 4;
    }
    updateMargin();

}

function indicator5() {
    currentSlide ++;
    indicate ++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 4) {
        currentSlide = 4;
        indicate = 5;
    }
    updateMargin();
}

function indicator6() {
    currentSlide ++;
    indicate++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 5) {
        currentSlide = 5;
        indicate = 6;
    }
    updateMargin();
}

function indicator7() {
    currentSlide ++;
    indicate ++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 6) {
        currentSlide = 6;
        indicate = 7;
    }
    updateMargin();
}

function indicator8() {
    currentSlide ++;
    indicate ++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 7) {
        currentSlide = 7;
        indicate = 8;
    }
    updateMargin();
}

function indicator9() {
    currentSlide ++;
    indicate ++;
    document.getElementById('radio' + indicate).checked = true;
    if (totalIndicators != 8) {
        currentSlide = 8;
        indicate = 9;
    }
    updateMargin();
}


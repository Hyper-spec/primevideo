//Movie section
var currentPosition = 0;

function onPrev() {
    currentPosition--;
    //the function will get the currentSlider and decrease it (--).

    if (currentPosition < 0) {
        currentPosition = 0;

    }
    changeMargin();
}

function onNext() {
    currentPosition++;
    if (currentPosition > 8.22) {
        currentPosition = 8.22;
        
    }

    changeMargin();

}


function changeMargin() {
    let firstMargin = (currentPosition * 700);
    document.querySelector('.movie-width').style.marginLeft = `-${firstMargin}px`;

}

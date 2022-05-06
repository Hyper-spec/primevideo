//Movie Section 2
var currentPositionTwo = 0;

function onPrevTwo() {
    currentPositionTwo--;
    //The function will get the currentPosition and decrease it (--).

    if (currentPositionTwo < 0) {
        currentPositionTwo = 0;

    }
    changeMarginTwo();
}

function onNextTwo() {
    currentPositionTwo++;
    if (currentPositionTwo > 8.22) {
        currentPositionTwo = 8.22;
        
    }

    changeMarginTwo();

}


function changeMarginTwo() {
    var movieItemWidthTwo = document.querySelector(".movie-itemtwo").clientWidth;

    let firstMarginTwo = (currentPositionTwo * 700);

    document.querySelector('.movie-widthtwo').style.marginLeft = `-${firstMarginTwo}px`;

}



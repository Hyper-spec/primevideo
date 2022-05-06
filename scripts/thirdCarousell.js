//Movie Section 3
let currentPositionThree = 0;

function onPrevThree() {
    currentPositionThree--;
    //The function will get the currentPosition and decrease it (--).

    if (currentPositionThree < 0) {
        currentPositionThree = 0;

    }
    changeMarginThree();
}

function onNextThree() {
    currentPositionThree++;
    if (currentPositionThree > 8.22) {
        currentPositionThree = 8.22;
        
    }

    changeMarginThree();

}


function changeMarginThree() {
    let movieItemWidthThree= document.querySelector(".movie-itemthree").clientWidth;

    let firstMarginThree = (currentPositionThree * 700);

    document.querySelector('.movie-widththree').style.marginLeft = `-${firstMarginThree}px`;

}



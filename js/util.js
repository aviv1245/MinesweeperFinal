'use strict'
function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}



function getRandomIntInclusive(min, max) { // get random int\ if i put length should be -1
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function buildBoardBeginner(elBtn) {
    gBoard = buildBoard(gLevelBeginner.SIZE, gLevelBeginner.MINES)
    renderBoard(gBoard)
}
function buildBoardMedium(elBtn) {
    gBoard = buildBoard(gLevelMedium.SIZE, gLevelMedium.MINES)
    renderBoard(gBoard)
}


function buildBoardExpert(elBtn) {
    gBoard = buildBoard(gLevelExpert.SIZE, gLevelExpert.MINES)
    renderBoard(gBoard)
}

// function setMinesNegsCount(board) {

//     var negsCount = 0
//     for (var i = cellI - 1; i <= cellI + 1){

//     }
// }


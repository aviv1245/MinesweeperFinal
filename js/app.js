'use strict'

const MINE = 'MINE'
const FLAG = 'FLAG'
const MINE_IMG = '💥'
const FLAG_IMG = '🚩'

var gBoard
var gLevelBeginner = {
    SIZE: 4,
    MINES: 2

}
var gLevelMedium = {
    SIZE: 8,
    MINES: 14

}
var gLevelExpert = {
    SIZE: 12,
    MINES: 32

}

function onInit() {
    gBoard = buildBoard(gLevelBeginner.SIZE, gLevelBeginner.MINES)

    renderBoard(gBoard)


}

function buildBoard(SIZE, MINES) {

    var board = []
    for (var i = 0; i < SIZE; i++) {
        board[i] = []
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }

    var ceilCount = SIZE * SIZE

    var generatedMinesCount = 0;

    while (generatedMinesCount !== MINES) {
        var ranNum = getRandomIntInclusive(1, ceilCount);
        var lineIndex = (Math.ceil(ranNum / SIZE)) - 1
        var cellIndex = ranNum - ((lineIndex) * SIZE) - 1

        // console.log({ ranNum, lineIndex, cellIndex, SIZE })


        if (!board[lineIndex][cellIndex].isMine) {
            board[lineIndex][cellIndex].isMine = true;
            generatedMinesCount++;
        }


    }


    return board
}


function renderBoard(board) {
    var strHTML = ''
    console.log({ board })

    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {

            var currCell = board[i][j]
            // need to implement
            var className = ''

            var cellContent = currCell.isMine ? MINE_IMG : ''
            // console.log(cellFoo)
            strHTML += `<td class="${className}"
                data-i="${i}" data-j="${j}"
                onclick="onCellClicked(this,${i},${j})">${cellContent}</td>`
        }
        strHTML += '</tr>'
    }
    // console.log(strHTML)
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}


    // function onToggleGame(elBtn) {

    //     elBtn.innerText = (gIsOn) ? 'start' : 'restart'

    //     gIsOn = !gIsOn
    // }


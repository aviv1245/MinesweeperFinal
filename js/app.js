'use strict'

const MINE = 'MINE'
const FLAG = 'FLAG'
const MINE_IMG = '💥'
const FLAG_IMG = '🚩'

var gBoard
var gLevel = {
    SIZE: 4,
    MINES: 2
}

function onInit() {
    gBoard = buildBoard(gLevel.SIZE, gLevel.MINES)
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

    // board[1][1].isMine = true

    return board
}

function chagneLevelBeginner() {
    chagneLevel(4)
    onInit()
}
function chagneLevelMedium() {
    chagneLevel(8)
    onInit()
}
function chagneLevelExpert() {
    chagneLevel(12)
    onInit()
}

function chagneLevel(size) {
    gLevel.SIZE = size
    switch (size) {
        case 4:
            gLevel.MINES = 2
            break
    }
    switch (size) {
        case 8:
            gLevel.MINES = 14
            break
    }
    switch (size) {
        case 12:
            gLevel.MINES = 32
            break
    }
}

function renderBoard(board) {
    var strHTML = ''
    console.log({ board })

    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'

        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]

            var cellClass = getClassName({ i, j })

            strHTML += `<td class="cell ${cellClass}"
              
                onclick="onCellClicked(this,${i},${j})">`

            if (currCell.gameElement === MINE) {
                strHTML += MINE_IMG;
            } else if (currCell.gameElement === FLAG) {
                strHTML += FLAG_IMG;
            }

            strHTML += '\t</td>\n'
        }
        strHTML += '</tr>'
    }
    // console.log(strHTML)
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML

}

function setMinesNegsCount(board, rowIdx, cellIdx) {
    // if we want to count negs
    var minesAroundCount = 0
    // looping through 8 cells of specified cell
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        // wont count beyond border(undefined)
        if (i < 0 || i >= board.length) continue
        for (var j = cellIdx - 1; j <= cellIdx + 1; j++) {
            //wont count chosen cell
            if (i < 0 && j === cellIdx) continue
            if (j < 0 || j >= board[i].length) continue
            if (board[i][j] === MINE) minesAroundCount++
        }
    }

    return minesAroundCount
}


function onCellClicked(elCell, cellI, cellJ) {
    for (var i = 0; i < cellI; i++) {
        gBoard[i] = []
        for (var j = 0; j < cellJ; j++) {
            var countMine = 0
            // setMinesNegsCount(board)
            if (gBoard[i][j].isMine) {
                console.log(gBoard[i][j])
                countMine++
            }

        }
    }
}

function checkNegsCount(gBoard) {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var numOfNeighbors = setMinesNegsCount(gBoard, i, j)
            // console.log('numofnegs', numOfNeighbors)
            if (gBoard[i][j].isMine) gBoard[i][j] = MINE
            if (!gBoard[i][j].isMine) gBoard[i][j] = {}
        }
    } return numOfNeighbors

}

// Returns the class name for a specific cell
function getClassName(location) {
    var cellClass = 'cell-' + location.i + '-' + location.j
    return cellClass

}

function getEmptypos() {
    var emptyPos = getEmtpyCell()
    renderCell(emptyPos, MINE_IMG)
}


    // function onToggleGame(elBtn) {

    //     elBtn.innerText = (gIsOn) ? 'start' : 'restart'

    //     gIsOn = !gIsOn
    // }

//  data-i="${i}" data-j="${j}"
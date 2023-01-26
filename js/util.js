'use strict'

function getRandomIntInclusive(min, max) { // get random int\ if i put length should be -1
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getEmtpyCell() {
    var emptyCells = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {

            var cell = gBoard[i][j]
            if (cell.gameElement === null) {
                var pos = {
                    i: i,
                    j: j
                }
                emptyCells.push(pos)
            }
        }
    }
    var ranIdx = getRandomIntInclusive(0, emptyCells.length - 1)
    var emptyCell = emptyCells[ranIdx]
    return emptyCell
}



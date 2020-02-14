function mine(array) {
    let newBoard = array.slice()
    let obj = {}


    newBoard.forEach(function(element, n) {
        element.forEach(function(el, m) {

            if (el != 1) {
                let leftNeighbour = (m - 1 >= 0) ? element[m - 1] : 0;
                let rightNeighbour = (m + 1 < element.length) ? element[m + 1] : 0;
                let topLeftCrossNeighbour = (n - 1 >= 0 && m - 1 >= 0) ? newBoard[n - 1][m - 1] : 0;
                let topNeighbour = (n - 1 >= 0) ? newBoard[n - 1][m] : 0;
                let topRightCrossNeighbour = (n - 1 >= 0 && m + 1 < element.length) ? newBoard[n - 1][m + 1] : 0;
                let downLeftCrossNeighbour = (n + 1 < newBoard.length && m - 1 >= 0) ? newBoard[n + 1][m - 1] : 0;
                let downNeighbour = (n + 1 < newBoard.length) ? newBoard[n + 1][m] : 0;
                let downRightCrossNeighbour = (n + 1 < newBoard.length && m + 1 < element.length) ? newBoard[n + 1][m + 1] : 0

                obj[n + ',' + m] = leftNeighbour + rightNeighbour + topLeftCrossNeighbour + topNeighbour + topRightCrossNeighbour + downLeftCrossNeighbour + downNeighbour + downRightCrossNeighbour
            }
        })
    })

    newBoard.forEach(element => {
        element.forEach(function(el, i) {
            if (el === 1) {
                element[i] = 9

            }
        })
    })

    let k = 0

    for (let index = 0; index < newBoard.length; index++) {

        for (let index = 0; index < newBoard.length; index++) {
            let str = k + ',' + index
            if (obj[str]) {
                newBoard[k][index] = obj[str]
            }
        }

        k++
    }

    return newBoard
}
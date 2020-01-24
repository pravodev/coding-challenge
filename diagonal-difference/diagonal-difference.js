function diagonalDifference(arr) {
    const total = arr.length
    let firstDiagonal = [], secondDiagonal = [];
    let totalValue = arr[0].length

    for(let index = 0; index < totalValue; index++){
        firstDiagonal.push(arr[index][index])
        secondDiagonal.push(arr[index][(total-1) - index])
    }    

    sumFirstDiagonal = firstDiagonal.reduce((a,b) => a + b)
    sumSecondDiagonal = secondDiagonal.reduce((a,b) => a + b)
    return Math.abs(sumFirstDiagonal - sumSecondDiagonal)
}

let diff = diagonalDifference([ 
    [ 11, 2, 4 ], 
    [ 4, 5, 6 ], 
    [ 10, 8, -12 ] 
]) // 15

let squares = [
    [0,2,2,0],
    [4,0,4,4],
    [2,8,2,2],
    [4,4,2,0]
]
N = 4 // columns
M = 4 // rows

// let row = 0;
// let col = 0;
// let dir = 'right'

// const switchDirection = {
//     left: 'right',

// }

// const mat = []
// for (let i=0; i <M; i++) {
//     mat.push(Array(N).fill(4))
// }
// console.log(mat)

// calculation

// for (let step=0; step < N*M; step++) {
//     console.log(step)
// }

const addNumsToBoard = (arr) => {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // console.log(arr[i][j])
            let squareDivs = document.querySelectorAll('.squareDivs');
            squareDivs.innerText = arr[0][0]
            // let squareDivs = document.querySelectorAll('.squareDivs');
            // console.log(squareDivs)
            // squareDivs.forEach(square => square.innerText = arr[i][j])
        }
    }
}
addNumsToBoard(squares)
// USE NESTED FOR LOOPS TO CREATE BOARD ON LOAD W/ DIVS 
const initializeGame = (squares) => {
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < M; col++) {
            console.log('hi')
            let squareDivs = document.createElement('div');
            squareDivs.classList.add('squareDivs');
            document.getElementById('game-board').append(squareDivs);
        }
    }
}
// PUSH COLUMNS INTO ARRAY TO USE RIGHT FUNCTION ON 
let upOrDown = []
upOrDown.push(squares[0][0],squares[1][0],squares[2][0],squares[3][0])
// then do addition 
// then .reverse & .push back to the nested array
// console.log(upOrDown)

// let squares = [
//     [0,2,2,0],
//     [4,0,4,4],
//     [2,8,2,2],
//     [4,4,2,0]
// ]

// const removeZeros = () => {
//     let noZeros = [];
//     squares.forEach(square => {
//        noZeros.push(square.filter(nums => nums !== 0));       
//     })
//     return noZeros; // returns nested array. Can i still manipulate if nested? Or need to figure out how to get access to one row at a time.
// }

const removeZeros = (arr) => {
    let noZeros;
        noZeros = arr.filter(nums => nums !== 0); 
        // arr.forEach(square => {
        // noZeros = square.filter(nums => nums !== 0);       
        // })
    return noZeros; // returns single array --- only the last one. does the math work?

}

const addZeros = squares.push // add zeros forEach row.length ?

// LEFT ARROW KEY ---- WILL BE LOOPING THROUGH AND += VALUES LEFT TO RIGHT --- THEN CAN BE USED TO DO ALL OTHER DIRECTIONS
// ADD SCORE ?
const moveLeft = () => {
    let firstArrNoZeros = [];
    let secondArrNoZeros = [];
    const maxLength = 10
        for (let i = 0; i < N; i++) {
            let getRidOfZeros = removeZeros(squares[i])
            console.log('first getrid',getRidOfZeros)
            firstArrNoZeros.push(getRidOfZeros)
            for (let j = 0; j < firstArrNoZeros[i].length; j++) {
                if (firstArrNoZeros[i][j] == firstArrNoZeros[i][j+1]) {
                    firstArrNoZeros[i][j] += firstArrNoZeros[i][j+1]
                    firstArrNoZeros[i][j+1] = 0;
                }
            } 
            console.log('first arr',firstArrNoZeros)
            let getRidOfZeros2 = removeZeros(firstArrNoZeros[i])
            secondArrNoZeros.push(getRidOfZeros2)
            console.log('second get rid', getRidOfZeros2)
            console.log('second arr', secondArrNoZeros)
        }
        while (secondArrNoZeros.length < maxLength) {

        
        
        }
        
}

moveLeft()

// FIGURE OUT WHY ITS ONLY PULLING THE LAST ROW 
// FOREACH MAY NOT BE THE PLAY BC ITS ONLY ACCESSING THE LAST ROW AND BC THE NEED TO REMOVE ZEROS AGAIN AFTER THE FIRST MATH STEP HAS BEEN DONE.

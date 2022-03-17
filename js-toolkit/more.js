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

// USE NESTED FOR LOOPS TO CREATE BOARD ON LOAD W/ DIVS 
    // for (let row = 0; row < N; row++) {
    //     for (let col = 0; col < M; col++) {
    //         console.log('hi')

    //     }
    // }

// PUSH COLUMNS INTO ARRAY TO USE RIGHT FUNCTION ON 
let upOrDown = []
upOrDown.push(squares[0][0],squares[1][0],squares[2][0],squares[3][0])
console.log(upOrDown)

// let squares = [
//     [0,2,2,0],
//     [4,0,4,4],
//     [2,8,2,2],
//     [4,4,2,0]
// ]

const removeZeros = squares.filter(nums => nums !== 0);
const addZeros = squares.push // add zeros forEach row.length ?

// LEFT ARROW KEY ---- WILL BE LOOPING THROUGH AND ADDING VALUES LEFT TO RIGHT
const movement = () => {
    let row = 0;
    let col = 0;
    
    for (let row = 0; row < N; row++) {
        removeZeros()
        if (row[i] == row[i+1]) {
            row[i] += row[i+1]
            row[i+1] = 0;
        }
        removeZeros()
    }
}
movement()


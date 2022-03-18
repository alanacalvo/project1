let squares = []
const N = 4; // columns
const M = 4; // rows
let score = 0;
let scoreKeeper = document.querySelector('.score-keeper')

const initializeGame = () => {
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < M; col++) {
            let squareDivs = document.createElement('div');
            squareDivs.classList.add(`squareDivs${row}`);
            squareDivs.classList.add(`row:${row}`)
            squareDivs.classList.add(`col:${col}`)
            squareDivs.setAttribute('value', 0);
            document.getElementById('game-board').append(squareDivs);
            squareDivs.innerText = 0;
        }
    }
    let firstTwo = genRandomTwo()
    let secondTwo = genRandomTwo()
    while (firstTwo[0] === secondTwo[0] && firstTwo[1] === secondTwo[1]) {
        firstTwo = genRandomTwo()
        secondTwo = genRandomTwo()
    }
    const insertTwo1 = document.querySelectorAll(`.squareDivs${firstTwo[0]}`)
        insertTwo1[firstTwo[1]].innerText = 2
        insertTwo1[firstTwo[1]].style.color = 'yellow'
        
        const insertTwo2 = document.querySelectorAll(`.squareDivs${secondTwo[0]}`)
        insertTwo2[secondTwo[1]].innerText = 2
        insertTwo2[secondTwo[1]].style.color = 'yellow'
}
const genRandomTwo = () => {
    let checkIfZero = []
    for (let i = 0; i < 4; i++) {
        const square = document.querySelectorAll(`.squareDivs${i}`)
        for (let j = 0; j < 4; j++) {
          if (square[j].innerText == 0) {
            //   square[j].style.color = 'rgb(116,185,164)'
              checkIfZero.push([i, j])
            }
        }
    }
    let addTwo = Math.floor(Math.random() * checkIfZero.length)
    // console.log(checkIfZero[addTwo])
    return checkIfZero[addTwo]
}
const removeZeros = (arr) => {
    // console.log(arr)
    const noZeros = arr.filter(nums => nums != 0);
    return noZeros;
}
document.onkeydown = function (e) {
    if (e.keyCode === 39) { // RIGHT KEY
        slide('right')
        let newTwo = genRandomTwo()
        const addNewTwo = document.querySelectorAll(`.squareDivs${newTwo[0]}`)
        addNewTwo[newTwo[1]].innerText = 2
    } else if (e.keyCode === 37) { // LEFT KEY
        slide('left')
        let newTwo = genRandomTwo()
        const addNewTwo = document.querySelectorAll(`.squareDivs${newTwo[0]}`)
        addNewTwo[newTwo[1]].innerText = 2
    } else if (e.keyCode === 38) { // UP KEY
        // slide('up')
        let newTwo = genRandomTwo()
        const addNewTwo = document.querySelectorAll(`.squareDivs${newTwo[0]}`)
        addNewTwo[newTwo[1]].innerText = 2
    } else if (e.keyCode === 40) { // DOWN KEY
        slide('down')
        let newTwo = genRandomTwo()
        const addNewTwo = document.querySelectorAll(`.squareDivs${newTwo[0]}`)
        addNewTwo[newTwo[1]].innerText = 2
    }
}
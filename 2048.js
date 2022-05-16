let squares = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
const N = 4;
const M = 4;
const maxLength = 4;
let score = 0;
let scoreKeeper = document.querySelector('.score-keeper');

const initializeGame = () => {
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < M; col++) {
            let squareDivs = document.createElement('div');
            squareDivs.classList.add(`squareDivs${row}`);
            squareDivs.classList.add(`row:${row}`);
            squareDivs.classList.add(`col:${col}`);
            squareDivs.classList.add('lose');
            document.getElementById('game-board').append(squareDivs);
            squareDivs.innerText = squares[row][col];
            const startColor = document.querySelectorAll(`.squareDivs${row}`);
            startColor[col].style.color = 'rgb(251,253,240)';
        }
    }
    // Generate random two's on load. Had to create variables and compare in a while loop to make sure they never overlapped.
    let firstTwo = genRandomTwo();
    let secondTwo = genRandomTwo();
    while (firstTwo[0] === secondTwo[0] && firstTwo[1] === secondTwo[1]) {
        firstTwo = genRandomTwo();
        secondTwo = genRandomTwo();
    }
    const insertTwo1 = document.querySelectorAll(`.squareDivs${firstTwo[0]}`);
    insertTwo1[firstTwo[1]].innerText = 2;
    insertTwo1[firstTwo[1]].style.color = 'rgb(143,122,102)';
    insertTwo1[firstTwo[1]].style.background = 'rgb(253,245,200)';
    squares[firstTwo[0]][firstTwo[1]] = 2;

    const insertTwo2 = document.querySelectorAll(`.squareDivs${secondTwo[0]}`);
    insertTwo2[secondTwo[1]].innerText = 2;
    insertTwo2[secondTwo[1]].style.color = 'rgb(143,122,102)';
    insertTwo2[secondTwo[1]].style.background = 'rgb(253,245,200)';
    squares[secondTwo[0]][secondTwo[1]] = 2;
}
const genRandomTwo = () => {
    let checkIfZero = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (squares[i][j] === 0) {
                checkIfZero.push([i, j]);
            }
        }
    }
    let addTwo = Math.floor(Math.random() * checkIfZero.length);
    return checkIfZero[addTwo];
}
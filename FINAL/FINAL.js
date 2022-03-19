let squares = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
const N = 4; // columns
const M = 4; // rows
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
// Updating what we see on screen.
const updateGameBoard = () => {
    for (let i = 0; i < 4; i++) {
        const row = document.querySelectorAll(`.squareDivs${i}`);
        for (let j = 0; j < 4; j++) {
            row[j].innerText = squares[i][j];
            scoreKeeper.innerText = `Score: ${score}`;
            if (row[j].innerText == 0) {
                row[j].style.background = 'rgb(251,253,240)'; // light brown
                row[j].style.color = 'rgb(251,253,240)';
            }
            if (row[j].innerText == 2) {
                row[j].style.background = 'rgb(253,245,200)'; // yellow ish
                row[j].style.color = 'rgb(143,122,102)';
            }
            if (row[j].innerText == 4) {
                row[j].style.background = 'rgb(252,219,193)'; // light peach
                row[j].style.color = 'rgb(143,122,102)';
            }
            if (row[j].innerText == 8) {
                row[j].style.background = 'rgb(179,230,223)'; // mint
                row[j].style.color = 'rgb(143,122,102)'; // light brown

            }
            if (row[j].innerText == 16) {
                row[j].style.background = 'rgb(115,156,184)'; // teal
                row[j].style.color = 'rgb(251,253,240)'; // off white
                
            }
            if (row[j].innerText == 32) {
                row[j].style.background = 'rgb(116,185,164)'; // teal
                row[j].style.color = 'rgb(251,253,240)'; 
            }
            if (row[j].innerText == 64) {
                row[j].style.background = 'rgb(246,116,101)'; // coral
                row[j].style.color = 'rgb(251,253,240)';
            }
            if (row[j].innerText == 128) {
                row[j].style.background = 'rgb(53,61,80)'; // navy blue
                row[j].style.color = 'rgb(251,253,240)';
            }
        }
    }
}
// Remove zeros inside of each slide function 
// **** ESSENTIAL function that allows for all of these functions to fit into one small block of code. (slideLeftRow)
const removeZeros = (arr) => {
    const noZeros = arr.filter(nums => nums != 0);
    return noZeros;
}
// For loop in here goes left to right in each row. For loop in keydown functions goes down each row. 
// Splitting up for loops in keydown and slide functions allows for less nested for loops. 
const slideLeftRow = (row) => {
    // Remove all zeros
    const rowNoZeros = removeZeros(row);
    // Add whatever needs to be added from the zero-less row & change previous number to zero.
    for (let i = 0; i < rowNoZeros.length - 1; i++) {
        if (rowNoZeros[i] === rowNoZeros[i + 1]) {
            rowNoZeros[i] += rowNoZeros[i + 1];
            rowNoZeros[i + 1] = 0;
            score += rowNoZeros[i] + rowNoZeros[i + 1];
        }
    }
    // Remove all zeros again (that may now be in the middle of row) & add more until original row size is filled.
    const resultNoZeros = removeZeros(rowNoZeros);
    while (resultNoZeros.length < maxLength) {
        resultNoZeros.push(0);
    }
    return resultNoZeros;
}
const slideRightRow = (row) => {
    return slideLeftRow(row.reverse()).reverse();
}
const slideUpColumn = (column) => {
    return slideLeftRow(column);
}
const slideDownColumn = (column) => {
    return slideLeftRow(column.reverse()).reverse();
}
// All keydown functions. 
document.onkeydown = function (e) {
    if (e.keyCode === 39) { // RIGHT KEY
            for (let i = 0; i < maxLength; i++) {
                const newRow = slideRightRow(squares[i]);
                squares[i] = newRow;
            }
    } else if (e.keyCode === 37) { // LEFT KEY
            for (let i = 0; i < maxLength; i++) {
                const newRow = slideLeftRow(squares[i]);
                squares[i] = newRow;
            }
    } else if (e.keyCode === 38) { // UP KEY
        for (let col = 0; col < maxLength; col++) {
            const fakeRow = [squares[0][col], squares[1][col], squares[2][col], squares[3][col]];
            const newCol = slideUpColumn(fakeRow);
            for (let i = 0; i < newCol.length; i++) {
                squares[i][col] = newCol[i];
            }
        }
    } else if (e.keyCode === 40) { // DOWN KEY
        for (let col = 0; col < maxLength; col++) {
            const fakeRow = [squares[0][col], squares[1][col], squares[2][col], squares[3][col]];
            const newCol = slideDownColumn(fakeRow);
            for (let i = 0; i < newCol.length; i++) {
                squares[i][col] = newCol[i];
            }
        }
    }
    // Adding new two after every keypress & updating the game board onscreen.
    let newTwo = genRandomTwo();
    const addNewTwo = document.querySelectorAll(`.squareDivs${newTwo[0]}`);
    addNewTwo[newTwo[1]].innerText = 2;
    squares[newTwo[0]][newTwo[1]] = 2;
    updateGameBoard();
}

// THINGS I LEARNED

// It's okay to start fresh. Try to evaluate whether you're making progress, or if you're stuck in a rabbit hole.
    // If you can't tell the difference, apparently you can pull down a different branch and change your path without losing all your potential progress.

// Having everything in one main function isn't necessary. I was stuck on that for so long, until someone with fresh eyes shared how it was probably 
// making things more difficult for me to comprehend (which it totally was). Once I split it up, things started making way more sense.

// I learned a lot about ifs and elses and else ifs and if elses. My brain hurts.

// I spent time talking with other engineers throughout this project. Family, TA, some of you guys, etc. I think that is a great thing to do, however, 
// it ended up ultimately hindering me because of my mindset. I learned that I have been thinking of myself as so small because I'm so new at this. 
// I would have an idea, but when someone gave another idea on how to go about something, I followed that rather than even diving into my own ideas.
// Having never gone to college and not having significant work experience, I certainly don't view myself as some software engineer genius. I value others
// opinions way more than my own, and that is something that needs to change. 
// Big example of this is that early on I thought of how to remove the zeros. I saw .filter() and thought "maybe that will come in handy." An experienced
// engineer I know said "hmmm, I don't think so." And that was enough for me to not even look past the page I was on. When I came back to refactor my project,
// I ended up coming back to it and that was a key functionality in making my game work as concisely as it does.
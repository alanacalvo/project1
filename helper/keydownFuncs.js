// All keydown functions. 
document.onkeydown = function (e) {

    if (e.keyCode === 39) { // RIGHT KEY
            for (let row = 0; row < maxLength; row++) {
                const newRow = slideRightRow(squares[row]);
                squares[row] = newRow;
            }
    } else if (e.keyCode === 37) { // LEFT KEY
            for (let row = 0; row < maxLength; row++) {
                const newRow = slideLeftRow(squares[row]);
                squares[row] = newRow;
            }
    } else if (e.keyCode === 38) { // UP KEY
        for (let col = 0; col < maxLength; col++) {
            const fakeRow = [squares[0][col], squares[1][col], squares[2][col], squares[3][col]];
            const newCol = slideUpColumn(fakeRow);
            for (let row = 0; row < newCol.length; row++) {
                squares[row][col] = newCol[row];
            }
        }
    } else if (e.keyCode === 40) { // DOWN KEY
        for (let col = 0; col < maxLength; col++) {
            const fakeRow = [squares[0][col], squares[1][col], squares[2][col], squares[3][col]];
            const newCol = slideDownColumn(fakeRow);
            for (let row = 0; row < newCol.length; row++) {
                squares[row][col] = newCol[row];
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

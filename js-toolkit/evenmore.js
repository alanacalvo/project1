// LEFT ARROW KEY ---- WILL BE LOOPING THROUGH AND += VALUES LEFT TO RIGHT --- THEN CAN BE USED TO DO ALL OTHER DIRECTIONS
// ADD SCORE ?
const slide = (direction) => {
    let firstArrNoZeros = [];
    let secondArrNoZeros = [];
    const maxLength = 4
    let nums = 0
    let temp = []
    squares = [];
    while (nums < 4) {
        const htmlSquares = Array.from(document.querySelectorAll(`.squareDivs${nums}`))
        console.log(htmlSquares)
        htmlSquares.forEach(squareRow => {
            // for each row, push the innerText into a temporary array
            temp.push(squareRow.innerText)
            // if temp array.length === 4, push temp array into squares array and empty temp, then nums++ til it does it 4x
            if (temp.length === 4) {
            squares.push(temp)
            temp = []
            }
            // creating 4 nested arrays that i can loop through inside of squares
        })
        nums++;
    }
    let upDownIndex = 0;
    for (let i = 0; i < N; i++) {
        let getRidOfZeros;
        if (direction === 'right') {
            getRidOfZeros = removeZeros(squares[i].reverse())
        } 
        if (direction === 'left') {
            getRidOfZeros = removeZeros(squares[i])
        }
        if (direction === 'up') {
            let upArray = [];
            for (let j = 0; j < 4; j++) {
            // console.log('index', upDownIndex)
            // console.log(squares[upDownIndex][i])
            upArray.push(squares[j][i],squares[j][i],squares[j][i],squares[j][i])
            if (upArray.length === 4) {
            console.log(upArray, 'up')
            upArray = [];
        }
        getRidOfZeros = removeZeros(upArray)
    }
}
    
        firstArrNoZeros.push(getRidOfZeros)
        // console.log('first getrid', getRidOfZeros)
        // console.log('test',firstArrNoZeros)
        for (let j = 0; j < firstArrNoZeros[i].length; j++) {
            if (firstArrNoZeros[i][j] != 0 && firstArrNoZeros[i][j] == firstArrNoZeros[i][j + 1]) {
                const parseFirstArr = parseInt(firstArrNoZeros[i][j])
                const parseFirstArr2 = parseInt(firstArrNoZeros[i][j+1])
                const sum = parseFirstArr + parseFirstArr2
                firstArrNoZeros[i][j] = sum
                firstArrNoZeros[i][j + 1] = 0;
                score += firstArrNoZeros[i][j]
                // console.log(score)
                scoreKeeper.innerText = `Score: ${score}`
            }
            upDownIndex++;
        }
        // console.log('first arr', firstArrNoZeros)
        let getRidOfZeros2 = removeZeros(firstArrNoZeros[i])
        secondArrNoZeros.push(getRidOfZeros2)
        // console.log('second get rid', getRidOfZeros2)
        console.log('second arr', secondArrNoZeros)
        console.log(upDownIndex)
    }
    while (secondArrNoZeros[0].length < maxLength) {
        secondArrNoZeros[0].push(0)
    }
    while (secondArrNoZeros[1].length < maxLength) {
        secondArrNoZeros[1].push(0)
    }
    while (secondArrNoZeros[2].length < maxLength) {
        secondArrNoZeros[2].push(0)
    }
    while (secondArrNoZeros[3].length < maxLength) {
        secondArrNoZeros[3].push(0)
    }
    
    let upOrDownArray = []
    let empty = [];

        if (direction === 'up' || direction === 'down') {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    empty.push(secondArrNoZeros[i][j])
                    if (empty.length === 4) {
                        upOrDownArray.push(empty)
                    }
                }
                empty = [];
            }
            console.log(secondArrNoZeros)
            secondArrNoZeros = upOrDownArray;
        }
            console.log(secondArrNoZeros)
        console.log(upOrDownArray)
// console.log('fuck', squares)
    for (let i=0; i < 4; i++) {
        if (direction === 'right' || direction === 'down') {
            secondArrNoZeros[i] = secondArrNoZeros[i].reverse()
        }

        for (let j=0; j < 4; j++) {
            const row = document.querySelectorAll(`.squareDivs${i}`);
            row[j].innerText = secondArrNoZeros[i][j];
            if (row[j].innerText == 0) {
                row[j].style.color = 'rgb(116,185,164)'
            } else if (row[j].innerText == 2) {
                row[j].style.background = 'rgb(251,253,240)'
                row[j].style.color = 'rgb(119,110,100)'
            } else if (row[j].innerText == 4) {
                row[j].style.background = 'rgb(253,245,200)'
                row[j].style.color = 'rgb(119,110,100)'
            } else if (row[j].innerText == 8) {
                row[j].style.background = 'rgb(251,253,240)'
                row[j].style.color = 'rgb(251,253,240)'
            
            } else if (row[j].innerText == 16) {
                row[j].style.color = 'rgb(116,185,164)'
            
            } else if (row[j].innerText == 32) {
                row[j].style.color = 'rgb(116,185,164)'
            
            } else if (row[j].innerText > 64) {

                row[j].style.color = 'rgb(116,185,164)'
            } else if (row[j].innerText == 128) {
                row[j].style.color = 'rgb(116,185,164)'
            } 
        }
    }

}


// PUSH COLUMNS INTO ARRAY TO USE LEFT FUNCTION ON 

// let upOrDown = []
// upOrDown.push(squares[0][0], squares[1][0], squares[2][0], squares[3][0])
// then do addition by using moveLeft()
// then .reverse & .push back to the nested array
// console.log(upOrDown)
// left === up
// right === down



// CHANGE COLOR OF ZEROS SO THEY DON'T SHOW
    // need to query select element first.

// if (squareDivs.innerText == 0) {
//     squareDivs.style.color = 'red';
// } else if (squareDivs.innerText != 0) {
//     squareDivs.style.color = 'blue';
// }
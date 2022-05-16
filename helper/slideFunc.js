// Remove zeros inside of each slide function 
// **** ESSENTIAL function that allows for all of these functions to fit into one small block of code (slideLeftRow).
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
// RIGHT ARROW FUNCTION
const handleRight = (arr, i, obj, node) => {
    const visibleNums = document.querySelectorAll(`.${node}`);
    const current = arr[i]
    const next = arr[i+1]
    const previous = arr[i-1]
    const sum = current + next;
    // MERGER
  if (current !== 0 && current === next && obj[i] === false) {
        arr[i+1] += current;
        arr[i] = 0;
        visibleNums[i+1].innerText = sum;
        visibleNums[i].innerText = 0;
        obj[i] = true;
        obj[i+1] = true;
    } 
    // MOVE FORWARD + REPLACE WITH ZERO 
    else if (current !== 0 && next === 0) {
        arr[i+1] += current;
        arr[i] = 0;
        visibleNums[i+1].innerText = sum;
        visibleNums[i].innerText = 0;
    } 
    else if (previous === 0 && i > 1) {
        const slice = arr.slice(0, i-1)
        const slice2 = arr.slice(i)
        const newArray = slice.concat(slice2)
        newArray.unshift(0)
        arr[0] = newArray[0];
        arr[1] = newArray[1];
        arr[2] = newArray[2];
        arr[3] = newArray[3];
        visibleNums[0].innerText = newArray[0];
        visibleNums[1].innerText = newArray[1];
        visibleNums[2].innerText = newArray[2];
        visibleNums[3].innerText = newArray[3];
    }
}
// LEFT ARROW FUNCTION
const handleLeft = (arr, i, obj, node) => {
    const visibleNums = document.querySelectorAll(`.${node}`);
    const current = arr[i]
    const next = arr[i-1]
    const previous = arr[i+1]
    const sum = current + next;
    // MERGER
  if (current !== 0 && current === next && obj[i] === false) {
        arr[i-1] += current;
        arr[i] = 0;
        visibleNums[i-1].innerText = sum;
        visibleNums[i].innerText = 0;
        obj[i] = true;
        obj[i-1] = true;
    } 
    // MOVE FORWARD + REPLACE WITH ZERO 
    else if (current !== 0 && next === 0) {
        arr[i-1] += current;
        arr[i] = 0;
        visibleNums[i-1].innerText = sum;
        visibleNums[i].innerText = 0;
    } 
    else if (previous === 0 && i < 2) {
        const slice = arr.slice(0, i+1)
        const slice2 = arr.slice(i+2)
        const newArray = slice.concat(slice2)
        newArray.push(0)
        arr[0] = newArray[0];
        arr[1] = newArray[1];
        arr[2] = newArray[2];
        arr[3] = newArray[3];
        visibleNums[0].innerText = newArray[0];
        visibleNums[1].innerText = newArray[1];
        visibleNums[2].innerText = newArray[2];
        visibleNums[3].innerText = newArray[3];
    }
}
// UP ARROW FUNCTION



// DOWN ARROW FUNCTION
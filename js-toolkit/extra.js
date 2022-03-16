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
    // const current = arr[i]
    // const next = arr[i-1]
    // const previous = arr[i+1]
    const sum = arr[i-1] + arr[i];
    // MERGER
  if (arr[i] !== 0 && arr[i] === arr[i-1] && obj[i] === false) {
        arr[i-1] += arr[i];
        arr[i] = 0;
        visibleNums[i-1].innerText = sum;
        visibleNums[i].innerText = 0;
        obj[i] = true;
        obj[i-1] = true;
    } 
    // MOVE FORWARD + REPLACE WITH ZERO 
    else if (arr[i] !== 0 && arr[i-1] === 0) {
        arr[i-1] += arr[i];
        arr[i] = 0;
        visibleNums[i-1].innerText = arr[i-1];
        visibleNums[i].innerText = 0;
    } 
    else if (arr[i+1] === 0 && i < 2) {
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
// DOWN ARROW FUNCTION
const handleDown = (arr1, arr2, arr3, arr4, i, obj1, obj2, obj3, obj4, node1, node2, node3, node4) => {
    const visibleNums1 = document.querySelectorAll(`.${node1}`);
    const visibleNums2 = document.querySelectorAll(`.${node2}`);
    const visibleNums3 = document.querySelectorAll(`.${node3}`);
    const visibleNums4 = document.querySelectorAll(`.${node4}`);
    if (arr4[i] !== 0 && arr4[i] === arr3[i] && obj3[i] === false && obj4[i] === false) {
        arr4[i] += arr3[i];
        arr3[i] = 0;
        obj3[i] = true;
        obj4[i] = true;
        const sum = arr4[i] + arr3[i];
        visibleNums4[i].innerText = sum;
        // console.log(visibleNums4[i].innerText)
        visibleNums3[i].innerText = 0;
        // console.log('arr4',arr4, 'arr3', arr3)
    }
    if (arr3[i] !== 0 && arr3[i] === arr2[i] && obj2[i] === false && obj3[i] === false) {
        arr3[i] += arr2[i];
        arr2[i] = 0;
        obj3[i] = true;
        obj2[i] = true;
        const sum = arr3[i] + arr2[i];
        visibleNums3[i].innerText = sum;
        // console.log(visibleNums3[i].innerText)
        visibleNums2[i].innerText = 0;
        // console.log('arr3',arr3, 'arr2', arr2)
    }
    if (arr2[i] !== 0 && arr2[i] === arr1[i] && obj1[i] === false && obj2[i] === false) {
        arr2[i] += arr1[i];
        arr1[i] = 0;
        obj2[i] = true;
        obj1[i] = true;
        const sum = arr2[i] + arr1[i];
        visibleNums2[i].innerText = sum;
        visibleNums1[i].innerText = 0;
        // console.log('arr2',arr2, 'arr1', arr1)
    }
    if (arr4[i] === 0) {
        if (arr3[i] !== 0) {
            arr4[i] = arr3[i];
            arr3[i] = 0;
            visibleNums4[i].innerText = arr4[i];
            visibleNums3[i].innerText = 0;
        } else if (arr2[i] !== 0 && arr3[i] === 0) {
            arr4[i] = arr2[i];
            arr2[i] = 0;
            visibleNums4[i].innerText = arr4[i];
            visibleNums2[i].innerText = 0;
        } else if (arr1[i] !== 0 && arr2[i] === 0 && arr3[i] === 0) {
            arr4[i] = arr1[i];
            arr1[i] = 0;
            visibleNums4[i].innerText = arr4[i];
            visibleNums1[i].innerText = 0;
        }
    } else if (arr3[i] === 0) {
        if (arr2[i] !== 0) {
            arr3[i] = arr2[i];
            arr2[i] = 0;
            visibleNums3[i].innerText = arr3[i];
            visibleNums2[i].innerText = 0;
        } else {
            if (arr1[i] !== 0) {
                arr3[i] = arr1[i];
                arr1[i] = 0;
                visibleNums3[i].innerText = arr3[i];
                visibleNums1[i].innerText = 0;
            }
        }
    } else if (arr2[i] === 0) {
        if (arr1[i] !== 0) {
            arr2[i] = arr1[i];
            arr1[i] = 0;
            visibleNums2[i].innerText = arr2[i];
            visibleNums1[i].innerText = 0;
        }
    }
    // console.log(visibleNums1[i].innerText)
    // console.log(visibleNums2[i].innerText)
    // console.log(visibleNums3[i].innerText)
    // console.log(visibleNums4[i].innerText)
    // console.log(arr1, 'arr1')
    // console.log(arr2, 'arr2')
    // console.log(arr3, 'arr3')
    // console.log(arr4, 'arr4')
}
// HANDLE UP
const handleUp = (arr1, arr2, arr3, arr4, i, obj1, obj2, obj3, obj4, node1, node2, node3, node4) => {
    const visibleNums1 = document.querySelectorAll(`.${node1}`);
    const visibleNums2 = document.querySelectorAll(`.${node2}`);
    const visibleNums3 = document.querySelectorAll(`.${node3}`);
    const visibleNums4 = document.querySelectorAll(`.${node4}`);
    if (arr1[i] !== 0 && arr1[i] === arr2[i] && obj2[i] === false && obj1[i] === false) {
        const sum = arr1[i] + arr2[i];
        arr1[i] += arr2[i];
        arr2[i] = 0;
        obj2[i] = true;
        obj1[i] = true;
        visibleNums1[i].innerText = sum;
        visibleNums2[i].innerText = 0;
        console.log('arr1',arr1, 'arr2', arr2)
    }
    if (arr2[i] !== 0 && arr2[i] === arr3[i] && obj2[i] === false && obj3[i] === false) {
        const sum = arr2[i] + arr3[i];
        arr2[i] += arr3[i];
        arr3[i] = 0;
        obj3[i] = true;
        obj2[i] = true;
        visibleNums2[i].innerText = sum;
        visibleNums3[i].innerText = 0;
        console.log('arr2',arr2, 'arr3', arr3)
    }
    if (arr3[i] !== 0 && arr3[i] === arr4[i] && obj3[i] === false && obj4[i] === false) {
        arr3[i] += arr4[i];
        arr4[i] = 0;
        obj3[i] = true;
        obj4[i] = true;
        const sum = arr3[i] + arr4[i];
        visibleNums3[i].innerText = sum;
        visibleNums4[i].innerText = 0;
        // let score = sum += sum ?
    }
    if (arr1[i] === 0 && arr2[i] !== 0) {
        arr1[i] = arr2[i];
        arr2[i] = 0;
        visibleNums1[i].innerText = arr1[i];
        visibleNums2[i].innerText = 0;
    }
    if (arr3[i] !== 0 && arr2[i] === 0) { 
        arr2[i] = arr3[i];
        arr3[i] = 0;
        visibleNums2[i].innerText = arr2[i];
        visibleNums3[i].innerText = 0; 
    }
    if (arr4[i] !== 0 && arr1[i] === 0 && arr2[i] === 0 && arr3[i] === 0) {
        arr1[i] = arr4[i];
        arr4[i] = 0;
        visibleNums1[i].innerText = arr1[i];
        visibleNums4[i].innerText = 0;
    }
    if (arr1[i] !== 0 && arr2[i] === 0 && arr3[i] === 0 && arr4[i] !== 0) {
        arr2[i] = arr4[i];
        arr4[i] = 0;
        visibleNums2[i].innerText = arr2[i];
        visibleNums4[i].innerText = 0;
    }   
    if (arr2[i] === 0 && arr3[i] !== 0) {
        arr2[i] = arr3[i];
        arr3[i] = 0;
        visibleNums2[i].innerText = arr2[i];
        visibleNums3[i].innerText = 0;
    }
    if (arr3[i] === 0 && arr4[i] !== 0) {
        arr3[i] = arr4[i];
        arr4[i] = 0;
        visibleNums3[i].innerText = arr3[i];
        visibleNums4[i].innerText = 0;
        }
    if (arr2[i] === 0 && arr4[i] !== 0) {
        arr2[i] = arr4[i];
        arr4[i] = 0;
        visibleNums2[i].innerText = arr2[i];
        visibleNums4[i].innerText = 0;
        }
    if (arr1[i] === 0 && arr2[i] !== 0) {
        arr1[i] = arr2[i]
        arr2[i] = 0
        visibleNums1[i].innerText = arr1[i];
        visibleNums2[i].innerText = 0;
    }
}
let score = 0;
const updateScore = (score) => {
    document.querySelector('.score-keeper').innerHTML = `Score: ${score}`;
}
// RIGHT ARROW FUNCTION
const handleRight = (arr, i, obj, node) => {
    // console.log(arr)
    const visibleNums = document.querySelectorAll(`.${node}`);
    const current = arr[i]
    let next = arr[i+1]
    if (i >= 3) {
        next = 0;
    }
    console.log('next', next)
    const previous = arr[i-1]
    const sum = current + next;
    console.log(sum)
    score += parseInt(sum);
    console.log(score)
    updateScore(score)
        // MERGER
  if (current !== '' && current == next && obj[i] === false) {
        const currentValue = parseInt(arr[i]);
        const nextValue = parseInt(arr[i+1]);
        const sum = nextValue + currentValue;
        arr[i+1] = sum;
        arr[i] = '';
        visibleNums[i+1].innerText = sum;
        visibleNums[i].innerText = '';
        obj[i] = true;
        obj[i+1] = true;
        // scoreKeeper.innerText += sum
    } 
    // MOVE FORWARD + REPLACE WITH ZERO 
    else if (current !== '' && next === '') {
        arr[i+1] += current;
        arr[i] = '';
        visibleNums[i+1].innerText = arr[i+1];
        visibleNums[i].innerText = '';
        // scoreKeeper.innerText += sum
    }
    else if (previous === '' && i > 1) {
        const slice = arr.slice(0, i-1)
        const slice2 = arr.slice(i)
        // console.log('slice1:', slice, 'slice2:', slice2, 'i:', i)
        const newArray = slice.concat(slice2)
        // console.log('new', newArray)
        newArray.unshift('')
        arr[0] = newArray[0];
        arr[1] = newArray[1];
        arr[2] = newArray[2];
        arr[3] = newArray[3];
        visibleNums[0].innerText = newArray[0];
        visibleNums[1].innerText = newArray[1];
        visibleNums[2].innerText = newArray[2];
        visibleNums[3].innerText = newArray[3];
    }
    if (i === arr.length -1) {
        let zeroStorage;
        for (let j = 3; j > 0; j--) {
            if (arr[j] === '') {
                zeroStorage = j;
            } else if (arr[j] !== '' && zeroStorage !== undefined) {
                arr[zeroStorage] = arr[j];
                arr[j] = '';
                zeroStorage = undefined;
            }
        }
        visibleNums[0].innerText = arr[0];
        visibleNums[1].innerText = arr[1];
        visibleNums[2].innerText = arr[2];
        visibleNums[3].innerText = arr[3];
    }
}
// LEFT ARROW FUNCTION
const handleLeft = (arr, i, obj, node) => {
    const visibleNums = document.querySelectorAll(`.${node}`);
    // MERGER
    if (arr[i] !== '' && arr[i] == arr[i-1] && obj[i] === false) {
        const currentValue = parseInt(arr[i]);
        const nextValue = parseInt(arr[i-1])
        const sum = nextValue + currentValue;
        
        arr[i-1] = sum;
        arr[i] = '';
        visibleNums[i-1].innerText = sum;
        visibleNums[i].innerText = '';
        obj[i] = true;
        obj[i-1] = true;
        // scoreKeeper.innerText += sum
    } 
    // MOVE FORWARD + REPLACE WITH ZERO 
    else if (arr[i] !== '' && arr[i-1] === '') {
        arr[i-1] += arr[i];
        arr[i] = '';
        visibleNums[i-1].innerText = arr[i-1]; 
        visibleNums[i].innerText = '';
        // scoreKeeper.innerText += sum
    } 
    else if (arr[i+1] === '' && i < 2) {
        const slice = arr.slice(0, i+1)
        const slice2 = arr.slice(i+2)
        const newArray = slice.concat(slice2)
        newArray.push('')
        arr[0] = newArray[0];
        arr[1] = newArray[1];
        arr[2] = newArray[2];
        arr[3] = newArray[3];
        visibleNums[0].innerText = newArray[0];
        visibleNums[1].innerText = newArray[1];
        visibleNums[2].innerText = newArray[2];
        visibleNums[3].innerText = newArray[3];
    }
    if (i === 0) {
        let zeroStorage;
        for (let j = 0; j < 3; j++) {
            if (arr[j] === '') {
                zeroStorage = j;
            } else if (arr[j] !== '' && zeroStorage !== undefined) {
                arr[zeroStorage] = arr[j];
                arr[j] = '';
                zeroStorage = undefined;
            }
        }
        visibleNums[0].innerText = arr[0];
        visibleNums[1].innerText = arr[1];
        visibleNums[2].innerText = arr[2];
        visibleNums[3].innerText = arr[3];
    }
}
// DOWN ARROW FUNCTION
const handleDown = (arr1, arr2, arr3, arr4, i, obj1, obj2, obj3, obj4, node1, node2, node3, node4) => {
    const visibleNums1 = document.querySelectorAll(`.${node1}`);
    const visibleNums2 = document.querySelectorAll(`.${node2}`);
    const visibleNums3 = document.querySelectorAll(`.${node3}`);
    const visibleNums4 = document.querySelectorAll(`.${node4}`);
    if (arr4[i] !== '' && arr4[i] == arr3[i] && obj3[i] === false && obj4[i] === false) {
        const currentValue = parseInt(arr4[i]);
        const nextValue = parseInt(arr3[i]);
        const sum = currentValue + nextValue;
        arr4[i] = sum;
        arr3[i] = '';
        obj3[i] = true;
        obj4[i] = true;
        visibleNums4[i].innerText = sum;
        // console.log(visibleNums4[i].innerText)
        visibleNums3[i].innerText = '';
        // console.log('arr4',arr4, 'arr3', arr3)
    }
    if (arr3[i] !== '' && arr3[i] == arr2[i] && obj2[i] === false && obj3[i] === false) {
        const currentValue = parseInt(arr3[i]);
        const nextValue = parseInt(arr2[i]);
        const sum = currentValue + nextValue;
        arr3[i] = sum;
        arr2[i] = '';
        obj3[i] = true;
        obj2[i] = true;
        visibleNums3[i].innerText = sum;
        // console.log(visibleNums3[i].innerText)
        visibleNums2[i].innerText = '';
        // console.log('arr3',arr3, 'arr2', arr2)
    }
    if (arr2[i] !== '' && arr2[i] == arr1[i] && obj1[i] === false && obj2[i] === false) {
        const currentValue = parseInt(arr2[i]);
        const nextValue = parseInt(arr1[i]);
        const sum = currentValue + nextValue;
        arr2[i] = sum;
        arr1[i] = '';
        obj2[i] = true;
        obj1[i] = true;
        visibleNums2[i].innerText = sum;
        visibleNums1[i].innerText = '';
    }
    if (arr4[i] === '') {
        if (arr3[i] !== '') {
            arr4[i] = arr3[i];
            arr3[i] = '';
            visibleNums4[i].innerText = arr4[i];
            visibleNums3[i].innerText = '';
        } else if (arr2[i] !== '' && arr3[i] === '') {
            arr4[i] = arr2[i];
            arr2[i] = '';
            visibleNums4[i].innerText = arr4[i];
            visibleNums2[i].innerText = '';
        } else if (arr1[i] !== '' && arr2[i] === '' && arr3[i] === '') {
            arr4[i] = arr1[i];
            arr1[i] = '';
            visibleNums4[i].innerText = arr4[i];
            visibleNums1[i].innerText = '';
        }
    } else if (arr3[i] === '') {
        if (arr2[i] !== '') {
            arr3[i] = arr2[i];
            arr2[i] = '';
            visibleNums3[i].innerText = arr3[i];
            visibleNums2[i].innerText = '';
        } else {
            if (arr1[i] !== '') {
                arr3[i] = arr1[i];
                arr1[i] = '';
                visibleNums3[i].innerText = arr3[i];
                visibleNums1[i].innerText = '';
            }
        }
    } else if (arr2[i] === '') {
        if (arr1[i] !== '') {
            arr2[i] = arr1[i];
            arr1[i] = '';
            visibleNums2[i].innerText = arr2[i];
            visibleNums1[i].innerText = '';
        }
    }
    if (i === 3) {
        let lastArrayWithValue;
        let lastArrayWithValueBool = {
            arr1Bool: false,
            arr2Bool: false,
            arr3Bool: false,
            arr4Bool: false,
        };
        for (let j = 0; j <= 3; j++) {
            if (arr1[j] !== '') {
                lastArrayWithValue = arr1;
                lastArrayWithValueBool.arr1Bool = true;
            } else if (arr2 !== '') {
                lastArrayWithValue = arr2;
                lastArrayWithValueBool.arr2Bool = true;
            } else if (arr3 !== '') {
                lastArrayWithValue = arr3;
                lastArrayWithValueBool.arr3Bool = true;
            } else if (arr4 !== '') {
                lastArrayWithValue = arr4;
                lastArrayWithValueBool.arr4Bool = true;
            }
            if (arr2[j] === '' && lastArrayWithValue !== undefined) {
                arr2[j] = lastArrayWithValue[j];
                visibleNums2[j].innerText = lastArrayWithValue[j];
                visibleNums1[j].innerText = '';
                lastArrayWithValue[j] = '';
                lastArrayWithValue = arr2;
                lastArrayWithValueBool.arr2Bool = true;
                lastArrayWithValueBool.arr1Bool = false;
            }
            if (arr3[j] === '' && lastArrayWithValue !== undefined) {
                arr3[j] = lastArrayWithValue[j];
                visibleNums3[j].innerText = lastArrayWithValue[j];
                if (lastArrayWithValueBool.arr2Bool) {
                    visibleNums2[j].innerText = '';
                } else if (lastArrayWithValueBool.arr1Bool) {
                    visibleNums1[j].innerText = '';
                }
                lastArrayWithValue[j] = '';
                lastArrayWithValueBool.arr1Bool = false;
                lastArrayWithValueBool.arr2Bool = false;
                lastArrayWithValueBool.arr3Bool = true;
            }
            if (arr4[j] === '' && lastArrayWithValue !== undefined) {
                arr4[j] = lastArrayWithValue[j];
                visibleNums4[j].innerText = lastArrayWithValue[j];
                if (lastArrayWithValueBool.arr3Bool) {
                    visibleNums3[j].innerText = '';
                } else if (lastArrayWithValueBool.arr2Bool) {
                    visibleNums2[j].innerText = '';
                } else if (lastArrayWithValueBool.arr1Bool) {
                    visibleNums1[j].innerText = '';
                }
                lastArrayWithValue[j] = '';
            }
            lastArrayWithValue = undefined;
            lastArrayWithValueBool.arr1Bool = false;
            lastArrayWithValueBool.arr2Bool = false;
            lastArrayWithValueBool.arr3Bool = false;
            lastArrayWithValueBool.arr4Bool = false;
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
    if (arr1[i] !== '' && arr1[i] === arr2[i] && obj2[i] === false && obj1[i] === false) {
        const currentValue = parseInt(arr1[i]);
        const nextValue = parseInt(arr2[i]);
        const sum = currentValue + nextValue;
        arr1[i] = sum;
        arr2[i] = '';
        obj2[i] = true;
        obj1[i] = true;
        visibleNums1[i].innerText = sum;
        visibleNums2[i].innerText = '';
    }
    if (arr2[i] !== '' && arr2[i] === arr3[i] && obj2[i] === false && obj3[i] === false) {
        const currentValue = parseInt(arr2[i]);
        const nextValue = parseInt(arr3[i]);
        const sum = currentValue + nextValue;
        arr2[i] = sum;
        arr3[i] = '';
        obj3[i] = true;
        obj2[i] = true;
        visibleNums2[i].innerText = sum;
        visibleNums3[i].innerText = '';
    }
    if (arr3[i] !== '' && arr3[i] === arr4[i] && obj3[i] === false && obj4[i] === false) {
        const currentValue = parseInt(arr3[i]);
        const nextValue = parseInt(arr4[i]);
        const sum = currentValue + nextValue;
        arr3[i] = sum;
        arr4[i] = '';
        obj3[i] = true;
        obj4[i] = true;
        visibleNums3[i].innerText = sum;
        visibleNums4[i].innerText = '';
        // let score += sum 
    }
    if (arr1[i] === '') {
        arr2[i] !== ''
        arr1[i] = arr2[i];
        arr2[i] = '';
        visibleNums1[i].innerText = arr1[i];
        visibleNums2[i].innerText = '';
    }
    if (arr3[i] !== '' && arr2[i] === '') { 
        arr2[i] = arr3[i];
        arr3[i] = '';
        visibleNums2[i].innerText = arr2[i];
        visibleNums3[i].innerText = ''; 
    }
    if (arr4[i] !== '' && arr1[i] === '' && arr2[i] === '' && arr3[i] === '') {
        arr1[i] = arr4[i];
        arr4[i] = '';
        visibleNums1[i].innerText = arr1[i];
        visibleNums4[i].innerText = '';
    }
    if (arr1[i] !== '' && arr2[i] === '' && arr3[i] === '' && arr4[i] !== '') {
        arr2[i] = arr4[i];
        arr4[i] = '';
        visibleNums2[i].innerText = arr2[i];
        visibleNums4[i].innerText = '';
    }   
    if (arr2[i] === '' && arr3[i] !== '') {
        arr2[i] = arr3[i];
        arr3[i] = '';
        visibleNums2[i].innerText = arr2[i];
        visibleNums3[i].innerText = '';
    }
    if (arr3[i] === '' && arr4[i] !== '') {
        arr3[i] = arr4[i];
        arr4[i] = '';
        visibleNums3[i].innerText = arr3[i];
        visibleNums4[i].innerText = '';
        }
    if (arr2[i] === '' && arr4[i] !== '') {
        arr2[i] = arr4[i];
        arr4[i] = '';
        visibleNums2[i].innerText = arr2[i];
        visibleNums4[i].innerText = '';
        }
    if (arr1[i] === '' && arr2[i] !== '') {
        arr1[i] = arr2[i]
        arr2[i] = ''
        visibleNums1[i].innerText = arr1[i];
        visibleNums2[i].innerText = '';
    }

    if (i === 3) {
        let lastArrayWithValue,
            lastArrayWithValueBool = {
                arr1Bool: false,
                arr2Bool: false,
                arr3Bool: false,
                arr4Bool: false,
            };
        for (let j = 0; j <= 3; j++) {
            if (arr4[j] !== '') {
                lastArrayWithValue = arr4;
                lastArrayWithValueBool.arr4Bool = true;
            } else if (arr3 !== '') {
                lastArrayWithValue = arr3;
                lastArrayWithValueBool.arr3Bool = true;
            } else if (arr2 !== '') {
                lastArrayWithValue = arr2;
                lastArrayWithValueBool.arr2Bool = true;
            } else if (arr1 !== '') {
                lastArrayWithValue = arr1;
                lastArrayWithValueBool.arr1Bool = true;
            }
            if (arr3[j] === '' && lastArrayWithValue !== undefined) {
                arr3[j] = lastArrayWithValue[j];
                visibleNums3[j].innerText = lastArrayWithValue[j];
                visibleNums4[j].innerText = '';
                lastArrayWithValue[j] = '';
                lastArrayWithValue = arr3;
                lastArrayWithValueBool.arr3Bool = true;
                lastArrayWithValueBool.arr4Bool = false;
            }
            if (arr2[j] === '' && lastArrayWithValue !== undefined) {
                arr2[j] = lastArrayWithValue[j];
                visibleNums2[j].innerText = lastArrayWithValue[j];
                if (lastArrayWithValueBool.arr3Bool) {
                    visibleNums3[j].innerText = '';
                } else if (lastArrayWithValueBool.arr4Bool) {
                    visibleNums4[j].innerText = '';
                }
                lastArrayWithValue[j] = '';
                lastArrayWithValueBool.arr2Bool = true;
                lastArrayWithValueBool.arr3Bool = false;
                lastArrayWithValueBool.arr4Bool = false;
            }
            if (arr1[j] === '' && lastArrayWithValue !== undefined) {
                arr1[j] = lastArrayWithValue[j];
                visibleNums1[j].innerText = lastArrayWithValue[j];
                if (lastArrayWithValueBool.arr4Bool) {
                    visibleNums4[j].innerText = '';
                } else if (lastArrayWithValueBool.arr3Bool) {
                    visibleNums3[j].innerText = '';
                } else if (lastArrayWithValueBool.arr2Bool) {
                    visibleNums2[j].innerText = '';
                }
                lastArrayWithValue[j] = '';
            }
            lastArrayWithValue = undefined;
            lastArrayWithValueBool.arr1Bool = false;
            lastArrayWithValueBool.arr2Bool = false;
            lastArrayWithValueBool.arr3Bool = false;
            lastArrayWithValueBool.arr4Bool = false;
        }
    }
}
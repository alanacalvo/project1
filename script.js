// create grid with just two boxes and create ability for them to slide into each other and combine
// 2 slide 2 equals 4 ( left to right ^^)
// once you can move left to right then add two more boxes to complete one row

// left 37
// right 39
// up 38
// down 40

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

let a1 = [0,0,2,2]
let a2 = [2,2,0,0]
let a3 = [4,4,8,0]
let a4 = [0,0,2,2]

// document.getElementById('game-board').onload = addNewDiv(a1)

const initializeGame = (arr1, arr2, arr3, arr4) => {
    // 2 RANDOMS 2'S
    Math.floor(Math.random() * 4)
    Math.floor(Math.random() * 4)
    Math.floor(Math.random() * 4)
    Math.floor(Math.random() * 4)
    //ONLOAD FUNCTIONALITY
    for (let i = 0; i < arr1.length; i++) {
        let newDiv1 = document.createElement('div');
        newDiv1.classList.add('newDiv1');
        newDiv1.innerText = arr1[i];
        newDiv1.style.border = '2px solid black'
        document.getElementById('game-board').append(newDiv1);
    }
    for (let i = 0; i < arr2.length; i++) {
        let newDiv2 = document.createElement('div');
        newDiv2.classList.add('newDiv2');
        newDiv2.innerText = arr2[i];
        newDiv2.style.border = '2px solid black'
        document.getElementById('game-board').append(newDiv2);
    }
    for (let i = 0; i < arr3.length; i++) {
        let newDiv3 = document.createElement('div');
        newDiv3.classList.add('newDiv3');
        newDiv3.innerText = arr3[i];
        newDiv3.style.border = '2px solid black'
        document.getElementById('game-board').append(newDiv3);
    }
    for (let i = 0; i < arr4.length; i++) {
        let newDiv4 = document.createElement('div');
        newDiv4.classList.add('newDiv4');
        newDiv4.innerText = arr4[i];
        newDiv4.style.border = '2px solid black'
        document.getElementById('game-board').append(newDiv4);
    }
}
// const addNumsToBoard = (arr) => {
//         let boxes = document.querySelectorAll('.boxes');
//         boxes.forEach((box) => box.innerText(arr[i])
//             document.getElementById('game-board').append(boxes)
// console.log(boxes)
// }

const trackerObj1 = {
    0: false,
    1: false,
    2: false,
    3: false,
}
const trackerObj2 = {
    0: false,
    1: false,
    2: false,
    3: false,
}
const trackerObj3 = {
    0: false,
    1: false,
    2: false,
    3: false,
}
const trackerObj4 = {
    0: false,
    1: false,
    2: false,
    3: false,
}



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


// KEYDOWN FUNCTION THAT HOLDS ALL 4 ARROW FUNCTIONS
document.onkeydown = function(e) {
    if (e.keyCode === 39) {
        alert('right key pressed');
        
        for (let i = 0; i < 4; i++){
            handleRight(a1, i, trackerObj1, 'newDiv1')
            handleRight(a2, i, trackerObj2, 'newDiv2')    
            handleRight(a3, i, trackerObj3, 'newDiv3')
            handleRight(a4, i, trackerObj4, 'newDiv4')       
        }            
        resetObj(trackerObj1)
        resetObj(trackerObj2)
        resetObj(trackerObj3)
        resetObj(trackerObj4)
        // console.log('right: a1', a1)
        // console.log('right: a2', a2)
        // console.log('right a3:', a3)
        // console.log('right: a4', a4)
        
         //INSERT ONE RANDOM 2 SOMEHOW

    } else if (e.keyCode === 37) {
        alert('left key pressed');
        for (let i = a1.length - 1; i >= 0; i--){
            handleRight(a1, i, trackerObj1, 'newDiv1')
            handleRight(a2, i, trackerObj2, 'newDiv2')    
            handleRight(a3, i, trackerObj3, 'newDiv3')
            handleRight(a4, i, trackerObj4, 'newDiv4')       
        }            
        resetObj(trackerObj1)
        resetObj(trackerObj2)
        resetObj(trackerObj3)
        resetObj(trackerObj4)
        }
        // console.log('left:', a1)
        // console.log('left:', a2)
        // console.log('left:', a3)
        // console.log('left:', a4)
    
}
// RESET OBJECT PROPERTIES TO FALSE AFTER EACH KEYPRESS
const resetObj = (obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = false;
    })
}

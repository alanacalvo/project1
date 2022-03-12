let a1 = [0,0,0,0]
let a2 = [0,0,0,0]
let a3 = [0,0,0,0]
let a4 = [0,0,0,0]

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

const initializeGame = (arr1, arr2, arr3, arr4) => {
    twoRandomTwosOnLoad(arr1, arr2, arr3, arr4)
    twoRandomTwosOnLoad(arr1, arr2, arr3, arr4)
    //CREATE EACH DIV AND APPEND ARRAYS
    for (let i = 0; i < arr1.length; i++) {
        let newDiv1 = document.createElement('div');
        newDiv1.classList.add('newDiv1');
        newDiv1.innerText = arr1[i];
        document.getElementById('game-board').append(newDiv1);
    }
    for (let i = 0; i < arr2.length; i++) {
        let newDiv2 = document.createElement('div');
        newDiv2.classList.add('newDiv2');
        newDiv2.innerText = arr2[i];
        document.getElementById('game-board').append(newDiv2);
    }
    for (let i = 0; i < arr3.length; i++) {
        let newDiv3 = document.createElement('div');
        newDiv3.classList.add('newDiv3');
        newDiv3.innerText = arr3[i];
        document.getElementById('game-board').append(newDiv3);
    }
    for (let i = 0; i < arr4.length; i++) {
        let newDiv4 = document.createElement('div');
        newDiv4.classList.add('newDiv4');
        newDiv4.innerText = arr4[i];
        document.getElementById('game-board').append(newDiv4);
    }
}

const twoRandomTwosOnLoad = (arr1, arr2, arr3, arr4) => {
    let randomArray = Math.floor(Math.random() * 4);
    let randomIndex = Math.floor(Math.random() * 4);
console.log('arr', randomArray, 'index', randomIndex)
    if (arr0,arr1,arr2,arr3 !== 0) {
        if (randomArray === 0) {
            arr1[randomIndex] = 2;
        } else if (randomArray === 1) {
            arr2[randomIndex] = 2;
        } else if (randomArray === 2) {
            arr3[randomIndex] = 2;
        } else if (randomArray === 3) {
            arr4[randomIndex] = 2;
        } 
    }
}

// KEYDOWN FUNCTION THAT HOLDS ALL 4 ARROW FUNCTIONS
document.onkeydown = function(e) {
    if (e.keyCode === 39) {
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
         twoRandomTwosOnLoad(a1, a2, a3, a4)
    } else if (e.keyCode === 37) {
        for (let i = 3; i >= 0; i--) {
            handleLeft(a1, i, trackerObj1, 'newDiv1')
            handleLeft(a2, i, trackerObj2, 'newDiv2')    
            handleLeft(a3, i, trackerObj3, 'newDiv3')
            handleLeft(a4, i, trackerObj4, 'newDiv4')       
        }            
        resetObj(trackerObj1)
        resetObj(trackerObj2)
        resetObj(trackerObj3)
        resetObj(trackerObj4)
        twoRandomTwosOnLoad(a1, a2, a3, a4)
    } else if (e.keyCode === 38) {
        console.log('up key pressed')
    } else if (e.keyCode === 40) {
        console.log('down key pressed')
    }
}

// RESET OBJECT PROPERTIES TO FALSE AFTER EACH KEYPRESS
const resetObj = (obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = false;
    })
}

let a1 = [2,'','',2]
let a2 = ['',4,2,4]
let a3 = [4,4,4,'']
let a4 = [4,'','',4]

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
    let randomArray1 = Math.floor(Math.random() * 4);
    let randomIndex1= Math.floor(Math.random() * 4);
    let randomArray2 = Math.floor(Math.random() * 4);
    let randomIndex2 = Math.floor(Math.random() * 4);
    while (randomArray1 === randomArray2 && randomIndex1 === randomIndex2) {
        randomArray1 = Math.floor(Math.random() * 4)
    }
    if (randomArray1 === 0) {
        arr1[randomIndex1] = 2;
    } 
    else if (randomArray1 === 1) {
        arr2[randomIndex1] = 2;
    } 
    else if (randomArray1 === 2) {
        arr3[randomIndex1] = 2;
    } 
    else if (randomArray1 === 3) {
        arr4[randomIndex1] = 2;
    } 
    if (randomArray2 === 0) {
        arr1[randomIndex2] = 2;
    } 
    else if (randomArray2 === 1) {
        arr2[randomIndex2] = 2;
    } 
    else if (randomArray2 === 2) {
        arr3[randomIndex2] = 2;
    } 
    else if (randomArray2 === 3) {
        arr4[randomIndex2] = 2;
    } 
}
// ADD RANDOM TWO AFTER EVERY KEYPRESS
// const randomTwo = (node, i) => {
//     let randomArray = Math.floor(Math.random() * 4);
//     let randomIndex= Math.floor(Math.random() * 4);
//     const visibleNums = document.querySelectorAll(`.${node}`);
//     while (arr[i] == '') {

//     if (randomArray1 === 0) {
//         arr1[randomIndex1] = 2;
//     } 
//     else if (randomArray1 === 1) {
//         arr2[randomIndex1] = 2;
//     } 
//     else if (randomArray1 === 2) {
//         arr3[randomIndex1] = 2;
//     } 
//     else if (randomArray1 === 3) {
//         arr4[randomIndex1] = 2;
//     } 
//     if (randomArray2 === 0) {
//         arr1[randomIndex2] = 2;
//     } 
//     else if (randomArray2 === 1) {
//         arr2[randomIndex2] = 2;
//     } 
//     else if (randomArray2 === 2) {
//         arr3[randomIndex2] = 2;
//     } 
//     else if (randomArray2 === 3) {
//         arr4[randomIndex2] = 2;
//     } 
//     while (randomArray[randomIndex] == 0) {
//         randomArray[randomIndex] = 2;
//         // visibleNums[]
//     }}
// }
//     for (let i = ''; i < arr1.length; i++) {
//         for (let j = ''; j < arr2.length; j++) {
//             for (let k = ''; k < arr3.length; k++) {
//                 for (let l = ''; l < arr4.length; l++) {
               
//                         if (randomArray === '' && arr1[randomIndex] === '') {
//                             arr1[randomIndex] = 2;
                            
//                         } else if (randomArray === 1 && arr2[j] === '') {
//                             arr2[randomIndex] = 2;
//                         } else if (randomArray === 2 && arr3[k] === '') {
//                             arr3[randomIndex] = 2;
//                         } else if (randomArray === 3 && arr4[l] === '') {
//                             arr4[randomIndex] = 2;
//                         } 
                    
//                 }
//             }
//         }
//     }


// KEYDOWN FUNCTION THAT HOLDS ALL 4 ARROW FUNCTIONS
document.onkeydown = function(e) {
    if (e.keyCode === 39) {
        // RIGHT KEY
        for (let i = 0; i < 4; i++){ // state.forEach
            handleRight(a1, i, trackerObj1, 'newDiv1') //rotateRight ()  *4?
            handleRight(a2, i, trackerObj2, 'newDiv2')    
            handleRight(a3, i, trackerObj3, 'newDiv3')
            handleRight(a4, i, trackerObj4, 'newDiv4') 
        }            
        resetObj(trackerObj1)
        resetObj(trackerObj2)
        resetObj(trackerObj3)
        resetObj(trackerObj4)
        // randomTwo()        
    } else if (e.keyCode === 37) {
        // LEFT KEY
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
    } 
    else if (e.keyCode === 38) {
        // UP KEY
        for (let i = 0; i < a1.length; i++) {
            handleUp(a1,a2,a3,a4,i,trackerObj1,trackerObj2,trackerObj3,trackerObj4,'newDiv1','newDiv2','newDiv3','newDiv4')
        }
        resetObj(trackerObj1)
        resetObj(trackerObj2)
        resetObj(trackerObj3)
        resetObj(trackerObj4)
    } 
    else if (e.keyCode === 40) {
        // DOWN KEY
        for (let i = 0; i < a1.length; i++) {
            handleDown(a1,a2,a3,a4,i,trackerObj1,trackerObj2,trackerObj3,trackerObj4,'newDiv1','newDiv2','newDiv3','newDiv4')
        }
        resetObj(trackerObj1)
        resetObj(trackerObj2)
        resetObj(trackerObj3)
        resetObj(trackerObj4)
    }
}
// RESET OBJECT PROPERTIES TO FALSE AFTER EACH KEYPRESS
const resetObj = (obj) => {
    Object.keys(obj).forEach(key => {
        obj[key] = false;
    })
}




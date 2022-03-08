// create grid with just two boxes and create ability for them to slide into each other and combine
// 2 slide 2 equals 4 ( left to right ^^)
// once you can move left to right then add two more boxes to complete one row

// left 37
// right 39
// up 38
// down 40

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

const a1 = [0,0,2,2]
const a2 = [2,2,0,0]
const a3 = [4,4,8,0]
const a4 = [0,0,2,2]

const a1Obj = {
    index1: false,
    index2: false,
    index3: false,
    index4: false,
}
const a2Obj = {
    index1: false,
    index2: false,
    index3: false,
    index4: false,
}
const a3Obj = {
    index1: false,
    index2: false,
    index3: false,
    index4: false,
}
const a3Obj = {
    index1: false,
    index2: false,
    index3: false,
    index4: false,
}


// RIGHT ARROW FUNCTION
const handleRight = (arr, i) => {
    const current = arr[i]
    const next = arr[i+1]
    if (current !== 0 && current === next) {
        arr[i+1] += current;
        arr[i] = 0;

    } else if (current !== 0 && next === 0) {
        arr[i+1] += current;
        arr[i] = 0;
    }
    // object = empty
}

// LEFT ARROW FUNCTION



// KEYDOWN FUNCTION THAT HOLDS ALL 4 ARROW FUNCTIONS
document.onkeydown = function(e) {
    if (e.keyCode === 39) {
        alert('right key pressed');
        for (let i = 0; i < a1.length - 1; i++){
            handleRight(a1, i)
            handleRight(a2, i)
            handleRight(a3, i)
            handleRight(a4, i)
        }
        console.log('right: ', a1)
        console.log('right: ', a2)
        console.log('right: ', a3)
        console.log('right: ', a4)
    } else if (e.keyCode === 37) {
        alert('left key pressed');
        for (let i = a1.length - 1; i >= 0; i--){
            const current = a1[i]
            const next = a1[i-1]
            console.log(a1[i])
            if (current !== 0 && current === next) {
                a1[i-1] += next;
                a1[i] = 0;
            }
        }
        console.log('left:', a1)
        console.log('left:', a2)
        console.log('left:', a3)
        console.log('left:', a4)
    } 
}
// const a1 = [0,0,2,2]
// const a2 = [2,2,0,0]
// const a3 = [0,4,4,0]
// const a4 = [0,0,2,2]
// const handleLeft = (arr, i) => {
//     const current = arr[i]
//     const next = arr[i+1]
//     if (current !== 0 && current === next) {
//         arr[i+1] += next;
//         arr[i] = 0;
//     } else if (next === 0) {
//         arr[i+1] += next;
//         arr[i] = 0;
// console.log(next)
//     }
// }



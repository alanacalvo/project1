const updateGameBoard = () => {
    for (let i = 0; i < 4; i++) {
        const row = document.querySelectorAll(`.squareDivs${i}`);
        for (let j = 0; j < 4; j++) {
            row[j].innerText = squares[i][j];
            scoreKeeper.innerText = `Score: ${score}`;
            if (row[j].innerText == 0) {
                row[j].style.background = 'rgb(251,253,240)'; // off white
                row[j].style.color = 'rgb(251,253,240)';
            }
            if (row[j].innerText == 2) {
                row[j].style.background = 'rgb(253,245,200)'; // yellow 
                row[j].style.color = 'rgb(143,122,102)';
            }
            if (row[j].innerText == 4) {
                row[j].style.background = 'rgb(252,219,193)'; // light peach
                row[j].style.color = 'rgb(143,122,102)';
            }
            if (row[j].innerText == 8) {
                row[j].style.background = 'rgb(179,230,223)'; // mint
                row[j].style.color = 'rgb(143,122,102)'; // light brown

            }
            if (row[j].innerText == 16) {
                row[j].style.background = 'rgb(115,156,184)'; // teal
                row[j].style.color = 'rgb(251,253,240)'; // off white
                
            }
            if (row[j].innerText == 32) {
                row[j].style.background = 'rgb(116,185,164)'; // teal
                row[j].style.color = 'rgb(251,253,240)'; 
            }
            if (row[j].innerText == 64) {
                row[j].style.background = 'rgb(246,116,101)'; // coral
                row[j].style.color = 'rgb(251,253,240)';
            }
            if (row[j].innerText >= 128) {
                row[j].style.background = 'rgb(53,61,80)'; // navy blue
                row[j].style.color = 'rgb(251,253,240)';
            }
            if (row[j].innerText == 2048) {
                row[j].style.background = 'rgb(246,195,12)'; // navy blue
                row[j].style.color = 'rgb(210,125,86)';
            }
        }
    }
}
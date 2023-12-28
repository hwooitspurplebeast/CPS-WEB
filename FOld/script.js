let clicks = 0;
let startTime;

function handleClick() {
    const button = document.getElementById('cps-button');
    const display = document.getElementById('cps-display');

    if (clicks === 0) {
        startTime = new Date().getTime();
        button.innerText = 'Click as Fast as You Can!';
        display.innerText = '0 CPS';
        button.style.backgroundColor = '#ff4c4c'; // Change button color to red
    }

    clicks++;

    if (clicks === 5) { // Adjust the number of clicks for the desired CPS calculation interval
        const endTime = new Date().getTime();
        const timeDiff = endTime - startTime;
        const secondsPassed = timeDiff / 1000;
        const cps = Math.round(clicks / secondsPassed);

        display.innerText = cps + ' CPS';
        button.innerText = 'Click Again';
        button.style.backgroundColor = '#4caf50'; // Change button color back to green

        clicks = 0;
    }
}

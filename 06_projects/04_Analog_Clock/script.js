function createNumbers() {
    const container = document.querySelector('.numbers-container');
    const radius = 135;
    const numberSize = 30;
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.className = 'number';
        number.textContent = i;
        
        const angle = (i - 3) * (Math.PI * 2) / 12;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        number.style.left = `${150 + x - numberSize / 2}px`;
        number.style.top = `${150 + y - numberSize / 2}px`;

        container.appendChild(number);
    }
}

function setClock() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours*30) + (minutes/2) +(seconds/120))+90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

createNumbers();
setInterval(setClock, 1000);
setClock();

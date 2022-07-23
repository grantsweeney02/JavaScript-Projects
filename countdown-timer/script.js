const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');




function countdown(date) {
    const today = new Date();
    const year = today.getFullYear();
    const picked = date || '1 Jan ${year}';
    const pickDate = new Date(picked);
    const currentDate = new Date();

    const totalSeconds = (pickDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
setInterval( function() { countdown("8 Oct 2022"); }, 1000 );
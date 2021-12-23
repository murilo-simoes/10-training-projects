const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins"); 
const secondsEl = document.getElementById("seconds");

const eldenRelease = '25 Feb 2022';

function countDown(){
    const eldenReleaseData = new Date(eldenRelease);
    const currentDate = new Date();
    const totalSeconds = new Date(eldenReleaseData - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60)% 60;
    const seconds = Math.floor(totalSeconds)% 60;
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
countDown();
setInterval(countDown,1000);
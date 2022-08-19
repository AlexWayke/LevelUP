let target_date = new Date().getTime() + (1000*1800);
let minutes, seconds;
 
let countdown = document.getElementById("counter");
 
getCountdown();
 
setInterval(function () { getCountdown(); }, 1000);
 
function getCountdown(){
 
    let current_date = new Date().getTime();
    let seconds_left = (target_date - current_date) / 1000;
 
    minutes = pad( parseInt(seconds_left / 60) );
    seconds = pad( parseInt( seconds_left % 60 ) );
 
    countdown.innerHTML = "<p>ends after</p> : <span>" + minutes + "</span> minutes <span>" + seconds + "</span> seconds"; 
}
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}
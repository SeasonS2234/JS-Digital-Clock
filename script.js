setInterval(function(){
    const clock = document.querySelector(".screen");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let daytime = 'AM';
    //checks conditions for AM and PM
    if (hr > 12){
        daytime = 'PM';
        hr = hr - 12;
    }
    if (hr == 0){
        hr = 12;
    }
    if (sec < 10){
        sec = '0' + sec;
    }
    if (min < 10){
        min = '0' + min;
    }
    if (hr < 10){
        hr = '0' + hr;
    }
    //displaying to screen
    clock.textContent = hr + ':' + min + ':' + sec + " " + daytime; 
});
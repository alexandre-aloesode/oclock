const start_timer = document.querySelector("#timer_button");

const timer_screen = document.querySelector("#timer_screen");

const timer_hours = document.querySelector("#timer_hours");

const timer_min = document.querySelector("#timer_min");

const timer_sec = document.querySelector("#timer_sec");

const timer_sound = document.createElement("audio");
timer_sound.src = "./Audio/Countdown10.wav";
timer_sound.setAttribute("preload", "auto");
timer_sound.setAttribute("controls", "none");
timer_sound.style.display = "none";
document.body.appendChild(timer_sound);

let TimerIsRunning = false;





function addZeroTimer(int) {

    if(int < 10) return "0" + int;
    
    else return int;
}





function launch_timer(){

    let hours = timer_hours.value;   

    if(timer_hours.value == "") hours = 0;

    let min = timer_min.value;

    if(timer_min.value == "") min = 0;

    let sec = timer_sec.value;

    if(timer_sec.value == null) sec = 0;

    countdown(hours, min, sec);

}





function countdown(h, m, s) {

    timer_screen.innerHTML = `${addZeroTimer(h)}:${addZeroTimer(m)}:${addZeroTimer(s)}`;

    if(TimerIsRunning) {

    check_timer();

    if(s > 0) s--;

    if( s == 0 && m > 0) {

        m--;
        s = 60;
    }

    if( m == 0 && h > 0) {
        
        h--;
        m = 60;
    }

    timeout = setTimeout(countdown, 1000, h, m, s);

    }
}



function check_timer(){

    if (timer_screen.innerHTML == "00:00:00") { 

        alert('Temps écoulé'); 

        TimerIsRunning = false;
    }

    if (timer_screen.innerHTML == "00:00:10") { 

        timer_sound.play();
   
    }
}



start_timer.addEventListener("click", function start_stop_timer(){

    if(!TimerIsRunning) {

        TimerIsRunning = true;

        start_timer.style.background = "green";

        launch_timer();

    }

    else if(TimerIsRunning) {

        clearTimeout(timeout);
        
        TimerIsRunning = false

        start_timer.style.background = "red";
    }

    
})



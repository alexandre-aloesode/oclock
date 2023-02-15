const clock = document.querySelector("#clock");


const chrono = document.querySelector("#chrono");

chrono.style.display = "none";

const display_chrono = document.querySelector("#display_chrono")



const timer = document.querySelector("#timer");

timer.style.display = "none";

const display_timer = document.querySelector("#display_timer");



const alarm = document.querySelector("#alarm");

alarm.style.display = "none";

const display_alarm = document.querySelector("#display_alarm");


const display_chrono_list = document.querySelector("#chrono_list");
display_chrono_list.style.display = "none";


const display_alarm_list = document.querySelector("#alarm_list");
display_alarm_list.style.display = "none";



display_chrono.addEventListener("click", function(){

    clock.style.display = "none";

    display_timer.style.display = "none";

    display_alarm.style.display = "none";

    display_chrono.style.display = "none";

    chrono.style.display = "flex";

    display_chrono_list.style.display = "flex";
});


display_timer.addEventListener("click", function(){

    clock.style.display = "none";

    display_timer.style.display = "none";

    display_alarm.style.display = "none";

    display_chrono.style.display = "none";

    display_timer.style.display = "none";

    timer.style.display = "flex";
});

display_alarm.addEventListener("click", function(){

    // clock.style.display = "none";

    display_timer.style.display = "none";

    display_alarm.style.display = "none";

    display_chrono.style.display = "none";

    display_timer.style.display = "none";

    alarm.style.display = "flex";

    display_alarm_list.style.display = "flex";

});



function addZeroClock(int) {

    if(int < 10) return "0" + int;
    
    else return int;
}

function live_clock() {

    let today_date = new Date().toLocaleDateString("fr");

    let hour = new Date().getHours();

    let min = new Date().getMinutes();

    let sec = new Date().getSeconds();

    clock.innerHTML = today_date + "<br>" + `${addZeroClock(hour)}:${addZeroClock(min)}:${addZeroClock(sec)}`;

    setTimeout(live_clock, 1000);

}


live_clock();


const chrono_start = document.querySelector("#chrono_button");

const chrono_turn = document.querySelector("#chrono_turn");

const chrono_reset = document.querySelector("#chrono_reset");

const chrono_screen = document.querySelector("#chrono_screen");


let hours_count = 0;

let min_count = 0;

let sec_count = 0;

let milisec_count = 0;

let time = 0;

let ChronoIsRunning = false;


function addZeroChrono(int) {

    // if(int.length < 2) return `0${int}`;
    if(int < 10) return "0" + int;
    else return int;
}

function launch_chrono() {

    if(ChronoIsRunning) {

    sec_count = time;

    if(sec_count == 60) {

        min_count++;

        time = 0;
    }

    if(min_count == 60) {

        hours_count++;

        min_count = 0;

    } 

    chrono_screen.innerHTML = `${addZeroChrono(hours_count)}:${addZeroChrono(min_count)}:${addZeroChrono(sec_count)}`;

    time++

    timeout = setTimeout(launch_chrono, 1000);

    }

    // if(!ChronoIsRunning) ChronoIsRunning = true

    // else {
    //     setTimeout(timeout);
    //     ChronoIsRunning = false;
    // }

    // milisec_count = (chrono_time.getSeconds() + time) % 1000;
    // milisec_count = time;
    // milisec.innerHTML = time;

    // if(time == 10) {

    //     sec_count++;
    //     sec.innerHTML = sec_count + ".";
    //     time = 0;
    // }

    // if(sec_count == 60) {

    //     min_count++;
    //     min.innerHTML = min_count + ":";

    //     sec_count = 0;
    //     sec.innerHTML = sec_count + ":";   
    // }

    // if(min_count == 60) {

    //     hours_count++;
    //     hours.innerHTML = hours_count + ":";

    //     min_count = 0;
    //     min.innerHTML = min_count + ":";   
    // }   


    // time++

    // timeout = setTimeout(launch_chrono, 100);
}



chrono_turn.addEventListener("click", function save_chrono() {

    const chrono_list = document.querySelector("#chrono_list");

    let show_chrono_list = document.createElement("p");

    show_chrono_list.innerHTML = `${addZeroChrono(hours_count)}:${addZeroChrono(min_count)}:${addZeroChrono(sec_count)}`;

    chrono_list.appendChild(show_chrono_list);

})


chrono_reset.addEventListener("click", function reset_chrono(){

    hours_count = 0;

    min_count = 0;

    sec_count = 0;

    time = 0;

    chrono_screen.innerHTML = `${addZeroChrono(hours_count)}:${addZeroChrono(min_count)}:${addZeroChrono(sec_count)}`;
})



chrono_start.addEventListener("click", function start_stop_chrono(){

    if(!ChronoIsRunning) {

        ChronoIsRunning = true;

        chrono_start.style.background = "green";

        launch_chrono();
    }

    else if(ChronoIsRunning) {

        clearTimeout(timeout);

        ChronoIsRunning = false

        chrono_start.style.background = "red";
    }
})
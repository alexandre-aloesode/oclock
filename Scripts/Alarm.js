const start_alarm = document.querySelector("#alarm_button");

const alarm_hours = document.querySelector("#alarm_hours");

const alarm_min = document.querySelector("#alarm_min");

const alarm_title = document.querySelector("#alarm_title");

const alarm_list = document.querySelector("#alarm_list");

const alarm_sound = document.createElement("audio");
alarm_sound.src = "./Audio/JackBauer.mp3";
alarm_sound.setAttribute("preload", "auto");
alarm_sound.setAttribute("controls", "none");
alarm_sound.style.display = "none";
document.body.appendChild(alarm_sound);

// const alarm_sound = document.querySelector("#alarm_sound");

let alarm_array = [];

let title_array = [];



function addZeroAlarm(int) {

    if(int.length < 2) return `0${int}`;
    // if(int < 10) return "0" + int;


    else return int;
}   




start_alarm.addEventListener("click", function add_alarm(){


    alarm_array.push(`${addZeroAlarm(alarm_hours.value)}:${addZeroAlarm(alarm_min.value)}`);

    title_array.push(alarm_title.value);

    let save_alarm = document.createElement("p");

    save_alarm.innerHTML = `*${alarm_title.value} - ${addZeroAlarm(alarm_hours.value)} : ${addZeroAlarm(alarm_min.value)}`;

    alarm_list.appendChild(save_alarm);

    let timeline = document.createElement("p");

    timeline.innerHTML = alarm_timeline(alarm_hours.value, alarm_min.value);

    alarm_list.appendChild(timeline);
    
})




function check_alarm() {

    for(const i in alarm_array) {
        console.log(alarm_array[i]);

        let time_check = new Date();

        if(alarm_array[i] == `${addZeroAlarm(time_check.getHours())}:${addZeroAlarm(time_check.getMinutes())}` && time_check.getSeconds() == 0) {

            alarm_sound.play();
            alarm_sound.onended = () => {
                
                alert(title_array[i]);
            }
        }
    }

    setTimeout(check_alarm, 1000);

}




function alarm_timeline(hour, min) {

    let actual_time = new Date();

    if(hour >= actual_time.getHours()) {

        if(min > actual_time.getMinutes()) {

            return ("(Dans " + (hour - actual_time.getHours()) + " heures et " + (min - actual_time.getMinutes()) + " minutes)");

        }

        else return("(Dans " + ((hour - actual_time.getHours()) - 1) + " heures et " + (60 - (actual_time.getMinutes() - min)) + " minutes)");

    }

    else if(hour < actual_time.getHours()) {

        if(min > actual_time.getMinutes()) {

            return("(Dans " + (24 - (actual_time.getHours() - hour)) + " heures et " + (min - actual_time.getMinutes()) + " minutes)");

        }

        else return("(Dans " + (24 - (actual_time.getHours() - hour)) + " heures et " + (60 - (min - actual_time.getMinutes())) + " minutes)");

    }

    setTimeout(alarm_timeline, hour, min, 1000);
}



check_alarm();




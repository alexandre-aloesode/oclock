<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Roboto&display=swap" rel="stylesheet">
    <script defer src="./Scripts/script.js"></script>
    <script defer src="./Scripts/Chrono.js"></script>
    <script defer src="./Scripts/Timer.js"></script>
    <script defer src="./Scripts/Alarm.js"></script>
    <title>Horloge</title>
</head>
<body>

<!-- <audio id="alarm_sound" src="https://youtu.be/W3q8Od5qJio?t=17"></audio> -->

    <div id="chrono_list">

        <h3>Tours</h3>

    </div>

    <div id="alarm_list">
        
        <h3>Liste</h3>

    </div>


    <div id="main_menu">

        <div id="clock">

        </div>


        <div id="main_buttons">

            <button type="button" class="display_buttons" id="display_chrono">Chronomètre</button>

            <button type="button" class="display_buttons" id="display_timer">Minuteur</button>

            <button type="button" class="display_buttons" id="display_alarm">Alarme</button>

        </div>



        <div id="chrono" class="main_block">

            <p id="chrono_screen" class="screens">00:00:00</p>

            <button type="button" class="chrono_buttons" id="chrono_button">Start/Stop</button>

            <button type="button" class="chrono_buttons" id="chrono_turn">Tour</button>

            <button type="button" class="chrono_buttons" id="chrono_reset">Reset</button>

            <a href="index.php"><button type="button" class="main_menu_button">Accueil</button></a>
            
        </div>


        

        <div id="timer" class="main_block">

            <p id="timer_screen" class="screens">00:00:00</p>

            <input type="number" name="timer_hours" id="timer_hours" class="timer_input" placeholder="HH" min="0" max="24">

            <input type="number" name="timer_min" id="timer_min" class="timer_input" placeholder="MM" min="0" max="60">

            <input type="number" name="timer_sec" id="timer_sec" class="timer_input" placeholder="SS" min="0" max="60">

            <button type="button" id="timer_button">Start/Stop</button>

            <a href="index.php"><button type="button" class="main_menu_button">Accueil</button></a>

            <!-- <audio id="timer_sound" src="https://www.google.com/search?q=24+hours+chrono+sound&oq=24+hours+chrono+sound&aqs=chrome..69i57j0i22i30.4116j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:83ecc87d,vid:NDv3VuTzZ2M"></audio> -->

        </div>



        <div id="alarm" class="main_block">

            <div id="alarm_settings"> 

                <input type="number" name="alarm_hours" id="alarm_hours" class="alarm_input" placeholder="HH" min="0" max="24">

                <input type="number" name="alarm_min" id="alarm_min" class="alarm_input" placeholder="MM" min="0" max="60">

                <input type="text" name="alarm_title" id="alarm_title" class="alarm_input" placeholder="Message">

                <button type="button" id="alarm_button">Ajouter</button>

                <a href="index.php"><button type="button" class="main_menu_button">Accueil</button></a>

            </div>

        </div>
    </div>   

</body>
</html>
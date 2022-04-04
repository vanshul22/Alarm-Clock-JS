/*
Website Name - Alarm-Clock
Name : Vanshul Kesharwani
Date : 02/04/2022
Version : 4.1.1
Email : vkvanshulkesharwani54@gmail.com
Description : This is a Web app for adding alarm clock.
*/

// Example audios for testing from link.
// https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3

// Taking audio from internet.
const music = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");
console.log(`Welcome to "Console" of Alarm Clock`);

// Function to play the audio of alarm.
function playAudio() {
    music.play();
};

// Add event to submit button.
let setAlarm = document.getElementById("setAlarm");
setAlarm.addEventListener("click", ringAlarm);

// This function will run when ever is alarm set from UI.
function ringAlarm() {
    let inputDateTime;
    let currentDateTime = new Date();
    let time = document.getElementById("time").value;
    let date = document.getElementById("date").value;

    // If date is not enter in input then it will give current date.
    if (date == "") {
        date = currentDateTime.getDate();
        let month = currentDateTime.getMonth();
        let year = currentDateTime.getFullYear();
        date = (date < 10 ? "0" : "") + date;
        month = (month < 10 ? "0" : "") + Number(month + 1);
        date = `${year}-${month}-${date}`;
    };
    // If time is not enter in input then it will give current time.
    if (time == "") {
        let hours = currentDateTime.getHours();
        let minutes = currentDateTime.getMinutes();
        alert(`Alarm default time set, Will ring after 5 minutes i.e ${hours}:${String(Number(minutes)+5)}`);
        // Fixing Minutes and hours and seconds if time is less than 10 then we will add 0 in front of it.
        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        time = `${hours}:${minutes}`;
        setTimeout(() => {
            playAudio();
        }, 300000);
    };
    dateStr = time + " " + date;
    inputDateTime = new Date(dateStr);
    let alarmTime = inputDateTime - currentDateTime;
    if (alarmTime >= 0) {
        setTimeout(() => {
            playAudio();
        }, alarmTime);
        alert("Alarm set successfully.");
    }
};

// Added Current time from here.

function updateClock() {
    // Taking current time here
    let currentTime = new Date();

    // Taking all hour, minute and second in different2 variables.
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Fixing Minutes and hours and seconds if time is less than 10 then we will add 0 in front of it.
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // For AM/PM 
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Fixing time from railway to 12 hour format.
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Creating string of current time by 3 vars.
    let currentTimeStr = `${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;

    // Showing current time in DOM.
    document.getElementById("currentTimeShow").innerHTML = currentTimeStr;
};
/*
Website Name - Alarm-Clock
Name : Vanshul Kesharwani
Date : 02/04/2022
Version : 2.1.1
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
    let time = document.getElementById("time").value;
    let date = document.getElementById("date").value;
    date = time + " " + date
    let inputDateTime = new Date(date);
    let currentDateTime = new Date();
    let alarmTime = inputDateTime - currentDateTime;
    if (alarmTime >= 0) {
        console.log("Alarm set Successfully");
        setTimeout(() => {
            playAudio();
        }, alarmTime);
    } else {
        console.log("Date & time is not correct.");
    };
};
"use strict"


function setName() {
    //console.log("Qudus Kunle");
    const now = new Date();

    // Get Seconds Value
    const SecondsNow = now.getSeconds();
    const SecDegree = ((SecondsNow / 60) * 360) + 90;
    document.querySelector('.second-hand').style.transform = `rotate(${SecDegree}deg)`;

    // Get Min Value
    const MinNow = now.getMinutes();
    const MinDegree = ((MinNow / 60) * 360) + 90;
    document.querySelector('.min-hand').style.transform = `rotate(${MinDegree}deg)`;

    // Get Hour Value
    const HoursNow = now.getHours();
    const HoursDegree = ((HoursNow / 12) * 360) + 90;
    document.querySelector('.hour-hand').style.transform = `rotate(${HoursDegree}deg)`;
}
setInterval(setName, 1000);

//  
function mouse() {
    document.getElementsByClassName("clock").addEventListener("mouseover", function() {
        document.getElementsByClassName("clock").innerHTML = "Hello, Kunle";
    });
}
"use strict"

var today = new Date();
//Enter the occasion's MONTH (1-12) and DAY (1-31):
var theoccasion = new Date(today.getFullYear(), 9, 5);

//Customize text to show before and on occasion. Follow grammer below:
var beforeOccasionText = "left to mark one year anniversary at ProJaro";
var onOccasiontext = "Today's mark my one year anniversary at ProJaro. Hurray!";

var monthtext = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
//change to 0-11 month format
theoccasion.setMonth(theoccasion.getMonth() - 1);
//show date of occasion
var showdate = " ( " + monthtext[theoccasion.getMonth()] + " " + theoccasion.getDate() + ", " + today.getFullYear() + " ) ";


// Milliseconds in a day
var one_day = 1000 * 60 * 60 * 24;
var calculatediff = "";
calculatediff = Math.ceil((theoccasion.getTime() - today.getTime()) / (one_day));


if (calculatediff < 0) {
    //if the day has already passed
    var nextyeartoday = new Date();
    nextyeartoday.setFullYear(today.getFullYear() + 1);
    calculatediff = Math.ceil((nextyeartoday.getTime() - today.getTime()) / (one_day) + calculatediff);
}

//Display message accordingly
var pluraldayornot = (calculatediff == 1) ? "day" : "days";
if (calculatediff > 0) {
    document.write("<b>" + calculatediff + " " + pluraldayornot + " " + beforeOccasionText + " " + showdate + "!</b>");
} else if (calculatediff == 0) {
    document.write("<b>" + onOccasiontext + " " + showdate + "!</b>");
}




// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2017 15:37:25").getTime();
var EntryYear = (new Date()).getFullYear() - 2016;

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "days  " + hours + "hours  " +
        minutes + "mins  " + seconds + "secs.";

    // If the count down is finished, write some text 
    if (distance == 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Today's marks " + EntryYear + "year(s) anniversary at ProJaro";
    } else if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Till Next year";
    }
}, 1000);
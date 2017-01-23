function countdown() {
    var today = new Date()
    var todayy = today.getFullYear();

    // // Get the month
    var todaym = theoccasion.getMonth();

    // // Get the day
    var todayd = theoccasion.getDate();
    // // Use todays hour
    var todayh = today.getHours();
    // // todays minutes
    var todaymin = today.getMinutes();
    // Todays seconds
    var todaysec = today.getSeconds();

    var todaystring = monthtext[todaym] + " " + todayd + ", " + todayy + " " + todayh + ":" + todaymin + ":" + todaysec;
    var futurestring = monthtext[todaym - 1] + " " + todayd + ", " + todayy;
    var dd = Date.parse(futurestring) - Date.parse(todaystring);
    var dday = Math.floor(dd / (60 * 60 * 1000 * 24) * 1);
    var dhour = Math.floor((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
    var dmin = Math.floor(((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
    var dsec = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);


    if (dday == 0 && dhour == 0 && dmin == 0 && dsec == 1) {
        document.getElementById("display").innerHTML = current;
        return;
    } else {
        document.getElementById("display").innerHTML = "Only " + dday + " days, " + dhour + " hours, " + dmin + " minutes, and " + dsec + " seconds left until " + before
        setTimeout("countdown()", 1000);
    }
    console.log(dd);
}
countdown();
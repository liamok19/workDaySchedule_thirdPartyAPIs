//current day of the week, and date and time of the year

var today = moment();
    $("#currentDay").text(today.format("dddd MMM Do, YYYY k:mm:ss"));

//change colo(u)r of description cell based on time of day
var hours = document.getElementsByClassName("hour");
    console.log(hours);

var currentHour = 10 //parseInt(moment().format('H')); 
    console.log(currentHour);

Array.from(hours).forEach(hour => {
    console.log(hour.dataset);
    if (currentHour == hour.dataset.hour) {
        $(hour).next().addClass("present"); //Current Hour
    } else if ((currentHour < hour.dataset.hour)) {
        $(hour).next().addClass("future"); //Future Hour/s
    } else { 
        $(hour).next().addClass("past"); //Past Hour 
    }
});

// function setColor(element, color) {
//     element.style.backgroundColor = color;
// }

// $("td#9").css("color", "green");


//data attribute 

//parseInt - 
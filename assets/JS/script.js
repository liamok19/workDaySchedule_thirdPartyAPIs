//current day of the week, and date and time of the year

var today = moment();
    $("#currentDay").text(today.format("dddd MMM Do, YYYY k:mm:ss"));

//change colo(u)r of description cell based on time of day
var hours = document.getElementsByClassName("hour");
    console.log(hours);

var currentHour = parseInt(moment().format('H')); 
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

var msgDiv = document.querySelector("#msg");
var finalSaveTask = document.querySelector(".savedTask");
console.log(finalSaveTask = "i savey save");
var savTextBtn = document.querySelector(".btn");
var emptyText = document.querySelector(".text");

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderToDoTask() {
    var description = localStorage.getItem("textAreaEL");

    // if (!description || !password) {
    // return;
    // }
    finalSaveTask.textContent = description;
}

savTextBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var description = document.querySelector("#textAreaEL").value;

    if (description == "") {
        displayMessage("error", "Enter text to save task");   
    } else (description != ""); {

        localStorage.setItem("description", description);
        renderToDoTask();
    }

});










// var savTextBtn = document.querySelector(".btn");
//     // console.log(savTextBtn + "oops I did it again");   

// var textdescription = document.querySelector(".description")
//     // console.log(textdescription = "Britney bitch");

// var emptyText = document.querySelector(".text");
//     // console.log(emptyText + ' work bitch');


// savTextBtn.addEventListener("click", function(event) {
//     event.preventDefault();

//     var description = document
//     if (emptyText === "") {
//         localStorage.setItem(".text" , emptyText);    
//     // } else (emptyText == ""); {
//     //     emptyText.textContent = ("Nothing added either type your task or move to the next hour in the day.");
//     }


// });
// console.log(savTextBtn + "circus");

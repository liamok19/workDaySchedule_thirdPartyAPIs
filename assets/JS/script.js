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


var storageInput = document.querySelector(".storage");
var text = document.querySelector(".pageRefreshText");
var button = document.querySelector ('.btn')
var storedInput = localStorage.getItem('textInput');

if (storageInput){
    text.textContent = 'Previous Set Task: ' + storedInput 
}

storageInput.addEventListener('input', letter =>{
    text.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)




// the original code i want to keep. but it's no longer required for this assignment in the future. I want to know how I was able to set-item to local storage but not able to getitem.

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

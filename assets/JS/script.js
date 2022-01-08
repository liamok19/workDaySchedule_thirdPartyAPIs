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


var storageInput10 = document.querySelector(".storage_10");
var text10 = document.querySelector(".pageRefreshText10");
var button10 = document.querySelector ('.btn10')
var storedInput10 = localStorage.getItem('textInput_10am');

if (storageInput10){
    text10.textContent = 'Previous Set Task: ' + storedInput10 
}

storageInput10.addEventListener('input', letter =>{
    text10.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_10am', text10.textContent)
}

button10.addEventListener('click', saveToLocalStorage)



var storageInput11 = document.querySelector(".storage_11");
var text11 = document.querySelector(".pageRefreshText11");
var button11 = document.querySelector ('.btn11')
var storedInput11 = localStorage.getItem('textInput_11am');

if (storageInput11){
    text11.textContent = 'Previous Set Task: ' + storedInput11
}

storageInput11.addEventListener('input', letter =>{
    text11.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_11am', text11.textContent)
}

button11.addEventListener('click', saveToLocalStorage)

var storageInput12 = document.querySelector(".storage_12");
var text12 = document.querySelector(".pageRefreshText12");
var button12 = document.querySelector ('.btn12')
var storedInput12 = localStorage.getItem('textInput_12pm');

if (storageInput12){
    text12.textContent = 'Previous Set Task: ' + storedInput12
}

storageInput12.addEventListener('input', letter =>{
    text12.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_12pm', text12.textContent)
}

button12.addEventListener('click', saveToLocalStorage)

var storageInput13 = document.querySelector(".storage_13");
var text13 = document.querySelector(".pageRefreshText13");
var button13 = document.querySelector ('.btn13')
var storedInput13 = localStorage.getItem('textInput_13pm');

if (storageInput13){
    text13.textContent = 'Previous Set Task: ' + storedInput13
}

storageInput13.addEventListener('input', letter =>{
    text13.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_13pm', text13.textContent)
}

button13.addEventListener('click', saveToLocalStorage)

var storageInput14 = document.querySelector(".storage_14");
var text14 = document.querySelector(".pageRefreshText14");
var button14 = document.querySelector ('.btn14')
var storedInput14 = localStorage.getItem('textInput_14pm');

if (storageInput14){
    text14.textContent = 'Previous Set Task: ' + storedInput14
}

storageInput14.addEventListener('input', letter =>{
    text14.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_14pm', text14.textContent)
}

button14.addEventListener('click', saveToLocalStorage)

var storageInput15 = document.querySelector(".storage_15");
var text15 = document.querySelector(".pageRefreshText15");
var button15 = document.querySelector ('.btn15')
var storedInput15 = localStorage.getItem('textInput_15pm');

if (storageInput15){
    text15.textContent = 'Previous Set Task: ' + storedInput15
}

storageInput15.addEventListener('input', letter =>{
    text15.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_15pm', text15.textContent)
}

button15.addEventListener('click', saveToLocalStorage)

var storageInput16 = document.querySelector(".storage_16");
var text16 = document.querySelector(".pageRefreshText16");
var button16 = document.querySelector ('.btn16')
var storedInput16 = localStorage.getItem('textInput_16pm');

if (storageInput16){
    text16.textContent = 'Previous Set Task: ' + storedInput16
}

storageInput16.addEventListener('input', letter =>{
    text16.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_16pm', text16.textContent)
}

button16.addEventListener('click', saveToLocalStorage)

var storageInput17 = document.querySelector(".storage_17");
var text17 = document.querySelector(".pageRefreshText17");
var button17 = document.querySelector ('.btn17')
var storedInput17 = localStorage.getItem('textInput_17pm');

if (storageInput17){
    text17.textContent = 'Previous Set Task: ' + storedInput17
}

storageInput17.addEventListener('input', letter =>{
    text17.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_17pm', text17.textContent)
}

button17.addEventListener('click', saveToLocalStorage)

var storageInput18 = document.querySelector(".storage_18");
var text18 = document.querySelector(".pageRefreshText18");
var button18 = document.querySelector ('.btn18')
var storedInput18 = localStorage.getItem('textInput_18pm');

if (storageInput18){
    text18.textContent = 'Previous Set Task: ' + storedInput18
}

storageInput18.addEventListener('input', letter =>{
    text18.textContent = letter.target.value
})

var saveToLocalStorage = () => {
    localStorage.setItem('textInput_18pm', text18.textContent)
}

button18.addEventListener('click', saveToLocalStorage)



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

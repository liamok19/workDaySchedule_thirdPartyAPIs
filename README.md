# workDaySchedule_thirdPartyAPIs

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Table of Contents
- [Strategy](#strategy)
- [Assets](#assets)
- [Links](#links)
- [Credits](#credits)
- [License](#license)


### State of Play - Strategy

| Task       | Progress      | 
| ------------- |:-------------:| 
|  Build READme Strategy Plan   | Complete | 
|  Asses HTML and CSS and push script.js to repo  | Complete | 
|  Page to display the planner with timeblocks  | Complete | 
|  The current date is displayed at the top of the page   | Complete | 
|  Description block changes colour according to time of day (past, present and future )| Completed | 
|  Timeblock description cell to allow user to type   | Complete | 
|  The timeblock event details are saved with the SaveBtn and kept in local storage   | Completed | 
|  Refreshing the page should still contain the save events   | Completed | 
| This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. | Completed |
 |Moment.js library utilised to work with date and time. | Completed | 


## Assets
![dayplannerref](./assets/Images/workDayScheduler.gif)

## Links
Github Link:
https://github.com/liamok19/workDaySchedule_thirdPartyAPIs
Website Link:
https://liamok19.github.io/workDaySchedule_thirdPartyAPIs/

## Credits

Based on the research I found the following sources that I would like to credit for this project: 
| Source        | Platform      | Other  |
| ------------- |:-------------:| -----:|
| Web Dev Simplified    | Youtube      |Title: Build A Quiz App With JavaScript  | 
| #ask your classmaters | Slack      |Conversations between instructors and classmates |
| Tutor: Renato Stretti | USYD: Zoom Private Class    | Title:Sunday Session  |
| JQuery   |    https://jquery.com/  | Title:  jQuery API |
| iEatWebsites  |    Youtube  | Title: LocalStorage for beginners (HTML and Javascript) |
|  StackOverflow |   Stack Overflow   | Title: How to save the text content of a button clicked to a variable  |

## License
- Existing projects and communities, this README file is publicly open for reference and review. 


## Notes
05/01/2022 - Review display grid from previous lesson
06/01/2022 - Discuss with Class Teachers the JQuery process to colourise the hour using moment.js
08/01/2022 - Research and auotmated process for the local storage not having to be re-written. Potential for loop?
10/01/2022 - Once all saves completed leave a message for the user. Confetti graphic "Yipee your calendar is set for today" ;) 

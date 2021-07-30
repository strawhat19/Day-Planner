// Work Day Schedule
console.log('Work Day Schedule!');

// Main Variables
var currentDay = $('#currentDay');
var hourRowContainer = $('.hourRowsContainer');

// Events
var nineAmEvents = JSON.parse(localStorage.getItem("Nine Events")) || [];
var tenAmEvents = JSON.parse(localStorage.getItem("Ten Events")) || [];
var elevenAmEvents = JSON.parse(localStorage.getItem("Eleven Events")) || [];
var twelvePmEvents = JSON.parse(localStorage.getItem("Twelve Events")) || [];
var onePmEvents = JSON.parse(localStorage.getItem("One Events")) || [];
var twoPmEvents = JSON.parse(localStorage.getItem("Two Events")) || [];
var threePmEvents = JSON.parse(localStorage.getItem("Three Events")) || [];
var fourPmEvents = JSON.parse(localStorage.getItem("Four Events")) || [];
var fivePmEvents = JSON.parse(localStorage.getItem("Five Events")) || [];

// -----------------------------------Generating Dynamic Hour Rows -------------------------------- //

// Hours in Work Day
var timeFormat = 'h:mm a';
var rightNow = moment();
var hourStart = moment().startOf('hour');
var hourEnd = moment().endOf('hour');
var startDay = moment('09', timeFormat).format(timeFormat); // Getting 9am as starting the day
var tenAm = moment('10', timeFormat).format(timeFormat);
var elevenAm = moment('11', timeFormat).format(timeFormat);
var twelvePm = moment('12', timeFormat).format(timeFormat);
var onePm = moment('13', timeFormat).format(timeFormat);
var twoPm = moment('14', timeFormat).format(timeFormat);
var threePm = moment('15', timeFormat).format(timeFormat);
var fourPm = moment('16', timeFormat).format(timeFormat);
var endDay = moment('17', timeFormat).format(timeFormat); // Setting 5pm as end the day

// Storing hours of day in Array
var workDayHours = [startDay,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,endDay];
var [startTime,,,,,,,,endTime] = workDayHours;
console.log('Work Day is: ' + startTime + ' through ' + endTime); // 9 am through 5 pm

// Creating dynamic rows for each Hour
var status = '';
workDayHours.forEach(function(hour,index) {
    var newIndex = index + 9;
    var hourRow = $(`<div class="hourRow">
    <span class="hour">${hour}</span>
    </div>`); // Creating Hour Rows
    hourRow.attr('data-hour',newIndex);
    hourRow.attr('data-time',hour);
    var buttonContainer = $('<div class="buttonContainer">');
        // Time Detection
        if (hourRow.data('hour') < moment().hours()) {
            status = 'past'; // Below the current hour
        } else if (hourRow.data('hour') === moment().hours()) {
            status = 'present'; // If its the current hour
        } else { // Everything Else
            status = 'future';
        } // Appending Hour Rows
    hourRow.append($(`<input class="userInputField ${status} insetShadow" type="textarea" placeholder="Enter Event">`)); // Textarea Input
    hourRow.append($(`<div class="eventContainer ${status} insetShadow" id="hour${index}"></div>`)); // Creating Event Containers
    buttonContainer.append('<button class="saveButton insetShadow">'); // Creating Save Button
    buttonContainer.append('<button class="clearButton insetShadow"><i class="fas fa-times"></i>'); // Creating Clear Button
    hourRow.append(buttonContainer);
    hourRowContainer.append(hourRow); // Append everything to the row, and append the row to the hour row container
})

// -----------------------------------End Generating Dynamic Hour Rows -------------------------------- //

    // Checking if Input are in the past
    if ($('input.past')) {
        $('input.past').attr('placeholder','This Time has Passed');
        $('input.past').prop('disabled',true);
    }

    // Getting inputs & buttons
    var saveButton = $('.saveButton');
    saveButton.on('click',function(event) {
        var eventInfo = $(event.target).parent().parent().children().eq(1).val();
        var eventContainer = $(event.target).parent().parent().children().eq(2);
        if(!eventInfo) {
            eventContainer.html('Please Enter an Event to Save!');
            return;
        } else { // Storing Events
            if ($(event.target).parent().parent().data('hour') === 9) {
                nineAmEvents.push(eventInfo);
                localStorage.setItem("Nine Events",JSON.stringify(nineAmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 10) {
                tenAmEvents.push(eventInfo);
                localStorage.setItem("Ten Events",JSON.stringify(tenAmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 11) {
                elevenAmEvents.push(eventInfo);
                localStorage.setItem("Eleven Events",JSON.stringify(elevenAmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 12) {
                twelvePmEvents.push(eventInfo);
                localStorage.setItem("Twelve Events",JSON.stringify(twelvePmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 13) {
                onePmEvents.push(eventInfo);
                localStorage.setItem("One Events",JSON.stringify(onePmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 14) {
                twoPmEvents.push(eventInfo);
                localStorage.setItem("Two Events",JSON.stringify(twoPmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 15) {
                threePmEvents.push(eventInfo);
                localStorage.setItem("Three Events",JSON.stringify(threePmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 16) {
                fourPmEvents.push(eventInfo);
                localStorage.setItem("Four Events",JSON.stringify(fourPmEvents));
            } else if ($(event.target).parent().parent().data('hour') === 17) {
                fivePmEvents.push(eventInfo);
                localStorage.setItem("Five Events",JSON.stringify(fivePmEvents));
            }
            location.reload(true);
        }
    })

     // Getting clear buttons
     var clearButton = $('.clearButton');
     clearButton.on('click',function(event) {
         console.log($(event.currentTarget));
         // Clearing Events
             if ($(event.currentTarget).parent().parent().data('hour') === 9) {
                 localStorage.removeItem('Nine Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 10) {
                localStorage.removeItem('Ten Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 11) {
                 localStorage.removeItem('Eleven Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 12) {
                 localStorage.removeItem('Twelve Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 13) {
                localStorage.removeItem('One Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 14) {
                localStorage.removeItem('Two Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 15) {
                 localStorage.removeItem('Three Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 16) {
                 localStorage.removeItem('Four Events');
             } else if ($(event.currentTarget).parent().parent().data('hour') === 17) {
                 localStorage.removeItem('Five Events');
             }
             location.reload(true);
     })

// Update Todays Time
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
currentDay.html(today);
var todayUpdate = setInterval(function() {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    currentDay.html(today);
}, 1000);

// Appending Stored Events from Local Storage for each Row
nineAmEvents.forEach(event => {
    var nineAmEventDivs = $('<div class="event">');
    nineAmEventDivs.html('- ' + event);
    $('#hour0').append(nineAmEventDivs);
})

tenAmEvents.forEach(event => {
    var tenAmEventDivs = $('<div class="event">');
    tenAmEventDivs.html('- ' + event);
    $('#hour1').append(tenAmEventDivs);
})

elevenAmEvents.forEach(event => {
    var elevenAmEventDivs = $('<div class="event">');
    elevenAmEventDivs.html('- ' + event);
    $('#hour2').append(elevenAmEventDivs);
})

twelvePmEvents.forEach(event => {
    var twelvePmEventDivs = $('<div class="event">');
    twelvePmEventDivs.html('- ' + event);
    $('#hour3').append(twelvePmEventDivs);
})

onePmEvents.forEach(event => {
    var onePmEventDivs = $('<div class="event">');
    onePmEventDivs.html('- ' + event);
    $('#hour4').append(onePmEventDivs);
})

twoPmEvents.forEach(event => {
    var twoPmEventDivs = $('<div class="event">');
    twoPmEventDivs.html('- ' + event);
    $('#hour5').append(twoPmEventDivs);
})

threePmEvents.forEach(event => {
    var threePmEventDivs = $('<div class="event">');
    threePmEventDivs.html('- ' + event);
    $('#hour6').append(threePmEventDivs);
})

fourPmEvents.forEach(event => {
    var fourPmEventDivs = $('<div class="event">');
    fourPmEventDivs.html('- ' + event);
    $('#hour7').append(fourPmEventDivs);
})

fivePmEvents.forEach(event => {
    var fivePmEventDivs = $('<div class="event">');
    fivePmEventDivs.html('- ' + event);
    $('#hour8').append(fivePmEventDivs);
})

// Clear Button Main
var clearButtonMain = $('.clearButtonMax');
clearButtonMain.on('click',function(event) {
    localStorage.clear();
    location.reload(true);
})

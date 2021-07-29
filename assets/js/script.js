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
console.log(' Hour Start is: ' + hourStart + '\n' + ' Hour End is: ' + hourEnd);
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
                    </div>`);
    hourRow.attr('data-time',hour);
    hourRow.attr('data-hour',newIndex);
    hourRow.append($(`<input class="userInputField ${status}" type="textarea" placeholder="Enter Event">`));
    hourRow.append($(`<div class="eventContainer" id="hour${index}"></div>`));
    hourRow.append('<button class="saveButton">');
    hourRowContainer.append(hourRow);

    // Getting the moment of each Hour Row and putting it into timeFormat
    var hourRowMoment = moment((hourRow.data('hour')),timeFormat).format(timeFormat);

    // if (moment((hourRow.data('hour'))).isBefore(moment().startOf('hour'))) {
    //     status = 'past';
    //     console.log(hourRowMoment + ' is Before ' + hourStart.format(timeFormat));
    // } else if (moment((hourRow.data('hour'))).isAfter(moment().startOf('hour'))) {
    //     status = 'future';
    //     console.log(hourRowMoment + ' is After ' + hourStart.format(timeFormat));
    // } else if (moment((hourRow.data('hour'))).isBetween(moment().startOf('hour')),(moment().endOf('hour'))) {
    //     status = 'present';
    //     console.log(hourRowMoment + ' is Between ' + hourStart.format(timeFormat) + ' and ' + hourEnd.format(timeFormat));
    // }

    if (hourRow.data('hour') < moment().startOf('hour')) {
        status = 'past';
        console.log(hourRowMoment + ' is Before ' + hourStart.format(timeFormat));
    } 
    
    if (hourRow.data('hour') > moment().endOf('hour')) {
        status = 'future';
        console.log(hourRowMoment + ' is After ' + hourStart.format(timeFormat));
    }
    
    if (hourRow.data('hour') < moment().startOf('hour') && hourRow.data('hour') > moment().endOf('hour')) {
        status = 'present';
        console.log(hourRowMoment + ' is Between ' + hourStart.format(timeFormat) + ' and ' + hourEnd.format(timeFormat));
    }

    // var hourRowData = hourRow.data('hour');

    // console.log(hourRow);

    
    console.log((hourRow.data('hour')));
    // console.log(hourRowData);
    // // console.log(moment(hourRow.data('hour')).format('hh'));
    // console.log(moment(hourRowData).format(timeFormat));
    
    // var timeDetection = setInterval(function() {
        //     if (moment((hourRow.data('hour'))).isBefore(moment().startOf('hour'))) {
            //         status = 'past';
            //         console.log(hourRowMoment + ' is Before ' + hourStart.format(timeFormat));
            //     } else if (moment((hourRow.data('hour'))).isAfter(moment().startOf('hour'))) {
                //         status = 'future';
                //         console.log(hourRowMoment + ' is After ' + hourStart.format(timeFormat));
                //     } else if (moment((hourRow.data('hour'))).isBetween(moment().startOf('hour')),(moment().endOf('hour'))) {
                    //         status = 'present';
                    //         console.log(hourRowMoment + ' is Between ' + hourStart.format(timeFormat) + ' and ' + hourEnd.format(timeFormat));
                    //     }
                    // }, 30000)
    
})

    // Getting inputs & buttons
    var saveButton = $('.saveButton');
    saveButton.on('click',function(event) {
        var eventInfo = $(event.target).parent().children().eq(1).val();
        var eventContainer = $(event.target).parent().children().eq(2);
        if(!eventInfo) {
            eventContainer.html('Please Enter an Event to Save!');
            return;
        } else {
            if ($(event.target).parent().data('hour') === 9) {
                nineAmEvents.push(eventInfo);
                localStorage.setItem("Nine Events",JSON.stringify(nineAmEvents));
            } else if ($(event.target).parent().data('hour') === 10) {
                tenAmEvents.push(eventInfo);
                localStorage.setItem("Ten Events",JSON.stringify(tenAmEvents));
            } else if ($(event.target).parent().data('hour') === 11) {
                elevenAmEvents.push(eventInfo);
                localStorage.setItem("Eleven Events",JSON.stringify(elevenAmEvents));
            } else if ($(event.target).parent().data('hour') === 12) {
                twelvePmEvents.push(eventInfo);
                localStorage.setItem("Twelve Events",JSON.stringify(twelvePmEvents));
            } else if ($(event.target).parent().data('hour') === 13) {
                onePmEvents.push(eventInfo);
                localStorage.setItem("One Events",JSON.stringify(onePmEvents));
            } else if ($(event.target).parent().data('hour') === 14) {
                twoPmEvents.push(eventInfo);
                localStorage.setItem("Two Events",JSON.stringify(twoPmEvents));
            } else if ($(event.target).parent().data('hour') === 15) {
                threePmEvents.push(eventInfo);
                localStorage.setItem("Three Events",JSON.stringify(threePmEvents));
            } else if ($(event.target).parent().data('hour') === 16) {
                fourPmEvents.push(eventInfo);
                localStorage.setItem("Four Events",JSON.stringify(fourPmEvents));
            } else if ($(event.target).parent().data('hour') === 17) {
                fivePmEvents.push(eventInfo);
                localStorage.setItem("Five Events",JSON.stringify(fivePmEvents));
            }
            location.reload(true);
        }
    })


    // console.log(moment().startOf('hour'));
    // console.log(moment().endOf('hour'));

// -----------------------------------End Generating Dynamic Hour Rows -------------------------------- //


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
    if ($('.eventContainer').html() === '<div class="event">Please Enter an Event to Save!</div>') {
        $('.eventContainer').html('');
    }
    $('#hour0').append(nineAmEventDivs);
})

tenAmEvents.forEach(event => {
    var tenAmEventDivs = $('<div class="event">');
    tenAmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour1').append(tenAmEventDivs);
})

elevenAmEvents.forEach(event => {
    var elevenAmEventDivs = $('<div class="event">');
    elevenAmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour2').append(elevenAmEventDivs);
})

twelvePmEvents.forEach(event => {
    var twelvePmEventDivs = $('<div class="event">');
    twelvePmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour3').append(twelvePmEventDivs);
})

onePmEvents.forEach(event => {
    var onePmEventDivs = $('<div class="event">');
    onePmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour4').append(onePmEventDivs);
})

twoPmEvents.forEach(event => {
    var twoPmEventDivs = $('<div class="event">');
    twoPmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour5').append(twoPmEventDivs);
})

threePmEvents.forEach(event => {
    var threePmEventDivs = $('<div class="event">');
    threePmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour6').append(threePmEventDivs);
})

fourPmEvents.forEach(event => {
    var fourPmEventDivs = $('<div class="event">');
    fourPmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour7').append(fourPmEventDivs);
})

fivePmEvents.forEach(event => {
    var fivePmEventDivs = $('<div class="event">');
    fivePmEventDivs.html('- ' + event);
    if ($('.eventContainer').html() === 'Please Enter an Event to Save!') {
        $('.eventContainer').html('');
    }
    $('#hour8').append(fivePmEventDivs);
})

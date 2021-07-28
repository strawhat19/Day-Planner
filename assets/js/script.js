// var today = [
//     {
//         hour: moment().format('hh'),
//         events: '',
//     }
// ];

var hours = [];
var currentDay = $('#currentDay');
var hourRowContainer = $('.hourRowsContainer');

// 9AM Events
var nineAmEvents = localStorage.getItem('9:00 am events') || [];
// var tenAmEvents = JSON.parse(localStorage.getItem('10:00 am events')) || [];
// var elevenAmEvents = JSON.parse(localStorage.getItem('11:00 am events')) || [];
// var twelvePmEvents = JSON.parse(localStorage.getItem('12:00 pm events')) || [];
// var onePmEvents = JSON.parse(localStorage.getItem('1:00 pm events')) || [];
// var twoPmEvents = JSON.parse(localStorage.getItem('2:00 pm events')) || [];
// var threePmEvents = JSON.parse(localStorage.getItem('3:00 pm events')) || [];
// var fourPmEvents = JSON.parse(localStorage.getItem('4:00 pm events')) || [];
// var fivePmEvents = JSON.parse(localStorage.getItem('5:00 pm events')) || [];


// -----------------------------------Generating Dynamic Hour Rows -------------------------------- //
// Hours in Work Day
var timeFormat = 'h:mm a';
// var rightNow = moment().format(timeFormat);
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
    hourRow.append($(`<div class="eventContainer"></div>`));
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

    // Getting inputs
    var saveButton = $('.saveButton');
    // $('.eventContainer').html('Event Container');
    saveButton.on('click',function(event) {
        var eventInfo = $(event.target).parent().children().eq(1).val();
        var eventContainer = $(event.target).parent().children().eq(2);
        if(!eventInfo) {
            eventContainer.html('Please Enter an Event to Save!');
            return;
        } else {
            localStorage.setItem($(event.target).parent().children().eq(0).html() + ' events', eventInfo);
            if($(event.target).parent().children().eq(0).html().split('')[0] === 9) {
                nineAmEvents.push(eventInfo);
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


var newEvent = $('<div class="event">');
newEvent.html(nineAmEvents);
// if ($('.eventContainer').html() === 'Please Enter an Event to Save!' || $('.eventContainer').html() === 'Event Container') {
//     $('.eventContainer').html('');
// }
$('.eventContainer').append(newEvent);
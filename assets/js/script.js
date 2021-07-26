// var today = [
//     {
//         hour: moment().format('hh'),
//         events: '',
//     }
// ];

var hours = [];
var currentDay = $('#currentDay');
var hourRowContainer = $('.hourRowsContainer');

// -----------------------------------Generating Dynamic Hour Rows -------------------------------- //
// Hours in Work Day
var timeFormat = 'h A';
// var rightNow = moment().format(timeFormat);
var rightNow = moment();
var startDay = moment('09', timeFormat).format(timeFormat); // Getting 9am as starting the day
var startDay2 = moment('09'); // Getting 9am as starting the day
var tenAm = moment('10', timeFormat).format(timeFormat);
var elevenAm = moment('11', timeFormat).format(timeFormat);
var twelvePm = moment('12', timeFormat).format(timeFormat);
var onePm = moment('13', timeFormat).format(timeFormat);
var twoPm = moment('14', timeFormat).format(timeFormat);
var threePm = moment('15', timeFormat).format(timeFormat);
var fourPm = moment('16', timeFormat).format(timeFormat);
var endDay = moment('17', timeFormat).format(timeFormat); // Setting 5pm as end the day

var test = moment().format('h');
if (startDay2.isBefore(rightNow)) {
    console.log(startDay2.format('h A'));
}

// Storing hours of day in Array
var workDayHours = [startDay,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,endDay];

// Creating dynamic rows for each Hour
workDayHours.forEach(hour => {
    var hourRow = $('<div class="hourRow">');
    hourRow.attr('data-value',hour);
    hourRow.html(hour);
    hourRowContainer.append(hourRow);
    // var hourTimeValue = hourRow.html().split(' ');
    // console.log(hourTimeValue[0]);

})

// If time

// -----------------------------------End Generating Dynamic Hour Rows -------------------------------- //


// Update Todays Time
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
currentDay.html(today);
var todayUpdate = setInterval(function() {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    currentDay.html(today);
}, 1000);
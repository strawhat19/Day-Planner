// var today = [
//     {
//         hour: moment().format('hh'),
//         events: '',
//     }
// ];

var hours = [];
var currentDay = $('#currentDay');
var hourRowContainer = $('.hourRowsContainer');
// var time ="Hello";
// var timeRowTest = $(`<div class="col">${time}</div>`);

// hourRowContainer.append(timeRowTest);

// -----------------------------------Generating Dynamic Hour Rows -------------------------------- //
// Hours in Work Day
var timeFormat = 'h a';
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
// var [startTime,,,,,,,,endTime,...rest] = workDayHours;
var [startTime,,,,,,,,endTime,...rest] = workDayHours;
console.log(startTime + ' ' + endTime);
console.log(rest);

// Creating dynamic rows for each Hour
workDayHours.forEach(hour => {
    var hourRow = $(`<div class="hourRow">
                        <span class="hour">${hour}</span>
                    </div>`);
    hourRow.attr('data-value',hour);
    // var input = $('textarea')
    hourRow.append($('<input class="userInputField" type="textarea">'));
    hourRow.append('<button class="saveButton"><i class="fas fa-save">');
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
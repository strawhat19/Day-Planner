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
// console.log(startTime + ' through ' + endTime); // 9 am through 5 pm

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
    hourRow.append('<button class="saveButton"><i class="fas fa-save">');
    hourRowContainer.append(hourRow);

    // Getting the moment of each Hour Row and putting it into timeFormat
    var hourRowMoment = moment((hourRow.data('hour')),timeFormat).format(timeFormat);

    if (moment((hourRow.data('hour'))).isBefore(hourStart)) {
        status = 'past';
        console.log(hourRowMoment + ' is Before ' + hourStart.format(timeFormat));
    } else if (moment((hourRow.data('hour'))).isAfter(hourStart)) {
        status = 'future';
        console.log(hourRowMoment + ' is After ' + hourStart.format(timeFormat));
    } else if (moment((hourRow.data('hour'))).isBetween(hourStart),(hourEnd)) {
        status = 'present';
        console.log(hourRowMoment + ' is Between ' + hourStart.format(timeFormat) + ' and ' + hourEnd.format(timeFormat));
    }

})

// -----------------------------------End Generating Dynamic Hour Rows -------------------------------- //


// Update Todays Time
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
currentDay.html(today);
var todayUpdate = setInterval(function() {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    currentDay.html(today);
}, 1000);



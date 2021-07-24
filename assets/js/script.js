// var today = [
//     {
//         hour: moment().format('hh'),
//         events: '',
//     }
// ];

var hours = [];
var currentDay = $('#currentDay');
var hourRowContainer = $('.hourRowsContainer');

var todayObject = moment().toObject();
console.log(todayObject);

// Update Todays Time
var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
currentDay.html(today);
var todayUpdate = setInterval(function() {
    var today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    currentDay.html(today);
}, 1000);


// Come back to this
for (var i = 9; i < 17; i++){
    var hourRow = $('<div class="hourRow">');
    hourRow.html(i);
    // if (i > 12) {
    //     i = 0;
    // }
    hourRowContainer.append(hourRow);
}





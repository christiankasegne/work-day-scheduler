$(document).ready(function () {
  var currentDay = dayjs().format('dddd, MMMM, D');
  $('#currentDay').text(currentDay);
});

var saveBtn = document.querySelectorAll('.saveBtn');

saveBtn.forEach(function (window) {
  window.addEventListener('click', function () {
    var description = $(this).siblings('.description').val();

    var time = $(this).parent().attr('id');

    localStorage.setItem(time, description);
  });
});

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));




// the color is not working... no matter what logic I try IT WON'T WORK! I give in.
var now = dayjs(`h`)
let nowtHour = '';
$('.time-block').addClass(function () {
  return +this.id === nowtHour
    ? 'present'
    : +this.id < nowtHour
    ? 'past'
    : 'future';
});


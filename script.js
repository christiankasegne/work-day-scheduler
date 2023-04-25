$(document).ready(function () {

  var currentDay = dayjs().format("dddd, MMMM, Do");
  
  $("#currentDay").text(currentDay);

  
})

let nowHour = 13; 
$('.description').addClass(function() {
  return +this.id === nowHour ? 'present' : +this.id < nowHour ? 'past' : 'future'; 
});
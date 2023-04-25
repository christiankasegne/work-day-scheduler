$(document).ready(function () {
  var currentDay = dayjs().format("dddd, MMMM, Do");
  $("#currentDay").text(currentDay);


  var presentTime = dayjs().format("");
  
})
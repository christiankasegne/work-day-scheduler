$(document).ready(function () {
  var currentDay = moment().format("dddd, MMMM, Do");
  $("#currentDay").text(currentDay);


  var presentTime = moment().format("H");
  
})
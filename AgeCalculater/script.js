$(document).ready(function () {
  $("#calculateBtn").click(function () {
    var dob = new Date($("#dob").val());
    var currentDate = new Date($("#currentDate").val());

    if (isNaN(dob) || isNaN(currentDate)) {
      $("#result").text("Please enter valid dates.");
      return;
    }

    var ageInMillis = currentDate - dob;
    var ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365.25));

    $("#result").text("Your age is " + ageInYears + " years.");
  });
});

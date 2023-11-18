$(document).ready(function () {
  $("#calculateButton").click(function () {
    show();
  });

  $(".close-icon").click(function () {
    $("#errorMessage").hide();
  });
});

function show() {
  var n = parseInt($("#numberInput").val());
  var l = parseInt($("#limitInput").val());

  if (isNaN(n) || n < 1 || n > 30) {
    $("#numberInput").val("").focus();
    $("#errorMessage").show();
    return;
  }

  if (isNaN(n) || n < 1 || n > 30) {
    $("#limitInput").val("").focus();
    $("#errorMessage").show();
    return;
  }

  $("#errorMessage").hide();
  $("#tableContainer").empty();

  var table = $("<table></table>").appendTo("#tableContainer");

  for (var i = 1; i <= l; i++) {
    var row = $("<tr></tr>").appendTo(table);

    $("<td></td>").text(n).appendTo(row);
    $("<td></td>").text("*").appendTo(row);
    $("<td></td>").text(i).appendTo(row);
    $("<td></td>")
      .text(n * i)
      .appendTo(row);
  }
}

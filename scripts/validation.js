$(document).ready(function() {

  $("#form").on("submit", function() {
    var formValid = true;

    //storing number of days checked off
    var numDays = $("#checkDays input[type=checkbox]:checked").length;

    console.log(numDays);

    //if at least one day is selected
    if(numDays > 0) {
      //hide error
      $("#daysError").addClass("hidden");
    } else {
      //do not submit form
      formValid = false;
      //show error
      $("#daysError").removeClass("hidden");
    }

    //storing information on likes/dislikes
    var validGeneral = $("#general").prop("validity").valid;

    //if there is input in general
    if(validGeneral) {
      //hide error
      $("#generalError").addClass("hidden");
    } else {
      //do not submit form
      formValid = false;
      //show error
      $("#generalError").removeClass("hidden");
    }

    return formValid;
  })
})

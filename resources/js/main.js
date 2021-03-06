$(document).ready(function () {
  // target audience functions
  $('#targetAudienceButton').click(function () {
    targetAudience = $('#targetAudience').val();
    $('#targetAudienceListGroup').append("<li>" + targetAudience + "<a href='javascript:void(0)' class='clear' style='color:red;'><i>❌</i> </a></li>");

    $("#targetAudienceListGroup a.clear").click(function () {
      $(this).parent().remove();
      return false;
    });
  });

  // requisite functions
  $('#requisiteButton').click(function () {
    requisite = $('#requisite').val();
    $('#requisiteListGroup').append("<li>" + requisite + "<a href='javascript:void(0)' class='clear' style='color:red;'><i>❌</i> </a></li>");

    $("#requisiteListGroup a.clear").click(function () {
      $(this).parent().remove();
      return false;
    });
  });

  // course program functions
  $('#courseProgramButton').click(function () {
    courseProgram = $('#courseProgram').val();
    $('#courseProgramListGroup').append("<li>" + courseProgram + "<a href='javascript:void(0)' class='clear' style='color:red;'><i>❌</i> </a></li>");

    $("#courseProgramListGroup a.clear").click(function () {
      $(this).parent().remove();
      return false;
    });
  });

  // tools functions
  $('#toolsButton').click(function () {
    tools = $('#tools').val();
    $('#toolsListGroup').append("<li>" + tools + "<a href='javascript:void(0)' class='clear' style='color:red;'><i>❌</i> </a></li>");

    $("#toolsListGroup a.clear").click(function () {
      $(this).parent().remove();
      return false;
    });
  });

  // evaluation process functions
  $('#evaluationProcessButton').click(function () {
    evaluationProcess = $('#evaluationProcess').val();
    $('#evaluationProcessListGroup').append("<li>" + evaluationProcess + "<a href='javascript:void(0)' class='clear' style='color:red;'><i>❌</i> </a></li>");

    $("#evaluationProcessListGroup a.clear").click(function () {
      $(this).parent().remove();
      return false;
    });
  });

  // toast functions
  $('#formButton').click(function () {
    courseName = $('#courseName').val();

    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-left",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "200",
      "hideDuration": "200",
      "timeOut": "1500",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    toastr["success"](`${courseName} added`, "Sucess");

    window.setTimeout(function () {
      window.location.href = "index.html";
    }, 1500);
  });
});
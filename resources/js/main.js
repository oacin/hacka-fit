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
});
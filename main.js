var URL = "https://u7v9xytsb9.execute-api.us-east-1.amazonaws.com/01/contact";
//var URL = "https://u7v9xytsb9.execute-api.us-east-1.amazonaws.com/01/contact-tchorzewski";

document.getElementById("contact-form").addEventListener("click", function(event){
event.preventDefault()
});

function subscribeNow(e) {
  console.log("subscribeNow", e);
  e.preventDefault();

 var data = {
    name: 'n/a',
    email: $('#stay-updated-email').val(),
    subject: 'subscribe email',
    origin: 'TT',
    message: 'I would like to subscribe',
  };

  console.log("this is payload, subscribe email", data);

  $("#stay-updated-form").hide();
  $("#stay-updated-spinner").show();

   $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      success: function () {

        console.log("Successfull");

        $("#stay-updated-spinner").hide();
        $("#stay-updated-confirmation").html("Thanks for registering your interest!");

      },
      error: function () {

       console.log("UnSuccessfull");

        $("#stay-updated-spinner").hide();
        $("#stay-updated-confirmation").html("Ooops, something went wrong. Please try again later.");
      }});
}

function sendMessage(e) {
  console.log("SEND MESSAGE", e);
 e.preventDefault();

 var data = {
    name: $('#contact-name').val(),
    email: $('#contact-email').val(),
    subject: $('#contact-subject').val(),
    origin: 'TT',
    message: $('#contact-message').val(),
  };

  console.log("this is payload", data);

   $("#contact-form").hide();

   $("#send-message-spinner").show();

   $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function () {

        console.log("Successfull");

        $("#send-confirmation").html("Message sent successfully");
        $("#send-message-spinner").hide();
      },
      error: function () {

        console.log("UnSuccessfull");

        $("#send-confirmation").html("An error occured");
        $("#send-message-spinner").hide();
      }});
}

$(document).on('scroll', function() {
  var fromTop = $(document).scrollTop();
  //console.log('scrolling', fromTop);
  if (fromTop >= 100) {
    console.log("SCROLLED DOWN");
    $("#top-header").css("position", "fixed");
  } else {
    console.log("SCROLLED UP");
    $("#top-header").css("position", "relative");
  }
});

/*
$(window).scroll(function() {
  console.log("scrolled");
  var scroll = $(window).scrollTop();
  // fixed header
  // header color
  if (scroll >= 61) {
    console.log("SCROLLED DOWN");
    header.addClass("scrolled");
  } else {
    console.log("SCROLLED UP");
    header.removeClass("scrolled");
  }
}
*/
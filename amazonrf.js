alert("I am here");

$("#thank").click(function(){
  $("#thank").addClass("pressed").html("<b>Thank you for reading my page</b>");
  $("#thank").fadeIn(1000).fadeOut(1000).fadeIn(1000);

})

///twitter///

$(".fa-twitter").click(
  function(){
$(".fa-twitter").html("<em> I don't like to twitter.<em>");

  }
)
//instagram
$(".fa-instagram-square").click(
  function(){
//    $(".fab").css("color", "red");
$(".fa-instagram-square").html("<em>..Instagram not a cool place..<em>");

  }
)
//Email
$(".fa-envelope-square").click(
  function(){
//    $(".fab").css("color", "red");
$(".fa-envelope-square").html("<em>Email does exsist<em>");

  }
)

//youtube
$(".fa-youtube-square").click(
  function(){
//    $(".fab").css("color", "red");
$(".fa-youtube-square").html("<a href='https://www.youtube.com/channel/UCbzx5-Jny1Yajpdb-NEAV0Q/featured' target='_blank'> Vidoes are very bad</a>");

  }
)

$(".fa-facebook-f").click(
  function(){
$(".fa-facebook-f").fadeIn(1000).fadeOut(1000).fadeIn(1000);
$(".fa-facebook-f").html("<em> Sorry..don't have the account..Facebook angry and red now..<em>");
$(".fa-facebook-f").css("color", "red");
//$(".fa-facebook-f").addClass("pressed");
// setTimeout(function () {
//   $(".fa-facebook-f").removeClass("pressed");
// }, 1000);
  }
)

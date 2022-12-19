// start LIA


function openCurriculum(evt, className) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(className).style.display = "block";
  evt.currentTarget.className += " active";
}
//end lia





$(document).ready(function () {



  console.log("javascript")
  $("#calloutquote2").hide();
  $("#calloutquote3").hide();
  $("#calloutquote4").hide();
  $("#sectiontwo").slideDown(1000);

  setInterval(myFunc, 1000);

  // THIS IS DONE below

  $("#empowertxt").hide();
  $("#preservetxt").hide();
  $("#protecttxt").hide();


  $("#tagline").slideUp(500).slideDown(3000);
  $("#sectiontwo").slideUp(500).slideDown(3000);



  $("#empowerbtn").click(function () {
    $("#empowerbtn").prop("disabled", "true")
    $("#empowertxt").fadeIn(1500);
    $("#empowerbtn:hover").css("background-color", "transparent")
    $("#empowerbtn").css("opacity", "10%")

  });

  $("#preservebtn").click(function () {
    $("#preservebtn").prop("disabled", "true")
    $("#preservetxt").fadeIn(1500);
    $("#preservebtn:hover").css("background-color", "transparent")
    $("#preservebtn").css("opacity", "10%")



  });

  $("#protectbtn").click(function () {
    $("#protectbtn").prop("disabled", "true")
    $("#protecttxt").fadeIn(1500);
    $("#protectbtn:hover").css("background-color", "transparent")
    $("#protectbtn").css("opacity", "10%")

  });
});




function myFunc() {

  setTimeout(myFunc7, 3000);
  setTimeout(myFunc5, 6000);
  setTimeout(myFunc6, 12000);


}

function myFunc7() {
  $("#calloutquote1").fadeIn(3000);
  $("#calloutquote1").fadeOut(3000);
}

function myFunc5() {
  $("#calloutquote1").remove();
  $("#calloutquote2").fadeIn(3000);
  $("#calloutquote2").fadeOut(3000);
}

function myFunc6() {
  $("#calloutquote2").remove();
  $("#calloutquote3").fadeIn(3000);


}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btntwo = document.getElementById("myDonateBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

btntwo.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
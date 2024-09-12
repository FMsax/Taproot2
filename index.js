let selectedPictureX;
let selectedPictureO;
let flag = 1;
let count = 0;

function selectPicture(img) {
  if (selectedPictureX === undefined) {
    selectedPictureX = img.src;
    img.style.display = "none";
  } else if (selectedPictureO === undefined && img.src !== selectedPictureX) {
    selectedPictureO = img.src;
    img.style.display = "none";
    // Hide the picture selection menu
    document.getElementById("picture-selection").style.display = "none";
    // Start the game
    startGame();
  } else {
    alert("Player O cannot select the same picture as Player X");
  }
}

function startGame() {
  // Show the game board
  document.querySelector(".ui").style.display = "block";
  document.getElementById("print").innerHTML = "Player X turn";
}

function showPopupMessage() {
  const messages = [
    "Good move!",
    "Well played!",
    "Nice try!",
    // Add more messages here
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

function myfunc() {
  if (count < 9) {
    if (flag == 1) {
      document.getElementById("print").innerHTML = "Player O turn";
      flag = 0;
    } else {
      document.getElementById("print").innerHTML = "Player X turn";
      flag = 1;
    }
    count++;
    showPopupMessage();
  } else {
    document.getElementById("print").innerHTML = "Game Over";
  }
}

function myfunc_2() {
  window.location.reload();
}

function myfunc_3() {
  if (document.getElementById("b1").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b1").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b1").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

function myfunc_4() {
  if (document.getElementById("b2").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b2").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b2").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

function myfunc_5() {
  if (document.getElementById("b3").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b3").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b3").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

function myfunc_6() {
  if (document.getElementById("b4").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b4").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b4").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

function myfunc_7() {
  if (document.getElementById("b5").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b5").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b5").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

function myfunc_8() {
  if (document.getElementById("b6").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b6").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b6").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

function myfunc_9() {
  if (document.getElementById("b7").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b7").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b7").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}
function myfunc_10() {
  if (document.getElementById("b8").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b8").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b8").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

function myfunc_11() {
  if (document.getElementById("b9").innerHTML == "") {
    if (flag == 1) {
      document.getElementById("b9").innerHTML = `<img src="${selectedPictureX}" width="80" height="80">`;
    } else {
      document.getElementById("b9").innerHTML = `<img src="${selectedPictureO}" width="80" height="80">`;
    }
    myfunc();
  }
}

// User Interface Logic

// this function sets the background color for prime numbers
// this function is NOT inside of the window.onload event handler
function setBackgroundForPrimeNumbers() {
  document.getElementById("n2").style.backgroundColor = "aqua";
  document.getElementById("n3").style.backgroundColor = "aqua";
  document.getElementById("n5").style.backgroundColor = "aqua";
  document.getElementById("n7").style.backgroundColor = "aqua";
}

// this function sets the background color for composite numbers
// this function is NOT inside of the window.onload event handler
function setBackgroundForCompositeNumbers() {
  document.getElementById("n4").style.backgroundColor = "yellow";
  document.getElementById("n6").style.backgroundColor = "yellow";
  document.getElementById("n8").style.backgroundColor = "yellow";
  document.getElementById("n9").style.backgroundColor = "yellow";
  document.getElementById("n10").style.backgroundColor = "yellow";
}

function setBackgroundForEvenNumbers() {
  document.getElementById("n2").style.backgroundColor = "purple";
  document.getElementById("n4").style.backgroundColor = "purple";
  document.getElementById("n6").style.backgroundColor = "purple";
  document.getElementById("n8").style.backgroundColor = "purple";
  document.getElementById("n10").style.backgroundColor = "purple";
}

function setBackgroundForOddNumbers() {
  document.getElementById("n1").style.backgroundColor = "green";
  document.getElementById("n3").style.backgroundColor = "green";
  document.getElementById("n5").style.backgroundColor = "green";
  document.getElementById("n7").style.backgroundColor = "green";
  document.getElementById("n9").style.backgroundColor = "green";
}


// this function clears the background color on all grid numbers
// this function is NOT inside of the window.onload event handler
function clearStyles() {
  document.getElementById("n1").style.backgroundColor = null;
  document.getElementById("n2").style.backgroundColor = null;
  document.getElementById("n3").style.backgroundColor = null;
  document.getElementById("n5").style.backgroundColor = null;
  document.getElementById("n7").style.backgroundColor = null;
  document.getElementById("n4").style.backgroundColor = null;
  document.getElementById("n6").style.backgroundColor = null;
  document.getElementById("n8").style.backgroundColor = null;
  document.getElementById("n9").style.backgroundColor = null;
  document.getElementById("n10").style.backgroundColor = null;
}

window.onload = function() {
  // start of click event handler for prime numbers
  document.querySelector("button#prime").onclick = function() {
    clearStyles();
    setBackgroundForPrimeNumbers();
  };

  // start of click event handler for composite numbers
  document.querySelector("button#composite").onclick = function() {
    clearStyles();
    setBackgroundForCompositeNumbers();
  };

  document.querySelector("button#showboth").onclick = function() {
    clearStyles();
    setBackgroundForPrimeNumbers();
    setBackgroundForCompositeNumbers();
  };

  document.querySelector("button#even").onclick = function() {
    clearStyles();
    setBackgroundForEvenNumbers();
  };
  
  document.querySelector("button#odd").onclick = function() {
    clearStyles();
    setBackgroundForOddNumbers();
  };
};
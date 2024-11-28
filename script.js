// Create a calc
// event listers
document.getElementById("btn").addEventListener("click", calcGPA);
document.getElementById("light").addEventListener("click", lightMode);
document.getElementById("dark").addEventListener("click", darkMode);

// Var functions
var Input1El = document.getElementById("input1");
var Input2El = document.getElementById("input2");
var Input3El = document.getElementById("input3");
var Input4El = document.getElementById("input4");

// functions
function calcGPA() {
  // credit val
  var creditValue1 = +Input1El.value;
  var creditValue2 = +Input2El.value;
  var creditValue3 = +Input3El.value;
  var creditValue4 = +Input4El.value;
  // grade list val
  var grade1Val = document.getElementById("grade1").value;
  var grade2Val = document.getElementById("grade2").value;
  var grade3Val = document.getElementById("grade3").value;
  var grade4Val = document.getElementById("grade4").value;
  // a lot of math
  var solve1 = grade1Val * creditValue1;
  var solve2 = grade2Val * creditValue2;
  var solve3 = grade3Val * creditValue3;
  var solve4 = grade4Val * creditValue4;
  var solve5 = solve1 + solve2 + solve3 + solve4;
  var solve6 =
    solve5 / (creditValue1 + creditValue2 + creditValue3 + creditValue4);
  solve6 = solve6.toFixed(1);
  //clear inputes

  // output
  document.getElementById("output-area").innerHTML = solve6;
}
function darkMode() {
  document.body.style.backgroundColor = "black";
  document.getElementById("html").style.backgroundColor = "grey";
  document.body.style.color = "white";
  document.body.style.borderColor = "white";
  document.getElementById("td1").style.borderColor = " white ";
  document.getElementById("td2").style.borderColor = " white ";
  document.getElementById("td3").style.borderColor = " white ";
  document.getElementById("td4").style.borderColor = " white ";
  document.getElementById("td5").style.borderColor = " white ";
  document.getElementById("td6").style.borderColor = " white ";
  document.getElementById("td7").style.borderColor = " white ";
  document.getElementById("td8").style.borderColor = " white ";
  document.getElementById("td9").style.borderColor = " white ";
  document.getElementById("td10").style.borderColor = " white ";
  document.getElementById("td11").style.borderColor = " white ";
  document.getElementById("td12").style.borderColor = " white ";
}
function lightMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.body.style.borderColor = "black";
  document.getElementById("html").style.backgroundColor = "whitesmoke";
  document.getElementById("td1").style.borderColor = " black ";
  document.getElementById("td2").style.borderColor = " black ";
  document.getElementById("td3").style.borderColor = " black ";
  document.getElementById("td4").style.borderColor = " black ";
  document.getElementById("td5").style.borderColor = " black ";
  document.getElementById("td6").style.borderColor = " black ";
  document.getElementById("td7").style.borderColor = " black ";
  document.getElementById("td8").style.borderColor = " black ";
  document.getElementById("td9").style.borderColor = " black ";
  document.getElementById("td10").style.borderColor = " black ";
  document.getElementById("td11").style.borderColor = " black ";
  document.getElementById("td12").style.borderColor = " black ";
}

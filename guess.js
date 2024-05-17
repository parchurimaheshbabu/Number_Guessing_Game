const num = Math.floor(Math.random() * 100 + 1);
var count = 0;
const checkit = () => {
  count = count + 1;
  console.log(num);

  if (document.getElementById("guess").value =="") {
    // document.getElementById("result").innerHTML = "Fill the fields ";
    // document.getElementById("result").style = "color:red ";
    errmsg()
  }
else{
  if (count <= 5) {
    let gues = document.getElementById("guess").value;
    console.log(typeof gues);
    if (gues == num) {
      document.getElementById("result").innerHTML = "Correctly Gussed";
      document.getElementById("guess").style = "display:none";
      document.getElementById("btn").style = "display:none";
      document.getElementById("rld").style = "display:block";

      if (count == 5) {
        chanceout();
      }
    } else if (gues > num) {
      document.getElementById("result").innerHTML = " The Number Is High";
      if (count == 5) {
        chanceout();
      }
    } else if (gues < num) {
      document.getElementById("result").innerHTML = "The Number Is Low ";
      if (count == 5) {
        chanceout();
      }
    }
  }
}
  //   else {
  // document.getElementById("chn").innerHTML = "Chances Out ";
  //       document.getElementById("guess").style = "display:none";
  //       document.getElementById("btn").style = "display:none";
  //       document.getElementById("rld").style = "display:block";

  //   }
};

function reload() {
  location.reload();
}
function chanceout() {
  document.getElementById(
    "chn"
  ).innerHTML = `Chances Out Correct Number Is ${num}`;
  document.getElementById("guess").style = "display:none";
  document.getElementById("btn").style = "display:none";
  document.getElementById("rld").style = "display:block";
}
renew = () => {
  result.innerHTML = "";
};
function errmsg() {
  var result = document.getElementById("result");
  result.innerHTML = "Fill all the fields";
  result.style = "color:red";
  setTimeout(renew, 1000);
}
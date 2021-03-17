/*This function is made to create the result and alert for negative or zero Amount of money*/
function result(){
var amount = document.getElementById("amount").value;
var number = document.getElementById("number").value;
var Numberofyears = document.getElementById("Numberofyears").value;

if (amount <= 0) {
    alert("Enter a Positive value");
    return false;
  }
document.getElementById("result").innerHTML = (amount*(number/100)*Numberofyears);
}

/*Simple function made for the range slider for interest rate*/
function show_value(x)
{
 slider_value = document.getElementById("slider_value").innerHTML=x;
}


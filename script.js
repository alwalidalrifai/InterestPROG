function result()
{
amount = document.getElementById("amount").value;
number = document.getElementById("number").value;
Numberofyears = document.getElementById("Numberofyears").value;
document.getElementById("result").innerHTML = (amount*(number/100)*Numberofyears);
}

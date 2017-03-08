function calculator()
{
  var rel=0;
var firstNumber= parseInt(document.getElementById("EnterNum").value);
console.log(typeof(firstNumber));
if(firstNumber==""|| isNaN(firstNumber))
{
  alert("plz enter the integer first number")
}

var secondNumber= parseInt(document.getElementById("EnterSecond").value);
if(secondNumber==""||isNaN(secondNumber))
{
  console.log(isNaN(secondNumber));
  alert("plz enter the integer second number");
}
var operation= document.getElementById("sel").value;
if(operation=="")
{
  alert("plz select the operation ");
}
if(operation=="addition")
{   rel=  add(firstNumber,secondNumber);

}
else if (operation=="subtraction") {
   rel=  sub(firstNumber,secondNumber);

}
else if(operation=="division")
{
  rel=  div(firstNumber,secondNumber);
}
else if(operation=="multiplication")
{rel=  mul(firstNumber,secondNumber);
}
else if(operation=="modolus")
{
  rel=  mod(firstNumber,secondNumber);
}
document.getElementById("result").value=rel;
}//////

function add(firstNumber,secondNumber)////////////////
{
  var add=firstNumber+secondNumber;
  return add;
}
function sub(firstNumber,secondNumber)
{
  var sub=firstNumber-secondNumber;
  return sub;
}function div(firstNumber,secondNumber)
{
  var div=firstNumber/secondNumber;
  return div;
}
function mul(firstNumber,secondNumber)
{  var mul=firstNumber*secondNumber;
  return mul;
}
function mod(firstNumber,secondNumber)
{
  var mod=firstNumber%secondNumber;
  return mod;
}

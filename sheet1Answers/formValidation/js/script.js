function validation()
{
var fname=document.getElementById("name").value;
var roll=document.getElementById("roll").value;
var age=parseInt(document.getElementById("age").value);
console.log(fname);
var minRange=1;
var maxRange=10;
if(fName(fname,minRange,maxRange))
{
  if(Roll(roll,minRange,maxRange))
  {
    if(Age(age))
    {
    }}}
}
function fName(fname,minRange,maxRange)///
{
  var fnamelength=fname.length;
  console.log(fnamelength);
  if(fnamelength==0||fnamelength>10||fnamelength<0)
  {
    alert("Name shold not be empty the range should be within the range"+minRange+" "+"to"+" "+maxRange);
    fname.focus();
    return false;
  }
  return true;
}////
function Roll(roll,minRange,maxRange)///
{
  var rolllength=roll.length;
  var letters=/[A-Za-z0-9]/;
  console.log(rolllength);
  if(roll.value.match(letters))
  {
    return true;
  }
  else{
    alert("roll should not have any special character the range should be int he range");
    roll.focus();
    return false;
  }
}////
function Age(age)
{
  if(age>3&&age<70)
  {
    alert("you are applicable for student");
    return true;
  }
  else
    {
      alert("you are not applicable for student");
      return false;
    }
  }

// function lName(lname,minRange,maxRange)
// {
//   var lnamelength=lname.length;
//   console.log(lnamelength);
//   if(lnamelength==0||lnamelength>10||lnamelength<0)
//   {
//     alert("Name shold not be empty the range should be within the range"+minRange+" "+"to"+" "+maxRange);
//     lname.focus();
//     return false;var lname=document.getElementById("lname").value;
// var username=document.getElementById("userid").value;
// var pass=document.getElementById("passid").value;
// var cpass=document.getElementById("cpassid").value;
//   }
//   return true;
// }
// function userName(username,minRange,maxRange)
// {
//   var unamelength=username.length;
//   var letters=/^[A-Za-z]+$/;
//   console.log(unamelength);
//   if(username.value.match(letters).length<maxRange||username.value.match(letters).length>0)
//   {
//     return true;
//   }
//   else {
//     alert("user name must have alphabet characters ");
//     fname.focus();
//     return false;
//   }
//
// }
// // function fName(fname,minRange,maxRange)
// // {
// //   var fnamelength=fname.length;
// //   console.log(fnamelength);
// //   if(fnamelength==0||fnamelength>10||fnamelength<0)
// //   {
// //     alert("Name shold not be empty the range should be within the range"+minRange+" "+"to"+" "+maxRange);
// //     fname.focus();
// //     return false;
// //   }
// //   return true;
// // }
// // function fName(fname,minRange,maxRange)
// // {
// //   var fnamelength=fname.length;userName(username,minRange,maxRange)
// //   console.log(fnamelength);
// //   if(fnamelength==0||fnamelength>10||fnamelength<0)
// //   {
// //     alert("Name shold not be empty the range should be within the range"+minRange+" "+"to"+" "+maxRange);
// //     fname.focus();
// //     return false;
// //   }
// //   return true;

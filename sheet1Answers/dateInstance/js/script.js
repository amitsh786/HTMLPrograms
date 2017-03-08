
function dateFounder()
{
var week=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday",];
var month=["january","february","march","april","may","june","july","august","september","october","november","december"];
var date=new Date();
 forwardDate();

// // console.log(date.getYear())
// var nextSave= date.toDateString();
//  // console.log(nextSave)
// var nextSave1= date.getDate();
//  // console.log(nextSave1)
// var nextSave2= date.getDay();
//  // console.(week[nextSave2])
// var nextSave3= date.getMonth();
//  // console.log(nextSave3)

function forwardDate()
 {
   var a=date.getDate();
   var b=date.getDay();
   var c=date.getFullYear();
  //  console.log(c)
   var d=date.getMonth();
   var e="current date is:"+" "+a+" "+month[d]+" "+"and day of the week is"+" "+week[b]+" "+"and the year is"+" "+c;
   document.getElementById("demo").innerHTML=e;
   date.setDate(date.getDate()+1);
   var m=date.getDate();
  //  console.log(e)
  // date.setDay(date.getDay());
  // var f=date.getDay();
  var g="next date is:"+" "+m+" "+month[d]+" "+"and day of the week is"+" "+week[b+1]+" "+"and the year is"+" "+c;
  document.getElementById("demo1").innerHTML=g;
 }
}

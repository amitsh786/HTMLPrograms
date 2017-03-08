
var myList=[["choclate",8],["mango",9] ];
document.getElementById("demo").innerHTML = myList.toString();
function push1()
{
    var a=document.getElementById("additem").value;
    var b=document.getElementById("quant").value;
    console.log(a);
    console.log(b);
    myList.push([a,b]);
    document.getElementById("print").innerHTML=myList;
}

function pop1()
{
  var a=document.getElementById("additem").value;
  var b=document.getElementById("quant").value;
  console.log(a);
  console.log(b);
  myList.pop([a,b]);
  document.getElementById("print").innerHTML=myList;
}
function shift1()
{
  var a=document.getElementById("additem").value;
  var b=document.getElementById("quant").value;
  console.log(a);
  console.log(b);
  myList.shift([a,b]);
  document.getElementById("print").innerHTML=myList;
}
function unshift1()
{
  var a=document.getElementById("additem").value;
  var b=document.getElementById("quant").value;
  console.log(a);
  console.log(b);
  myList.unshift([a,b]);
  document.getElementById("print").innerHTML=myList;
}

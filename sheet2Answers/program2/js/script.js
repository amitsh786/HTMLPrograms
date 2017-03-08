
function golf()
{
var a=parseInt(document.getElementById("par").value);
console.log(a);
    var b=parseInt(document.getElementById("stroke").value);
    console.log(b);
    var c=a-2;
    var d=a+3;
    if(b==1)
    {
      document.getElementById("demo2").innerHTML="Hole-in-one!";
    }
    else if(b<c)
    {
            document.getElementById("demo1").innerHTML="Eagle";
    }
    else if(a==b-1)
    {
                    document.getElementById("demo1").innerHTML="Birdie";
    }
    else if(a==b)
    {
                    document.getElementById("demo1").innerHTML="par";
    }
    else if(a==b+1)
    {
              document.getElementById("demo1").innerHTML="Bogey";
    }
    else if(a==b+2)
    {
              document.getElementById("demo1").innerHTML="Double bogey";
    }
    else if(b>d)
    {
      document.getElementById("demo1").innerHTML="goHome";
    }
    else {
          document.getElementById("demo1").innerHTML="invalid number";
    }
        }

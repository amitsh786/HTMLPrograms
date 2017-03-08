function Random()
{
    var rand=parseInt(document.getElementById("rando").value);
    var x = Math.floor((Math.random() * rand) + 1);
    document.getElementById("demo").innerHTML = x;
}

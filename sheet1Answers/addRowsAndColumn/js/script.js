function addRow()
{
  var table = document.getElementById("myTable");

     var row = table.insertRow(table.rows.length);
     for (var i = 0; i < table.rows[0].cells.length; i++)
     {
       var cell5=row.insertCell(i);
       cell5.innerHTML="Amit ";

     }

}
function addColumn()
{
  var table=document.getElementById("myTable");
for(i=0;i<table.rows.length;i++)
{
var cell7=  table.rows[i].insertCell(table.rows[i].cells.length);
cell7.innerHTML="sharma";
}
}

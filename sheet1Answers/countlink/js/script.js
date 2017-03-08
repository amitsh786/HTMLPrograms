function countNoOfLink()
{
        var linkArray = []
        console.log(linkArray);
      linkObject = document.links;
      console.log(linkObject);
        for(var i=0; i<linkObject.length; i++)
        {
            linkArray.push(linkObject[i].href);
        }
        for (var i = 0; i < linkObject.length; i++)
        {
          var url = linkArray.pop(linkObject[i].href) ;
          var para = document.createElement("ul");
          var para1 = document.createElement("li")
          para1.innerHTML = url ;
          para.appendChild(para1);
          var element = document.getElementById("div1");
          console.log(element.appendChild(para))    ;
        }
}

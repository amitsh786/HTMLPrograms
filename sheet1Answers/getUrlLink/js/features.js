function urlCheck(){


var url = "https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=url";
 document.getElementById('url').innerHTML = "url pattern is  :" +url ;

var saecrh = url.split('?')[1];
document.getElementById('search').innerHTML = "search in the url is  :" +saecrh ;

var file = url.split('?')[0];
 var filearray = file.replace('://','/').split('/');

 var protocol = filearray[0];
 document.getElementById('protocol').innerHTML ="prtocol of url  is  : " + protocol ;

 var hostname = filearray[1];
 document.getElementById('hostname').innerHTML ="host name of url   is :" + hostname ;

 var path = filearray.splice(2, filearray.length-1);
document.getElementById('path').innerHTML ="path of url   is :" + path ;
}

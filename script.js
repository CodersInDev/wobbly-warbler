console.log('script loaded');
var listWarbles = document.getElementById('listWarbles');
//load list of warbles
var request = new XMLHttpRequest();
request.open('GET', '/warbles');
request.send(null);
request.onreadystatechange = function(){
  if(request.readyState === 4 && request.status === 200){
    var list = JSON.parse(request.responseText);
    var htmlList = '';
    list.forEach(function(element){
      htmlList += "<li>" + element.content + "</li>";
    });
    listWarbles.innerHTML = htmlList;
  }
};

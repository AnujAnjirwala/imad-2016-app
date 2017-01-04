console.log('Loaded!');

//change the text in index.html by coding in client-side JS.
//var ele=document.getElementById('maintext');
//ele.innerHTML='This is new Text!';








//move img
var img=document.getElementById('madi');

var marginLeft=0;

function moveRight()    {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft+'px';
}

img.onclick = function()    {
   // img.style.marginLeft = '100px';
   var interval = setInterval(moveRight, 50);
};






//var counter = 0;
var c=document.getElementById('counter');
c.onclick = function()  {
    //create a request
      var request = new XMLHttpRequest();
      
      //capture the response and store it in a variable.
      request.onreadystatechange = function()   {
        if(request.readystate === XMLHttpRequest.DONE)    {
            if(request.status === 200)  {
                var counter = request.responseText;
                var spa = document.getElementById('count');
                spa.innerHTML = counter.toString();
            }
        }  
      };
      //Make the request
      request.open('GET', 'http://anujanjirwala.imad.hasura-app.io/counter', true);
      request.send(null);
};

var c=document.getElementById('counter');
c.onclick = function()  {
    //create a request
      var request = new XMLHttpRequest();
      
      //capture the response and store it in a variable.
      request.onreadystatechange = function()   {
        if(request.readystate === XMLHttpRequest.DONE)    {
            if(request.status === 200)  {
                for(var i=0; i< names.length; i++)    {
                    list += '<li>' + names[i] + '</li>';
                 }
                var ul = document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }  
      };
      //Make the request
      request.open('GET', 'http://anujanjirwala.imad.hasura-app.io/submit-name?name='+name, true);
      request.send(null);
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //make request to server and send name.
  //Capture a list of name and render it as list.
  var names = ['name1', 'name2', 'name3', 'name4' ];
  var list = '';
  
};
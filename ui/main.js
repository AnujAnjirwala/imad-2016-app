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
//    counter = counter + 1;
    //create a request
      var request = new XMLHttpRequest();
      
      //capture the response and store it in a variable.
      request.onreadystatechange = function()   {
        if(request.readystate === XMLHttpRequest.DONE)    {
            if(request.status === 200)  {
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }  
      };
};

console.log('Loaded!');

//change the text in index.html by coding in client-side JS.
var ele=document.getElementById('maintext');
ele.innerHTML='This is new Text!';

//move img
var img=document.getElementById('madi');
img.onclick = function()    {
   // img.style.marginLeft = '100px';
   var interval = setInterval(moveRight, 100);
};
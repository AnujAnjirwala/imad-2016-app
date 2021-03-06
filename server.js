var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'Article One || Anuj Anjirwala',
    heading : 'Welcome to Article One',
    date : 'Jan 1 2017',
    content : `<p>This is some personal information.This is some personal information.This is some personal information.</p>
            <p>This is some personal information.This is some personal information.This is some personal information.</p>
            <p>This is some personal information.This is some personal information.This is some personal information.</p>`
};

var articleTwo = {
    title : 'Article Two || Anuj Anjirwala',
    heading : 'This is Article Two',
    date : 'Jan 2 2017',
    content : `<p>Hello, welcome to second article.</p>`
};

var articleThree = {
    title : 'Article Three || Anuj Anjirwala',
    heading : 'Now you are on Article Three',
    date : 'Jan 3 2017',
    content : `<p>Hello, welcome to third article.Wish You a very Happy New Year.......</p>`
};

function createTemplate(data)   {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = 
   `<html>
    <head>
        <title> 
            ${title} 
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <div>
            <h1>${heading}</h1>
        </div>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});

var names=[];
// app.get('/submit-name/:name', function(req,res)   {
app.get('/submit-name', function(req,res)   {   //URL : anujanjirwala.imad.hasura-app.io/submit-name?name=xxxxx
   
    //get the name from the request
    var name = req.query.name;   //TODO
    names.push(name);
    //JSON : javascript object notation
    res.send(JSON.stringify(names));
});  



app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;    
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

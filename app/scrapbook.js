var express = require('express');
var handlebars = require('express-handlebars');

var Scrapbook = function handlebars_view(parameters) {
    var app = express();

    app.engine('handlebars', handlebars({
        layoutsDir: __dirname + "/views/layouts/",
        partialsDir: __dirname + "/views/partials/",
        defaultLayout: 'main'
    }));
    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '/views');

    app.get('/', function (req, res) {
        res.render(__dirname + '/views/home');
    });

    var port = parameters.port || 3000;
    app.listen(port);
    
    console.log("http://localhost:"+port)
};

module.exports= Scrapbook;

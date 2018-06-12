'use strict';

let compression = require('compression');
let express = require('express');
let logger = require('morgan');
let http = require('http');
let path = require('path');
let proxy = require('http-proxy-middleware');

let app = express();

app.set('port', process.env.PORT || 8080);

app.use(compression());

app.use(logger('combined'));

app.use(express.static(path.join(__dirname, 'dist')));

let proxyContext = '/jsonplaceholder/*';
let proxyOptions = require('./proxy.json')[proxyContext];
let backendProxy = proxy(proxyOptions);
app.use(proxyContext, backendProxy);

app.use(function(req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

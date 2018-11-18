#!/usr/bin/env node

var cli     = require('command-line-args')(require('./arghelp.js')),
    express = require('express'),
    app     = express();





if (cli.help) {

  console.log(cla.getUsage(require('./usage.json')));

} else {

  // app.get('/', function(req, res) {
  //   res.send('Hello World!');
  // });

  if (cli.cors) {
    app.use( (req,res,next) => {
      res.header('Access-Control-Allow-Origin',  '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      next();
    } );
  }

  if (cli.jsonapi) {
    if (!(cli.silent)) {
      console.log(' - mounting as json api')
    }
    express.static.mime.default_type = "application/json";
    express.static.mime.define({'application/json': ['']});
  }

  app.use(express.static(cli.directory));

  app.listen(cli.port, function () {
    if (!(cli.silent)) {
      console.log(' - servehere listening on port ' + cli.port.toString());
    }
  });

}

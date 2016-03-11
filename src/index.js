#!/usr/bin/env node

var cla     = require('command-line-args')(require('./arghelp.js')),
    cli     = cla.parse(),

    express = require('express'),
    app     = express();





if (cli.help) {

  console.log(cla.getUsage(require('./usage.json')));

} else {

  app.get('/', function(req, res) {
    res.send('Hello World!');
  });

  app.use(express.static(process.cwd()));

  app.listen(cli.port, function () {
    if (!(cli.silent)) {
      console.log('servehere listening on port ' + cli.port.toString());
    }
  });

}

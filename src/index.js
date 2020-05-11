#!/usr/bin/env node

const argh    = require('./arghelp.js'),
      cli     = require('command-line-args')(argh.args),
      clu     = require('command-line-usage'),
      express = require('express'),
      app     = express();

const page404 = '<!doctype html><html><head><title>ServeHere 404 page</title><style type="text/css">html,body,h1{margin:0;padding:0;border:0;}p{padding:2em;margin:0;line-height:165%;text-indent:2.25em;}body{font-size:300%;color:white;background-color:#0A448F;}h1{font-size:200%;padding:1em;background-color:#28244C;border-bottom:1px solid #191730;}#bug{position:fixed;bottom:2em;right:2em;background-color:#28244C;padding:1em;border-radius:0.33em;border: 2px solid #191730;}#bug a{color:#def;}</style></head><body><h1>404 - Not Found</h1><p>Sorry, but, the requested page or endpoint does either not exist, or this server does not have privileges to offer it.  As a result, this request is denied.  Please check the resource you are requesting and the credentials you are presenting, and try your request again.  No further information is available.</p><div id="bug"><a rel="noopener noreferrer" target="_blank" href="https://github.com/StoneCypher/servehere/">Hosted by ServeHere</a></div></body></html>';

let dro   = undefined,
    drosc = false;





if (cli.help !== undefined) {  // because it's null in 5, sigh

  console.log(clu(argh.sections));

} else {

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

  if (cli.dro) {
    dro = `${require('fs').readFileSync(cli.dro)}`;
  }

  drosc = cli.drosc;

  app.use( (_req, res, _next) => res.status(dro? (drosc || 404) : 404).send(dro || page404) );

  app.listen(cli.port, function () {
    if (!(cli.silent)) {
      console.log(' - servehere listening on port ' + cli.port.toString());
    }
  });

}

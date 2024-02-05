# servehere

Host a webserver from the local directory, immediately





&nbsp;

&nbsp;

## tl;dr

```
npm install -g servehere
servehere
```

Now hit [http://localhost:4400](http://localhost:4400).





&nbsp;

&nbsp;

## Command-line arguments

`--port` / `-p`: Set the port.  Defaults to 4400.  Ports below 1024 may need account privileges on unix machines.

`--directory` / `-d`: Set the directory to serve from.  Defaults to `./`.

`--jsonapi` / `-j`: Pretend to be a JSON api; usually needs -c (send `application/json` for files without extensions; default is `text/html`)

`--cors` / `-c`: Emit universal CORS headers

`--silent` / `-s`: Be silent (no output; default is verbose)

`--haltroute` / `-z`: Hook `/z-terminate` as a route that will halt the server when opened

`--help` / `-h`: Show help in the console





&nbsp;

&nbsp;

## Usage examples

* Run a server, sharing the current directory on default host `localhost` and default port `4400`
    * `servehere`
* Run a server, sharing the current directory on default host `localhost` and custom port `12345`
    * `servehere -p 12345`
* Run a server, shipping CORS allow-all headers, set up as a JSON api, shipping the contents of a subdirectory "fixtures"
    * `servehere -c -j -d fixtures/`
* Run a server in silent mode (don't write anything in console) with a halt route
    * `servehere -s -z`





&nbsp;

&nbsp;

## ... why?

Pretty often I have to put stuff on my webserver because I want to figure out how its AJAX or websockets work, but CORS and localhost don't play well together.

Also, I'm mildly annoyed at how often I see JavaScript projects install Python to get `simple_server`.

Also, this is a quick way to stub the JSON backend of something when I want to start with the frontend, or for testing.





&nbsp;

&nbsp;

Polemic :neckbeard:
-------------------

`servehere` is MIT licensed, because viral licenses and newspeak language modification are evil.  Free is ***only*** free when it's free for everyone.

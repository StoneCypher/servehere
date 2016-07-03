# servehere
Serve from the local directory, immediately

## tl;dr

```
npm install -g servehere
cd ~/
mkdir servehere_example && cd servehere_example && echo "hello, dave" > index.html
servehere
```

Now hit [http://localhost:4400/index.html](http://localhost:4400/index.html).





## Usage

`--port` / `-p`: Set the port

`--jsonapi` / `-j`: Pretend to be a JSON api (send `application/json` for files without extensions)

`--silent` / `-s`: Be silent (no output)

`--help` / `-h`: Show help in the console





## ... why?

Pretty often I have to put stuff on my webserver because I want to figure out how its AJAX or websockets work, but CORS and localhost don't play well together.

Also, I'm mildly annoyed at how often I see JavaScript projects install Python to get `simple_server`.

Also, this is a quick way to stub the JSON backend of something when I want to start with the frontend, or for testing.





Polemic :neckbeard:
-------------------

`servehere` is MIT licensed, because viral licenses and newspeak language modification are evil.  Free is ***only*** free when it's free for everyone.


const args = [

  { name: "help",      alias: "h",                                                                                         description: "Print this help text" },
  { name: "port",      alias: "p", type: Number,  typelabel: '{underline port}', defaultValue: 4400,  defaultOption: true, description: "Set what port {bold ServeHere} should serve on" },
  { name: "directory", alias: "d", type: String,  typelabel: '{underline file}', defaultValue: './',                       description: "Choose which directory to serve from, if not here" },
  { name: "cors",      alias: "c",                                                                                         description: "Emit open-ended CORS headers, often to support mock API development" },
  { name: "jsonapi",   alias: "j", type: Boolean,                                defaultValue: false,                      description: "Serve no-extension files as application/json, to mimic a JSON api" },
  { name: "silent",    alias: "s", type: Boolean,                                defaultValue: false,                      description: "Whether to run without output" },
  { name: "dro",       alias: "r", type: String,  typelabel: '{underline file}', defaultValue: false,                      description: "Filename of default root object, typically for SPAs" },
  { name: "drosc",     alias: "R", type: Number,                                 defaultValue: false,                      description: "HTTP status code of default root object, typically for SPAs" }

];

const sections = [

  { header: 'ServeHere', content: '   {bold ServeHere} is a trivial webserver, mostly meant for developers, that stands up a server where you are at the time - no hassle, no fuss.  {bold ServeHere} is great for verifying build output, automated tests, and checking things without CORS or localhost problems.  {bold ServeHere} is especially useful in {bold package.json} scripts.' },
  { header: 'Options',   optionList: args },

  { header: 'Examples',  content: [
    { desc: '{underline Basic usage} - serve {bold 4400} from this directory',
      example: '$ servehere' },
    { desc: '{underline Serve a directory} - serve {bold 4400} from {bold ./docs/}',
      example: '$ servehere --directory docs/' },
    { desc: '{underline Change port} - serve on 12345',
      example: '$ servehere --port 12345' },
    { desc: '{underline Serve as JSON}',
      example: '$ servehere --jsonapi' },
    { desc: '{underline Serve with CORS headers}',
      example: '$ servehere --cors' },
    { desc: '{underline Silent}, for when scripts need this server to {bold shut up}',
      example: '$ servehere --silent' },
    { desc: '{underline Testing structure} - serve {bold ./fixtures} as {bold json} on {bold 80} with {bold cors}',
      example: '$ servehere -d fixtures/ -j -p 80 -c'},
    { desc: '{underline Default root object} - serve {bold ./foo/bar.html} for any missing call',
      example: '$ servehere -r docs/index.html'},
    { desc: '{underline Default root object} - serve {bold ./foo/bar.html} for any missing call with HTTP 200',
      example: '$ servehere -r docs/index.html -R 200'}
  ] },

  { header: 'Installation', content: [
    { desc: '{underline Global}',
      example: 'npm install -g servehere' },
    { desc: '{underline In-project for devs}',
      example: 'npm install --save-dev servehere'},
    { desc: '{underline In-project for users}',
      example: 'npm install --save servehere'}
  ] },

  { header: 'Reference', content: 'Find reference and a bug tracker at the {bold ServeHere} webpage, {underline {cyan https://github.com/StoneCypher/servehere/}}' }

];





module.exports = {

  args,
  sections

};
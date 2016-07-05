
// not in json because the primitive types, like String and Boolean, wouldn't be available

module.exports = [

  { name: "help",    alias: "h",                                                          description: "Print help" },
  { name: "cors",    alias: "c",                                                          description: "Emit open-ended CORS headers" },
  { name: "port",    alias: "p", type: Number,  defaultValue: 4400,  defaultOption: true, description: "What port to run on" },
  { name: "jsonapi", alias: "j", type: Boolean, defaultValue: false,                      description: "Serve no-extension files as application/json, to mimic a JSON api (see -c)" },
  { name: "silent",  alias: "s", type: Boolean, defaultValue: false,                      description: "Whether to run without output" }

];

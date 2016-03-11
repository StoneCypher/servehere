
// not in json because the primitive types, like String and Boolean, wouldn't be available

module.exports = [

  { name: "help",   alias: "h",                                                          description: "Print help" },
  { name: "mime",   alias: "m", type: String,                                            description: "Indicate a JSON mime table" },
  { name: "port",   alias: "p", type: Number,  defaultValue: 4400,  defaultOption: true, description: "What port to run on" },
  { name: "silent", alias: "s", type: Boolean, defaultValue: false,                      description: "Whether to run without output" }

];

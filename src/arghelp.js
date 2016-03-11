
// not in json because the primitive types, like String and Boolean, wouldn't be available

module.exports = [

  { name: "help", alias: "h",               defaultOption: false, description: "Print help" },
  { name: "port", alias: "p", type: Number, defaultOption: true,  description: "What port to run on" }

];

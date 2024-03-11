const zipFolder = require("zip-a-folder");
var clc = require("cli-color");
const nombreRepo = "FEMSA-lider-tactico-actividad-interactiva-";

var msg_azul = clc.xterm(81).bgXterm(232);
var msg_verde = clc.xterm(47).bgXterm(232);
var msg_coral = clc.xterm(217).bgXterm(232);
var msg_rojo = clc.xterm(197).bgXterm(232);

const months = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC"
];
let current_datetime = new Date();
let formatted_date =
  current_datetime.getDate() +
  "-" +
  months[current_datetime.getMonth()] +
  "-" +
  current_datetime.getFullYear();
class ZipAFolder {
  static main() {
    console.log(msg_rojo("Empaquetando . . ."));
    console.log(nombreRepo + formatted_date);
    zipFolder.zipFolder("./Curso", nombreRepo + formatted_date + ".zip", function(
      err
    ) {
      if (err) {
        console.log("Sorry! ", err);
      }
    });
  }
}

ZipAFolder.main();



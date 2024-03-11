var clc = require("cli-color");
fs = require("fs");
var figlet = require("figlet");
moment = require("moment");
moment.locale("es-mx");
var msg_verde = clc.xterm(47);
var fechaCompleta = moment().format("LLLLA");
var fechaString = "var fechaLog = '" + fechaCompleta + "'\n //Esta es la fecha que viene de fecha.js \n" + "\n console.log('%c' + fechaLog, 'font-size: 100%; color: #00ff22; font-weight: 700;');";

fs.writeFile("./Curso/sco/js/fecha.js", fechaString, function (err) {
  if (err) return console.log(err);
  figlet.text(
    "Fecha...",
    {
      font: "Speed",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Algo salió mal, Revisa dependencias");
        console.dir(err);
        return;
      }
      console.log(msg_verde(data));
    }
    );
});

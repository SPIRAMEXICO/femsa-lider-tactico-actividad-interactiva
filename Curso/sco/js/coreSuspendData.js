// * 🎮 * Gamificacion * 🎲 * //

var cadena = "";
var puntaje = "";

function guardaSuspendData(tipo, valor) {
  if (valor == undefined || valor == "" || valor == " " || valor == null) {
    switch (tipo) {
      case "puntaje":
        valor = 0;
        break;
      case "selecciones":
        valor = 0;
        break;
      case "tarjetas":
        valor = 0;
        break;
      case "monedas":
        valor = 0;
        break;
    }
  } else {
    leeSuspendData();
    switch (tipo) {
      case "puntaje":
        puntaje = puntaje + parseInt(valor);
        cadena = "[Modulo1," + Number(puntosGanados1 + parseInt(valor)) + "," + puntosGastados1 + "," + _curso.entorno.tarjetas1 + "]";
        send("[" + _curso.entorno.infoSelecciones + "]" + cadena + "[" + _curso.entorno.infoModulo2 + "][" + _curso.entorno.infoModulo3 + "]");
        break;

      case "tarjetas":
      case 1:
        _curso.entorno.tarjetas1 = _curso.entorno.tarjetas1 + parseInt(valor) + "/";
        cadena = "[Modulo1," + puntosGanados1 + "," + puntosGastados1 + "," + _curso.entorno.tarjetas1 + "]";
        sco_llamadaSCORM("SetValue", "cmi.suspend_data", "[" + _curso.entorno.infoSelecciones + "]" + cadena + "[" + _curso.entorno.infoModulo2 + "][" + _curso.entorno.infoModulo3 + "]");
        console.log("El valor de tarjetas es: " + _curso.entorno.tarjetas1 + " --- " + _curso.entorno.tarjetas2 + " --- " + _curso.entorno.tarjetas3);
        break;

      case "selecciones":
        sco_llamadaSCORM("SetValue", "cmi.suspend_data", "[" + valor + "][" + _curso.entorno.infoModulo1 + "][" + _curso.entorno.infoModulo2 + "][" + _curso.entorno.infoModulo3 + "]");
        break;
    }
  }

  function leeSuspendData() {
    //función que lee la información almacenada en suspend_data y actualiza las props correspondientes

    // if (_curso.config.conexion) {
    if (_curso[central[2]][central[22]]) {
      // var suspendData = sco_llamadaSCORM("GetValue", "cmi.suspend_data");
      var suspendData = sco_llamadaSCORM(central[57], "cmi.suspend_data");
      // console.log("ENTRE A LEER EL SUSPENDATA ", suspendData);
      if (suspendData == null || suspendData == "" || suspendData == undefined || suspendData == " ") {
        _curso.entorno.infoSelecciones = "[ , ]";
        _curso.entorno.infoModulo1 = "[Modulo1,0,0,/]";
        _curso.entorno.infoModulo2 = "[Modulo2,0,0,/]";
        _curso.entorno.infoModulo3 = "[Modulo3,0,0,/]";

        sco_llamadaSCORM("SetValue", "cmi.suspend_data", _curso.entorno.infoSelecciones + _curso.entorno.infoModulo1 + _curso.entorno.infoModulo2 + _curso.entorno.infoModulo3);
      } else {
        var informacionSeparada = suspendData.split("]");
        // console.log(informacionSeparada);

        var temporal = informacionSeparada[0].split("[");
        _curso.entorno.infoSelecciones = temporal[1];

        temporal = informacionSeparada[1].split("[");
        _curso.entorno.infoModulo1 = temporal[1];

        temporal = informacionSeparada[2].split("[");
        _curso.entorno.infoModulo2 = temporal[1];

        temporal = informacionSeparada[3].split("[");
        _curso.entorno.infoModulo3 = temporal[1];

        temporal = _curso.entorno.infoModulo1.split(",");
        puntosGanados1 = Number(temporal[1]);
        puntosGastados1 = Number(temporal[2]);
        _curso.entorno.tarjetas1 = temporal[3];

        temporal = _curso.entorno.infoModulo2.split(",");
        _curso.entorno.puntosGanados2 = Number(temporal[1]);
        _curso.entorno.puntosGastados2 = Number(temporal[2]);
        _curso.entorno.tarjetas2 = temporal[3];

        temporal = _curso.entorno.infoModulo3.split(",");
        _curso.entorno.puntosGanados3 = Number(temporal[1]);
        _curso.entorno.puntosGastados3 = Number(temporal[2]);
        _curso.entorno.tarjetas3 = temporal[3];

        puntaje = puntosGanados1 + _curso.entorno.puntosGanados2 + _curso.entorno.puntosGanados3 - (puntosGastados1 + _curso.entorno.puntosGastados2 + _curso.entorno.puntosGastados3);

        console.log("selecciones: " + _curso.entorno.infoSelecciones);
        console.log("InfoModulo1: " + _curso.entorno.infoModulo1);
        console.log("InfoModulo2: " + _curso.entorno.infoModulo2);
        console.log("InfoModulo3: " + _curso.entorno.infoModulo3);

        console.log("puntosGanados1: " + puntosGanados1);
        console.log("puntosGastados1: " + puntosGastados1);
        console.log("tarjetas1: " + _curso.entorno.tarjetas1);

        console.log("puntosGanados2: " + _curso.entorno.puntosGanados2);
        console.log("puntosGastados2: " + _curso.entorno.puntosGastados2);
        console.log("tarjetas2: " + _curso.entorno.tarjetas2);

        console.log("puntosGanados3: " + _curso.entorno.puntosGanados3);
        console.log("puntosGastados3: " + _curso.entorno.puntosGastados3);
        console.log("tarjetas3: " + _curso.entorno.tarjetas3);

        console.log("GANADO1: " + puntosGanados1 + " - GASTADO1: " + puntosGastados1);
        console.log("💰TOTAL: " + puntaje);
      }
    }
  }
}

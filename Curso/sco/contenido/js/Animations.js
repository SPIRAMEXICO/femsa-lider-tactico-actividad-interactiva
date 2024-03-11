// Copyright SPIRA-México 2022 - Software que cambia vidas! github.com/jussef

//🌠 - default - entra con opacidad
//🌠 - zoom    - entra con una escala 0 🔍
//🌠 - abajo   - entra de abajo hacia arriba ⬆️
//🌠 - arriba  - entra de arriba hacia abajo ⬇️
//🌠 - izq     - entra de izquierda hacia la derecha ➡️
//🌠 - der     - entra de derecha hacia la izquierda ⬅️
//🌠 - alejar  - entra desde la escala mas alta
//🌠 - speedDer- entra de derecha hacia la izquierda con arrastre 🏎
//🌠 - speedIzq- entra de izquierda hacia la derecha 🏎

var styleVersions = new Array("-ms-", "-webkit-", "-moz-", "-o-", "");
var pegeWidth = 1280;
var pageHeight = 790;
var scalePage = parent.scalePage;
var DEBUG = parent.DEBUG;

function incrustaID(objeto, ID) {
  objeto.attr("_id", ID);
}

function inicializar(objeto) {
  objeto.css("top", parseInt(objeto.attr("_origeny")) + "px");
  objeto.css("left", parseInt(objeto.attr("_origenx")) + "px");
}

function parpadea(objeto, retardo) {
  var id = objeto[0];
  objeto.css("display", "block");
  if (retardo == undefined) {
    retardo = 0;
  }
  setTimeout(function () {
    anime({
      targets: id,
      opacity: [0, 1],
      duration: 700,
      delay: 0,
      loop: true,
      direction: "alternate",
      easing: "easeOutSine",
    });
  }, retardo * 1000);
}

function stop(objeto, retardo) {
  var id = objeto[0];
  setTimeout(function () {
    anime.remove(id);
    $(objeto).css("opacity", 1);
  }, retardo * 1000);
}

// https://easings.net/    --Es para ver los easings--
// TIPOS: default - zoom - abajo - arriba - izq - der - alejar - speedDer - speedIzq
function entrada(objeto, tipo, duration, retardo) {
  setTimeout(() => {
    objeto.css("display", "block");
    if (duration == undefined) {
      duration = 1;
    }
    if (tipo == undefined) {
      tipo = "default";
    }
    if (retardo == undefined) {
      retardo = 0;
    }

    switch (tipo) {
      case "default":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          duration: duration * 1000,
          delay: retardo * 1000,
          easing: "linear",
        });
        break;

      case "zoom":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          scale: [0, 1],
          duration: duration * 2000,
          delay: retardo * 1000,
          easing: "easeOutElastic",
        });
        break;

      case "alejar":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          scale: [3, 1],
          duration: duration * 2000,
          delay: retardo * 1000,
          easing: "linear",
        });
        break;

      case "arriba":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          translateY: [-300, 0],
          duration: duration * 2000,
          delay: retardo * 1000,
          easing: "easeOutQuad",
        });
        break;

      case "abajo":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          translateY: [300, 0],
          duration: duration * 2000,
          delay: retardo * 1000,
          easing: "easeOutQuad",
        });
        break;

      case "izq":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          translateX: [-300, 0],
          duration: duration * 2000,
          delay: retardo * 1000,
          easing: "easeOutBack",
        });
        break;

      case "der":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          translateX: [300, 0],
          duration: duration * 2000,
          delay: retardo * 1000,
          easing: "easeOutBack",
        });
        break;

      case "speedIzq":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          translateX: [-400, 0],
          skew: [-40, 0],
          duration: duration * 3000,
          delay: retardo * 1000,
          easing: "easeOutElastic",
        });
        break;
      case "speedDer":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          translateX: [400, 0],
          skew: [40, 0],
          duration: duration * 3000,
          delay: retardo * 1000,
          easing: "easeOutElastic",
        });
        break;

      case "prueba_callback":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: { value: 1, duration: 10 },
          translateX: { value: [-200, 0], duration: 800 },
          rotate: { value: 360, duration: 1800, easing: "easeInOutSine" },
          scale: { value: [1, 1.2], duration: 2000, delay: 3000 },
          delay: retardo * 1000,
          complete: function () {
            anime({ targets: id, translateY: [{ value: -20 }, { value: 0 }], duration: 900, delay: retardo, loop: true, easing: "linear" });
          },
        });
        break;
      case "sheker1":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          delay: retardo * 1000,
        });
        anime({
          targets: id,
          translateX: [{ value: 10 }, { value: 0 }],
          duration: 250,
          loop: 8,
          easing: "easeInOutSine",
        });
        break;
      case "sheker2":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          delay: retardo * 1000,
        });
        anime({ targets: id, rotate: [{ value: 20 }, { value: 0 }], duration: 600, loop: true, easing: "linear" });
        break;
      case "sheker3":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          delay: retardo * 1000,
        });
        anime({
          targets: id,
          translateY: [{ value: -20 }, { value: 0 }],
          duration: 900,
          delay: retardo,
          loop: true,
          easing: "linear",
        });
        break;
      case "sheker4":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          delay: retardo * 1000,
        });
        anime({
          targets: id,
          translateX: [{ value: -30 }, { value: 0 }],
          duration: 900,
          delay: retardo,
          loop: true,
          easing: "linear",
        });
        break;
      case "flip":
        var id = objeto[0];
        anime({
          targets: id,
          opacity: 1,
          delay: retardo * 1000,
          rotateY: 380,
          duration: 5500,
          direction: "normal",
          easing: "easeOutElastic(1, .6)",
        });
        break;
    } //fin de swich
  }, 5);
} //fin animacion entrada

function salida(objeto, tipo, duration, retardo) {
  objeto.css("display", "block");
  if (duration == undefined) {
    duration = 1;
  }
  if (tipo == undefined) {
    tipo = "default";
  }
  if (retardo == undefined) {
    retardo = 0;
  }

  switch (tipo) {
    case "default":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        duration: duration * 1000,
        delay: retardo,
        easing: "linear",
      });
      setTimeout(() => {
        objeto.css("display", "none");
        anime.remove(id);
      }, duration * 1000);
      break;

    case "zoom":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        scale: [1, 3],
        duration: duration * 2000,
        delay: retardo * 1000,
        easing: "linear",
      });
      setTimeout(() => {
        objeto.css("display", "none");
        anime.remove(id);
      }, duration * 1000 + 2000);
      break;

    case "alejar":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        scale: [1, 0],
        duration: duration * 3000,
        delay: retardo * 1000,
        easing: "easeOutElastic",
      });
      setTimeout(() => {
        objeto.css("display", "none");
        anime.remove(id);
      }, duration * 1000 + 2000);
      break;

    case "arriba":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        translateY: [0, -300],
        duration: duration * 2000,
        delay: retardo * 1000,
        easing: "easeOutQuad",
      });
      break;

    case "abajo":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        translateY: [0, 300],
        duration: duration * 2000,
        delay: retardo * 1000,
        easing: "easeOutQuad",
      });
      break;

    case "izq":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        translateX: [0, -300],
        duration: duration * 2000,
        delay: retardo * 1000,
        easing: "easeOutBack",
      });
      break;

    case "der":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        translateX: [0, 300],
        duration: duration * 2000,
        delay: retardo * 1000,
        easing: "easeOutBack",
      });
      break;

    case "speedIzq":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        translateX: [0, -400],
        skew: [0, -40],
        duration: duration * 3000,
        delay: retardo * 1000,
        easing: "easeOutElastic",
      });
      break;
    case "speedDer":
      var id = objeto[0];
      anime({
        targets: id,
        opacity: 0,
        translateX: [0, 400],
        skew: [0, 40],
        duration: duration * 3000,
        delay: retardo * 1000,
        easing: "easeOutElastic",
      });
      break;

    case "none":
      objeto.css("display", "none");
      break;
  }
} //fin animacion Salida

function terminarPantalla(time) {
  setTimeout(function () {
    parent.alert_next();
    DEBUG ? console.log("Termina Pantalla 🔰") : "";
  }, time * 1000);
}

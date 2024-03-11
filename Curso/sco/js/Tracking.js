// Copyright SPIRA-México 2023 - Software que cambia vidas! github.com/jussef

//// * Variables de entorno NO TOCAR * ////
var currentPage = 0;
var lastPage = 0;
var curseStatus = "";
var curseCompleted = false;
var scaleTemplate = 1;
var pageFinished = -1;
var soundMute = false;
var nextActivo = false;
var botonesActivos = true;

//// * Variables de configuración * ////
var DEBUG = true; //--------------- Activar y desactivar los console.log
var conection = true; //----------- Conecta o no con el LMS. False = localStorage
var mostrarAlertas = false; //----- Muestra las alertas de fallo de conexión.
var contentPath = "contenido/"; //- Directorio de contenido.
var modulos = 1; //---------------- No. total de módulos con evaluación.
var navegationBlock = true; //----- Bloquea la navegación.
var volumenMusica = 5; //---------- El volumen de la musica de fondo del curso.

//// * Inicializa el Curso * ////
$(document).ready(function () {
  initCourse();
  load_audio_fondo();

  $(document).keydown(function (e) {
    e.preventDefault();
    if (e.keyCode === 117) {
      DEBUG ? console.log("Código Activado") : "";
      nextPage();
    }
  });
});

if (!navegationBlock) {
  pageFinished = course.pages.length - 1;
}

////--- Para activar y desactivar botones del template estan al final

function initCourse() {
  if (currentPage <= pageFinished) {
    if (currentPage < course.pages.length - 1) {
      nextActivo = true;
      // DEBUG?console.log("Next Activo"):"";
      $("#btnNext").css({
        cursor: "pointer",
        opacity: "1",
      });
    } else {
      $("#btnNext").css({
        cursor: "default",
        opacity: "0.4",
      });
    }
  } else {
    $("#btnNext").css({
      cursor: "default",
      opacity: "0.4",
    });
  }
  $("#btnNext").click(function () {
    if (botonesActivos === true) {
      if (nextActivo) {
        nextPage();
        if (navegationBlock) {
          if (currentPage <= pageFinished) {
            if (currentPage < course.pages.length - 1) {
              nextActivo = true;
              // DEBUG?console.log("Next Activo"):"";
              $("#btnNext").css({
                cursor: "pointer",
                opacity: "1",
              });
            } else {
              $("#btnNext").css({
                cursor: "default",
                opacity: "0.4",
              });
            }
          } else {
            $("#btnNext").css({
              cursor: "default",
              opacity: "0.4",
            });
          }
        }
      }
    }
  });

  $("#btnPrev").click(function () {
    if (botonesActivos === true) {
      prevPage();
    }
  });
  $("#btnHome").click(function () {
    goHome();
  });
  $("#btnMenu").click(function () {
    goHome();
  });
  $("#btnReload").click(function () {
    reLoad();
  });
  $("#btnExit").click(function () {
    end();
    window.close();
  });
  $("#btnAudio").click(function () {
    switchVolume();
  });
  $("#btnPrint").click(function () {
    window.open("pdf/pdf" + (currentPage + 1) + ".pdf", "_blank");
  });


  // ⚠️ Boton MENU ⚠️ //
var activoM = false;
$("#btnMenu").click(function () {
  console.log('%c MENU', 'font-size: 100%; color: #fff200; font-weight: 700;');
  checkCurrentPage();
  funcionMenu();
});

// Paginas a donde tiene que ir cada boton
let btnMenu1 = 4;
let btnMenu2 = 6;
let btnMenu3 = 23;
let btnMenu4 = 28;
let btnMenu5 = 31;
let btnMenu6 = 37;
let btnMenu7 = 42;

// funcion para activar los botones mientras voy navegando
function checkCurrentPage() {
  if (currentPage >= btnMenu2) {
    $("#btnMenu2").removeClass("gris");
    $("#btnMenu2").addClass("btnNavOver");
  }
  if (currentPage >= btnMenu3) {
    $("#btnMenu3").removeClass("gris");
    $("#btnMenu3").addClass("btnNavOver");
  }
  if (currentPage >= btnMenu4) {
    $("#btnMenu4").removeClass("gris");
    $("#btnMenu4").addClass("btnNavOver");
  }
  if (currentPage >= btnMenu5) {
    $("#btnMenu5").removeClass("gris");
    $("#btnMenu5").addClass("btnNavOver");
  }
  if (currentPage >= btnMenu6) {
    $("#btnMenu6").removeClass("gris");
    $("#btnMenu6").addClass("btnNavOver");
  }
  if (currentPage >= btnMenu7) {
    $("#btnMenu7").removeClass("gris");
    $("#btnMenu7").addClass("btnNavOver");
  }
}

$("#btnMenu").css("cursor", "pointer");
function funcionMenu() {
  if (activoM === false) {
    activoM = true;
    $("#menuFondo").css("display", "block");
    $("#menuFondo1").css("display", "block");
    $("#btnMenu1").css("display", "block");
    $("#btnCerrarMenu").css("display", "block");
    $("#btnMenu1").click(function () {
      goPage(btnMenu1);
      activoM = true;
      funcionMenu();
    });
    $("#btnMenu2").css("display", "block");
    $("#btnMenu2").click(function () {
      if ($("#btnMenu2").hasClass("btnNavOver")) {
        activoM = true;
        funcionMenu();
        goPage(btnMenu2);
      }
    });

    $("#btnMenu3").css("display", "block");
    $("#btnMenu3").click(function () {
      if ($("#btnMenu3").hasClass("btnNavOver")) {
        activoM = true;
        funcionMenu();
        goPage(btnMenu3);
      }
    });
    $("#btnMenu4").css("display", "block");
    $("#btnMenu4").click(function () {
      if ($("#btnMenu4").hasClass("btnNavOver")) {
        activoM = true;
        funcionMenu();
        goPage(btnMenu4);
      }
    });
    $("#btnMenu5").css("display", "block");
    $("#btnMenu5").click(function () {
      if ($("#btnMenu5").hasClass("btnNavOver")) {
        activoM = true;
        funcionMenu();
        goPage(btnMenu5);
      }
    });
    $("#btnMenu6").css("display", "block");
    $("#btnMenu6").click(function () {
      if ($("#btnMenu6").hasClass("btnNavOver")) {
        activoM = true;
        funcionMenu();
        goPage(btnMenu6);
      }
    });
    $("#btnMenu7").css("display", "block");
    $("#btnMenu7").click(function () {
      if ($("#btnMenu7").hasClass("btnNavOver")) {
        activoM = true;
        funcionMenu();
        goPage(btnMenu7);
      }
    });
    
    $("#btnCerrarMenu").click(function () {
      activoM = true;
      funcionMenu();
    });
  } else {
    activoM = false;
    $("#menuFondo").css({ display: "none" });
    $("#menuFondo1").css({ display: "none" });
    $("#btnCerrarMenu").css("display", "none");
    $("#btnMenu1").css("display", "none");
    $("#btnMenu2").css("display", "none");
    $("#btnMenu3").css("display", "none");
    $("#btnMenu4").css("display", "none");
    $("#btnMenu5").css("display", "none");
    $("#btnMenu6").css("display", "none");
    $("#btnMenu7").css("display", "none");
    $("#btnMenu8").css("display", "none");
  }
}
// ⚠️ Boton MENU ⚠️ //

  if (conection) {
    init();
    // DEBUG?console.log("%c Se inicializa la API 🏄🏻‍♂️", "font-size: 100%; color: #ff001e; font-weight: 700;"):"";
    checkProgress();
    // goPage(0);
  } else {
    goPage(0);
  }
}

function switchVolume() {
  if (soundMute === false) {
    soundMute = true;
    $("#btnAudio").html('<img src="images/boton_audio_off.png"></img>');
    silencio(true);
  } else {
    soundMute = false;
    $("#btnAudio").html('<img src="images/boton_audio.png"></img>');
    silencio(false);
  }
}

////* La escala https://codepen.io/jussefdaniel/pen/abLgNrM  *////
function setScale() {
  var sourceWidth = 1280;
  var sourceHeigth = 790;
  var contentWidth = $(window).width();
  var contentHeigth = $(window).height();
  var _scaleX = contentWidth / sourceWidth;
  var _scaleY = contentHeigth / sourceHeigth;

  scaleTemplate = Math.min(contentWidth / sourceWidth, contentHeigth / sourceHeigth);
  if (_scaleX <= _scaleY) {
    scaleTemplate = _scaleX;
  } else {
    scaleTemplate = _scaleY;
  }
  if (scaleTemplate >= 1) {
    scaleTemplate = 1;
  }

  $("#box").css({
    transform: "translate(-50%, -50%) " + "scale(" + scaleTemplate + ")",
  });

  $("#box").width(sourceWidth);
  $("#box").height(sourceHeigth);
}

function loadContent() {
  setScale();

  $("#content").html('<iframe name="com" id="com" src="' + contentPath + course.pages[currentPage].url + '" frameborder="0" scrolling="no" border="0" ></iframe>');
  $("title").text(course.pages[currentPage].title);
  DEBUG ? console.log("📖 PAGINA: ", currentPage, "de", course.pages.length - 1) : "";
  if (parseInt(currentPage) + 1 === course.pages.length) {
    DEBUG ? console.log("%c Ultima Pantalla", "font-size: 100%; color: #00AEFF; font-weight: 700;") : "";
    desactivaNext();
  } else {
    activaNext();
  }
  updateTracking();
}

function load_audio_fondo() {
  $("#content_audio_fondo").html('<iframe name="audio_fondo" id="audio_fondo" src="contenido/audio_fondo.html" height="0" width="0" padding="0" margin="0" frameborder="0" scrolling="no" border="0" style="clear:both; float:left;"></iframe>');
}

////*  suspend_data  ↓ *////
function guardarData(tipo, data) {
  DEBUG ? console.log("💿 Guardando. . . ") : "";
  guardaSuspendData(tipo, data);
}

function leerData() {
  var data = get("cmi.suspend_data");
  var dataJSON = JSON.stringify(data);
  // var temporal1 = dataJSON.split("]");
  // var temporal2 = temporal1[0].split("[");
  // var infoSeparada = temporal2[1].split(",");
  DEBUG ? console.log("🎟 infoSeparada ", infoSeparada) : "";
  return dataJSON;
}
// suspend_data ↑

function checkProgress() {
  resetTimer();
  // Todas las opciones mandan a la pantalla 0 "goPage(0);" que es pantallaAudios.html
  // Eso es por que en esa pantalla hace la valiadacion a que pantalla reanudar
  curseStatus = get("cmi.core.lesson_status");
  // DEBUG ? console.log("%c curseStatus " + curseStatus, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
  switch (curseStatus) {
    case "not attempted":
      lastPage = get("cmi.core.lesson_location");
      // DEBUG ? console.log("%c lastPage " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
      if (lastPage == null || lastPage == undefined || lastPage == "") {
        lastPage = 0;
        goPage(parseInt(lastPage));
      } else {
        // DEBUG ? console.log("Última página: " + lastPage) : "";
        // DEBUG ? console.log("%c Ultima pagina: " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
        goPage(0);
      }
      break;
    case "completed":
      curseCompleted = true;
      goPage(0);
      break;
    case "incomplete":
      lastPage = get("cmi.core.lesson_location");
      // DEBUG ? console.log("%c lastPage " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
      if (lastPage == null || lastPage == undefined || lastPage == "") {
        lastPage = 0;
        goPage(parseInt(lastPage));
      } else {
        DEBUG ? console.log("Última página: " + lastPage) : "";
        // DEBUG ? console.log("%c Ultima pagina: " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
        goPage(0);
      }
      break;
    case "passed":
      curseCompleted = true;
      goPage(0);
      break;
    case "failed":
      lastPage = get("cmi.core.lesson_location");
      // DEBUG ? console.log("%c lastPage " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
      if (lastPage == null || lastPage == undefined || lastPage == "") {
        lastPage = 0;
        goPage(0);
      } else {
        DEBUG ? console.log("Última página: " + lastPage) : "";
        // DEBUG ? console.log("%c Ultima pagina: " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
        goPage(0);
      }
      break;
    case "unknown":
      lastPage = get("cmi.core.lesson_location");
      // DEBUG ? console.log("%c lastPage " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
      if (lastPage == null || lastPage == undefined || lastPage == "") {
        lastPage = 0;
        goPage(0);
      } else {
        DEBUG ? console.log("Última página: " + lastPage) : "";
        // DEBUG ? console.log("%c Ultima pagina: " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
        goPage(parseInt(lastPage));
      }
    default:
      lastPage = get("cmi.core.lesson_location");
      // DEBUG ? console.log("%c lastPage " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
      if (lastPage == null || lastPage == undefined || lastPage == "") {
        lastPage = 1;
        currentPage = 1;
        goPage(0);
      } else {
        // DEBUG ? console.log("Última página: " + lastPage) : "";
        // DEBUG ? console.log("%c Ultima pagina: " + lastPage, "font-size: 100%; color: #ff001e; font-weight: 700;") : "";
        goPage(0);
      }
      break;
  }
  //lmsCall("SetValue","cmi.comments",""+course.pages.length+"");
}

function goPage(pageID) {
  course.pages.length;
  if (currentPage != pageID) {
    lastPage = currentPage;
  }
  if (pageID != 0) {
    var pageSwitch = pageID - 1;
    if (pageSwitch >= pageFinished) {
      pageFinished = pageSwitch;
    }
  }
  currentPage = pageID;
  loadContent();
}

function reLoad() {
  audioStop();
  goPage(currentPage);
}

function goHome() {
  audioStop();
  goPage(4);
}

function nextPage() {
  if (parseInt(currentPage) + 1 < course.pages.length) {
    currentPage++;
    audioStop();
    loadContent();
  } else {
    DEBUG ? console.log("Error - Ya no hay más páginas después") : "";
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    audioStop();
    loadContent();
  } else {
    DEBUG ? console.log("Error - Ya no hay más páginas antes") : "";
  }
}

function updateTracking() {
  alert_next_stop();
  if (course.pages[currentPage].menu) {
    document.getElementById("menuBar").style.display = "block";
  } else {
    document.getElementById("menuBar").style.display = "none";
  }
  if (conection) {
    // lmsCall("SetValue", "cmi.core.lesson_location", "" + currentPage + "");
    set("cmi.core.lesson_location", "" + currentPage + "");
    if (!curseCompleted) {
      if (currentPage == course.pages.length - 1) {
        // set("cmi.core.lesson_status", "completed");
        // curseCompleted = true;
        DEBUG ? console.log("%c Soy ultima pantalla", "font-size: 100%; color: #fff200; font-weight: 700;") : "";

        //TODO
        guardarData("puntaje", 10);
      } else {
        set("cmi.core.lesson_status", "incomplete");
      }
      setTime();
    }
    // var success = lmsCall("Commit");
    var success = save();
    if (success === false) {
      errorAPI();
    }
  }
  /* Actualización de los botones de navegación */
  if (currentPage < course.pages.length - 1) {
    // DEBUG?console.log('currentPage ', currentPage):"";
    // DEBUG?console.log('nextActivo ', nextActivo):"";
    // DEBUG?console.log('navegationBlock ', navegationBlock):"";
    // DEBUG?console.log("Cual voy: ", pageFinished):"";

    if (!navegationBlock) {
      $("#btnNext").show();
      $("#btnNext").css({
        cursor: "default",
        opacity: "1",
      });
      nextActivo = true;
    } else {
      nextActivo = false;
    }
  } else {
    //$("#btnNext").hide();
    nextActivo = false;
  }
  //DEBUG?console.log(currentPage + ' y ' + (course.pages.length - 1)):"";
  nextActivo = false;
  if (currentPage <= pageFinished) {
    if (currentPage < course.pages.length - 1) {
      nextActivo = true;
      // DEBUG?console.log("Next Activo"):"";
      $("#btnNext").css({
        cursor: "pointer",
        opacity: "1",
      });
    } else {
      $("#btnNext").css({
        cursor: "default",
        opacity: "0.4",
      });
    }
  } else {
    $("#btnNext").css({
      cursor: "default",
      opacity: "0.4",
    });
  }

  if (currentPage >= 1) {
    //$("#btnPrev").show();
    $("#btnPrev").css({
      cursor: "pointer",
      opacity: "1",
    });
  } else {
    //$("#btnPrev").hide();
    $("#btnPrev").css({
      cursor: "default",
      opacity: "0.4",
    });
  }
  /* Actualización de avance barra */
  var paginasTotales = course.pages.length;
  var contentWidth = $("#progressBar").width();
  var porcentajeAvance = (parseInt(currentPage) + 2) / paginasTotales;
  var progressBarWidth = contentWidth * porcentajeAvance;
  //DEBUG?console.log("Porcentaje Actual: " + Math.round(porcentajeAvance)+"%"):"";
  $("#progress").css("width", progressBarWidth);
  $("#progressDatos").html("<span>" + (parseInt(currentPage) + 1) + " / " + paginasTotales + "</span>");
}

function errorAPI() {
  if (mostrarAlertas) {
    alert("Se ha detectado un problema de comunicación con el LMS.\nSu progreso no podrá seguir siendo registrado.\nPor favor cierre el curso y vuelva a intentarlo.");
  }
  DEBUG ? console.log("Error de conexión") : "";
}

function setTime() {
  var tiempo = getTimeCurrent();
  //lmsCall("SetValue","cmi.core.session_time",""+tiempo+"");
  //DEBUG?console.log('Tiempo enviado: '+tiempo):"";
}

function alert_next() {
  if (currentPage > pageFinished) {
    pageFinished = currentPage;
    if (conection === false) {
      // localStorage.setItem("pageFinished_SPF", pageFinished);
      DEBUG ? console.log("localStorage_SET") : "";
    }
  }
  if (currentPage < course.pages.length - 1) {
    //$("#btnNext").show();
    if (nextActivo) {
      // TweenMax.to($("#btnNext"), 0.4, {
      //   alpha: 1,
      //   yoyo: true,
      //   repeat: -1
      // });
    } else {
      $("#btnNext").css({
        cursor: "pointer",
      });

      TweenMax.to($("#btnNext"), 0.4, {
        alpha: 1,
        yoyo: true,
        repeat: -1,
      });
    }
  }
  nextActivo = true;
}

function alert_next_stop() {
  TweenMax.killTweensOf($("#btnNext"));
}

function enviarEnfrente() {
  var d = document.getElementById("com");
  d.style.zIndex = 990;
}
function enviarAtras() {
  var d = document.getElementById("com");
  d.style.zIndex = 0;
}
function enfrente(obj) {
  $(obj).css("zIndex", 992);
}

function activaNext() {
  $("#btnNext").css("display", "block");
}
function activaReload() {
  $("#btnReload").css("display", "block");
}
function desactivaReload() {
  $("#btnReload").css("display", "none");
}
function desactivaNext() {
  $("#btnNext").css("display", "none");
}

function desactivaBotonesNav() {
  DEBUG ? console.log("Desactiva Botones Nav") : "";
  botonesActivos = false;
  var prev = document.getElementById("btnPrev");
  var next = document.getElementById("btnNext");
  $(prev).css({ filter: "grayscale(100%)", cursor: "default" });
  $(next).css({ filter: "grayscale(100%)", cursor: "default" });
}
function activaBotonesNav() {
  DEBUG ? console.log("Desactiva Botones Nav") : "";
  botonesActivos = true;
  var prev = document.getElementById("btnPrev");
  var next = document.getElementById("btnNext");
  $(prev).css({ filter: "grayscale(0%)", cursor: "pointer" });
  $(next).css({ filter: "grayscale(0%)", cursor: "pointer" });
}

$(window).unload(function () {
  if (conection) {
    end();
  }
});

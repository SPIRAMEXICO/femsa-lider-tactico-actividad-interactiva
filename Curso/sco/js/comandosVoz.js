// let A = () => {};

let iniciar = () => {
  parent.reproducir(0, 0);
  if (parent.conection === true) {
    DEBUG ? console.log("🚨currentPage", parent.currentPage) : "";
    parent.load_audio_fondo();
    if (parent.lastPage < 1 || parent.lastPage == null) {
      DEBUG ? console.log("Inicio LMS") : "";
      DEBUG ? console.log(parent.lastPage) : "";
      parent.goPage(1);
    } else if (parent.lastPage >= 1) {
      DEBUG ? console.log("Reanudar LMS") : "";
      parent.goPage(parent.lastPage);
    } else {
      parent.load_audio_fondo();
      DEBUG ? console.log("Inicio SIN CONEXION") : "";
      parent.goPage(1);
    }
  }
};

let saludar = () => {
  console.log("%c HOLA!", "font-size: 100%; color: #00ff22; font-weight: 700;");
};

let siguiente = () => {
  nextPage();
};

let atras = () => {
  prevPage();
};

let recargar = () => {
    reLoad();
};

let cmdAudio = () => {
    switchVolume();
};

let busqueda = (param) => {
  window.open("https://www.google.com/search?q=" + param, "_blank");
};

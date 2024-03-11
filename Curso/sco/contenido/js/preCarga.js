function preload(title, F) {
  entrada($("#cargando"), "default", 0, 0);
  $("html, body").css("cursor", "progress");
  var preload = new createjs.LoadQueue();
  preload.on("complete", iniciaCargador, this);
  $.each($(".element"), function () {
    preload.loadFile($("#" + this.id).attr("src"));
  });

  function iniciaCargador() {
    DEBUG ? console.log("📤 ", title) : "";
    $.each($(".element"), function () {
      inicializar($("#" + this.id));
    });
    $("html, body").css("cursor", "default");
    console.log("Load src complete");
    salida($("#cargando"), "none", 0.2, F());
  }

  $(document).keydown(function (e) {
    e.preventDefault();
    if (e.keyCode === 117) {
      DEBUG ? console.log("Código Activado") : "";
      parent.nextPage();
    }
  });
}

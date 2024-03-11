var scorm = pipwerks.SCORM;


function init() {
  scorm.version = "1.2";
  scorm.init();
  DEBUG ? console.log("%c scorm.init() " + scorm.init(), "font-size: 100%; color: #00ff22; font-weight: 700;") : "";
}

function set(param, value) {
  // Version -------> scorm.get("cmi._version"));
  // Location  -----> scorm.get("cmi.core.lesson_location"));
  // Status  -------> scorm.get("cmi.core.lesson_status"));
  // Raw  ----------→ scorm.get("cmi.core.score.raw"));
  // Logout --------> scorm.set("cmi.core.exit", "logout");
  scorm.set(param, value);
  DEBUG ? console.log("%c SET- " + param + " " + value, "font-size: 100%; color: #00AEFF; font-weight: 700;") : "";
  save();
}

function send(value) {
  set("cmi.suspend_data", value);
  save();
}

function get(param) {
  return scorm.get(param);
}

/* La variable lesson_status se usa para ver el estado general de la actividad, es una variable
 del tipo CMIVocabulary, sólo acepta: passed, completed, failed, incomplete, browsed, not attempted. */
function incompleted() {
  scorm.set("cmi.core.lesson_status", "incompleted");
  scorm.set("cmi.succes_status", "failed");
  scorm.set("cmi.core.lesson_status", "failed");
  // scorm.set("cmi.core.exit", "logout");
  scorm.connection.terminate();
  save();
}
function complete() {
  scorm.set("cmi.core.lesson_status", "completed");
  // scorm.set("cmi.succes_status", "passed");
  scorm.set("cmi.core.exit", "logout");
  scorm.connection.terminate();
}

function save() {
  scorm.save();
}

function end() {
  scorm.quit();
}

function exit() {
  parent.window.close();
  DEBUG ? console.log("Exiting ...") : "";
}

window.onload = function () {
  init();
};

window.onunload = function () {
  if (conection) {
    end();
  }
};

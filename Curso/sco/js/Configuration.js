// Copyright SPIRA-México 2023 - Software que cambia vidas! github.com/jussef

/* Listado de pantalla del curso */
var course = new Object();
var audioCurrent = 0;

course.pages = [
	{ title: 'Inicio', url: 'pantallaAudios.html', navegacion: true, menu: false },
	{ title: 'Pantalla_01', url: 'pantalla_01.html', navegacion: false, menu: false },
	{ title: 'Pantalla_02', url: 'pantalla_02.html', navegacion: true, menu: true },
	{ title: 'Pantalla_03', url: 'pantalla_03.html', navegacion: true, menu: true },
];

// Musica Fondo
var Audios = new Array();
Audios[0] = new Howl({ src: './contenido/audios/audiovacio.mp3' });

var timeAudio = 0;
function reproducir(audio, tiempo) {
	audioCurrent = audio;
	timeAudio = setTimeout(function () {
		DEBUG ? console.log('%c Audio: ' + audio, 'font-size: 100%; color: #ff7e29; font-weight: 700;') : '';
		Audios[audio].play();
	}, tiempo * 1000);
}

function stopAudio(audio, tiempo) {
	console.log('parar');
	audioCurrent = audio;
	timeAudio = setTimeout(function () {
		DEBUG ? console.log('%c Audio: ' + audio, 'font-size: 100%; color: #ff7e29; font-weight: 700;') : '';
		Audios[audio].stop();
	}, tiempo * 1000);
}

function changeVolumen(volumens) {
	volPage = volumens;
	setVolumen();
}

function setVolumen(volPage) {
	Howler.volume(volPage);
}

function silencio(bool) {
	Howler.mute(bool);
}

function audioStop() {
	clearTimeout(timeAudio);
	Howler.stop();
}

// Presiona "F" para avanzar siguiente audio
$(document).keydown(function (e) {
	e.preventDefault();
	console.log(e.keyCode);
	if (e.keyCode === 70) {
		let totalDuration = Audios[audioCurrent].duration();
		Audios[audioCurrent].seek(totalDuration);
	}
});

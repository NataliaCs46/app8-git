// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", function() {
	
	$('https://es.wikipedia.org/wiki/Batalla_de_Puebla').tap(function() {
	navigator.notification.beep(1);
	} ); // tap batalla
	
	$('#heroes').tap(function() {
	navigator.notification.beep(1);
	} ); // tap heroes
	
	$('#monumentos').tap(function() {
	navigator.notification.beep(1);
	} ); // tap monumentos
	
	$('#monumento1').tap(function() {
	navigator.notification.beep(1);
	} ); // tap monumento1
	
}, false); //deviceready
}) //ready
var d = $('#container');
d.scrollTop(d.prop("scrollHeight"));
var timeline = $('#timeline');
var scrollspeed = 0.2;

	
$('#container').scroll(function (event) {

	
    var scroll = $('#container').scrollTop();
	var scrollOrg = document.getElementById('container').scrollHeight;
	console.log(scroll)
	console.log(scrollOrg);
	
	
	scrollPc = scroll / scrollOrg * 100;
		console.log(scrollPc);
	
	if (scrollPc < 100 && scrollPc > 70) {
		timeline.text('0800 hrs');
	};
	
	if (scrollPc < 69 && scrollPc > 50) {
		timeline.text('1000 hrs');
	}; 
	
	if (scrollPc < 49 && scrollPc > 30) {
		timeline.text('1100 hrs');
	};
	
	if (scrollPc < 29) {
		timeline.text('1200 hrs');
	};
});




$('.point').mouseover(function() {
	var id = $(this).attr('id').split('-point')[0];
	$("#" + id).css('outline', 'dodgerblue solid 3px');
}).mouseout(function() {
	var id = $(this).attr('id').split('-point')[0];
	$("#" + id).css('outline', 'none');
});

$('.card').mouseover(function() {
	var id = $(this).attr('id');
	var id = id + '-point';
	console.log(id);
	$("#" + id).css({'color': 'dodgerblue', 'transition': 'color 1s'})}).mouseout(function() {
		var id = $(this).attr('id');
		var id = id + '-point';
		console.log(id);
		$("#" + id).css('color', 'firebrick')}); 


$(document).ready(function() {	

var id = '#dialog';
	
//Get the screen height and width
var maskHeight = $(document).height();
var maskWidth = $(window).width();
	
//Set heigth and width to mask to fill up the whole screen
$('#mask').css({'width':maskWidth,'height':maskHeight});

//transition effect
$('#mask').fadeIn(500);	
$('#mask').fadeTo("slow",0.9);	
	
//Get the window height and width
var winH = $(window).height();
var winW = $(window).width();
              
//Set the popup window to center
$(id).css('top',  winH/2-$(id).height()/2);
$(id).css('left', winW/2-$(id).width()/2);
	
//transition effect
$(id).fadeIn(2000); 	
	
//if close button is clicked
$('.window .close').click(function (e) {
//Cancel the link behavior
e.preventDefault();

$('#mask').hide();
$('.window').hide();
});

//if mask is clicked
$('#mask').click(function () {
$(this).hide();
$('.window').hide();
});
	
});
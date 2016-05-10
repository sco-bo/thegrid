

$(document).ready(function () {
var $grid = $('.grid');
for (var i = 0; i < 16; i++) {

	var row = '<div>';

	for (var j = 0; j < 16; j++)
		row += '<div class = "square"></div>';

	row += '</div>';

	$grid.append(row);
	
}


$('button').on('click', function () {
	$('.square').detach();
	var gridPrompt = prompt('How many squares per side would you like to make the current grid?');
	
	var $grid = $('.grid');
	for (var i = 0; i < gridPrompt; i++) {

	var row = '<div>';

	for (var j = 0; j < gridPrompt; j++)
		row += '<div class = "square"></div>';

	row += '</div>';

	$grid.append(row);
	console.log(gridPrompt);
}

var newColor = ('#'+Math.floor(Math.random()*16777215).toString(16));
$('.square').on('mouseenter', function () {
	$(this).css({'background-color': newColor});

});

});

var newColor = ('#'+Math.floor(Math.random()*16777215).toString(16));
$('.square').on('mouseenter', function () {
	$(this).css({'background-color': newColor});

});

});



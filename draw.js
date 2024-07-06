var canvas = document.getElementById("myCanvas");
var canvas_context = canvas.getContext("2d");

var arrayOfPositions = [];

function mouseMoveHandler(e) {
	var canvas_rectangle = canvas.getBoundingClientRect();
	var event_x = e.clientX - canvas_rectangle.left;
	var event_y = e.clientY - canvas_rectangle.top;
	console.log("mouse move");
	arrayOfPositions.push( { x : event_x, y : event_y } );
	if ( arrayOfPositions.length > 50 )
		arrayOfPositions.shift();
	redraw();
}

canvas.addEventListener('mousemove',mouseMoveHandler);

var redraw = function() {
	canvas_context.clearRect(0, 0, canvas.width, canvas.height);

	canvas_context.strokeStyle = "#000000";
	canvas_context.beginPath();
	for ( var i = 0; i < arrayOfPositions.length; ++i ) {
		var x = arrayOfPositions[i].x;
		var y = arrayOfPositions[i].y;
		if ( i === 0 ) {
			canvas_context.moveTo(x,y);
		}
		else {
			canvas_context.lineTo(x,y);
		}
	}
	canvas_context.stroke();
}

redraw();
(function () {
	var WINDOW_WIDTH = 750,
		WINDOW_HEIGHT = 500,
	
		gui = require('nw.gui'),
		currentWindow = gui.Window.get(),
		
		canvas = document.getElementById('drawing'),
		context = canvas.getContext('2d');

	gui.Screen.Init();
	
	currentWindow.title = 'TotesPaint';
	currentWindow.width = WINDOW_WIDTH;
	currentWindow.height = WINDOW_HEIGHT;
	
	context.fillStyle = '#00ff00';
	
	canvas.addEventListener('click', function (event) {
		console.log(event);
		
		context.fillRect(event.x - 5, event.y - 5, 10, 10);
	});
})();
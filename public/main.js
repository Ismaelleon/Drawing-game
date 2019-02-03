window.onload = function() {
	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var ctx = canvas.getContext('2d');

	var mouseX;
	var mouseY;
	var drawing = false;

	canvas.addEventListener('mousedown', (e) => {
		mouseX = canvas.offsetX;
		mouseY = canvas.offsetY;
		drawing = true;
	})

	canvas.addEventListener('mouseleave', () => {
		drawing = false;
	})

	function draw() {
		ctx.beginPath();
		ctx.arc(mouseX, mouseY, 20, 0, 7);
		ctx.fill();
		ctx.closePath();
	}

	function update() {
		requestAnimationFrame(update);
		if(drawing) {
			draw();
		}
	}

	update();
}
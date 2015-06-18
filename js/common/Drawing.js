'use strict';

class Drawing {

	constructor (id) {

		this.canvas = document.getElementById(id),
		this.context = this.canvas.getContext('2d');

        this.drawModes = {
            PIXEL: 0
        };
		
        this.setColor('#00ff00');
        this.setDrawMode(this.drawModes.PIXEL);

        this.setupMouseEvents();
        this.setupResizeCanvas();
	}

    setupMouseEvents () {
        this.mouseDown = false;
        // TODO add support for touch events
        this.canvas.addEventListener('mousedown', function (event) {
            this.mouseDown = true;

            if (this.currentDrawingFuncDown) {
                this.currentDrawingFuncDown(event.x, event.y);
            }
        }.bind(this));

        this.canvas.addEventListener('mousemove', function (event) {
            //console.log(event);
            if (this.mouseDown && this.currentDrawingFuncMove) {
                this.currentDrawingFuncMove(event.x, event.y);
            }
        }.bind(this));

        this.canvas.addEventListener('mouseup', function (event) {
            this.mouseDown = false;

            if (this.currentDrawingFuncUp) {
                this.currentDrawingFuncUp();
            }
        }.bind(this));
    }

    setupResizeCanvas () {
        this.resizeCanvas();

        window.addEventListener('resize', function (event) {
            this.resizeCanvas();
        }.bind(this));
    }

    resizeCanvas () {
        this.canvas.setAttribute('width', window.innerWidth);
        this.canvas.setAttribute('height', window.innerHeight);
    }

    setDrawMode(mode) {
        if (mode === this.drawModes.PIXEL) {
            this.currentDrawingFuncDown = this.drawPixel;
            this.currentDrawingFuncMove = this.drawPixel;
            this.currentDrawingFuncUp = null;
        }
    }

    drawPixel (x, y) {
        this.context.fillRect(x, y, 1, 1);
    }

    setColor (color) {
        this.context.fillStyle = color;
    }

    clear () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    save () {
        var dataURL = this.canvas.toDataURL('image/png');
        var data = atob(dataURL.substring('data:image/png;base64,'.length)),
            asArray = new Uint8Array(data.length);

        for (var i = 0, len = data.length; i < len; ++i) {
            asArray[i] = data.charCodeAt(i);
        }

        var blob = new Blob([asArray.buffer], {type: 'image/png'});

        var img = document.createElement('img');
        img.src = window.URL.createObjectURL(blob);
        document.body.appendChild(img);
    }
}
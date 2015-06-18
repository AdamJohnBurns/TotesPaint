class ColorPicker {
    constructor () {
        //this.createBuffer();
        //this.renderToBuffer();

        this.setupInteractions();
    }

    createBuffer () {
        this.buffer = document.createElement('canvas');
        this.buffer.width = 255;
        this.buffer.height = 255;
        this.bufferContext = this.buffer.getContext('2d');
    }

    pad (n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    toHex (num) {
        return '#' + this.pad(num.toString(16), 2);
    }

    renderToBuffer () {
        //this.bufferContext.fillStyle = color;

        for (var x = 0; x <= this.buffer.width; x++) {
            console.log(this.toHex(x));

            //for (var y = 0; y < this.buffer.height; y++) {
                //this.bufferContext.fillRect(x, y, 1, 1);
            //}
        }
    }

    setupInteractions () {
        var channels = document.querySelectorAll('.color-picker .color-channel');

        this.channelMouseDown = false;

        for (var i = 0; i < channels.length; i++) {

            channels[i].addEventListener('mousedown', function (event) {
                this.channelMouseDown = true;
                this.querySelector('.channel-marker').style.top = event.clientY - this.getBoundingClientRect().top;

                //if (this.classList)

                this.parentNode.parentNode.querySelector('.color-result').style.backgroundColor = '#ff0000';
            });

            channels[i].addEventListener('mousemove', function (event) {
                if (this.channelMouseDown) {
                    this.querySelector('.channel-marker').style.top = event.clientY - this.getBoundingClientRect().top;
                }
            });

            channels[i].addEventListener('mouseup', function (event) {
                this.channelMouseDown = false;
            });

            channels[i].addEventListener('mouseleave', function (event) {
                this.channelMouseDown = false;
            });
        }
    }
}
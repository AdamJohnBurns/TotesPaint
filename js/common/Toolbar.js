class Toolbar {

    constructor (drawing) {
        this.drawing = drawing;

        this.setupButtonActions();
        this.setupToggleButtons();
        this.setupToolbarOverflow();
    }

    setupToolbarOverflow () {
        this.checkToolbarOverflow();

        window.addEventListener('resize', function () {
            this.checkToolbarOverflow();
        }.bind(this));
    }

    checkToolbarOverflow () {
        // TODO add code to check if toolbar width > window width, if so add an interactive popup
    }

    setupToggleButtons () {
        var i;

        this.buttons = document.querySelectorAll('.toolbar .toggles .button');

        for (i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', function (event) {
                var j, siblings;

                siblings = this.parentNode.querySelectorAll('.button');

                for (j = 0; j < siblings.length; j++) {
                    siblings[j].classList.remove('active');
                }

                this.classList.toggle('active');
            });
        }
    }

    setupButtonActions () {
        document.getElementById('new-button').addEventListener('click', function () {
            this.drawing.clear();
        }.bind(this));

        document.getElementById('save-button').addEventListener('click', function () {
            this.drawing.save();
        }.bind(this));

        document.getElementById('pixel-button').addEventListener('click', function () {
            this.drawing.setDrawMode(this.drawing.drawModes.PIXEL);
        }.bind(this))
    }
}
class Toolbar {

    constructor () {
        this.buttons = document.querySelectorAll('.toolbar .button');

        for (var i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('mousedown touchstart', function (event) {
                console.log(event);
            }.bind(this));
        }

        this.checkToolbarOverflow();

        window.addEventListener('resize', function () {
            this.checkToolbarOverflow();
        }.bind(this));
    }

    checkToolbarOverflow () {
        // TODO add code to check if toolbar width > window width, if so add an interactive popup
    }
}
var sidebar = Vue.component('sidebar', {
    template:`<div>
                <h2>Instructions:</h2>
                <p>Click on the part of the screen that is black</p>
                <p>Begin moving the mouse around</p>
                <p>Draw whatever you want</p>
                <p>Click the button to clear the screen</p>
                </div>`,
    name: 'sidebar'
    }
)

new Vue({
    el: '#app',
    components: {
        sidebar: sidebar
    },
    data: {
        vueCanvas: null,
        mouseClicked: false
    },
    mounted() {
        var canvas = document.getElementsByTagName("canvas")[0];
        var context = canvas.getContext("2d");
        var height = canvas.height = window.innerHeight;
        var width = canvas.width = window.innerWidth;
        canvas.addEventListener('mousedown',this.onMouseClick);
        canvas.addEventListener('mousemove', this.onMouseMove);
        this.vueCanvas = context;
        this.canvas = canvas;
    },
    methods: {
        onMouseClick: function (e) {
            this.mouseClicked = !this.mouseClicked;
        },
        getRandomColor: function () {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        onMouseMove: function (e) {
            if (this.mouseClicked) {
                this.vueCanvas.beginPath();
                this.vueCanvas.arc(e.clientX - 290, e.clientY, 7.5, 0, Math.PI * 2, false);
                this.vueCanvas.lineWidth = 5;
                this.vueCanvas.strokeStyle = this.getRandomColor();
                this.vueCanvas.stroke();
            }
        },
        clearcanvas: function () {
            this.vueCanvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
});

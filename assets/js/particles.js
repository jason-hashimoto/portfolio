// particles.js

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    let particleArray;

    // create constructor function for particles
    function Particle(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // add draw method to particle prototype
    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // add update method to particle prototype
    Particle.prototype.update = function() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }

        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
    }
    
    // create particle array
    function init() {
        particleArray = [];
        for (let i = 0; i < 200; i++) {
            let size = Math.random() * 5;
            let x = Math.random() * (innerWidth - size * 2);
            let y = Math.random() * (document.body.scrollHeight - size * 2);
            let directionX = (Math.random() * .4) - .2;
            let directionY = (Math.random() * .4) - .2;
            color = 'rgba(255, 255, 255, 0.2)';
            //let color = 'rgba(220, 68, 5, 0.2)';

            particleArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // animate particles
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
        }
    }

    // call functions
    init();
    animate();
});

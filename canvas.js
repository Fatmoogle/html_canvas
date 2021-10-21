const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// If canvas width and height are not set, they default to 300w
// and 150h

const c = canvas.getContext('2d');

// // c.fillRect(x, y, width, height);
// c.fillStyle = "rgba(255, 0, 0, .4"
// c.fillRect(100, 100, 200, 200);   

// c.fillStyle = "rgba(0, 255, 0, .4"
// c.fillRect(505, 545, 100, 100);   

// let x;
// let y;

// for(let i = 0; i < 100; i++) {
//     x = Math.floor(Math.random() * 101);
//     y = Math.floor(Math.random() * 101);
//     c.fillRect(x, y, 10, 10);
//     console.log(x, y)
// }

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(100, 400);
// c.lineTo(300, 500);
// c.strokeStyle = "rgba(.1, 255, 34, .9)";
// c.stroke();

// Arc || Circle
// c.arc(x, y, radius, startAngle(radians), endAngle(radians), counterClockwise: true or false)

// c.beginPath();
// c.arc(300, 300, 30, 0 , Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// let x;
// let y;

let r;
let g;
let b;
let a;

// Function to generate a random number within a certain range

const rand = (min, max) => {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

// console.log(rand(0, 255));

// for(let i = 0; i < 100; i++) {
//     x = Math.floor(Math.random() * window.innerWidth);
//     y = Math.floor(Math.random() * window.innerHeight);

//     r = Math.floor(Math.random() * 256);
//     g = Math.floor(Math.random() * 256);
//     b = Math.floor(Math.random() * 256);
//     a = Math.random();

//     c.beginPath();
//     c.arc(x, y, 30, 0 , Math.PI * 2, false);
//     c.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    
//     c.stroke();
// }

let x = 200;
let y = 200;
let dx = 10;
let dy = 10;
let radius = 100;

const animate = () => {
    requestAnimationFrame(animate);

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    a = Math.random();

    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, Math.PI * 2, false);
    c.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a}`;
    c.stroke();

    if(x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    x += dx;

    if(y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    y += dy;
}

animate();
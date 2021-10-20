const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// If canvas width and height are not set, they default to 300w
// and 150h

const c = canvas.getContext('2d');

// c.fillRect(x, y, width, height);
c.fillStyle = "rgba(255, 0, 0, .4"
c.fillRect(100, 100, 200, 200);   

c.fillStyle = "rgba(0, 255, 0, .4"
c.fillRect(505, 545, 100, 100);   

// let x;
// let y;

// for(let i = 0; i < 100; i++) {
//     x = Math.floor(Math.random() * 101);
//     y = Math.floor(Math.random() * 101);
//     c.fillRect(x, y, 10, 10);
//     console.log(x, y)
// }

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(100, 400);
c.lineTo(300, 500);
c.strokeStyle = "rgba(.1, 255, 34, .9)";
c.stroke();

// Arc || Circle
c.arc(300, 300, 30, )


// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };

let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

// Added our road son
let roadImg = new Image()
roadImg.src = "./images/road3.png"
let road = {x: 0, y: 0, w: 500, h:700, img: roadImg}

//Added our spaceship screw cars
let shipImg = new Image()
shipImg.src = "./images/bigboy1.png"

class Ship {
  constructor(x, y, w, h, img) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}

let tasadar = new Ship(0, 0, 100, 200, shipImg)

window.onkeydown = function(e) {
  console.log(e.key)
  switch (e.key) {
    case "ArrowLeft":
      tasadar.x -= 30;
      break;
    case "ArrowRight":
      tasadar.x += 30;
      break;
    case "ArrowUp":
      tasadar.y -= 30;
      break;
    case "ArrowDown":
      tasadar.y += 30;
      break
  }
}

function animate() {
  let gameLoop = requestAnimationFrame(animate)
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)
  tasadar.draw()
}
animate()
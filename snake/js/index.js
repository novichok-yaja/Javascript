let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("music//food.mp3");
const gameOverSound = new Audio("music//move.mp3");
const moveSound = new Audio("music//move.mp3");
const musicSound = new Audio("music//move.mp3");
let speed = 2;
let score = 0;
let lastRenderedTime = 0;

let snake_arr = [
  {
    x: 13,
    y: 15,
  },
];

food = { x: 6, y: 7 };



function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastRenderedTime) / 1000 < 1 / speed) {
    return;
  }
  lastRenderedTime = ctime;
  gameEngine();
}


function isCollide(sarr) {
    return false;
  }




function gameEngine() {

  //update snake
  if (isCollide(snake_arr)) {
    gameOverSound.play();
    musicSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game Over");
    snake_arr = [
      {
        x: 13,
        y: 15,
      },
    ];
    musicSound.play();
    score = 0;
  }


// New food and snake length increase
  if (snake_arr[0].y === food.y && snake_arr[0].x === food.x) {
      foodSound.play();
      snake_arr.unshift({x:snake_arr[0].x + inputDir.x, x:snake_arr[0].y + inputDir.y});
      let a = 2;
      let b = 16;
      food = {x:2 + Math.round(a + (b-a)*Math.random()), y:2 + Math.round(a + (b-a)*Math.random())}
  }

  //Moving snake
  for (let i = snake_arr.length - 2; i >= 0; i--) {
      snake_arr[i + 1] = {...snake_arr[i]};
  }

  snake_arr[0].x += inputDir.x;
  snake_arr[0].y += inputDir.y;




  //display snake
  board.innerHTML = "";
  snake_arr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });



  //Display food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}



window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 };
  musicSound.play();

  switch (e.key) {
    case "ArrowUp":
      inputDir.x = 0;
      inputDir.y = -1;
      console.log("ArrowUp");
      break;
    case "ArrowDown":
      inputDir.x = 0;
      inputDir.y = 1;
      console.log("ArrowDown");
      break;
    case "ArrowLeft":
      inputDir.x = -1;
      inputDir.y = 0;
      console.log("ArrowLest");
      break;
    case "ArrowRight":
      inputDir.x = 1;
      inputDir.y = 0;
      console.log("ArrowRight");
      break;
  }
});

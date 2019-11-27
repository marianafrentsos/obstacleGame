console.log("start");

const DEFAULT_MOVE_INCREMENT = 2;


class Player {
  constructor() {
    this.domElement = document.getElementById("player");
    this.livesCounter = document.querySelector("livesCounter");
    this.counter = 3;


    this.top = 0;
    this.left = 0;

    this.setMovement();
    this.obstacleCollision();

  }

  setMovement() {
    document.addEventListener("keydown", this.movePlayer.bind(this));
  }

  movePlayer(event) {
    this.obstacleCollision();

    switch (event.key) {
      case "ArrowDown":
        if (this.top === 286) {
          this.top -= 2;
        }

        this.top = this.top + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";

        break;

      case "ArrowUp":
        if (this.top === 0) {
          this.top += 2;
        }


        this.top = this.top - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.top = this.top + "px";
        break;

      case "ArrowLeft":
        if (this.left === 0) {
          this.left += 2
        }


        this.left = this.left - DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";
        break;

      case "ArrowRight":
        if (this.left === 486) {
          this.left -= 2;
        }

        this.left = this.left + DEFAULT_MOVE_INCREMENT;
        this.domElement.style.left = this.left + "px";

        break;

      default:
        break;

    }
  }

  obstacleCollision() {
    let obstacles = document.getElementsByClassName("obstacle");
    let obstacle = 0;

    for (var i = 0; i < obstacles.length; i++) {
      obstacle = obstacles[i]

      if (obstacle.offsetTop > 0) {

        if ((this.domElement.offsetTop === obstacle.offsetTop - 14 &&
          this.domElement.offsetLeft === obstacle.offsetLeft)

          ||

          (this.domElement.offsetTop === obstacle.offsetTop - 14 &&
            obstacle.offsetLeft - this.domElement.offsetLeft < 14 &&
            obstacle.offsetLeft - this.domElement.offsetLeft > 0)

          ||

          (this.domElement.offsetTop === obstacle.offsetTop - 14 &&
            this.domElement.offsetLeft - obstacle.offsetLeft < 14 &&
            this.domElement.offsetLeft - obstacle.offsetLeft > 0)
          ||
          (this.domElement.offsetLeft === obstacle.offsetLeft - 14 &&
            this.domElement.offsetTop > obstacle.offsetTop - 14)
            ||
            
            (this.domElement.offsetLeft === obstacle.offsetLeft + 14 &&
              this.domElement.offsetTop > obstacle.offsetTop - 14)
           
            ) {
              
          this.counter--;
          this.top = 0;
          this.left = 0;
          this.domElement.style.top = this.top + "px";
          this.domElement.style.left = this.left + "px";
        }
      }

      if (obstacle.offsetTop === 0 && this.domElement.offsetTop < obstacle.offsetHeight) {

        if ((this.domElement.offsetLeft === obstacle.offsetLeft)
          ||
          (this.domElement.offsetLeft - obstacle.offsetLeft < 14 &&
            this.domElement.offsetLeft - obstacle.offsetLeft > 0)
          ||
          (obstacle.offsetLeft - this.domElement.offsetLeft < 14 &&
            obstacle.offsetLeft - this.domElement.offsetLeft > 0)
          ||
          (this.domElement.offsetLeft === obstacle.offsetLeft + 14)
          ||
          (this.domElement.offsetLeft === obstacle.offsetLeft - 14)) {

          this.counter--;
          this.top = 0;
          this.left = 0;
          this.domElement.style.top = this.top + "px";
          this.domElement.style.left = this.left + "px";
        }
      }


      livesCounter.innerText = this.counter;

      if (this.counter === 0) {
        this.counter = 3;
        alert("You are dead!Ha Ha Ha!");
        this.top = 0;
        this.left = 0;
        this.domElement.style.top = this.top + "px";
        this.domElement.style.left = this.left + "px";
      }
    }
  }
}
new Player();
function Square(sideSize = 1) {
  this.sideSize = sideSize;

  this.perimeter = () => {
    return this.sideSize * 4 + " u";
  };

  this.area = () => {
    return this.sideSize * this.sideSize + " u^2";
  };
}

function Circle(radius = 1) {
  this.radius = radius;

  this.perimeter = () => 2 * this.radius * Math.PI;
  this.area = () => this.radius * this.radius * Math.PI;
}

const square = new Square();
const circle = new Circle();

function calculateSquarePerimeter() {
  //getInput
  const input = document.getElementById("squareSize").value;
  square.sideSize = input;
  alert(square.perimeter());
}
function calculateSquareArea() {
  //getInput
  const input = document.getElementById("squareSize").value;
  square.sideSize = input;
  alert(square.area());
}

function calculateCirclePerimeter() {
  const radius = document.getElementById("circle-radius").value;

  circle.radius = parseInt(radius);
  alert(circle.perimeter() + " u");
}

function calculateCircleArea() {
  const radius = document.getElementById("circle-radius").value;

  circle.radius = parseInt(radius);
  alert(circle.area() + " u^2");
}

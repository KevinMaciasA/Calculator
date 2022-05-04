function Square(sideSize = 1) {
  this.sideSize = sideSize;

  this.perimeter = () => {
    return this.sideSize * 4;
  };

  this.area = () => {
    return this.sideSize * this.sideSize;
  };
}

function Triangle(sideOne = 1, sideTwo = 2, base = 3, height = 4) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.base = base;
  this.height = height;

  this.perimeter = () => this.sideOne + this.sideTwo + this.base;
  this.area = () => (this.base * this.height) / 2;
}

const square = new Square();
const tringle = new Triangle();

function calculateSquarePerimeter() {
  const input = parseInt(document.getElementById("square-size").value);
  square.sideSize = input;
  alert(square.perimeter() + " u");
}
function calculateSquareArea() {
  const input = parseInt(document.getElementById("square-size").value);
  square.sideSize = input;
  alert(square.area() + " u^2");
}
function calculateTrianglePerimeter() {
  const base = parseInt(document.getElementById("triangle-base").value);
  const sizeOne = parseInt(document.getElementById("triangle-size-1").value);
  const sizeTwo = parseInt(document.getElementById("triangle-size-2").value);
  tringle.base = base;
  tringle.sideOne = sizeOne;
  tringle.sideTwo = sizeTwo;
  alert(tringle.perimeter() + " u");
}
function calculateTriangleArea() {
  const base = parseInt(document.getElementById("triangle-base").value);
  const height = document.getElementById("triangle-height").value;
  tringle.base = base;
  tringle.height = height;
  alert(tringle.area() + " u^2");
}

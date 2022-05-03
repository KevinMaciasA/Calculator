function Square(sideSize = 1) {
  this.sideSize = sideSize;

  this.perimeter = () => {
    return this.sideSize * 4 + " u";
  };

  this.area = () => {
    return this.sideSize * this.sideSize + " u^2";
  };
}

const square = new Square();

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

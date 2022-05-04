function Triangle(sideOne = 1, sideTwo = 2, base = 3, height = 4) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.base = base;
  this.height = height;

  this.perimeter = () => this.sideOne + this.sideTwo + this.base + " u";
  this.area = () => (this.base * this.height) / 2;
}

const triangle = new Triangle();
triangle.sideOne = 1;
triangle.sideTwo = 1;
triangle.base = 2;
triangle.height = 1.2;

console.log(triangle.perimeter());
console.log(triangle.area());

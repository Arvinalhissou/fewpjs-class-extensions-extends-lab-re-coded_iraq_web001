// Your code here
class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((sum, currentSide) => sum + currentSide, 0)
  }
}
class Triangle extends Polygon {
  get isValid(){
    
  }
}
get area() {
    return this.sides[0] ** 2
  }
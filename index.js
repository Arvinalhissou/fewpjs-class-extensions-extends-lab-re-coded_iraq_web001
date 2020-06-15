// Your code here
class Polygon {
  constructor(array) {
    this.sides = array
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((sum, currentSide) => sum + currentSide, 0)
  }
}
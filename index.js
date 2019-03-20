// Your code here
class Polygon {
  constructor(polygonSides){
    this.polygonSides = polygonSides
  }

  get getCount(){
    return this.polygonSides.length
  }

  set perimeter(polygonSides){
    this.polygonSides = polygonSides
  }

  get perimeter(){
    let sum = 0;
    for (let side of this.polygonSides){
      sum += side
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.polygonSides[0] + this.polygonSides[1] <= this.polygonSides[2]){
      return false;
    }
    else if (this.polygonSides[0] + this.polygonSides[2] <= this.polygonSides[1]){
      return false;
    }
    else if (this.polygonSides[1] + this.polygonSides[2] <= this.polygonSides[0]){
      return false;
    }
    else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if ((this.polygonSides[0] === this.polygonSides[1]) && (this.polygonSides[2] === this.polygonSides[3]) && (this.polygonSides[0] === this.polygonSides[2])) {
      return true
    }
    else {
      return false
    }
  }

  get area() {
    return this.polygonSides[0] ** 2
  }
}

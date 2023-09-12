// class Square that defines a square and inherits from Square of 5-square.js

class Rectangle {
    constructor(w, h) {
      if (w > 0 && Number.isInteger(w) && h > 0 && Number.isInteger(h)) {
        this.width = w;
        this.height = h;
      } else {
        this.width = undefined;
        this.height = undefined;
      }
    }
  
    print() {
      if (this.width !== undefined && this.height !== undefined) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }
  
    rotate() {
      if (this.width !== undefined && this.height !== undefined) {
        [this.width, this.height] = [this.height, this.width];
      }
    }
  
    double() {
      if (this.width !== undefined && this.height !== undefined) {
        this.width *= 2;
        this.height *= 2;
      }
    }
  }
  
  class Square extends Rectangle {
    constructor(size) {
      super(size, size);
    }
  
    charPrint(c = 'X') {
      if (this.width !== undefined && this.height !== undefined) {
        for (let i = 0; i < this.height; i++) {
          console.log(c.repeat(this.width));
        }
      }
    }
  }
  
  module.exports = Square;
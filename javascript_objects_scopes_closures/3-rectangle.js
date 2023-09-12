#!/usr/bin/node
// class Rectangle that defines a rectangle

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
  }
  
  module.exports = Rectangle;
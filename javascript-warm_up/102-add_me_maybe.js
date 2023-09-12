// function that increments and calls a function

const incrementAndCall = (number, theFunction) => {
    number++;
    theFunction(number);
  };
  
  module.exports = incrementAndCall;
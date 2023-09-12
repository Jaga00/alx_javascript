// function that executes x times a function

const executeXTimes = (x, theFunction) => {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  };
  
  module.exports = executeXTimes;
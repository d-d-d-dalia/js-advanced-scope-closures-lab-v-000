function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
// parseInt converts a string that holds an integer into just an integer
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distanceToTravel = end - start;
    let difference = blockRange - distanceToTravel;

    if(difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(rideFare){
    return rideFare*percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
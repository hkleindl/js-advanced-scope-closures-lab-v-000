function produceDrivingRange(blockRange) {
  return function(start, end) {
     let blocksTravelled = Math.abs(parseInt(start, 10) - parseInt(end, 10));
     let blockDifference = Math.abs(blocksTravelled - blockRange);

     if(blocksTravelled <= blockRange) {
       return `within range by ${blockDifference}`
     } else {
       return `${blockDifference} blocks out of range` 
     }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return total * percent;
  }
}

function createDriver() {

  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }

}
// Function to return first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function to return last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two driver functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function to create fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Function to double the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function to triple the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers based on function passed
  function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }
  
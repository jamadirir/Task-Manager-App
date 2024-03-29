const calculateTip = (total, tipPercent = 0.25) => total + total * tipPercent;

const sum = (n1, n2) => n1 + n2;

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

//
// Goal: Test temperature conversion functions
//
// 1. Export both functions and load them into test suite
// 2. Create "Should convert 32 F to 0 C"
// 3. Create "Should convert 0 C to 32 F"
// 4. Run the Jest to test your work!

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((a < 0) | 0 | (b < 0)) {
        console.log("Numbers must be non-negative!");
      }
      resolve(a + b);
    }, 2000);
  });
};

module.exports = {
  calculateTip,
  sum,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
};

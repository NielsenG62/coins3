//Recursion
export function coinCounter(input) {
  if (isNaN(input)) {
    return "Not a Number";
  }

  if (input >= 0.25) {
    return coinCounter((input % 0.25).toFixed(2)).concat([
      "Quarters: " + Math.floor(input / 0.25),
    ]);
  }

  if (input >= 0.1 && input < 0.25) {
    return coinCounter((input % 0.1).toFixed(2)).concat([
      "Dimes: " + Math.floor(input / 0.1),
    ]);
  }

  if (input >= 0.05 && input < 0.1) {
    return coinCounter((input % 0.05).toFixed(2)).concat([
      "Nickles: " + Math.floor(input / 0.05),
    ]);
  }

  if (input >= 0 && input < 0.05) {
    return ["Pennies: " + Math.round(input * 100)];
  }
}

//Closure
export function coinCount(coin) {
  return function (amount) {
    return Math.floor((amount / coin).toFixed(2));
  };
}

//Variable functions
const howManyQuarters = coinCount(0.25);
const howManyDimes = coinCount(0.1);
const howManyNickles = coinCount(0.05);
const howManyPennies = coinCount(0.01);

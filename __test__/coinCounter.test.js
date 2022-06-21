import { coinCounter, coinCount } from "../src/js/coinCounter.js";

describe("coinCounter", () => {
  //Quarters Test
  test("This will return 'Not a Number' if the input is not a number", () => {
    expect(coinCounter("fdsa")).toBe("Not a Number");
  });
  test("This will give you the value of the input in coin denominations", () => {
    expect(coinCounter(4.99)).toEqual([
      "Pennies: 4",
      "Dimes: 2",
      "Quarters: 19",
    ]);
  });
  test("This will give you the value of the input in coin denominations", () => {
    expect(coinCounter(0.16)).toEqual(["Pennies: 1", "Nickles: 1", "Dimes: 1"]);
  });
  test("This will give you the value of pennies", () => {
    expect(coinCounter(0.02)).toEqual(["Pennies: 2"]);
  });
});

describe("coinCount", () => {
  test("This will give you the value of quaters", () => {
    const howManyQuarters = coinCount(0.25);
    expect(howManyQuarters(0.25)).toEqual(1);
  });
  test("This will give you the value of dimes", () => {
    const howManyDimes = coinCount(0.1);
    expect(howManyDimes(1)).toEqual(10);
  });
  test("This will give you the value of nickles", () => {
    const howManyNickles = coinCount(0.05);
    expect(howManyNickles(0.15)).toEqual(3);
  });
  test("This will give you the value of pennies", () => {
    const howManyPennies = coinCount(0.01);
    expect(howManyPennies(0.1)).toEqual(10);
  });
});

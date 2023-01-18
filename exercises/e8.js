// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // const clientsFromLargestToSmallestBalance = array.sort(
  //   (a, b) => b.balance - a.balance
  // );
  // return [clientsFromLargestToSmallestBalance[0]];

  let greatestBalance = [];
  for (let i = 0; i < array.length; i++) {
    if (greatestBalance[0] === undefined) {
      greatestBalance = [array[i]];
      continue;
    }
    if (greatestBalance[0].balance > array[i].balance) {
      continue;
    }
    greatestBalance = [array[i]];
  }
  return greatestBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

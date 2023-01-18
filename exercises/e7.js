// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // const allClientsNotBroke = array
  //   .filter((el) => el.balance > 0)
  //   .sort((a, b) => a.balance - b.balance);
  // return [allClientsNotBroke[0]];
  const accountsGreaterThan0 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      accountsGreaterThan0.push(array[i]);
      continue;
    }
  }
  let smallestBalance = [];
  for (let j = 0; j < accountsGreaterThan0.length; j++) {
    if (smallestBalance[0] === undefined) {
      smallestBalance = [accountsGreaterThan0[j]];
      continue;
    }
    if (smallestBalance[0].balance < accountsGreaterThan0[j].balance) {
      continue;
    }
    smallestBalance = [accountsGreaterThan0[j]];
  }
  return smallestBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

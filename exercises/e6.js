// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

export function getClientWithNoMoney(array) {
  // my editor reformats onSave. This is the format it changes it to once I try to add line breaks before each method
  // return array.filter((el) => el.balance === 0).map((el) => el.name);
  const accountsWithoutMoney = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance === 0) {
      accountsWithoutMoney.push(array[i]);
      continue;
    }
  }
  const names = [];
  for (let j = 0; j < accountsWithoutMoney.length; j++) {
    names.push(accountsWithoutMoney[j].name);
  }
  return names;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

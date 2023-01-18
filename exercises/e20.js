// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]

export function separateNamesWithAFromRest(array) {
  const aNames = [];
  const otherNames = [];
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array[i].length; k++) {
      if (array[i][k].toLowerCase() === "a") {
        aNames.push(array[i]);
      }
    }
    otherNames.push(array[i]);
  }
  return [aNames, otherNames];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

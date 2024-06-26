function hasTargetSum(array, target) {
  for (let i = 0; 1< array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] === complement) return true;
    }
  }
  return false;
}


// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}


// O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  space: O(n)
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers 
  for the current number, identify a acomplementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complemntary number is 3)
  iterate over the remaining numbers is the compliment
  if so, return true
  if we reach the end of the array, return false
*/

/*
iterate through each number in the array for the current num,
identify a complement that adds to the array 
iterate through the rest of the array
check if any number is our complement. 
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

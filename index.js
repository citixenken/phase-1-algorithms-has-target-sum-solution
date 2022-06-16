// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++) {
//     const difference = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === difference) return true;
//     }
//   }
//   return false;
// }

/* Optimized hasTargetSum function */
function hasTargetSum(array, target) {
  //create an object to keep track of numbers we've already seen

  // const seenNumbers = {};
  const seenNumbers = new Set();

  // for (let i = 0; i < array.length; i++) {
  for (let number of array) {
    const difference = target - number;

    //check if its in seenNumbers object
    // if (seenNumbers[difference]) return true;
    // if (difference in seenNumbers) return true; //O(1)
    if (seenNumbers.has(difference)) return true; //yet another optimization when using Set

    //otherwise, add it to seenNumbers object
    // seenNumbers[number] = difference;

    //.add adds the number to Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime complexity: O(n ** 2) -> 2 iterations (n * n)

  optimized Big O time complexity
  ===============================
  Runtime complexity: O(n) -> iterates once (n)
*/

/* 
  Add your pseudocode here
 ==========================
 iterate through each number in the array
     for current number, subtract from the target
          iterate through rest of array to find number that matches 
              return true
  return false

  optimized pseudocode
  ===================
  create object to keep track of numbers we've already seen
  iterate through each number in the array
     for current number, subtract from the target
      check if any key on our object is the complement
            if so, return true
            otherwise add that number to the object


*/

/*
  Add written explanation of your solution here
  Make a function that takes in an array of numbers and a target 
  number.
  The sum of any two numbers in the array should equal the target. 
  If found, return true and exit; else return false
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

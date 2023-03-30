function hasTargetSum(array, target) {
  // Write your algorithm here
  
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      total = array[i] + array[j]
      debugger
      if ((array[i] + array[j]) === target){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  O(n**2)
*/

/* 
  Add your pseudocode here
  for loop through arraylegth twice
  if array[i] + array[j] equal target
    return True 
  go out of the two loop
  return false

*/

/*
  Add written explanation of your solution here

  This program will take in an array of numbers 
  and a number. if two numbers from the array 
  are added and returns a number equals to the 
  number the user had input then it returns true 
  else return false
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

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 7, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([23, 18, 4, 7, 30], 25));
}

module.exports = hasTargetSum;

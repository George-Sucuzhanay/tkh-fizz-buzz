// If x is evenly divisible by both 3 and 5 (for example 0 or 15), set result to “fizzbuzz”.

// Otherwise if x is evenly divisible by 3 (for example, 3, 6, or 9), set result to “fizz”.


// Otherwise if x is evenly divisible by 5(for example, 10 or 15), set result to “buzz”.


// If x is not evenly divisible by either 3 or 5 (for example 8), set result to x.


// To test your code, set a value for x, and console.log it. Try different values. 


// Part 2
// Taking what we learned from the conditionals practice with fizzbuzz, We are going to Loop through every number from 1 to max, applying those same exact rules to each number and, before ending the loop, printing out result to the console via console.log(result). A For Loop would work. 

let result = " ";
function divisible (num) {
  for (let i = 0; i < num.length; i++) {
    if (num % 3 == 0 && num % 5 == 0){
      result = "fizzbuzz";
      return result
    } else if (num % 3 == 0){
      result = "fizz"
      return result
    } else if(num % 5 == 0){
      result = "buzz"
      return result
    } else if(num != 3 || num != 5) {
      return result
    }
  }
  console.log(result)
}
console.log(divisible("105"))



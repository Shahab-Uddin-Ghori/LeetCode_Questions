/// Problem NO 2582 pass the pillow ///
console.log("\t\t PASS THE PILLOW");
/* There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.

 

Example 1:

Input: n = 4, time = 5
Output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
After five seconds, the 2nd person is holding the pillow.
Example 2:

Input: n = 3, time = 2
Output: 3
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
After two seconds, the 3rd person is holding the pillow.*/

function passThePillow(n, time) {
  // Calculate the effective time considering the round trip
  let cycleLength = (n - 1) * 2;
  let effectiveTime = time % cycleLength;

  let pillowPosition;

  // Determine the pillow position based on the effective time
  if (effectiveTime < n) {
    // Forward direction
    pillowPosition = effectiveTime + 1;
  } else {
    // Backward direction
    pillowPosition = 2 * n - effectiveTime - 1;
  }

  return pillowPosition;
}
console.log(passThePillow(10, 7));

///// another solution //////
var passThePillow = function (n, time) {
  const remainingTime = time % (n - 1);
  const rounds = time / (n - 1);

  return rounds & 1 ? n - remainingTime : 1 + remainingTime;
};

// another solution
var passThePillow = function (n, time) {
  if (time < n) return time + 1;

  const a = Math.floor(time / (n - 1));
  const b = time % (n - 1);

  if (a % 2 == 0) return b + 1;

  return n - b;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 1. Two Sum
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

console.log("\n\n\t LEET Code Easy Problem 1");

let twoSum = (targetNumber, givenArray) => {
  let targetNumberIndex = [];
  for (let i = 0; i < givenArray.length; i++) {
    for (let j = i + 1; j < givenArray.length; j++) {
      if (givenArray[i] + givenArray[j] == targetNumber) {
        targetNumberIndex.push(i, j);
        return targetNumberIndex;
      }
    }
  }
};
let result = twoSum(9, [2, 7, 11, 15]);
console.log(result); // output [0,1]

// similar way
/*var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // Return an empty array if no pair is found
};

// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (since 2 + 7 == 9)
*/

// problem 2 Add twi=o Numbers.

/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

{
  console.log("\n\n\t add two numbers");
  let array1 = [2, 4, 3];
  let array2 = [5, 6, 4];
  let sumOfReverseArray1 = parseInt(array1.reverse().join("")); //reverse will reverse array and join will make them one
  let sumOfReverseArray2 = parseInt(array2.reverse().join(""));
  console.log(sumOfReverseArray1, sumOfReverseArray2);
  let result = (sumOfReverseArray1 + sumOfReverseArray2).toString();
  let resultArray = result.split("");
  console.log(resultArray);
}

{
  const addTwoNum = (array1, array2) => {
    let sumOfReverseArray1 = parseInt(array1.reverse().join("")); //reverse will reverse array and join will make them one
    let sumOfReverseArray2 = parseInt(array2.reverse().join(""));
    console.log(sumOfReverseArray1, sumOfReverseArray2);
    let result = (sumOfReverseArray1 + sumOfReverseArray2).toString();
    let resultArray = result.split("");
    return resultArray;
  };
  console.log(addTwoNum([2, 4, 3], [5, 6, 4]));
}

// problem 9
/*Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.*/

const isPalindrome = (integer) => {
  let reverse = integer.toString().split("").reverse().join("");
  console.log(reverse);

  if (integer.toString() === reverse) {
    return true;
  } else {
    return false;
  }
};

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false (since -121 reversed is 121-)
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(12321)); // Output: true

// Problem 13. Roman to Integer

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.*/
console.log("\n\n leet Code problem 13 Roamn Number Convert");
const romToInt = (romanCount) => {
  romanCount = romanCount.toUpperCase();
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (i = 0; i < romanCount.length; i++) {
    const currVal = romanValue[romanCount[i]];
    const NextVal = romanValue[romanCount[i + 1]];
    if (currVal < NextVal) {
      result += NextVal - currVal;
      i++;
    } else {
      result += currVal;
    }
  }
  return result;
};
console.log(romToInt("xx"));

// 14. Longest Common Prefix
/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
console.log("\n\n\t Longest common prefix");

const longComStr = (str) => {
  str = str.toUpperCase();
  if (str.length === 0) return "";
  if (str.length === 1) return str[0];
  let prefix = str[0];
  for (i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) return "";
    }
  }
  return prefix;
};

//impt ask most of famous companies..
/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

console.log("\n\n\t Valid Parenthesis");

const isValid = (s) => {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };
  for (let char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }
  return stack.length === 0;
};

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

console.log(isValid("()"));

//21. Merge Two Sorted Lists
/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/

const mergTwoSortedLists = (list1, list2) => {
  let mergedList = list1.concat(list2);
  console.log(list1);
  console.log(list2);
  console.log(mergedList);
  mergedList.sort((a, b) => a - b);
  console.log(mergedList);
  return mergedList;
};
mergTwoSortedLists([1, 2, 4], [1, 3, 4]);

//// 500. Keyboard Row
/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]*/
/////////////////////////////
{
  let str = "alaska";
  let keyboard = ["qwertyuiop", "zxcvbnm", "asdfghjkl"];
  let found = keyboard.find((str) => str.includes(str));

  console.log(found);
}
/////////////////////////////////////

console.log("\n\n\t Keyboard Row");

let words = ["Hello", "Alaska", "Dad", "Peace"];
let keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

let res = [];
for (let i = 0; i < words.length; i++) {
  let word = words[i].toLowerCase();

  // Check if the word can be typed using letters of one row
  if (
    keyboard.some((row) => word.split("").every((char) => row.includes(char)))
  ) {
    res.push(words[i]);
  }
}
console.log(res); // Output: ["Alaska", "Dad"]

// in function
const findWords = (words) => {
  let keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  let res = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();

    // Check if the word can be typed using letters of one row
    if (
      keyboard.some((row) => word.split("").every((char) => row.includes(char)))
    ) {
      res.push(words[i]);
    }
  }
  return res;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

// 35. Search Insert Position
/*


var searchInsert = function(nums, target) {
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
};
*/

console.log("\n\n Search Insert Position");
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 3)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
console.log(searchInsert([1, 3, 5, 6], 0)); // Output: 0

//3190. Find Minimum Operations to Make All Elements Divisible by Three
/*
You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.



Example 1:

Input: nums = [1,2,3,4]

Output: 3

Explanation:

All array elements can be made divisible by 3 using 3 operations:

Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.
Example 2:

Input: nums = [3,6,9]

Output: 0
*/

console.log(
  "\n\n 3190. Find Minimum Operations to Make All Elements Divisible by Three"
);
const minimumOperations = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 1) {
      nums[i] - 1;
      result++;
    } else if (nums[i] % 3 === 2) {
      nums[i] - 2;
      result++;
    } else if (nums[i] + 1 < 3) {
      nums[i]++;
      result++;
    } else if (nums[i] < 3) {
      nums[i] + 2;
      result++;
    }
  }
  return result;
};
console.log(minimumOperations([3, , 6, 9]));

//70. Climbing Stairs
/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/*
n = 1 , s =1
n = 2 , s =2
n = 3 , s =3
n = 4 , s =5
n = 5 , s =8
n = 6 , s =13
n = 7 , s =21
n = 8 , s =34
n = 9 , s =55
n = 10 , s =89

step is getting by adding prev two result

*/
console.log("\n\n\t 70. Climbing Stairs");

const climbStairs = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 2;
  let prev2 = 1;
  let current;
  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1; // update prev by each iterattion
    prev1 = current;
  }

  return current;
};

console.log(climbStairs(4));

//121. Best Time to Buy and Sell Stock
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0
*/

console.log("\n\n\t Best Time to Buy and Sell Stock");
const maxProfit = (prices) => {
  if (prices.length === 0) return 0;

  let minBuyPrice = prices[0];
  let maxProfit = 0;

  prices.forEach(price => {
    minBuyPrice = Math.min(minBuyPrice, price);
    maxProfit = Math.max(maxProfit, price - minBuyPrice);
  });

  return maxProfit;
};
console.log(maxProfit([7,1,5,3,6,4]));

/*
prices = [7, 1, 5, 3, 6, 4]

minBuyPrice initial = 7
maxProfit initial = 0
Price = 7

minBuyPrice = Math.min(7, 7) = 7
maxProfit = Math.max(0, 7 - 7) = 0
Price = 1

minBuyPrice = Math.min(7, 1) = 1
maxProfit = Math.max(0, 1 - 1) = 0
Price = 5

minBuyPrice = Math.min(1, 5) = 1
maxProfit = Math.max(0, 5 - 1) = 4
Price = 3

minBuyPrice = Math.min(1, 3) = 1
maxProfit = Math.max(4, 3 - 1) = 4
Price = 6

minBuyPrice = Math.min(1, 6) = 1
maxProfit = Math.max(4, 6 - 1) = 5
Price = 4

minBuyPrice = Math.min(1, 4) = 1
maxProfit = Math.max(5, 4 - 1) = 5
Toh final maxProfit = 5.
*/


//27. Remove Element

console.log("\n\n\t 27. Remove Element");
const removeElement = (nums, val) => {
  // Loop in reverse order to avoid skipping elements
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

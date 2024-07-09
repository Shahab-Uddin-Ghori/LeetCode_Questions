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

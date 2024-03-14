// Write a function that takes a parameter (hours) and converts

// it to seconds
/*
1 hour = 60 minutes
1 minute = 60 seconds
2 minutes = 120 seconds

minute * 60 = seconds
let seconds = minutes * 60

*/

function howManySeconds(hours) {
  // Your function should return an integer
  // of how many seconds are in the hour
  let minutes = hours * 60
  let seconds = minutes * 60

  return seconds
}

console.log(howManySeconds(2))



//Topics: Variables,functions, Math

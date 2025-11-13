function multiply(a,b,c){
    return a * b * c
}

multiply(2,3,6)

function convertToSeconds (a){
    return a * 60
}

function farenheitToCelsius(b){
    return (b-32) * 5 / 9;
}

function takesAString(string){
    return string.split("").reverse().join("")
}

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is prime
  if (num % 2 === 0) return false; // even numbers > 2 are not prime

  // Check for factors up to the square root of num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
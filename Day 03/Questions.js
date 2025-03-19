//write a boolean function to find a given number is prime 

function isPrime(n, divisor = n-1) {
    if  (n <= 1) return false; 
    if (n == 2) return true; 
    if (divisor == 1) return true; 
    if (n % divisor == 0) return false; 
    return isPrime(n, divisor - 1); 
}

console.log(isPrime(8));
console.log(isPrime(5));


///write a recursive function to print numbers from 1 to n

function printNumbers(n, current = 1) {
    if (current > n) return; 
    console.log(current);
    printNumbers(n, current + 1); 
}

printNumbers(5);

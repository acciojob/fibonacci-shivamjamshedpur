function fibonacci(n) {
// your code here
	// Function to generate the Fibonacci series

  // Base cases
  if (n === 0 || n === 1) {
    return n;
  }

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Print the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}


module.exports = fibonacci;

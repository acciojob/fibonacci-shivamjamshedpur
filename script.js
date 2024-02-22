function fibonacci(num) {
// your code here
	
	if (num===0||num===1) {
		return 0;
	} else {
		return fibonacci(num-1)+fibonacci(num-2);
	}
}

module.exports = fibonacci;

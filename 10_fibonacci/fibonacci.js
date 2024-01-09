const fibonacci = function(num) {
    let fibval = 0;
    if(num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (num < 0) {
        return "OOPS"
    } else {
        fibval = (fibonacci(num - 1) + fibonacci(num -2));
    }
    return fibval
};

// Do not edit below this line
module.exports = fibonacci;

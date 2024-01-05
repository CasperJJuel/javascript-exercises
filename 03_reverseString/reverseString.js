const reverseString = function(myInput) {
    original = myInput;
    copy = [];
    copyString = "";

    for (let i = 0; i < myInput.length; i++) {
        copy[i] = original[(myInput.length - 1 - i)]
    }
    
    let i = 0;
    while (i < copy.length) {
        copyString += copy[i]
        i++;
    }
    return copyString;
};

console.log(reverseString(''));

// Do not edit below this line
module.exports = reverseString;

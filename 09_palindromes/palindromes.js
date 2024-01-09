const palindromes = function (pal) {
    const word = pal.toLowerCase().replace(/[^a-z0-9]/g, "");
    return word.split("").reverse().join("") == word;
};

// Do not edit below this line
module.exports = palindromes;

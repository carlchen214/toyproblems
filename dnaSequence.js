// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.


var findRepeatedDnaSequences = function(s) {
    var length = s.length;
    var storage = {};
    var results = [];
    
    for (var i = 0; i < length - 9; i++) {
        var str = s.substring(i, i + 10); 
        if (storage[str] === undefined) {
            storage[str] = 1;
        } else {
            results.push(str); 
            storage[str]++;
        }
    }
    
    return results;
    
};


// Input "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

// Output:
// ["AAAAACCCCC", "CCCCCAAAAA"].

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
// naive solution
var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    var length = s.length;
    
    for (var i = 0; i < length; i++) {
        var temp = ""
        for (var j = i; j < length; j++) {
            if (temp.includes(s[j])) {
                j = length;
            } else {
                temp += s[j]; 
                if (temp.length > longest) {
                    longest = temp.length;
                }
            }
        }
    }
    return longest;
};

// sliding window solution

var lengthOfLongest = function(s) {
    var longest = 0;
    var length = s.length;
    var i = 0;
    var j = 0;
    var temp = '';

    while (i < length && j < length) {
        if (!temp.includes(s[j])) {
            temp += s[j];
            j++;
            longest = Math.max(longest, j - i);
        } else {
            temp = temp.substring(1, j);
            i++;
        }
    }

    return longest;
}

// Given "abcabcbb", the answer is "abc", which the length is 3.

console.log(lengthOfLongest("abcabcbb"));
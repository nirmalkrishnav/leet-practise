function groupAnagrams(strs) {
    console.log(isAnagram("ate", "tea"));
    console.log(isAnagram("sate", "seat"));
    console.log(isAnagram("race", "care"));
    console.log(isAnagram("srace", "care"));
    return [[]];
}
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var str2Arr = str2.split("").sort();
    return str1
        .split("")
        .sort()
        .every(function (val, index) { return val === str2Arr[index]; });
}
groupAnagrams([]);

function canConstruct(ransomNote, magazine) {
    var randomObj = {};
    var magzineObj = {};
    ransomNote.split("").forEach(function (l) {
        if (randomObj[l]) {
            randomObj[l] += 1;
        }
        else {
            randomObj[l] = 1;
        }
    });
    magazine.split("").forEach(function (l) {
        if (magzineObj[l]) {
            magzineObj[l] += 1;
        }
        else {
            magzineObj[l] = 1;
        }
    });
    console.log(randomObj, magzineObj);
    var result = true;
    Object.keys(randomObj).forEach(function (k) {
        console.log(randomObj[k], magzineObj[k]);
        console.log(randomObj[k] > magzineObj[k]);
        if (!magzineObj[k] || randomObj[k] > magzineObj[k]) {
            result = false;
        }
    });
    return result;
}
var d = canConstruct("a", "b");
console.log(d);

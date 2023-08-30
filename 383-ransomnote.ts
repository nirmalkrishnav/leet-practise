function canConstruct(ransomNote: string, magazine: string): boolean {
  const randomObj = {};
  const magzineObj = {};

  ransomNote.split("").forEach((l) => {
    if (randomObj[l]) {
      randomObj[l] += 1;
    } else {
      randomObj[l] = 1;
    }
  });

  magazine.split("").forEach((l) => {
    if (magzineObj[l]) {
      magzineObj[l] += 1;
    } else {
      magzineObj[l] = 1;
    }
  });
  console.log(randomObj, magzineObj);
  let result = true;
  Object.keys(randomObj).forEach((k) => {
    console.log(randomObj[k], magzineObj[k]);
    console.log(randomObj[k] > magzineObj[k]);

    if (!magzineObj[k] || randomObj[k] > magzineObj[k]) {
      result = false;
    }
  });
  return result;
}

const d = canConstruct("a", "b");
console.log(d);

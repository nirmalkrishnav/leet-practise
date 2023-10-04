function groupAnagrams(strs: string[]): string[][] {
  console.log(isAnagram("ate", "tea"));
  console.log(isAnagram("sate", "seat"));
  console.log(isAnagram("race", "care"));
  console.log(isAnagram("srace", "care"));

  return [[]];
}

function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }
  let str2Arr = str2.split("").sort();
  return str1
    .split("")
    .sort()
    .every((val, index) => val === str2Arr[index]);
}

groupAnagrams([]);

module.exports = function check(str, bracketsConfig) {
  const brackets = {
    "}": "{",
    "]": "[",
    ")": "(",
    "|": "|"
  };

  const st = str.split('');
  const unite = [...st, ...bracketsConfig];
  const removeSubarrays = unite.reduce((acc, val) => acc.concat(val), []);
  const array = [];

  for (let i = 0; i < removeSubarrays.length; i++) {
    const closedBracket = (bracket) => ["}", "]", ")"].indexOf(bracket) > -1;
    if (closedBracket(removeSubarrays[i])) {
      if (removeSubarrays[i] !== brackets["|"] && brackets[removeSubarrays[i]] !== array.pop()) {
        return false;
      }
    } else if (removeSubarrays[i] == brackets["|"] && brackets["|"] == array.pop()) {
      array.pop();
    } else {
      array.push(removeSubarrays[i])
    }
  }
  return array.length === 0;
}
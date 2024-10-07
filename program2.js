const decodeTheRing = function (s, p) {
  let i = 0, j = 0;
  while (i < s.length && j < p.length) {
    if (p[j] === '*') {
      while (j < p.length && p[j] === '*') j++;
      if (j === p.length) return true;
      while (i < s.length && (i === 0 || s[i - 1] !== s[i]) && s[i] !== p[j]) i++;
    } else if (p[j] === '?') {
      i++; j++;
    } else if (s[i] === p[j]) {
      i++; j++;
    } else {
      return false;
    }
  }
  return i === s.length && j === p.length;
};

module.exports = decodeTheRing;
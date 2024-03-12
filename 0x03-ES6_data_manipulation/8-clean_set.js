export default function cleanSet(set, str) {
  const string = [];
  set.forEach((e) => {
    if (e.startsWith(str)) {
      string.push(e.slice(str.length));
    }
  });

  return string.join('-');
}

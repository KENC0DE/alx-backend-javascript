export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  const string = [];
  set.forEach((e) => {
    if (e.startsWith(startString)) {
      string.push(e.slice(startString.length));
    }
  });

  return string.join('-');
}

export default function cleanSet(set, str) {
  let string = '';
  set.forEach((e) => {
    if (str !== '' && e.startsWith(str)) {
      string += e.slice(str.length);
      string += '-';
    }
  });

  string = string.slice(0, -1);

  return string;
}

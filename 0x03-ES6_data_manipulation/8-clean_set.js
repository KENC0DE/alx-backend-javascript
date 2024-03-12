export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';
  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}

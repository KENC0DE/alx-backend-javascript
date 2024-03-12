export default function updateUniqueItems(map) {
  for (const [item, q] of map) {
    if (q === 1) {
      map.set(item, 100);
    }
  }
  return map;
}

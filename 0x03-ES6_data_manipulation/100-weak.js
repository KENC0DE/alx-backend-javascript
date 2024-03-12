export const weakMap = new WeakMap();
export function queryAPI(endp) {
  if (weakMap.get(endp) !== undefined && weakMap.get(endp) >= 5) {
    throw Error('Endpoint load is high');
  }
  if (weakMap.get(endp) === undefined) {
    weakMap.set(endp, 1);
  } else {
    weakMap.set(endp, weakMap.get(endp) + 1);
  }
}

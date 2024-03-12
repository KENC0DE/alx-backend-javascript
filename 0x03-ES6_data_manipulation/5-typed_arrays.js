export default function createInt8TypedArray(length, position, value) {
  const int8buff = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    return new Error('Position outside range');
  }

  const array8 = new Int8Array(int8buff);
  array8[position] = value;

  const view = new DataView(int8buff);

  return { view, array8 };
}

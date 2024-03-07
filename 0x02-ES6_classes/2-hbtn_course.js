export default class HolbertonCourse {
  constructor(name, length, students) {
    if (name instanceof String) {
      this._name = name;
    } else {
      throw new Error('TypeError: name must be a string');
    }
    if (length instanceof Number) {
      this._length = length;
    } else {
      throw new Error('TypeError: length must be a number');
    }
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new Error('TypeError: students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (val instanceof String) {
      this._name = val;
    } else {
      throw new Error('TypeError: name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (val instanceof Number) {
      this._length = val;
    } else {
      throw new Error('TypeError: length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (val instanceof Array) {
      this._students = val;
    } else {
      throw new Error('TypeError: students must be an array');
    }
  }
}

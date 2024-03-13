interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Kenansa',
  lastName: 'Meseret',
  age: 21,
  location: 'Inda',
};

const student2: Student = {
  firstName: 'Jons',
  lastName: 'Carlos',
  age: 20,
  location: 'Zambia',
};

const studentsList: Array<Student> = [student1, student2];

const table: [string, string][] = [];

studentsList.forEach((student) => {
  table.push([student.firstName, student.location]);
});

console.log(table);

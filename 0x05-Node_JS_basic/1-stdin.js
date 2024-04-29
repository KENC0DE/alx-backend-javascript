console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();

process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();
  console.log(`Your name is: ${name}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});

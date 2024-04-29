console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();

process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();
  console.log(`Your name is: ${name}`);
  process.exit();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

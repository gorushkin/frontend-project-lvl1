import readlineSync from 'readline-sync';

export const hello = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = hello();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const maxTry = 3;
  let i = 0;
  while (i < maxTry) {
    const number = Math.round(Math.random() * 100);
    const question = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== question) {
      console.log(`yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
    } else {
      i += 1;
      console.log('Correct!');
    }
  }
};

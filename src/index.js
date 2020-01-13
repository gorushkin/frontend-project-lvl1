import readlineSync from 'readline-sync';

export const hello = (greetings) => {
  console.log('Welcome to the Brain Games!');
  console.log(greetings);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const game = (func, userName) => {
  const maxTry = 3;
  let i = 0;
  while (i < maxTry) {
    const correctAnswer = func();
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) !== String(userAnswer)) {
      console.log(`${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    } else {
      i += 1;
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

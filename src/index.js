import readlineSync from 'readline-sync';

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const hello = (greetings) => {
  console.log('Welcome to the Brain Games!');
  console.log(greetings);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const gameEngine = (generateQuestionAnswer, greetings) => {
  const maxTry = 3;
  let i = 0;
  const userName = hello(greetings);
  while (i < maxTry) {
    const [correctAnswer, question] = generateQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    } else {
      i += 1;
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

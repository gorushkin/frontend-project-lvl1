import readlineSync from 'readline-sync';

const attemptsCount = 3;

export default (generateQuestionAnswer, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < attemptsCount; i += 1) {
    const [correctAnswer, question] = generateQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

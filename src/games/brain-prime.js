import {
  getRandomInteger,
  game,
} from '..';

export default () => {
  const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateQusestion = () => {
    const question = getRandomInteger(1, 1000);
    let answer = 'yes';
    console.log(`Question: ${question}`);
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        answer = 'no';
        return answer;
      }
    }
    return answer;
  };

  game(generateQusestion, greetings);
};

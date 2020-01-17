import {
  getRandomInteger,
  game,
} from '..';

export default () => {
  const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateQusestion = () => {
    const question = getRandomInteger(0, 100);
    console.log(`Question: ${question}`);
    const answer = (question % 2 === 0) ? 'yes' : 'no';
    return answer;
  };

  game(generateQusestion, greetings);
};

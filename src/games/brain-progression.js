import { getRandomInteger, game } from '..';

export default () => {
  const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateQusestion = () => {
    const progressonLength = 10;
    const secretNumber = getRandomInteger(0, 9);
    const progressonStep = getRandomInteger(1, 10);
    let progression = getRandomInteger(0, 100);
    let question = '';
    let answer;
    for (let i = 0; i < progressonLength; i += 1) {
      const elem = progression + progressonStep;
      if (secretNumber === i) {
        answer = elem;
        question += ' ..';
      } else {
        question += ` ${elem}`;
      }
      progression += progressonStep;
    }
    console.log(`Question: ${question}`);
    return answer;
  };

  game(generateQusestion, greetings);
};

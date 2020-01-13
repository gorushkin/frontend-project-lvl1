import { hello, game } from '..';

export default () => {
  const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';
  const userName = hello(greetings);
  const generateQusestion = () => {
    const question = Math.round(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = (question % 2 === 0) ? 'yes' : 'no';
    return answer;
  };

  game(generateQusestion, userName);
};

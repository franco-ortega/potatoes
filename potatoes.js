const allThePotatoes = (...args) => {
  return args.reduce((a, c) => a + c);
};

const firstAnswer = allThePotatoes(1, 2, 3);
const firstExpected = 6;

if (firstAnswer === 6) console.log('First answer, CORRECT');
else console.log('First answer, WRONG:', firstAnswer);

const secondAnswer = allThePotatoes(4, 5, 6, 7);
const secondExpected = 22;

if (secondAnswer === 22) console.log('Second answer, CORRECT');
else console.log('Second answer, WRONG:', secondAnswer);

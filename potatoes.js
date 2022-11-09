const allThePotatoes = (...args) => {
  return args.reduce((a, c) => a + c);
};

const firstAnswer = allThePotatoes(1, 2, 3);

if (firstAnswer === 6) console.log('First answer, CORRECT');
else console.log('First answer, WRONG:', firstAnswer);

const secondAnswer = allThePotatoes(4, 5, 6, 7);

if (secondAnswer === 6) console.log('First answer, CORRECT');
else console.log('First answer, WRONG:', secondAnswer);

const sumAllPotatoes = (nums) => {
  return nums.reduce((a, c) => {
    if (typeof a === 'string') return a + ' ' + c;

    return a + c;
  });
};

const multiplyPotatoes = (factors) => {
  return factors.reduce((a, c) => {
    if (typeof c === 'string') {
      console.log('Error: not a number');
      return;
    }

    return a * c;
  });
};

/////////////////////
// function to check the answer

const checkAnswer = (fn, expected, args) => {
  const actual = fn(args);

  if (actual === expected) console.log('Correct!', actual);
  else console.log('Incorrect :(', actual);
};
/////////////////////

console.log('testing...1, 2, 3...');

checkAnswer(sumAllPotatoes, 6, [1, 2, 3]);
checkAnswer(sumAllPotatoes, '1 2 3', ['1', '2', '3']);
checkAnswer(multiplyPotatoes, 16, [2, 8]);
checkAnswer(multiplyPotatoes, 24, [2, 3, 4]);
checkAnswer(multiplyPotatoes, '24', ['2', '3', '4']);

const listOne: Array<string> = ['[listOne]', 'one', 'two'];
const listTwo: Array<string> = ['[listTwo]', 'three', 'four', 'five'];
const listThree: Array<string> = ['[listThree]', 'six', 'seven', 'eight', 'nine'];

const formula = '[listOne] [listTwo] [listThree]';

const sentenceCreator = (formula: string, lists: string[][]) => {
  const outputSentences: Array<string> = [];

  return outputSentences;
};

const result = sentenceCreator(formula, [listOne, listTwo, listThree]);

console.log(result);
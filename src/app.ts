const listOne: string[] = ['[listOne]', 'one', 'two'];
const listTwo: string[] = ['[listTwo]', 'three', 'four', 'five'];
const listThree: string[] = ['[listThree]', 'six', 'seven', 'eight', 'nine'];

const formula = '[listOne] this and [listTwo]';

const componentExtractor = (formula: string) => {
  const components: string[] = [];

  const splitFormula = formula.split(' '); 

  splitFormula.forEach(element => {
    if (element.startsWith('[')) {
      components.push(element);
    } 
  })

  return components
}

const sentenceCreator = (formula: string, lists: string[][]) => {
  const outputSentences: string[] = [];

  const components: string[] = componentExtractor(formula)

  console.log(components);
  
  for (let component = 0; component < components.length; component++) {
     // find list containing the component
    const listIndex = lists.findIndex(list => list[0] === components[component])
    
    // for the length of the list replace the component
    for (let item = 1; item < lists[listIndex].length; item++) {
      
      
    }
    
  }

  return outputSentences
}

const result = sentenceCreator(formula, [listOne, listTwo, listThree]);

console.log(result);
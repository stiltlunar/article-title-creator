"use strict";
const listOne = ['[listOne]', 'one', 'two'];
const listTwo = ['[listTwo]', 'three', 'four', 'five'];
const listThree = ['[listThree]', 'six', 'seven', 'eight', 'nine'];
const formula = '[listOne] this and [listThree]';
const componentExtractor = (formula) => {
    const components = [];
    const splitFormula = formula.split(' ');
    splitFormula.forEach(element => {
        if (element.startsWith('[')) {
            components.push(element);
        }
    });
    return components;
};
const sentenceCreator = (formula, lists) => {
    const outputSentences = [];
    const components = componentExtractor(formula);
    console.log(components);
    for (let component = 0; component < components.length; component++) {
        // find list containing the component
        const listIndex = lists.findIndex(list => list[0] === components[component]);
        // for the length of the list replace the component
        for (let item = 1; item < lists[listIndex].length; item++) {
        }
    }
    return outputSentences;
};
const result = sentenceCreator(formula, [listOne, listTwo, listThree]);
console.log(result);

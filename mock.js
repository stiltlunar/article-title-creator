var listOne = ['one', 'two'];
var listTwo = ['three', 'four', 'five'];
var listThree = ['six', 'seven', 'eight', 'nine'];
var formula = '[listOne] [listTwo] [listThree]';
var sentenceCreator = function (formula, lists) {
    var outputSentences = [];
    console.log(lists);
    return outputSentences;
};
var result = sentenceCreator(formula, [listOne, listTwo, listThree]);
console.log(result);

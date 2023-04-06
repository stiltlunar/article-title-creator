const fs = require('fs')
// Read File of Title Formulas and Add to Memory
const formulas = fs.readFileSync('./formula-test.txt', 'utf-8')

const parsedFormulas = formulas.split('\n')

console.log(parsedFormulas);

// Read File of Keywords and Add to Memory

const text = fs.readFileSync('./test.txt', 'utf-8')

const categories = text.split('\n\n')
const parsed = []

categories.forEach(category => {
  const thing = category.split('\n')
  parsed.push(thing)
})

console.log(parsed);

// Create Titles and Export to Document

const titles = []

parsedFormulas.forEach(formula => {
  // find all keyword insertion points

  // forEach number of points, and for each keyword in list, replace keywords in title
  
  const splitFormula = formula.split(' ')
  const placeholders = []

  // Creates a list of all the sentences created by replacing the words
  splitFormula.forEach(word => {
    // Find words to replace
    if (word.slice(0).match(/\[/)) {
      placeholders.push(word)
    }
    // For the number of words to replace, iterate through each word list
    for (let index = 0; index < placeholders.length; index++) {
      // Attribute to replace
      const element = placeholders[index];
      // Find attribute in list
      // Replace attribute and move to next one
    }
  })
  console.log(thing.length);
})
# Installation

Install node.js: https://nodejs.org/en/

Clone repo

    git clone git@github.com:gmichlicki-neducatio/hangman-challenge.git

Install dependencies
  
    npm i
    
Start development

    npm start
    
Multi-stage development

    npm run multi

# Documentation    

DoT template engine documentation: http://olado.github.io/doT/index.html

Variables for use in single stage:

1. **it.alphabet** – all letters of the alphabet
2. **it.word** - a word to guess
3. **it.numberOfLetters** - number of letters in the guessed word (including duplicates)
4. **it.lettersInWord** - unique letters used in the guessed word (excluding duplicates, sorted alphabetically)
5. **it.numberOfLettersInWord** - number of unique letters used in the guessed word 
6. **it.lettersNotInWord** - letters not used in the guessed word 
7. **it.numberOfLettersNotInWord** - number of unique letters not used in the guessed word

Variables for use in multi stage:

1. **it.alphabet** – all letters of the alphabet
2. **it.numberOfWords** - number of words drawn (5 by default)
3. **it.words** - array containing words data:

    a. **it.words[n].word** - a word to guess  
    b. **it.words[n].numberOfLetters** - number of letters in the guessed word (including duplicates)  
    c. **it.words[n].lettersInWord** - unique letters used in the guessed word (excluding duplicates, sorted alphabetically)  
    d. **it.words[n].numberOfLettersInWord** - number of unique letters used in the guessed word   
    e. **it.words[n].lettersNotInWord** - letters not used in the guessed word   
    f. **it.words[n].numberOfLettersNotInWord** - number of unique letters not used in the guessed word  

where 'n' is a number between 0-4, eg. it.words[4].word

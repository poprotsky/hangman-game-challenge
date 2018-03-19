# Installation

Install node.js: https://nodejs.org/en/

Clone repo

    git clone https://github.com/epoprocki-neducatio/hangman-challenge.git

Install dependencies
  
    npm i
    
Start development

    npm start
    
Multi-stage development

    npm run multi

# Documentation    

## Templates

DoT template engine documentation: http://olado.github.io/doT/index.html

## CSS preprocessors

You can use LESS and SCSS preprocessors. Simply add a file with the extension .less or .scss to the 
workspace directory, and then add tag:
```
<link rel="stylesheet" href="your-file.css"> 
```
to the one.dot or multi.dot file. Note the extension used in the href attribute, it must be .css. 
The server will look for the .less file first, then .scss, and finally .css.
2 files with variables are also created each time the user visits website. 
One for each preprocessor language: `_vars.less` and `_vars.scss`.     
Variables are described in the next section of this document

## Variables

### Variables for use in single stage:

1. **it.alphabet** – all letters of the alphabet
2. **it.numberOfWords** - number of words drawn (always 1)
3. **it.word** - a word to guess
4. **it.letters** - a word to guess letter by letter
5. **it.numberOfLetters** - number of letters in the guessed word (including duplicates)
6. **it.lettersInWord** - unique letters used in the guessed word (excluding duplicates, sorted alphabetically)
7. **it.numberOfLettersInWord** - number of unique letters used in the guessed word 
8. **it.lettersNotInWord** - letters not used in the guessed word 
9. **it.numberOfLettersNotInWord** - number of unique letters not used in the guessed word

Inside .less files there are corresponding variables created in _vars.less file:

1. **@alphabet**
2. **@numberOfWords**
3. **@word**
4. **@letters**
5. **@numberOfLetters**
6. **@lettersInWord**
7. **@numberOfLettersInWord** 
8. **@lettersNotInWord** 
9. **@numberOfLettersNotInWord**

Inside .scss files there are corresponding variables created in _vars.scss file:

1. **$alphabet**
2. **$numberOfWords**
3. **$word**
4. **$letters**
5. **$numberOfLetters**
6. **$lettersInWord**
7. **$numberOfLettersInWord** 
8. **$lettersNotInWord** 
9. **$numberOfLettersNotInWord**


### Variables for use in multi stage:

1. **it.alphabet** – all letters of the alphabet
2. **it.numberOfWords** - number of words drawn (5 by default)
3. **it.words** - array containing words data:

    a. **it.words[n].word** - a word to guess  
    b. **it.words[n].letters** - a word to guess letter by letter  
    c. **it.words[n].numberOfLetters** - number of letters in the guessed word (including duplicates)  
    d. **it.words[n].lettersInWord** - unique letters used in the guessed word (excluding duplicates, sorted alphabetically)  
    e. **it.words[n].numberOfLettersInWord** - number of unique letters used in the guessed word   
    f. **it.words[n].lettersNotInWord** - letters not used in the guessed word   
    g. **it.words[n].numberOfLettersNotInWord** - number of unique letters not used in the guessed word  

where 'n' is a number between 0-4, eg. it.words[4].word

Inside .less files there are corresponding variables created in _vars.less file:

1. **@alphabet**
2. **@numberOfWords**
3. **@word1**
4. **@letters1**
5. **@numberOfLetters1**
6. **@lettersInWord1**
7. **@numberOfLettersInWord1** 
8. **@lettersNotInWord1** 
9. **@numberOfLettersNotInWord1**

Points 3-9 are repeated for each subsequent word with a prefix replaced to its number

Inside .scss files there are corresponding variables created in _vars.scss file:

1. **$alphabet**
2. **$numberOfWords**
3. **$word1**
4. **$letters1**
5. **$numberOfLetters1**
6. **$lettersInWord1**
7. **$numberOfLettersInWord1** 
8. **$lettersNotInWord1** 
9. **$numberOfLettersNotInWord1**

Points 3-9 are repeated for each subsequent word with a prefix replaced to its number

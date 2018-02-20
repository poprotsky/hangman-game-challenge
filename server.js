const path = require('path');
const portFinder = require('portfinder');
const express = require('express');
const engine = require('express-dot-engine');
const { words: wordsArray, alphabet } = require('./workspace/data');

const PORT = +process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

engine.settings.dot = {
  evaluate: /{{([\s\S]+?)}}/g,
  interpolate: /{{=([\s\S]+?)}}/g,
  encode: /{{!([\s\S]+?)}}/g,
  use: /{{#([\s\S]+?)}}/g,
  define: /{{##\s*([\w.$]+)\s*([:=])([\s\S]+?)#}}/g,
  conditional: /{{\?(\?)?\s*([\s\S]*?)\s*}}/g,
  iterate: /{{~\s*(?:}}|([\s\S]+?)\s*:\s*([\w$]+)\s*(?::\s*([\w$]+))?\s*}})/g,
  varname: 'layout, partial, locals, it',
  strip: false,
  append: true,
  selfcontained: false
};

const WORKSPACE = path.resolve(__dirname, 'workspace');
const app = express();
app.engine('dot', engine.__express);
app.set('views', WORKSPACE);
app.set('view engine', 'dot');

app.use(express.static(WORKSPACE));

app.get('/favicon.ico', (req, res) => res.status(204).send());

app.get('/', (req, res) => {
  const wordList = shuffle(wordsArray.slice(0));
  const numberOfWords = Math.min(parseInt(process.env.NUM_WORDS), wordList.length);

  let DATA = { alphabet, numberOfWords };

  if (numberOfWords > 1) {
    DATA.words = wordList.splice(0, numberOfWords).map(getWordStats);
  } else {
    DATA = Object.assign(DATA, getWordStats(wordList[0]));
  }

  res.render(numberOfWords > 1 ? 'multi' : 'one', DATA);
});

app.use((req, res) => res.status(404).send('Not found'));

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!')
});

portFinder.basePort = PORT;

portFinder.getPortPromise()
    .then(port =>
        app.listen(port, HOST, () => console.log(`App is running at: http://${HOST}:${port}/`))
    );

function getWordStats(word) {
  const letters = word.split('');
  const lettersInWord = letters.filter((value, index, array) => array.indexOf(value) === index)
      .sort((a, b) => alphabet.indexOf(a) - alphabet.indexOf(b));
  const lettersNotInWord = alphabet.filter(value => word.indexOf(value) === -1);

  return {
    word,
    numberOfLetters: letters.length,
    lettersInWord,
    numberOfLettersInWord: lettersInWord.length,
    lettersNotInWord,
    numberOfLettersNotInWord: lettersNotInWord.length
  }
}

function shuffle(array) {
  let currentIndex = array.length,
      temporaryValue,
      randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
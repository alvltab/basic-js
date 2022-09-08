const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(direct) {
    this.direct = direct;
  }

  vigenereRow = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().repeat(3).split('');

  encrypt() {
    if (arguments.length !== 2
      || typeof arguments[0] !== 'string'
      || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    let phrase = arguments[0].toUpperCase();
    let key = arguments[1].toUpperCase();
    
    if (key.length < phrase.length) {
      key = key.repeat(Math.ceil(phrase.length/key.length));
    }
    key = key.slice(0, phrase.length);

    [phrase, key] = [phrase.split(''), key.split('')];

    let result = phrase.map((el, i) => {
      if (this.vigenereRow.indexOf(el) < 0) {
        key.splice(i, 0, el);
        return el;
      } else {
        return this.vigenereRow[
          this.vigenereRow.indexOf(el)
          + this.vigenereRow.indexOf(key[i])
        ]
      }
    });

    return this.direct === false
    ? result.reverse().join('')
    : result.join('');
  }
  
  decrypt() {
    if (arguments.length !== 2
      || typeof arguments[0] !== 'string'
      || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    let phrase = arguments[0].toUpperCase();
    let key = arguments[1].toUpperCase();

    if (key.length < phrase.length) {
      key = key.repeat(Math.ceil(phrase.length/key.length));
    }
    key = key.slice(0, phrase.length);

    [phrase, key] = [phrase.split(''), key.split('')];

    let result = phrase.map((el, i) => {
      console.log(el, i, key[i]);
      if (this.vigenereRow.indexOf(el) < 0) {
        key.splice(i, 0, el);
        return el;
      } else {
        return this.vigenereRow[
          26
          + this.vigenereRow.indexOf(el)
          - this.vigenereRow.indexOf(key[i])
        ]
      }
    });

    return this.direct === false
    ? result.reverse().join('')
    : result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

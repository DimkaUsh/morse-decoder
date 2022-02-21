const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodeStr = ''

  

    for (let i = 10; i <= expr.length; i+=10) {
      let codeChar = expr.slice(i-10, i)
      let charMorse = ''
  
      for (let j = 0; j <= 8 ; j += 2) {
        let sign = codeChar.slice(j, (j+2))
        if (sign === '00') {continue}
        if (sign === '**') {
          charMorse = ' '
          decodeStr += ' ';
          break
        }
        if (sign === '10') {charMorse += '.'}
        if (sign === '11') {charMorse += '-'}
      }
  
      if (charMorse === ' ') {continue}
      decodeStr +=  MORSE_TABLE[charMorse]
    }

    return decodeStr
}

module.exports = {
    decode
}
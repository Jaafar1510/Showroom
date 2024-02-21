function translateText() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const outputMorse = document.getElementById('outputMorse');

    const morseCodeToLetter = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
        '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
        '--..': 'Z', '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', '--...': '7',
        '---..': '8', '----.': '9', '-----': '0', '/': ' ', '..--..':'?'
    };

    const words = inputText.split('   '); // Three spaces indicate word separation in Morse code
    let translation = '';

    for (let word of words) {
        const letters = word.split(' ');
        for (let letter of letters) {
            if (morseCodeToLetter[letter]) {
                translation += morseCodeToLetter[letter];
            } else {
                translation += letter;
            }
        }
        translation += ' ';
    }

    outputMorse.textContent = translation.trim();
}

function translateToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const outputMorse = document.getElementById('outputMorse');

    const letterToMorseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
        'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '0': '-----', ' ': '/', '?':'..--..'
    };

    const words = inputText.split(' ');
    let morseTranslation = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            if (letterToMorseCode[char]) {
                morseTranslation += letterToMorseCode[char];
                if (j < word.length - 1) {
                    morseTranslation += ' '; // Add space between parts of the same letter
                }
            } else {
                morseTranslation += char + '';
            }
        }
        if (i < words.length - 1) {
            morseTranslation += ' / '; // Add slash (/) between words
        }
    }

    outputMorse.textContent = morseTranslation.trim();
}

function copyOutput(elementId) {
    const outputText = document.getElementById(elementId).textContent;
    const tempInput = document.createElement("textarea");
    tempInput.value = outputText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied to clipboard");
}
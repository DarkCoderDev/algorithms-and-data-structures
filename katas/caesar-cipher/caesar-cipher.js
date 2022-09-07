class CaesarCipher {
    static #distance = 5;

    static #distancing = (code, distance = this.#distance) =>
        code + distance;
    static #unDistancing = (code, distance = this.#distance) =>
        code - distance;

    static #toUnicode(text) {
        return [...text].reduce((codes, char) => {
            const code = char.charCodeAt(0);
            codes.push(code);
            return codes;
        }, []);
    }

    static #toChar(codes, moveCode) {
        return codes.reduce((chars, code) => {
            const distancedCode = moveCode(code);
            const distancedChar = String.fromCharCode(distancedCode);
            chars += distancedChar;
            return chars;
        }, '');
    }

    static code(text) {
        const symbolCodes = CaesarCipher.#toUnicode(text);
        return this.#toChar(symbolCodes, this.#distancing);
    }

    static decode(text) {
        const symbolCodes = CaesarCipher.#toUnicode(text);
        return this.#toChar(symbolCodes, this.#unDistancing);
    }
}

 module.exports = {
     CaesarCipher,
 }

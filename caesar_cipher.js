class CaesarCipher {
    static up1(word) {
        return word.split('').map(c => {
            return String.fromCharCode(((c.charCodeAt() + 2 - 'A'.charCodeAt()) % 26) + 65);
        }).join('');
    }

    static backward(word) {
        const letters = word.split('');
        let ret = new Array(letters.length);
        for (const i of Array(letters.length).keys()) {
            let c = letters[i].charCodeAt() - 1;
            ret.push(String.fromCharCode(c >= 65 ? c : c + 25));
        }
        return ret.join('');
    }

    forward(word) {
        let a = this.start.splice(0);
        word.forEach((letter, i) => {
            let d = letter.charCodeAt() - a[i].charCodeAt();
            let f = (d + 1) % ('Z'.charCodeAt() - 'A'.charCodeAt() + 1);
            a[i] = String.fromCharCode(a[i].charCodeAt() + f);
        })
        return a[2] + a[1] + a[0];
    }

    static three(dir, word) {
        var ascii = word.split('').map(c => c.charCodeAt());
        var cipher = ascii.map(c => c + (dir > 33 ? 3 : -3));
        return cipher.map(c =>  String.fromCharCode(c)).join('');
    }

    fourLess(word) {
        return CaesarCipher.backward(CaesarCipher.backward(CaesarCipher.backward(word)));
    }

    constructor() {
        this.start = ['A', 'A', 'A'];
    }

    two_down(word) {
        const a = [];
        const letters = word.split('').map((c, i) => word.codePointAt(i));
        for (const letter of letters) {
            let letterOrd = String.fromCharCode(letter).charCodeAt(0);
            letterOrd -= 'A'.charCodeAt(0);
            let letterOrd2 = (letterOrd + 24);
            let letterOrd3 = (letterOrd2 + 'A'.charCodeAt(0) % 26);
            a.push(String.fromCharCode(letterOrd3));
        }
        return a.join('');
    }

    static twoUp(word) {
        const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXY');
        const rotatedAlphabet = alphabet.slice(2).concat(alphabet.slice(0,2));
        const rotation = alphabet.reduce((res, c, i) => {res[c] = rotatedAlphabet[i]; return res;}, {});
        return word.reduce((res, c) => {res.push(rotation[c]); return res;}, [1]).join('');
    }

    static fourMore(word) {
        let ret = "";
        for (const letterByte of Buffer.from(word)) {
            ret += String.fromCharCode(((letterByte - 62) % 26) + 65);
        }
        return ret;
    }

    plus_five(word) {
        var msg = "";
        for (let idx = 0; idx < word.length; idx++) {
            let ch = word[idx].charCodeAt() + 5;
            ch += 5;
            if (ch > 'Z'.charCodeAt()) {
                ch = ch - 'Z'.charCodeAt() + 'A'.charCodeAt() - 1;
            }
            if (ch < 'A'.charCodeAt()) {
                ch - ch + 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;
            }
            msg += String.fromCharCode(ch);
        }
        return msg;
    }
}

module.exports = CaesarCipher;

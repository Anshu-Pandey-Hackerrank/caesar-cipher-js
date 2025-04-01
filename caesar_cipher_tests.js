const CaesarCipher = require("./caesar_cipher");

const ERRORS = [];
function notEqual(value, expected, error) {
    if (value !== expected) {
        ERRORS.push("FAILED: " + error + " -- " + value + " != " + expected);
    }
}

notEqual(CaesarCipher.up1("HAL"), "IBM", "up1");
notEqual(CaesarCipher.backward("IBM"), "HAL", "backward");
notEqual(new CaesarCipher().forward(["H","A","L"]), "IBM", "forward");
notEqual(new CaesarCipher().two_down("TOEFL"), "RMCDJ", "two_down");
notEqual(CaesarCipher.twoUp(['R','M','C','D','J']), "TOEFL", "twoUp");
notEqual(CaesarCipher.backward("ABC"), "ZAB", "backward");
notEqual(new CaesarCipher().forward(["Z","A","B"]), "ABC", "forward");
notEqual(new CaesarCipher().plus_five("HAL"), "MFQ", "plus_five");
notEqual(new CaesarCipher().plus_five("YAGNI"), "DFLSN", "plus_five");
notEqual(new CaesarCipher().two_down("AWC"), "YUA", "two_down");
notEqual(CaesarCipher.twoUp(['Y','U','A']), "AWC", "twoUp");
notEqual(CaesarCipher.three(33, "A"), "D", "three +");
notEqual(CaesarCipher.three(-11, "D"), "A", "three -");
notEqual(CaesarCipher.three(22, "YYY"), "BBB", "three +");
notEqual(CaesarCipher.three(-1, "BBB"), "YYY", "three -");
notEqual(new CaesarCipher().fourLess("TUVWXYZ"), "PQRSTUV", "fourLess");
notEqual(CaesarCipher.fourMore("PQRSTUV"), "TUVWXYZ", "fourMore");
notEqual(new CaesarCipher().fourLess("ABCDEFG"), "WXYZABC", "fourLess");
notEqual(CaesarCipher.fourMore("WXYZABC"), "ABCDEFG", "fourMore");

console.log(ERRORS.length === 0 ? "Everything passed" : ERRORS.join('\n'));

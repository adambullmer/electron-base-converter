/**
 * Uses an experimental string math library (strint) to accomodate
 * for numbers larger than what javascript/nodejs can handle.
 *
 */

import Ember from 'ember';
import strint from 'strint';

export default Ember.Service.extend({
    /**
     * Exponential operations, using a string to keep large number accuracy
     *
     * @param  {string} stringNumber base number
     * @param  {number} power        power with which to raise the base number
     *
     * @return {string}              string representation of the result
     */
    stringPow (stringNumber, power) {
        let value = '1';

        for (let x = 0; x < power; x++) {
            value = strint.mul(value, stringNumber);
        }

        return value;
    },

    /**
     * Performs a modulus on string integers. e.x. 12 % 5 = 2
     *
     * @param  {string} dividend  number to be modulated on in string form
     * @param  {string} modulus   the modulus in string form
     *
     * @return {string}           the remainder from the modulus
     */
    stringMod (dividend, modulus) {
        let quotient   = this.stringFloorDiv(dividend, modulus),
            difference = strint.mul(quotient, modulus),
            remainder  = strint.sub(dividend, difference);

        return remainder;
    },

    /**
     * Performs a whole number division on string integers.
     * e.x. 12 // 5 = 2
     *
     * @param  {string} dividend number to be divided in string form
     * @param  {string} divisor  number to do the dividing in string form
     *
     * @return {string}          the full number of times the divisor goes
     *                           into the dividend
     */
    stringFloorDiv (dividend, divisor) {
        let quotient    = strint.div(dividend, divisor),
            wholeNumber = quotient.split('.')[0];

        return wholeNumber;
    },

    /**
     * Decodes an encoded number.
     * The alphabet NEEDS to match exactly to what the string was originally
     * encoded with, otherwise the resulting number will NOT be coorect.
     *
     * @param  {string} encodedString   encoded string to be decoded
     * @param  {string} alphabet        string of ordered characters in the
     *                                  base alphabet
     *
     * @return {string}          string representation of an integer
     */
    decode (encodedString, alphabet) {
        const base         = alphabet.length.toString(),
              stringLength = encodedString.length;

        let number        = '0',
            reverseString = encodedString.split("").reverse().join(""),
            characterValue;

        for (let x = 0; x < stringLength; x++) {
            if (alphabet.indexOf(encodedString[x]) === -1) {
                throw new Error('Invalid character: ' + encodedString[x]);
            }
        }

        for (let x = 0; x < stringLength; x++) {
            characterValue = this.stringPow(base, x);
            characterValue = strint.mul(characterValue, alphabet.indexOf(reverseString[x]).toString());
            number         = strint.add(number, characterValue);
        }

        return number;
    },

    /**
     * Encodes a stringified integer.
     * Uses the provided alphabet to derive which base to encode the string. If
     * an alphabet is provided with the characters in the wrong order, the encoded
     * string will be encoded improperly.
     *
     * @param  {string} decodedString string representation of a number to be encoded
     * @param  {string} alphabet      string of ordered characters in the base alphabet
     *
     * @return {string}               encoded string
     */
    encode (decodedString, alphabet) {
        const base     = alphabet.length.toString();
        let characters = [],
            characterIndex;

        if (/[^0-9]+/.test(decodedString) === true) {
            throw new Error('decodedString must be equivelant of an integer');
        }

        if (strint.isNegative(decodedString)) {
            throw new Error('decodedString must be non-negative');
        }

        if (decodedString === '0') {
            return '0';
        }

        while (decodedString !== '0') {
            characterIndex = this.stringMod(decodedString, base);
            decodedString  = this.stringFloorDiv(decodedString, base);
            characters.push(alphabet.charAt(characterIndex));
        }

        return characters.reverse().join("");
    },

    convert (input, inputAlphabet, outputAlphabet) {
        let decimalString = this.decode(input, inputAlphabet),
            encodedString = this.encode(decimalString, outputAlphabet);

        return encodedString;
    }
});

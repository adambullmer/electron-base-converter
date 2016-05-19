import { moduleFor, test } from 'ember-qunit';

const alphaBase02 = '01',
    alphaBase08 = '01234567',
    alphaBase10 = '0123456789',
    alphaBase16 = '0123456789abcdef',
    alphaBase62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

moduleFor('service:converter', 'Unit | Service | converter', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
    let service = this.subject();
    assert.ok(service);
});

test('String Math Power', function(assert) {
    let service = this.subject();

    function pow(base, power, expectedResult) {
        let result = service.stringPow(base, power);
        assert.strictEqual(result, expectedResult, `${base}^${power} should equal ${expectedResult}`);
    }

    pow('3', 0, '1');
    pow('3', 1, '3');
    pow('3', 2, '9');
    pow('3', 3, '27');
});

test('String Math Mod', function (assert) {
    let service = this.subject();

    function mod(dividend, modulus, expectedResult) {
        let result = service.stringMod(dividend, modulus);
        assert.strictEqual(result, expectedResult, `${dividend} % ${modulus} should equal ${expectedResult}`);
    }

    mod('10', '2', '0');
    mod('10', '5', '0');
    mod('10', '8', '2');
    mod('10', '9', '1');
});

test('String Math Divide Floor', function (assert) {
    let service = this.subject();

    function floorDivide(dividend, divisor, expectedResult) {
        let result = service.stringFloorDiv(dividend, divisor);
        assert.strictEqual(result, expectedResult, `${dividend} // ${divisor} should equal ${expectedResult}`);
    }

    floorDivide('10', '1', '10');
    floorDivide('10', '2', '5');
    floorDivide('10', '3', '3');
    floorDivide('10', '4', '2');
    floorDivide('10', '5', '2');
    floorDivide('10', '6', '1');
    floorDivide('10', '7', '1');
    floorDivide('10', '8', '1');
    floorDivide('10', '9', '1');
    floorDivide('10', '10', '1');
    floorDivide('10', '11', '0');
});

test('Decode', function (assert) {
    let service = this.subject();

    function decode(input, alphabet, expectedResult) {
        let result = service.decode(input.toString(), alphabet.toString());
        assert.strictEqual(result, expectedResult.toString(), `${input} should convert to ${expectedResult}, but got ${result} using the alphabet '${alphabet}'`);
    }

    decode('11000000111001' , alphaBase02, '12345');
    decode('30071'          , alphaBase08, '12345');
    decode('12345'          , alphaBase10, '12345');
    decode('3039'           , alphaBase16, '12345');
    decode('3d7'            , alphaBase62, '12345');
});

test('Encode', function (assert) {
    let service = this.subject();

    function encode(input, alphabet, expectedResult) {
        let result = service.encode(input.toString(), alphabet.toString());
        assert.strictEqual(result, expectedResult.toString(), `${input} should convert to ${expectedResult}, but got ${result} using the alphabet '${alphabet}'`);
    }

    encode('12345', alphaBase02, '11000000111001');
    encode('12345', alphaBase08, '30071');
    encode('12345', alphaBase10, '12345');
    encode('12345', alphaBase16, '3039');
    encode('12345', alphaBase62, '3d7');
});

test('Convert', function (assert) {
    let service = this.subject();

    function convert(input, inputAlphabet, outputAlphabet, expectedResult) {
        let result = service.convert(input, inputAlphabet, outputAlphabet);
        assert.strictEqual(result, expectedResult, `${input} should convert to ${expectedResult}, but got ${result} using the conversion '${inputAlphabet}' -> '${outputAlphabet}'`);
    }

    convert('11000000111001', alphaBase02, alphaBase02, '11000000111001');
    convert('11000000111001', alphaBase02, alphaBase08, '30071');
    convert('11000000111001', alphaBase02, alphaBase10, '12345');
    convert('11000000111001', alphaBase02, alphaBase16, '3039');
    convert('11000000111001', alphaBase02, alphaBase62, '3d7');

    convert('30071', alphaBase08, alphaBase02, '11000000111001');
    convert('30071', alphaBase08, alphaBase08, '30071');
    convert('30071', alphaBase08, alphaBase10, '12345');
    convert('30071', alphaBase08, alphaBase16, '3039');
    convert('30071', alphaBase08, alphaBase62, '3d7');

    convert('12345', alphaBase10, alphaBase02, '11000000111001');
    convert('12345', alphaBase10, alphaBase08, '30071');
    convert('12345', alphaBase10, alphaBase10, '12345');
    convert('12345', alphaBase10, alphaBase16, '3039');
    convert('12345', alphaBase10, alphaBase62, '3d7');

    convert('3039', alphaBase16, alphaBase02, '11000000111001');
    convert('3039', alphaBase16, alphaBase08, '30071');
    convert('3039', alphaBase16, alphaBase10, '12345');
    convert('3039', alphaBase16, alphaBase16, '3039');
    convert('3039', alphaBase16, alphaBase62, '3d7');

    convert('3d7', alphaBase62, alphaBase02, '11000000111001');
    convert('3d7', alphaBase62, alphaBase08, '30071');
    convert('3d7', alphaBase62, alphaBase10, '12345');
    convert('3d7', alphaBase62, alphaBase16, '3039');
    convert('3d7', alphaBase62, alphaBase62, '3d7');
});

test('conversion can handle large numbers', function (assert) {
    let service = this.subject();

    function convert(input, inputAlphabet, outputAlphabet, expectedResult) {
        let result = service.convert(input, inputAlphabet, outputAlphabet);
        assert.strictEqual(result, expectedResult, `${input} should convert to ${expectedResult}, but got ${result} using the conversion '${inputAlphabet}' -> '${outputAlphabet}'`);
    }

    convert('1VDOo8VLztZ5IZD1qJ9ray', alphaBase62, alphaBase02, '111111011001110111111000001010000111011111000100010001111001101001111111101101000000100100001010101100000100010000000000000010');
    convert('1VDOo8VLztZ5IZD1qJ9ray', alphaBase62, alphaBase08, '773167701207370421715177550044125404200002');
    convert('1VDOo8VLztZ5IZD1qJ9ray', alphaBase62, alphaBase10, '84278726696036973433646627076850122754');
    convert('1VDOo8VLztZ5IZD1qJ9ray', alphaBase62, alphaBase16, '3f677e0a1df111e69fed0242ac110002');
    convert('1VDOo8VLztZ5IZD1qJ9ray', alphaBase62, alphaBase62, '1VDOo8VLztZ5IZD1qJ9ray');
});

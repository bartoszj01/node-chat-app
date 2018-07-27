const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 123;
        var res = isRealString(str);

        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var st2 = '    ';
        var re2 = isRealString(st2);

        expect(re2).toBe(false);
    });
    it('should allow string with non-space characters', () => {
        var st3 = 'red mind';
        var re3 = isRealString(st3);

        expect(re3).toBe(true);
    });
});
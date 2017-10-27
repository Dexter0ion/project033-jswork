var assert = require('assert');
var isVowelConsonant = require('../js/isVowelConsonant');

describe('Q4:isVowelConsonant',function(){
    it('should return true when string is United Arab Emirates',function(){
        assert.equal(true,isVowelConsonant('United Arab Emirates'));
    });

    it('should return false when string is aeiOU',function(){
        assert.equal(false,isVowelConsonant('aeiOU'));
    });


});
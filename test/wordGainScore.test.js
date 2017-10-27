var assert = require('assert');
var wordGainScore = require('../js/wordGainScore');

describe('Q1:wordGainScore',function(){
    it('should return 0 when string is bcd',function(){
        assert.equal(0,wordGainScore('bcd'));
    });

    it('should return 15 when string is AeIoU',function(){
        assert.equal(15,wordGainScore('AeIoU'));
    });
});
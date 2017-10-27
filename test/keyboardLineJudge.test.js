var assert = require('assert');
var keyboardLineJudge = require('../js/keyboardLineJudge');

describe('Q3:keyboardLineJudge',function(){
    it("should return 12 when string is qweasd",function(){
        assert.equal("12",keyboardLineJudge("qweasd"));
    });
});
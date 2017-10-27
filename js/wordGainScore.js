function wordGainsScore(str) {
    var words = str;
    var score = 0;
    //正则表达式匹配

    var reg = new Array(6);
    reg[1] = new RegExp(/a/, 'ig');
    reg[2] = new RegExp(/e/, 'ig');
    reg[3] = new RegExp(/i/, 'ig');
    reg[4] = new RegExp(/o/, 'ig');
    reg[5] = new RegExp(/u/, 'ig');

    for (var i = 1; i <= 5; i++) {
        var matchCount = words.match(reg[i]);
        if (matchCount)
            score += (matchCount.length)*i;
    }
    return score;
}

function wordGainsScoreHtml() {
    var words = document.getElementById("text-Q1").value;
    
    var answer = document.getElementById("text-Q1answer");
    //var words = str;
    var score = 0;
    //正则表达式匹配

    var reg = new Array(6);
    reg[1] = new RegExp(/a/, 'ig');
    reg[2] = new RegExp(/e/, 'ig');
    reg[3] = new RegExp(/i/, 'ig');
    reg[4] = new RegExp(/o/, 'ig');
    reg[5] = new RegExp(/u/, 'ig');

    for (var i = 1; i <= 5; i++) {
        var matchCount = words.match(reg[i]);
        if (matchCount)
            score += (matchCount.length)*i;
    }
    alert("Score:"+score);
    document.getElementById("text-Q1-answer").innerHTML="Score:"+score;
    //return score;
}
module.exports = wordGainsScoreHtml;

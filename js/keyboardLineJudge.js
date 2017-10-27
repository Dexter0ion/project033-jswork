function keyboardLineJudge(str) {
    var reg = new Array();
    reg[0] = new RegExp(/[12345678890]/, "ig");
    reg[1] = new RegExp(/[qwertyuiop]/, 'ig');
    reg[2] = new RegExp(/[asdfghjkl]/, 'ig');
    reg[3] = new RegExp(/[zxcvbnm]/, 'ig');

    var lineMatchSave = new Array();
    var lineStr = "";
    for (var i = 0; i < 4; i++) {
        var lineMatch = str.match(reg[i]);
        if (lineMatch)
            lineMatchSave[i] = 1;
        //console.log(i);
    }

    for (var i = 0; i < 4; i++)
        if (lineMatchSave[i] == 1)
            lineStr += i;

    //console.log(lineStr);
    return lineStr;


}

function keyboardLineJudgeHtml() {
    var str = document.getElementById("text-Q3").value;
    var reg = new Array();
    reg[0] = new RegExp(/[12345678890]/, "ig");
    reg[1] = new RegExp(/[qwertyuiop]/, 'ig');
    reg[2] = new RegExp(/[asdfghjkl]/, 'ig');
    reg[3] = new RegExp(/[zxcvbnm]/, 'ig');

    var lineMatchSave = new Array();
    var lineStr = "";
    for (var i = 0; i < 4; i++) {
        var lineMatch = str.match(reg[i]);
        if (lineMatch)
            lineMatchSave[i] = 1;
        //console.log(i);
    }

    for (var i = 0; i < 4; i++)
        if (lineMatchSave[i] == 1)
            lineStr += i;

    //console.log(lineStr);
    //return lineStr;
    alert("使用QWERT键盘行数:"+lineStr);
    document.getElementById("text-Q3-answer").innerHTML="使用QWERT键盘行数:"+lineStr;


}

module.exports = keyboardLineJudgeHtml;
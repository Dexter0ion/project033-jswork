function everyCharCount(str) {
    var charDic = new Array();  //use dictionary to save char
    for (var i = 0; i < str.length; i++) {
        var ctmp = str.charAt(i);
        if (charDic[ctmp]) {
            charDic[ctmp] += 1;
        }
        
        else if (!charDic[ctmp]) {
            charDic[ctmp] = 1;
        }

    }

    var charTotal = 0;
    var numTotal = 0;
    var otherTotal = 0;
    var regChar = new RegExp(/[a-z]/, 'g');
    var regNum = new RegExp(/\d/, 'ig');
    var regOther = new RegExp(/[^a-z0-9]/, 'ig');

    var charCount = str.match(regChar);
    if (charCount)
        charTotal += charCount.length;

    var numCount = str.match(regNum);
    if (numCount)
        numTotal += numCount.length;

    var otherCount = str.match(regOther);
    if (otherCount)
        otherTotal += otherCount.length;

    var result = {
        charDic,
        charTotal,
        numTotal,
        otherTotal
    }

    return result;
    /*
    //console output test successful
    for(var key in charDic){
        console.log(key+":"+charDic[key]);
    }
    console.log("charTotal:" + charTotal + " numTotal:" + numTotal+" otherTotal:"+otherTotal);
    
    console.log(result);
    */
}

function everyCharCountHtml() {
    var str = document.getElementById("text-Q2").value;
    document.getElementById("text-Q2-answer").innerHTML ="";
    var charDic = new Array();  //use dictionary to save char
    for (var i = 0; i < str.length; i++) {
        var ctmp = str.charAt(i);
        if (charDic[ctmp]) {
            charDic[ctmp] += 1;
        }
        
        else if (!charDic[ctmp]) {
            charDic[ctmp] = 1;
        }

    }

    var charTotal = 0;
    var numTotal = 0;
    var otherTotal = 0;
    var regChar = new RegExp(/[a-z]/, 'g');
    var regNum = new RegExp(/\d/, 'ig');
    var regOther = new RegExp(/[^a-z0-9]/, 'ig');

    var charCount = str.match(regChar);
    if (charCount)
        charTotal += charCount.length;

    var numCount = str.match(regNum);
    if (numCount)
        numTotal += numCount.length;

    var otherCount = str.match(regOther);
    if (otherCount)
        otherTotal += otherCount.length;

    var result = {
        charDic,
        charTotal,
        numTotal,
        otherTotal
    }
    
    
    document.getElementById("text-Q2-answer").innerHTML +="出现字符："+"<br>";
    for(var key in charDic){
        document.getElementById("text-Q2-answer").innerHTML += key+":"+charDic[key]+"<br>";
    }
    document.getElementById("text-Q2-answer").innerHTML += "字母总数|charTotal:" + charTotal+"<br>";
    document.getElementById("text-Q2-answer").innerHTML += "数字总数|numTotal:" + numTotal+"<br>";
    document.getElementById("text-Q2-answer").innerHTML += "其他字符|otherTotal:"+otherTotal+"<br>";

    /*
    //console output test successful
    for(var key in charDic){
        console.log(key+":"+charDic[key]);
    }
    console.log("charTotal:" + charTotal + " numTotal:" + numTotal+" otherTotal:"+otherTotal);
    
    console.log(result);
    */
}
module.exports = everyCharCount;
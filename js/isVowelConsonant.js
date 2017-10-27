function isVowelConsonant(str) {
    if (!str)
        return false;
    var regChar = new RegExp(/[a-z]/, 'ig');
    var charSave = str.match(regChar);
    //console.log(charSave);
    var regVowel = new RegExp(/[aeiou]/, 'ig');
    var flagIs = Boolean(true);
    var flagthis = 0;

    var flaglast = 0;

    if (charSave[0].match(regVowel)) {
        //console.log(charSave[0] + " is vowel");
        flaglast = 1;
    }

    for (var i = 1; i < charSave.length; i++) {

        if (charSave[i].match(regVowel)) {
            //console.log(charSave[i] + " is vowel");
            flagthis = 1;
        }

        else if (!charSave[i].match(regVowel)) {
            //console.log(charSave[i] + " is not vowel");
            flagthis = 0;
        }
        if (flagthis == flaglast) {
            flagIs = Boolean(false);
            break;
        }


        flaglast = flagthis;
    }

    return flagIs;
}

function isVowelConsonantHtml() {
    var str = document.getElementById("text-Q4").value;
    if (!str)
        return false;
    var regChar = new RegExp(/[a-z]/, 'ig');
    var charSave = str.match(regChar);
    //console.log(charSave);
    var regVowel = new RegExp(/[aeiou]/, 'ig');
    var flagIs = Boolean(true);
    var flagthis = 0;

    var flaglast = 0;

    if (charSave[0].match(regVowel)) {
        //console.log(charSave[0] + " is vowel");
        flaglast = 1;
    }

    for (var i = 1; i < charSave.length; i++) {

        if (charSave[i].match(regVowel)) {
            //console.log(charSave[i] + " is vowel");
            flagthis = 1;
        }

        else if (!charSave[i].match(regVowel)) {
            //console.log(charSave[i] + " is not vowel");
            flagthis = 0;
        }
        if (flagthis == flaglast) {
            flagIs = Boolean(false);
            break;
        }


        flaglast = flagthis;
    }
    if (flagIs) {
        alert("满足条件！元辅音交替");
        document.getElementById("text-Q4-answer").innerHTML = "满足条件！元辅音交替";
    }

    if (!flagIs) {
        alert("不满足条件！元辅音不交替");
        document.getElementById("text-Q4-answer").innerHTML = "满足条件！元辅音不交替";
    }
}

module.exports = isVowelConsonant;

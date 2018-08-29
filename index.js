function clearEditor() {
    let editor = document.getElementById('editor');

    editor.value = '';
};

function flipAll() {
    var editor = document.getElementById('editor');
 
    if (editor.value) {
        var addBallz = editor.value.split('\n');

        var splitArray = addBallz.map(function (item) {
            return item.split(',');
        });

        var flipStep = splitArray.map(function (item) {
            item[1] = '\t' + -parseInt(item[1]);
            return item;
        });

        var anchoredString = flipStep.join('\n');
        editor.value = anchoredString;
    }
};

function copyAll() {
    var text = document.getElementById('editor');   
    text.select();
    document.execCommand('copy');
};
function buildFromLaTeX() {
    let outputTextAreaElement = document.getElementById('output');
    outputTextAreaElement.style.display = 'block';
    let textAreaContents = outputTextAreaElement.value;

    if (textAreaContents == "" || textAreaContents == undefined)
        return;

    // explore at https://regex101.com/r/C0wMJb/1
    let nodeRegexp = /\\draw\s+\[(\w+)]\s+\((-?\d*\.?\d*),(-?\d*\.?\d*)\)\s+circle\s+\((-?\d*\.?\d*)\)\s*;?\n*(?:\\draw\s+\((-?\d*\.?\d*),(-?\d*\.?\d*)\)\s+node\s+\{\$([^\$]+)\$\}\s*;?)?/gm;

    let groupCountForLabelledNodeMatch = 4;
    let groupCountForUnlabelledNodeMatch = 7;

    for (let i = 0; i < 4; i++) {
        let match = nodeRegexp.exec(textAreaContents);
        console.log(match);
    }
}

function addBuildFromLaTeXOption() {
    let buildFromLaTeXLink = document.createElement('a');
    buildFromLaTeXLink.setAttribute("href", "javascript:buildFromLaTeX()");
    buildFromLaTeXLink.innerHTML = "LaTeX";
    let linkParagraphElement = document.getElementsByClassName("center")[0];
    linkParagraphElement.innerHTML += "<br>Build from: ";
    linkParagraphElement.appendChild(buildFromLaTeXLink);
}

addBuildFromLaTeXOption();
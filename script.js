function openPopup() {
    document.getElementById("myPopup").style.display = "block";
    setTimeout(() => {
        document.getElementById("q").style.display = "block";
    }, "500");
}
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
    document.getElementById("q").style.display = "none";
}
function cx(){
    var y = document.getElementById("size");
    if (y.value=="Small"){
        document.getElementById("area").style.fontSize = "10px";
    }
    if (y.value=="Hing"){
        document.getElementById("area").style.fontSize = "40px";
    }
    if (y.value=="Normal"){
        document.getElementById("area").style.fontSize = "15px";
    }



    let colorPicker;
    const defaultColor = "#0000ff";

    window.addEventListener("load", startup, false);

    function startup() {
        colorPicker = document.querySelector("#color-picker");
        colorPicker.value = defaultColor;
        colorPicker.addEventListener("input", updateFirst, false);
        colorPicker.addEventListener("change", updateAll, false);
        colorPicker.select();
    }

    function updateFirst(event) {
        const p = document.querySelector("textarea");
        if (p) {
            p.style.color = event.target.value;
        }
    }

    function updateAll(event) {
        document.querySelectorAll("textarea").forEach((p) => {
            p.style.color = event.target.value;
        });
    }


var x = document.getElementById("select");
if (x.value=="Arial Black"){
    document.getElementById("area").style.fontFamily = "Arial Black";
}
    if (x.value=="Sergoe UI Light"){
        document.getElementById("area").style.fontFamily = "Sergoe UI Light";
    }
    if (x.value=="Sergoe UI Black"){
        document.getElementById("area").style.fontFamily = "Sergoe UI Black";
    }    if (x.value=="Sergoe UI Emoji"){
        document.getElementById("area").style.fontFamily = "Sergoe UI Emoji";
    }
    if (x.value=="Sergoe UI Symbol"){
        document.getElementById("area").style.fontFamily = "Sergoe UI Symbol";
    }
    if (x.value=="Arial"){
        document.getElementById("area").style.fontFamily = "Arial";
    }
    if (x.value=="Roboto light"){
        document.getElementById("area").style.fontFamily = "Roboto light";
    }
    if (x.value=="Sans-serif"){
        document.getElementById("area").style.fontFamily = "Sans-serif";
    }
    if (x.value=="Impact"){
        document.getElementById("area").style.fontFamily = "Impact";
    }






}


function qwerty() {
    let q=prompt("Дайте название патча")

    const textToSave = document.getElementById("area").value;
    const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    const fileNameToSaveAs = q+".vantage";

    const downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}
function saveTextAsFile() {
    const textToSave = document.getElementById("area").value;
    const textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
    const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    const fileNameToSaveAs = "index.html";

    const downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function start(){
    let yu = document.getElementById("area").value;
    document.writeln(yu);
}
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


function center(){
    document.getElementById("area").style.textAlign="center";
}
function right(){
    document.getElementById("area").style.textAlign="left";
}









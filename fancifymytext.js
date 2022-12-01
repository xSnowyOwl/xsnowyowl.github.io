function increaseTextSize(){
    document.getElementById("textInput").style.fontSize = "24pt"
}

function mooFunction(){
    document.getElementById("textInput").style.textTransform = "uppercase"
    var string = document.getElementById("textInput").value
    var moo = string.split('.');
    document.getElementById("textInput").value = moo.join("-Moo.")
}

function fancyChange(){
    alert("Changed to Fancy Schmancy!")
    document.getElementById("textInput").style.fontWeight = "bold"
    document.getElementById("textInput").style.color = "blue"
    document.getElementById("textInput").style.textDecoration = "underline"
}

function boringChange(){
    alert("Changed to Boring Betty!")
    document.getElementById("textInput").style.fontWeight = "normal"
    document.getElementById("textInput").style.color = "black"
}
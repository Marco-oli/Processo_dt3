window.load = slide(1);

var bgNumber = 1;

function slide(n){
    var allBgs = 3;

    document.getElementById('imagebg').style.backgroundImage = "url('./imagens/"+n+".png')";
}

function anterior(){
    if(bgNumber>1){
        bgNumber--;
        slide(bgNumber);
    }
}

function proximo(){
    if(bgNumber<3){
        bgNumber++;
        slide(bgNumber);
    }
}
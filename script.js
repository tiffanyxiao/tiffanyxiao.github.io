window.onscroll = function() {scrollFunction()};
let docHeight;
let docWidth;
let numBones = 0;
let boneElementID = [];
let bonePosMany = [];
let functionRunning = false;

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function createBoneImg(){
    let boneImg = document.createElement("img");
    boneImg.setAttribute('src', 'bone.png');
    boneImg.setAttribute('alt', 'cute bone for tofu image');
    boneImg.setAttribute('height', '60vw');
    boneImg.setAttribute('width', '60vw');
    boneImg.setAttribute('id', 'bone'+numBones);

    boneImg.style.position = "absolute";
    let xpos = Math.floor(Math.random() * docWidth * 0.90 + docWidth * 0.05);
    let ypos = Math.floor(Math.random() * docHeight * 0.90 + docHeight * 0.05); 

    boneImg.style.left = xpos + "px";
    boneImg.style.top = ypos + "px";
    document.body.appendChild(boneImg);
    bonePosMany.push([xpos, ypos]);
    boneElementID.push('bone'+numBones)
    numBones += 1;
}

let id = null;
function tofuMove() {
    functionRunning = true;
    let elem = document.getElementById("tofu-eating");   
    let xpos = Math.floor(elem.getBoundingClientRect().left + window.scrollX);
    let ypos = Math.floor(elem.getBoundingClientRect().top + window.scrollY);
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
    if (xpos == bonePosMany[0][0] && ypos == bonePosMany[0][1]) {
        clearInterval(id);
        bonePosMany.shift();
        let el = document.getElementById(boneElementID[0]);
        el.parentNode.removeChild(el);
        boneElementID.shift();
        functionRunning = false;
    } else {
        if (xpos != bonePosMany[0][0]){
            if (xpos < bonePosMany[0][0]){
                xpos++; 
            } else {
                xpos--;
            } 
            elem.style.left = xpos + 'px'; 
        } 
        if (ypos != bonePosMany[0][1]){
            if (ypos < bonePosMany[0][1]){
                ypos++; 
            } else {
                ypos--;
            } 
            elem.style.top = ypos + 'px'; 
        }
    }
    }
}

function onLoadFunction(){
    docHeight = document.body.scrollHeight;
    docWidth = document.body.scrollWidth;
    document.addEventListener("keyup", function(event) {
        if (event.keyCode == 84) {
            createBoneImg();
            tofuMove();
        }
    });
}

setInterval(function() {
    if(!functionRunning && numBones > 0) {
        tofuMove();
    }
}, 500);
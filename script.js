window.onscroll = function() {scrollFunction()};
let docHeight;
let docWidth;
let numBones = 0;
let bonePosMany = [];

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
    boneImg.setAttribute('height', '10%');
    boneImg.setAttribute('width', '10%');

    boneImg.style.position = "absolute";
    let xpos = Math.floor(Math.random() * docWidth * 0.90 + docWidth * 0.05);
    let ypos = Math.floor(Math.random() * docHeight * 0.90 + docHeight * 0.05); 

    boneImg.style.left = xpos + "px";
    boneImg.style.top = ypos + "px";
    document.body.appendChild(boneImg);
    bonePosMany.push([xpos, ypos])
    numBones += 1;
}

function onLoadFunction(){
    console.log("hi");
    docHeight = document.body.scrollHeight;
    docWidth = document.body.scrollWidth;
    document.addEventListener("keyup", function(event) {
        if (event.keyCode == 84) {
            createBoneImg();
        }
    });

    // while (numBones > 0){
    //     let tofuImg = document.getElementById("tofu-eating");
    //     for (let bonePos in bonePosMany){
    //         while(tofuImg.xpos!=bonePos[0] && tofuImg.ypos!=bonePos[1]){
    //             tofuImg.style.left = xpos+1;
    //             tofuImg.style.top = ypos+1;
    //         }
    //     }
    // }
}
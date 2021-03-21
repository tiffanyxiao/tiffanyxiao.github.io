let numModals = 0;
let row = 0;

data.forEach((project) => {
    numModals += 1;
    let newModal = document.createElement("div");
    newModal.className = "modal-style";

    let newModalCoverImage = document.createElement("img");
    newModalCoverImage.id = "myBtn"+project["btnID"];
    newModalCoverImage.src = project["coverImage"];
    newModalCoverImage.className = "image-with-border";
    newModal.appendChild(newModalCoverImage);

    let newModalBreak = document.createElement("br");
    newModal.appendChild(newModalBreak);

    let newModalTitle = document.createElement("p");
    newModalTitle.innerHTML = project["name"];
    newModal.appendChild(newModalTitle);

    let newModalContentBox = document.createElement("div");
    newModalContentBox.id = "myModal"+project["modalId"];
    newModalContentBox.className = "modal";

    let newModalContent= document.createElement("div");
    newModalContent.className = "modal-content";

    let newModalSpan= document.createElement("span");
    newModalSpan.className = "close";
    newModalSpan.innerHTML = "&times";
    newModalContent.appendChild(newModalSpan);

    let newModalInnerImage= document.createElement("img");
    newModalInnerImage.className = "modal-inner-image";
    newModalInnerImage.src = project["innerImage"];
    newModalContent.appendChild(newModalInnerImage);

    let newModalh1= document.createElement("h1");
    newModalh1.innerHTML = project["name"];
    newModalContent.appendChild(newModalh1);

    let newModalDateCompleted= document.createElement("h2");
    newModalDateCompleted.innerHTML = "Date Completed: "+project["dateCompleted"];
    newModalContent.appendChild(newModalDateCompleted);

    let newModalPartners= document.createElement("h2");
    newModalPartners.innerHTML = "Partner(s): "+project["partners"];
    newModalContent.appendChild(newModalPartners);

    let newModalSkills= document.createElement("h2");
    newModalSkills.innerHTML = "Skills Used: "+project["skillsUsed"];
    newModalContent.appendChild(newModalSkills);

    let newModalPara= document.createElement("p");
    newModalPara.className = "modal-p-style";
    newModalContent.appendChild(newModalPara);

    newModalContent.appendChild(newModalBreak);
    project["paragraphs"].forEach((paragraph) =>{
        let tempPara= document.createElement("p");
        tempPara.innerHTML = paragraph;
        newModalContent.appendChild(tempPara);
    });

    let linkPara= document.createElement("p");
    let newModalLink= document.createElement("a");
    newModalLink.href = project["link"];
    newModalLink.innerHTML = project["link"];
    linkPara.appendChild(newModalLink);
    let newModalBreak2 = document.createElement("br");
    linkPara.appendChild(newModalBreak2);
    newModalContent.appendChild(linkPara);

    newModalContentBox.appendChild(newModalContent);
    newModal.appendChild(newModalContentBox);

    let divOfModals = document.getElementById("projects-rows");
    divOfModals.appendChild(newModal);

    // When the user clicks the button, open the modal
    newModalCoverImage.onclick = function() {
        newModalContentBox.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    newModalSpan.onclick = function() {
        newModalContentBox.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for (let i=1; i < numModals+1; i++){
        let modal = document.getElementById("myModal"+i);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


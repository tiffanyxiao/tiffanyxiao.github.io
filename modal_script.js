for (let i=1; i < 5; i++){
    // Get the modal
    let modal = document.getElementById("myModal"+i);

    // Get the button that opens the modal
    let btn = document.getElementById("myBtn"+i);

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[i-1];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let modal = document.getElementById("myModal1");
    if (event.target == modal) {
        modal.style.display = "none";
    }
    modal = document.getElementById("myModal2");
    if (event.target == modal) {
        modal.style.display = "none";
    }
    modal = document.getElementById("myModal3");
    if (event.target == modal) {
        modal.style.display = "none";
    }
    modal = document.getElementById("myModal4");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


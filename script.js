//Script for modal
window.onload = function() {
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
    modal.style.display = "block";
    }
    
    span.onclick = function() {
    modal.style.display = "none";
    }
    
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }

    let contactButton = document.querySelector(".whatsapp-link");
    let targetBlock = document.querySelector(".contact-wrapper");

    contactButton.onclick = function() {
        targetBlock.classList.toggle("active");
    }
}





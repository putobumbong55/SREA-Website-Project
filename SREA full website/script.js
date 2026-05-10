//javascript for the modal image gallery

// Get the modal
var modal = document.getElementById("myModal");

// Get all images
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Function to open modal with clicked image
function openModal(imgElement) {
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

// Add click events to each image
img1.onclick = function() { openModal(this); };
img2.onclick = function() { openModal(this); };
img3.onclick = function() { openModal(this); };

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When user clicks anywhere outside the image, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

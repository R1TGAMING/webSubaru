const buttonav = document.getElementById("buttonnav");


function clickNav(e) {
  const listnav = document.getElementById("listnav");
  e.name === "menu-outline"
    ? ((e.name = "close-outline"), listnav.classList.add("opacity-100"))
    : ((e.name = "menu-outline"), listnav.classList.remove("opacity-100"));
}

 let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("mySlides");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}



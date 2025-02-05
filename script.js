const buttonav = document.getElementById("buttonnav");


function clickNav(e) {
  const listnav = document.getElementById("listnav");
  e.name === "menu-outline"
    ? ((e.name = "close-outline"), listnav.classList.add("opacity-100"))
    : ((e.name = "menu-outline"), listnav.classList.remove("opacity-100"));
}

const NAV_BUTTON = document.getElementById("nav-button");
const NAV_LIST = document.getElementById("nav-list");
console.log(NAV_BUTTON)
console.log(NAV_LIST)

// Show/hide navigation on mobile if button is clicked
NAV_BUTTON.onclick = function () {
  NAV_LIST.classList.toggle("show-navigation");
}

// Hide the navigation if a link is clicked
NAV_LIST.onclick = function () {
  if (NAV_LIST.classList.contains("show-navigation")) {
    NAV_LIST.classList.remove("show-navigation");
  }
}
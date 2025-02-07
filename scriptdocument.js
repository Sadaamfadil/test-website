// Form submit functionality
document.getElementById("contact").addEventListener("main", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
});

// Auto-fill form on page load
const btn2 = document.getElementById(`btn2`);
const loginPopup = document.getElementById(`loginPopup`);
const closePopup = document.querySelector(`.close`);

btn2.addEventListener(`click`, () => {
  loginPopup.style.display = `block`;
});

closePopup.addEventListener(`click`, () => {
  loginPopup.style.display = `none`;
});
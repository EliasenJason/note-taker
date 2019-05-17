const popUpActive = false;
//buttons on main page
const openPopUpButton = document.querySelector('#issueButton');
//button within popUp
const popUpCloseButton = document.querySelector('.fa-times');

//button to open up the popUp
openPopUpButton.addEventListener("click", function() {
  if (!popUpActive) {
    document.querySelector('#popUp').style.display = 'block';
  };
})
//button to close the popup if you don't want to fill it out
popUpCloseButton.addEventListener("click", function () {
  document.querySelector('#popUp').style.display = 'none';
})

let issues = [];

const reloadUnitList = () => {
  document.querySelector("#unitList").innerHTML = "";
  issues.forEach(function(element) {
    const unit = element.unitNumber;
    const liNodeToAdd = document.createElement("li");
    const textNodeToAdd = document.createTextNode(unit);
    liNodeToAdd.appendChild(textNodeToAdd);
    liNodeToAdd.classList.add("list-item");
    console.log(liNodeToAdd);
    document.querySelector("#unitList").appendChild(liNodeToAdd);
  })
}

//create new issue button on main page
const openPopUpButton = document.querySelector('#issueButton');
//button to open up the popUp
openPopUpButton.addEventListener("click", function() {
    document.querySelector('#popUp').style.display = 'block';
    console.log(issues);
})

//close button within popUp
const popUpCloseButton = document.querySelector('.fa-times');
//button to close the popup if you don't want to fill it out
popUpCloseButton.addEventListener("click", function () {
  document.querySelector('#popUp').style.display = 'none';
})

//submit button on popup
const form = document.querySelector('form');

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const issueObject = {
    unitNumber: document.querySelector('#unit').value,
    date: document.querySelector('#date').value,
    department: document.querySelector('#department').value,
    issueText: document.querySelector('#issueText').value,
  };
  issues.push(issueObject);
  document.querySelector('#popUp').style.display = 'none';
  reloadUnitList();
})

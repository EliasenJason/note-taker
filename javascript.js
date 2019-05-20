let issues = [];
const unitListing = [];

const deleteCurrentItem = (deleteButton) => {
  const elementToDelete = deleteButton.parentElement.ParentElement;
  deleteButton.parentElement.parentElement.parentElement.removeChild(elementToDelete);
}

const reloadUnitList = () => {
  //clear the li items
  document.querySelector("#unitList").innerHTML = "";
  //check all unit numbers in issues array and push them into unitListing array without duplicates
  issues.forEach(function(element) {
    if (!unitListing.includes(element.unitNumber)) {
      unitListing.push(element.unitNumber);
    }
  })
  //create show all li
  const liNodeToAdd = document.createElement("li");
  const textNodeToAdd = document.createTextNode("Show All");
  liNodeToAdd.appendChild(textNodeToAdd);
  liNodeToAdd.classList.add("list-item");
  liNodeToAdd.id = "showAll";
  document.querySelector("#unitList").appendChild(liNodeToAdd);
  //create event listener for on click of show all li
  document.querySelector('#showAll').addEventListener("click", function() {
    document.querySelector("#description").innerHTML = "";
    issues.forEach(function(object) {
      const showAllUl = document.createElement("ul");
      showAllUl.classList.add("item");
      const showAllLiUnitNumber = document.createElement("li");
      showAllLiUnitNumber.classList.add("itemNumber");
      showAllLiUnitNumber.appendChild(document.createTextNode(object.unitNumber));
      const showAllLiDescription = document.createElement("li");
      showAllLiDescription.classList.add("itemDescription");
      showAllLiDescription.appendChild(document.createTextNode(object.issueText));
      const showAllLiItemDate = document.createElement("li");
      showAllLiItemDate.classList.add("itemDate");
      showAllLiItemDate.appendChild(document.createTextNode(object.date));
      const showAllLiItemOptions = document.createElement("li");
      showAllLiItemOptions.classList.add("itemOptions");
      const showAllLiItemOptionsDeleteButton = document.createElement("div");
      showAllLiItemOptionsDeleteButton.classList.add("deleteItem");
      const showAllLiItemOptionsDeleteButtonText = "Delete";
      showAllLiItemOptionsDeleteButton.appendChild(document.createTextNode(showAllLiItemOptionsDeleteButtonText));
      showAllLiItemOptions.appendChild(showAllLiItemOptionsDeleteButton);

      console.log(showAllLiUnitNumber,showAllLiDescription,showAllLiItemDate,showAllLiItemOptions);
      showAllUl.appendChild(showAllLiUnitNumber);
      showAllUl.appendChild(showAllLiDescription);
      showAllUl.appendChild(showAllLiItemDate);
      showAllUl.appendChild(showAllLiItemOptions);
      document.querySelector("#description").appendChild(showAllUl);
    })
  })
  //add eventlistener for deleting items from list and from issues array
  /*
  document.getElementsByClassName("deleteItem").addEventListener("click", function() {

  })
  */
  //create a list item from unitListing array
  unitListing.forEach(function(unit) {
    const liNodeToAdd = document.createElement("li");
    const textNodeToAdd = document.createTextNode(unit);
    liNodeToAdd.appendChild(textNodeToAdd);
    liNodeToAdd.classList.add("list-item");
    document.querySelector("#unitList").appendChild(liNodeToAdd);
  })
  //*TO DO* need to make event handler for each item in unitlist to populate description area
}

//create new issue button on main page
const openPopUpButton = document.querySelector('#issueButton');
//button to open up the popUp
openPopUpButton.addEventListener("click", function() {
    document.querySelector('#popUp').style.display = 'block';
    document.querySelector('#unit').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#issueText').value = "";
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

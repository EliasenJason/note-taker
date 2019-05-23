/*
To Do list:
-have something show in main area instantly upon adding issues
-delete items
*/


//***GLOBAL VARIABLES***
const issues = [];
const individualUnit = [];
const populateUnitList = () => {
  const showAllItem = document.querySelector('#showAll');
  document.querySelector('#unitList').innerHTML = "";
  document.querySelector('#unitList').appendChild(showAllItem);
  individualUnit.forEach(function(unitNumber) {
    const unitItem = document.createElement("li");
    unitItem.classList.add("list-item");
    unitItem.appendChild(document.createTextNode(unitNumber));
    document.querySelector("#unitList").appendChild(unitItem);
  })
}
//***MAIN SCREEN***
//Event listener for create new issue button
document.querySelector('#issueButton').addEventListener("click", function() {
  document.querySelector('#popUp').style.display = 'block';
  document.querySelector('#unit').value = "";
  document.querySelector('#date').value = "";
  document.querySelector('#issueText').value = "";
})
//Event listener for show all issueButton
document.querySelector('#showAll').addEventListener("click", function() {
  document.querySelector('#description').innerHTML = "";
  issues.forEach(function(object) {
    document.querySelector('#description').appendChild(object.constructHTML());
  })
})
//Event listener for individual unitList
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('list-item')) {
    document.querySelector("#description").innerHTML = "";
    issues.forEach(function(object) {
      if (event.target.innerText === object.unitNumber) {
        document.querySelector("#description").appendChild(object.constructHTML())
      }
    });
  }
});
//***POPUP CREATE NEW ISSUE***
//Event listener for closing new issue popup window
document.querySelector('.fa-times').addEventListener("click", function() {
  document.querySelector('#popUp').style.display = 'none';
})
//Event listener for submit button of form (create an issue object with method to return html and push it into issues global variable)
document.querySelector('form').addEventListener("submit", function (event) {
  event.preventDefault();
  const issueObject = {
    unitNumber: document.querySelector('#unit').value,
    date: document.querySelector('#date').value,
    department: document.querySelector('#department').value,
    issueText: document.querySelector('#issueText').value,
    constructHTML() {
      const ul = document.createElement("ul");
        ul.classList.add("item");
      const liUnitNumber = document.createElement("li");
        liUnitNumber.classList.add("itemNumber");
        liUnitNumber.appendChild(document.createTextNode(this.unitNumber));
      const liItemDescription = document.createElement("li");
        liItemDescription.classList.add("itemDescription");
        liItemDescription.appendChild(document.createTextNode(this.issueText));
      const liItemDate = document.createElement("li");
        liItemDate.classList.add("itemDate");
        liItemDate.appendChild(document.createTextNode(this.date));
      const liItemOptions = document.createElement("li");
        liItemOptions.classList.add("itemOptions");
      const deleteButton = document.createElement("div");
        deleteButton.classList.add("deleteItem");
        deleteButton.appendChild(document.createTextNode("Delete"));
      liItemOptions.appendChild(deleteButton);
      ul.appendChild(liUnitNumber);
      ul.appendChild(liItemDescription);
      ul.appendChild(liItemDate);
      ul.appendChild(liItemOptions);
      return ul;
    }
  };
  issues.push(issueObject);
  issues.forEach(function(object) {
    if (!individualUnit.includes(object.unitNumber)) {
      individualUnit.push(object.unitNumber);
    }
  })
  populateUnitList();
  document.querySelector('#description').innerHTML = "";
  issues.forEach(function(object) {
    document.querySelector('#description').appendChild(object.constructHTML());
  })
  document.querySelector('#popUp').style.display = 'none';
})

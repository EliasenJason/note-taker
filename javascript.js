/*
To Do list:
complete!
*/
//***GLOBAL VARIABLES***
//list of all issues
const issues = [];
//list of individual unit numbers
let individualUnit = [];
//function to populate the unit list with showall button at the top
const populateUnitList = () => {
  const showAllItem = document.querySelector('#showAll');
  document.querySelector('#unitList').innerHTML = "";
  document.querySelector('#unitList').appendChild(showAllItem);
  individualUnit = [];
  issues.forEach(function(object) {
    if (!individualUnit.includes(object.unitNumber)) {
      individualUnit.push(object.unitNumber);
    }
  })
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
//Event listener for individual unitList and delete button of items
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('list-item')) {
    document.querySelector("#description").innerHTML = "";
    issues.forEach(function(object) {
      if (event.target.innerText === object.unitNumber) {
        document.querySelector("#description").appendChild(object.constructHTML())
      }
    });
  }
  else if (event.target.classList.contains("deleteItem")) {
    const liToDelete = event.target.parentElement.parentElement;
    const itemNumberToDelete = liToDelete.querySelector('.itemNumber').innerText;
    const itemDescriptionToDelete = liToDelete.querySelector('.itemDescription').innerText;
    const itemDateToDelete = liToDelete.querySelector('.itemDate').innerText;
    for (let i = 0; i < issues.length; i++) {
      if (issues[i].unitNumber === itemNumberToDelete &&
          issues[i].date === itemDateToDelete &&
          issues[i].issueText === itemDescriptionToDelete) {
        liToDelete.parentNode.removeChild(liToDelete);
        issues.splice(i, 1);
        populateUnitList();
        break;
      }
    }
  }
});
//***POPUP CREATE NEW ISSUE***
//Event listener for closing new issue popup window
document.querySelector('.fa-times').addEventListener("click", function() {
  document.querySelector('#popUp').style.display = 'none';
})
//Event listener for submit button of form (create an issue object with method to return html, push it into issues global variable,
//populate individualUnit global and populate description area with same functionality as show all button)
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
  populateUnitList();
  document.querySelector('#description').innerHTML = "";
  issues.forEach(function(object) {
    document.querySelector('#description').appendChild(object.constructHTML());
  })
  document.querySelector('#popUp').style.display = 'none';
})

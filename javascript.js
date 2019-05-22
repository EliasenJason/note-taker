//***GLOBAL VARIABLES***
const issues = [];

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
  issues.forEach(function(object) {
    document.querySelector('#description').innerHTML = "";
    document.querySelector('#description').appendChild(object.constructHTML());
  })
})
//Event listener for individual unitList ***TODO***

//***POPUP CREATE NEW ISSUE***
//Event listener for closing new issue popup window
document.querySelector('.fa-times').addEventListener("click", function() {
  document.querySelector('#popUp').style.display = 'none';
})
//Event listener for submit button of form (create an issue object with method to return html and push it into issues global variable)
//***TODO*** need to add clearing than appending list items for individual units
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
  document.querySelector('#popUp').style.display = 'none';
  console.log(issues);
})

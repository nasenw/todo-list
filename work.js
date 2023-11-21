let addToListButton = document.getElementById("addToListButton");
let counter = 1;

addToListButton.addEventListener("click", function () {
  // Adding Li to Ul Element:
  if (getUserInput() != "") {
    let userInput = getUserInput();
    let newItem = document.getElementById("listItems");

    newItem.insertAdjacentHTML(
      "beforeend",
      `<li id="${counter}" class="CreatelistItem${counter}"> ${userInput} <button onclick="removeListItem(${counter})"> x </button> </li>`
    );
    counter++;

    // Adding Button to List Element:
  } else {
    alert("Nothing to add to list");
  }
  // Reset the input for the next list element
  document.getElementById("userInput").value = "";
});

function getUserInput() {
  let toDo = document.getElementById("userInput").value;

  return toDo;
}

function removeListItem(x) {
  // Delete list item
  // get item
  document.querySelector(`.CreatelistItem${x}`).remove();
  document.getElementById(x);

  console.log(document.querySelector(`.CreatelistItem${x}`));

  // delete item
}

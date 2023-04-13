const inputBox = document.getElementById("input-box"); // Get the input box element
const listContainer = document.getElementById("list-container"); // Get the list container element

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter something!"); // Display an alert if input is empty
    }
    else{
        let li = document.createElement("li"); // Create a new list item element
        li.innerHTML = inputBox.value; // Set the innerHTML of the list item to the input value
        listContainer.appendChild(li); // Append the list item to the list container
        let span = document.createElement("span"); // Create a new span element
        span.innerHTML = "\u00d7"; // Set the innerHTML of the span to "✗" (to mark task as done)
        li.appendChild(span); // Append the span to the list item
    }
    inputBox.value = ''; // Clear the input box after adding the task
    saveData(); // Save the updated data to localStorage
}

listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Add or remove "checked" class on the clicked list item
    // saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // Remove the parent list item of the clicked span
    // saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Store the data in localStorage
}

function loadData(){
    const savedData = localStorage.getItem("data"); // Get the saved data from localStorage
    if(savedData){
        listContainer.innerHTML = savedData; // Update the list container with the saved data
    }
}

loadData(); // Load the data from localStorage when the page loads

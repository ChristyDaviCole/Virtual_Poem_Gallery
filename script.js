//Phase 2: Locating and Styling the Poems (Selection & Style Logic)
//Write a JavaScript file linked to your HTML page that identifies and styles items in your gallery. You must write a script that:

//Selects one specific poem using getElementById().

const earthPoem = document.getElementById("earth");

//Changes that poem’s background color by setting its inline style property in JavaScript.

earthPoem.style.backgroundColor = "lightgreen";

//Selects all poems on one of your walls using getElementsByTagName(), getElementsByClassName(), or querySelectorAll().

const westWall = document.getElementById("wall-west");
const westPoems = westWall.getElementsByClassName("poem-card");

//Logs these elements to the console so you can verify they are correctly being captured.

console.log(westPoems);

//Journal Prompt 2

//Phase 3: The Curator’s Move (DOM Manipulation)
//Now, write script logic that relocates an existing poem from one wall to the other.

const eastWall = document.getElementById("wall-east");

//Requirement: Select an existing poem on the West Wall and move it to the East Wall using 
// appendChild() or insertBefore().

eastWall.appendChild(earthPoem);

//Requirement: Update the moved poem’s background color in JavaScript to show that it has 
// been relocated.

earthPoem.style.backgroundColor = "lightblue";

//Journal Prompt 3

//Phase 4: Hanging New Poems (Dynamic Creation & Button Event)
// Finally, add interactivity to your submission controls so visitors can hang new poems on the 
// gallery walls.

// Here is starter code demonstrating how to locate your button and attach an event 
// listener to run your code whenever the button is clicked:

// Find the button on the page

// const addPoemButton = document.getElementById("add-poem-btn");
// make sure your html button is using this id

const addPoemButton = document.getElementById("add-poem-btn");

//Attach an event listener to respond when clicked

addPoemButton.addEventListener("click", function () {

    
//Requirement: Use an event listener on your button (as shown above) to trigger your creation logic.

    const poemTitle = document.getElementById("poem-title");
    const poemLines = document.getElementById("poem-lines");
    const backgroundColor = document.getElementById("background-color");
    const wallSelect = document.getElementById("wall-select");
    
    const title = poemTitle.value;
    const lines = poemLines.value;
    const color = backgroundColor.value;
    const wall = wallSelect.value;

//Requirement: When the button is clicked, your function must:
//Read the current values from each of the input elements (title, content, color, and selected wall).

    //Create a new poem container and any necessary child elements dynamically.
    //Apply the selected background color to the new poem card using JavaScript.

    const poemCard = document.createElement("div");
    poemCard.style.backgroundColor = color;
    
    //Set the text content for the title and poem.

    const poemTitleElement = document.createElement("h2");
    poemTitleElement.textContent = title;
    poemCard.appendChild(poemTitleElement);

    const poemTextElement = document.createElement("p");
    poemTextElement.textContent = lines;
    poemCard.appendChild(poemTextElement);

    const selectedWall = document.getElementById(wall);
    selectedWall.appendChild(poemCard);

    poemTitle.value = "";
    poemLines.value = "";  

  // Your logic to read inputs, create elements, and append them goes here!
    console.log("Add Poem button was clicked!");

});

//Append the newly created poem card to the wall selected by the user.
//Clear the text inputs so the controls are ready for another entry. */

//Journal Prompt 4
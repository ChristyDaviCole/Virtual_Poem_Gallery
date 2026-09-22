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

Journal Prompt 1
Explain how you used HTML tags and attributes to distinguish the different walls and poems. Why is it important to give each item a unique ID?
I used <div> elements for the walls and each poem. Each poem has a unique ID, which is important because I will need to target it later when rearranging them on the walls, which also have unique  ID's to target them when I need to manipulate them with JS.

Journal Prompt 2
What was the difference between what getElementById returned and what your group selection method returned?
getElementById returned one specific poem element using its unique id and the group selection method returned the collection of all poem elements with the poem-card class on the west wall.

Journal Prompt 3
When you moved the item, did you have to manually “delete” it from the first wall? Explain what happened to the node in the DOM tree when you called the movement method.
Manual deletion was not necessary, I just used appendChild() to move the Earth poem to the other wall and it was automatically removed from its original location and became a child of the new wall in the DOM tree.

Journal Prompt 4 
Describe the lifecycle of an element created with document.createElement(). Where does that element exist in memory before you call appendChild(), and at what point does it become visible on the page?
Before calling appendChild(), an element created with document.createElement() exists in memory but is not part of the page yet. Once appendChild() is used to add it to a wall, it becomes part of the DOM and is then part of the page.
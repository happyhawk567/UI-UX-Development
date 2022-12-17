# Development

### Link to Deployed Website
If you used the stencil code, this is `https://happyhawk.github.io/Dev`

### Goal and Value of the Application
The application is a mock shoe shopping platform. It allows the user to sort by price in both increasing and decreasing price depending on whether the user wants to save money or splurge. The user can filter the available options by color or shoe type, which makes it much faster to find the style you are looking for. Similar to most conventional shopping sites, here is a cart that shows individual items (shoe color, type, price, quantity) as well as the total price and an option to remove each item. 

### Usability Principles Considered
I focused on making a simple familiar, design for easy learnability, as well as not being text-heavy.

### Organization of Components
There is a collection of 12 shoes, with their data being stored in a json file and represented through a Shoes.js file, including the "ad to cart" button. There are a number of state changes being tracked through React's useState, including a list of shoes currently displayed, chosen filters & sorting options, the cart, and the total price. There are a number of methods that handle state changes by taking in the corresponding state values, using the filter & sorts method to create a local list of the shoes, and then using the change state constant to set the local variable to the global one.

### How the User Triggers State Changes
There are multiple states that are triggered by the user clicking on a radio button. They are: selected color filter, type filter, sorting type (ascending/descending). I utilized the keyEvent obtained from the corresponding chosen radio button for each option as a parameter for a function to change the appropriate state. 



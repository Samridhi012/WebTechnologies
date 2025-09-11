//DOM methods are functions that allow you to interact with and manipulate HTML elements in a web page using JavaScript.

// Selects an element by its ID
function changeTitle() {
    document.getElementById("title").innerHTML = "Title hit!";
}
function refresh() {
    document.getElementById("title").innerHTML = "DOM EVENTLISTENERS";
}

document.getElementsByClassName("content")[0].innerHTML = "This is changed using DOM method";

//styling button using DOM method
document.querySelectorAll('.btn').style.borderRadius = "11px";
document.getElementsByTagName(".btn").style.padding = "10px";

function addImg() {
    const img = document.createElement('img');
    img.src = '../html tasks/images/1.webp';
    img.alt = 'dom manipulated';
    img.style.width = "200px";
    img.style.padding = "20px";
    document.querySelector('.container2').appendChild(img);
}

function removeP() {
    const para = document.querySelector('.container2 p');
    para.remove();
}

//list of methods:-
//1. getElementById() - Selects an element by its ID.
//2. getElementsByClassName() - Selects elements by their class name.   
//3. getElementsByTagName() - Selects elements by their tag name.
//4. querySelector() - Selects the first element that matches a CSS selector.
//5. querySelectorAll() - Selects all elements that match a CSS selector.
//6. createElement() - Creates a new HTML element.
//7. appendChild() - Adds a new child element to a parent element.
//8. remove() - Removes an element from the DOM.
//9. innerHTML - Gets or sets the HTML content of an element.
//10. style - Gets or sets the CSS styles of an element.
//11. setAttribute() - Sets the value of an attribute on an element.
//12. getAttribute() - Gets the value of an attribute on an element.
//13. addEventListener() - Attaches an event handler to an element.
//14. removeEventListener() - Removes an event handler from an element.

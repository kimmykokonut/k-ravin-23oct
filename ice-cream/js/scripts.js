window.onload = function (event) {
    event.preventDefault;
    body = document.querySelector("body");
    const h1 = document.createElement("h1");
    h1.append("Favorite Flavors");
    body.append(h1);

    const ul = document.createElement("ul");
    body.append(ul);
    
    ul.setAttribute("id", "taste");
    const flavors = ["vanilla", "chocolate", "banana"];
    flavors.forEach(function(flavor) {
        const li = document.createElement("li");
        li.append(flavor);
        ul.append(li);
    });
};
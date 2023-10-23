window.onload = function (event) {
	event.preventDefault;
	let h1 = document.querySelector("h1");
	h1.remove();
	body = document.querySelector("body");
	const firstDiv = document.createElement("div");
	body.append(firstDiv);
	const newH1 = document.createElement("h1");
	const p = document.createElement("p");
	const img = document.createElement("img");
	const h1Two = document.createElement("h1");
	const ul = document.createElement("ul");
	const liOne = document.createElement("li");
	const liTwo = document.createElement("li");
	const h2 = document.createElement("h2");
	const a = document.createElement("a");

	firstDiv.append(newH1);
	firstDiv.append(p);
	firstDiv.append(img);
	firstDiv.append(h1Two);
	firstDiv.append(ul);
	firstDiv.append(liOne);
	firstDiv.append(liTwo);
	firstDiv.append(h2);
	firstDiv.append(a);

	newH1.append("Webpage Recreation Practice");
	p.append("The HTML of this webpage was created with JavaScript.")
	img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
	img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
	img.setAttribute("style", width="50%");
	h1Two.append("Facts about the Multicolored Tanager");
	ul.setAttribute("id", "facts");
	liOne.append("It is endemic to the mountains of Colombia.");
	liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
	document.getElementById("facts").append(liOne, liTwo);
	h2.append("Source");
	a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
	a.append("Wikipedia");
};
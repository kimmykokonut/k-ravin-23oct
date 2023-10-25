window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const colorInput = document.getElementById("color").value;
    const animalInput = document.getElementById("animal").value;
    const foodInput = document.getElementById("food").value; 
    // console.log(colorInput);
    let favArray = [colorInput, animalInput, foodInput];
    // console.log(favArray);
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    ul.setAttribute("id", "favorite");
    document.querySelector("div").append(ul);
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.append((favArray[0]).toUpperCase());
    li2.append(favArray[1]);
    li3.append(favArray[2]);
    // console.log(favArray[2]); => "green"
    ul.prepend(li1);
    ul.append(li2);
    ul.append(li3);
    document.getElementById("favorite").append(li1, li2, li3);
    // let answer = favArray;
    // document.getElementById("answer").innerText = answer.toString();
    // console.log(answer);
    // return answer;
  }
}
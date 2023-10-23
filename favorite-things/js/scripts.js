window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const colorInput = document.getElementById("color").value;
    const animalInput = document.getElementById("animal").value;
    const foodInput = document.getElementById("food").value; 
    console.log(colorInput);
    let favArray = [colorInput, animalInput, foodInput];
    console.log(favArray);
    let answer = favArray;
    document.getElementById("answer").innerText = answer.toString();
    console.log(answer);
    return answer;
  }
}
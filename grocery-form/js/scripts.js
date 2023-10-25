function handleForm(event) {
  event.preventDefault();
  // console.log('hi');
  const userSelections = document.querySelectorAll("input[name='item']:checked");
  // console.log(userSelections);
  let userSelectionsArray = Array.from(userSelections);
  // console.log(userSelectionsArray);
  userSelectionsArray = userSelectionsArray.map(function (x) { return x.value.toUpperCase(); })
  // console.log(userSelectionsArray);
  userSelectionsArray = userSelectionsArray.sort();

  //display sorted list as ul/li
  const body = document.querySelector("body");
  //add div to attach ul so can hide
  const div = document.createElement("div");
  body.append(div);
  const h2 = document.createElement("h2");
  div.append(h2);
  h2.append("Here is your shopping list: ");
  const ul = document.createElement("ul");
  div.append(ul);  
  ul.setAttribute("id", "food");
  userSelectionsArray.forEach(function (selection) {
    const li = document.createElement("li");
    li.append(selection);
    ul.append(li);
  //hide form when showing results
    document.querySelector("form#visible").setAttribute("class", "hidden");
  });

  //from class: displayed array as list in p
  // userSelectionsArray.forEach(function (element) {
  //   const paragraph = document.createElement("p");
  //   paragraph.append(element);
  //   document.body.append(paragraph);
  // });
}

window.addEventListener("load", function () {
  document.querySelector("form#visible").addEventListener("submit", handleForm);
});
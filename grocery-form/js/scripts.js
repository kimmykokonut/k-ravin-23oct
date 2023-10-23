function handleForm(event) {
    event.preventDefault();
    console.log('hi');
    const userSelections = document.querySelectorAll("input[name='item']:checked");
    console.log(userSelections);
    let userSelectionsArray = Array.from(userSelections);
    console.log(userSelectionsArray);
    userSelectionsArray = userSelectionsArray.map(function (x) { return x.value.toUpperCase(); })
    console.log(userSelectionsArray);
    userSelectionsArray = userSelectionsArray.sort();
    console.log(userSelectionsArray);
// TODO Then, display the sorted list of things as list items inside a <ul>
    userSelectionsArray.forEach(function (element) {
        const paragraph = document.createElement("p");
        paragraph.append(element);
        document.body.append(paragraph);
  });
}

window.addEventListener("load", function () {
  document.querySelector("form#visible").addEventListener("submit", handleForm);
});
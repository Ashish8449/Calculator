let screen = document.getElementById("input");
let buttonText;
let buttons = document.querySelectorAll("button");
let value = "";
for (item of buttons) {
  console.log(item);
  item.addEventListener("click", (e) => {
    //   console.log(item);
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screen.value += buttonText;
      value = `(${value})` + buttonText;
    } else if (buttonText == "=") {
      screen.value = eval(value);
    } else if (buttonText == "C") {
      screen.value = "";
      value = "";
    } else if (buttonText == "del") {
      value = value.slice(0, value.length - 1);
      screen.value = screen.value.slice(0, screen.value.length - 1);
    } else {
      screen.value += buttonText;
      value += buttonText;
    }
    console.log(value);
  });
}

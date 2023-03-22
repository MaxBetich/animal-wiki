window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let turtle = document.getElementById("turtle");
    turtle.setAttribute("class", "hidden");
    let snake = document.getElementById("snake");
    snake.setAttribute("class", "hidden");
    let insect = document.getElementById("insect");
    insect.setAttribute("class", "hidden");
    let error = document.getElementById("error");
    error.setAttribute("class", "hidden");

    const animal = document.getElementById("animal").value;

    if (animal === "turtle") {
      turtle.removeAttribute("class");
    } else if (animal === "snake") {
      snake.removeAttribute("class");
    } else if (animal === "insect") {
      insect.removeAttribute("class");
    } else {
      error.removeAttribute("class")
    }
  };
};
// click handler on the stoplight
  // on click, change the lit attribute on the child div to the next child
  // if its the last child, change lit attribute on first child
  // when changing lit attribute
      // changing the color from dull to lit, modifying style

// vanilla javascript dom manipulation

// try tic tac toe with vanilla JS with pure functional

const changeLight = function() {
  console.log('clicked');
  console.log(stoplight.children);
  var lights = stoplight.children;

  // instead of using a loop, do more DOM manipulatoin with children


  for (var i = 0; i < lights.length; i++) {
    if (lights[i].id === "lit") {
      lights[i].id = "";
      if (lights[i + 1]) {
        lights[i + 1].id = "lit";
        break;
      } else {
        lights[0].id = "lit";
        break;
      }
    }
    // if (lights[i].classList.length > 2) {
      // lights[i].classList[2] = "";
      // console.log(lights[i].classList);
    // }
  }
  // var lit = document.getElementsByClassName("lit");
  // console.log(lit);

}

var stoplight = document.getElementById("stoplight");

stoplight.addEventListener("click", changeLight);
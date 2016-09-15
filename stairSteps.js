
function steps(n) {
  const options = [1, 2, 3];

  var results = 0;

  function count(temp, j) {
    if (temp === n) {
      results += 1;
      return;
    } else if (temp > n) {
      return;
    }

    for (var i = j; i < options.length; i++) {
      temp += options[i];
      count(temp, i);
      temp -= options[i];
    }
  }

  count(0, 0);

  return results;
}

console.log(steps(5));

function comboSteps(n) {
  const options = [1, 2, 3];
  var results = 0;
  function count(temp) {
    if (temp === n) {
      results += 1;
      return;
    } else if (temp > n) {
      return ;
    }
    options.forEach(step => {
      temp += step;
      count(temp);
      temp -= step;
    })
  }
  count(0);
  return results;
}

console.log(comboSteps(5));

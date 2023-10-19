function specialNumbers(input) {
  let n = Number(input[0]);

  let printNumbers = "";

  for (let numb = 1111; numb <= 9999; numb++) {
    flag = true;
    let s = numb.toString();

    let safeValue = "";

    for (let test = 0; test < s.length; test++) {
      let symbol = s[test];
      if (n % symbol === 0) {
        safeValue += symbol;
      } else {
        flag = false;
        break;
      }
    }
    if (!flag) {
      continue;
    } else {
      printNumbers += `${safeValue} `;
    }
  }

  console.log(printNumbers);
}

specialNumbers(["16"]);

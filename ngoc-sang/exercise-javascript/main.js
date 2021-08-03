function checkInput__100() {
  // let n;
  let value;
  while (true) {
    let n = prompt("A number please? ", 0);
    if (n <= 100 || n === "" || n === null || !isFinite(n)) {
      console.log(n);
      continue;
    } else {
      alert("Đã tìm thấy số > 100");
      value = n;
      document.write(value);
      break;
    }
  }
  return value;
}

alert(checkInput__100());

function checkInput__100() {
  let value;
  do {
    let n = prompt("A number please? ", 0);
    if (n <= 100 || n === "" || n === null || !isFinite(n)) {
      console.log(n);
      continue;
    } else {
      alert("Đã tìm thấy số > 100");
      value = n;
      document.write(value);
      break;
    }
  } while (true);
  return value;
}

alert(checkInput__100());

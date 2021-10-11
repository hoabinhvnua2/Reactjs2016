// Bài 2: Áp dụng vòng lắp  để nhập 1 só > 100. Nếu cố tình nhập sai yêu cầu đề nghị nhập lại đến khi nhập số  > 100 hoặc huỷ đầu vào khi nhập vào một mảng trống.

function checkInput__100() {
  // let n;
  let value;
  while (true) {
    let n = prompt("A number please? ", 0);
    if (n <= 100) {
      if (n === null || !isFinite(n)) {
        console.log(n);
        continue;
      } else if (n === "" || n === 0) {
        console.log(n);
        break;
      }
    } else {
      alert("Đã tìm thấy số > 100");
      value = n;
      document.write(value);
      break;
    }
  }
  // console.log(value);
  return value;
}
alert(checkInput__100());
// #: Bài tập 2

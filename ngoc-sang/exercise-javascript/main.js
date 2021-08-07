// function checkInput__100() {
//   // let n;
//   let value;
//   while (true) {
//     let n = prompt("A number please? ", 0);
//     if (n <= 100 || n === "" || n === null || !isFinite(n)) {
//       console.log(n);
//       continue;
//     } else {
//       alert("Đã tìm thấy số > 100");
//       value = n;
//       document.write(value);
//       break;
//     }
//   }
//   return value;
// }

// alert(checkInput__100());

// function checkInput__100() {
//   let value;
//   do {
//     let n = prompt("A number please? ", 0);
//     if (n <= 100 || n === "" || n === null || !isFinite(n)) {
//       console.log(n);
//       continue;
//     } else {
//       alert("Đã tìm thấy số > 100");
//       value = n;
//       document.write(value);
//       break;
//     }
//   } while (true);
//   return value;
// }

// alert(checkInput__100());


// Bài tập 1: Kiểm tra số chắn từ 2 đến 10 (dùng vòng lặp for )

function kiemTraSoChan () {
  let numbers = [];
  for(let i = 2; i <= 10; i++) {
    if(i % 2 == 0) {
      console.log(i)
      // numbers += i
      numbers.push(i);
    }
    console.log(numbers)
  }
}
kiemTraSoChan ();
// # Bài tập 1 


// Bài 2: Áp dụng vòng lắp  để nhập 1 só > 100. Nếu cố tình nhập sai yêu cầu đề nghị nhập lại đến khi nhập số  > 100 hoặc huỷ đầu vào khi nhập vào một mảng trống.

function checkInput__100() {
  // let n;
  let value;
  while (true) {
    let n = prompt("A number please? ", 0);
    if (n <= 100) {
      if (n === null || !isFinite(n) ) {
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

// Bài Tập 3 
function findMinNumber(a,b) {
  // let minNumber;
  let min;
    if (a > b) {
      min = b;
    } else {
      min = a;
    }
    return min;
}
findMinNumber(3,4);
// ## : Bài Tập 3

// Bài Tập 4 
var numberOne = prompt("Mời bạn nhập số thứ nhât")
var numberTwo = prompt("Mời bạn nhập số thứ hai")
var phepTinh = prompt("Mời bạn nhập phép tính ")

console.log("Số thứ nhất có giá trị là", numberOne);
console.log("Số thứ hai có giá trị là", numberTwo);
console.log("Phép tính bạn chọn là phép", phepTinh);


function tinhToan(numberOne,numberTwo,result) {
  switch (result) {
    case '+':
      return parseInt(numberOne) + parseInt(numberTwo);
    case '-':
      return parseInt(numberOne) - parseInt(numberTwo);
    case '*':
      return parseInt(numberOne) * parseInt(numberTwo);
    case '%':
      return parseInt(numberOne) % parseInt(numberTwo);
    case '/':
      return (numberTwo !== 0) ? (parseInt(numberOne) / parseInt(numberTwo)) : alert(" Mẫu số phải khác 0");
  }
}
console.log("Kết quả của phép tính là",tinhToan(numberOne,numberTwo,phepTinh));

// ## Bài Tập 4


// Bài tập 5: Kiểm tra số vừa nhập có phải là số nguyên tố không.
function isPrimeNumber(x) {
    if (x === 1){
        return false;
    }
    else if (x === 2){
        return true
    }
    else {
        for (var i = 2;i<=500;i++){
            if(x % i === 0){
                return false
            }
            else {
                return true
            }
        }
    }
    
}
isPrimeNumber(2);
isPrimeNumber(3);
isPrimeNumber(4);


// ##: Bài tập 5: Kiểm tra số vừa nhập có phải là số nguyên tố không.
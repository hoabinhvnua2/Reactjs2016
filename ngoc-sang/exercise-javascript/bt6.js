// B6: Viết hàm sumInput() rằng:
// Yêu cầu người dùng nhập các giá trị bằng cách sử dụng prompt và lưu trữ các giá trị trong mảng.
// Kết thúc yêu cầu khi người dùng nhập một giá trị không phải số, một chuỗi trống hoặc nhấn “Hủy”.
// Tính toán và trả về tổng của các mục mảng.

function sumInput() {

  let infoList = [];
  let input = 0;

  while(true) {
    input = prompt("Mời bạn nhập số điện thoại : ");
    
    if(Number.parseInt(input) !== Number(input)) {
      return infoList;
    }

    infoList.push(input);
  }
}

console.log(sumInput());

// @@@@ Tham khảo cách giải của anh Bình @@@@

// function sumInput() {
//   const arr = []  
//   while (true) {
//     var item = prompt('Bạn nhập vào giá trị số');
//     if (item === null || item === '' || !isFinite(item)) break;
//     arr.push(+item);
//   }
//   const total = arr.reduce((acc, value) => acc += value, 0)
//   return total;
// }
// console.log(sumInput())

// #### End...... #####
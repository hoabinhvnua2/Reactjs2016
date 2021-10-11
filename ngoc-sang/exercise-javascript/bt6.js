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
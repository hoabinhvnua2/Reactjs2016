// B5: Hãy thử 5 phép toán trong mảng.
// Tạo mảng có tên là nameValue với các mục “Jazz” và “Blues”.
// Thêm “Rock-n-Roll” vào cuối.
// Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
// Tách giá trị đầu tiên của mảng và hiển thị nó.
// Thêm trước Rap và Reggae vào mảng.


const nameValue = ["Jazz", "Blues"];

nameValue.push("Rock-n-Roll");
nameValue.push("Rock-n-Roll");
nameValue.push("Rock-n-Roll");
nameValue.push("Rock-n-Roll");
nameValue.push("Rock-n-Roll");

nameValue.splice(Math.trunc((nameValue.length - 1) / 2), 1, "Classics");

const midValue = nameValue[Math.trunc((nameValue.length - 1) / 2)];

// console.log(nameValue.shift());

nameValue.unshift("Rap", "Reggae")

console.log(nameValue);
console.log(midValue);
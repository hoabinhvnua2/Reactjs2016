//Bài 1: Sử dụng vòng lặp for để xuất ra các số chẵn từ 2 đến 10.

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}
//Bài 2 :Viết một vòng lặp nhắc nhở nhập một số lớn hơn 100. Nếu khách nhập một số khác – hãy yêu cầu họ nhập lại. 
//Vòng lặp phải yêu cầu một số cho đến khi khách nhập một số lớn hơn 100 hoặc hủy đầu vào / nhập vào một dòng trống.
let a;
   do {
        a = prompt("Nhập vào một số lớn hơn 100");
    } while (a <= 100 && a);
//Bài 3: Viết hàm min (a, b) trả về gía trị nhỏ nhất trong hai số a và b.
function min(a, b) {
    return a < b ? a : b;
}
console.log(min(3, 6));
//Bài 4: Viết hàm tinhToan(soThuNhar, soThuHai, phepTinh) trả về giá trị của phép tính. 
//Sử dụng prompt để nhập dữ liệu từ người dùng.

function tinhToan(soThuNhat, soThuHai, phepTinh) {
    switch (phepTinh) {
        case '+':
            return soThuNhat + soThuHai;
        case '-':
            return soThuNhat - soThuHai;
        case '*':
            return soThuNhat * soThuHai;
        case '/':
            return (soThuHai !== 0) ? (soThuNhat / soThuHai) : alert('Mẫu số phải khác 0')
        case '%':
            return soThuNhat % soThuHai;
        default:
            alert('Phép tính bạn vừa nhập không tồn tại')
    }
}
console.log(tinhToan(5, 5, '*'))
//Bài 5:Viết 1 hàm kiểm tra số vừa nhập có phải là số nguyên tố hay ko?

function soNguyenTo(n) {
    var t = true;
     if (n < 2){
        t = false;
    }else if (n == 2 && n % 2 == 0){
        t = true;
    }
    else{
        for (var i = 3; i < Math.sqrt(n); i+=2) {
            if (n % i == 0) {
                t = false;
                break;
            }
        }
    }
    if (t == true){
        document.write(n + " là số nguyên tố ");
    }
    else{
        document.write(n + " không phải là số nguyên tố ");
    }
}
console.log(soNguyenTo(3))


// Có 2 cách để khai báo hàm
// C1: Khai báo hàm
// function showName() {
//     // TODO
//     let userName = 'React';
// }

// C2: Biểu thức hàm
const showHi = function() {
    let user = 'Html'
}

// arrow function
const showHello = () => {
    // TODO
}

// hàm có kết quả trẩ về và hàm ko có kêt quả trả v
// Hàm có kết quả trả về tức là hàm phải return về 1 giá trị cụ thể nào đó
// Hàm ko có giá trị trả về là hàm void, hay đại loại hàm thực hiện để hiển thị UI

// Hàm có giá trị trả về
const textHello = () =>  'Hello React team';

function textHi() {
    const user = 'Ractjs'
    return user
} 
console.log(textHi()) //
console.log(textHello()) // 

// Hàm ko có giá trị trả về
// function show() {
//     alert('Chào bạn nhé')
// }
// show()

// Thám sô trong hàm
// var userName = "React js"
// function showName(nameUser, age) {
//     alert('XIn chào các bạn lớp ' + nameUser + ' có tuổi là '+ age)
// }

// showName('HTML', 20)

// Tạo 1 hàm thực hiện phép tính cộng giữa 2 được hàm truyền vào là tham sô
function cong(x, y) {
    return x + y;
}
console.log(cong(5, 4));

// Tạo ra 1 function thực hiện phép theo yêu cầu của ng dùng nhập vào (+, -, *, /, %) và 
// 2 sô cũng theo người nhập vào
// var one = prompt('Mời bạn nhập vào số thứ nhất')
// var two = prompt('Mời bạn nhập vào số thứ hai')
// var phepTinh = prompt('Mời bạn nhập vào phép tính')

// console.log('one', one)
// console.log('two', two)
// console.log('phepTinh', phepTinh)

function tinhToan(soThuNhat, soThuHai, phepTinh) {
    switch (phepTinh) {
        case '+':
            return parseInt(soThuNhat) + parseInt(soThuHai);
        case '-':
            return soThuNhat - soThuHai;    
        case '*':
            return soThuNhat * soThuHai;    
        case '/':
            return (soThuHai !== 0) ? (soThuNhat / soThuHai) : alert('Mẫu sô phải khác 0')
        case '%':
            return soThuNhat % soThuHai;    
        default:
            alert("Phép \"tính bạn vừa\" nhập không tồn tại")
    }
}

// console.log('Tinh toan', tinhToan(one, two, phepTinh))

var text = "XIN CHAO CAC BAN LOP REACTJS"
// const textLength = text.length;

// for(let i = 0; i < textLength; i++) {
//     console.log(text[i])
// }

// console.log(text.split(' '))
// console.log(text.includes('CHAO'))
// console.log(text.replace('REACTJS', 'HTML'))
console.log(text.length)
// console.log(text.trim())
console.log(text.slice(-11, -8))
// if(text.indexOf('C') !== -1) {
//     alert('Đã tìm thấy chữ C')
// } else {
//     alert('Không tìm thấy chữ C')
// }

// let array = new Array();

let arr = [1, 2, 3, 4, 5];
console.log(arr)
arr.shift()
console.log(arr)
//  for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
//  }

//  for (const item of arr) {
//     console.log(item)
//  }
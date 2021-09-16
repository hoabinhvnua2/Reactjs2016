// có 3 cách để khai báo biến global
var x = 5; //c1
let y = 5; //c2
const c = 3.14; //c3 mặc định không thể thay đổi giá trị hằng số

// console.log('x',x)
// console.log('y',y)

// if(true) {
//     console.log('x1',x)
//     console.log('y1',y)
// }

// function showNano() {
//     console.log('x2',x)
//     console.log('y2',y)
// }
// showNano()

// block scops
// if (true) {
//     //tất cả những gì nằm trong này đều thuộc block scops
//     // var c = 8;
//     let x = 8;
//     let d = 9;
// }
//không thuộc block scops của if nữa
// console.log('x',x)
// console.log('d',d)


//function scops
// var e;
// function showNano() {
//     //biến của function thôi 
//     var e =10;
//     let f = 6;
// }
// showNano()
// console.log('e',e)
// console.log('f',f)
//lỗi là is not define != undefine

// x=9;
// y=8;
// console.log('x',x)
// console.log('y',y)

//quy định đặt tên biến của javascript
// var userName = 'reactjs'
// alert('Xin chào tất cả mọi người')
// var g = confirm('hello bạn nè')
// console.log('g',g)
// var k = prompt('bạn có muốn học reactjs không ?')
// console.log('k',k)

//chú ý dấu + có 3 tác dụng
// 1. là thực hiện phép cộng 1+2=3 
// 2. là nối chuỗi 1+'2'= 12
// 3. được dùng để ép kiểu dữ liệu sang number var a='2 +a=2

// (false || true) => true
// (false $$ true) => false

// let a =3;
// let b = null;
// alert(a || 5) //5
// alert(a&&5)//5 đọc từ a đến 5
// alert(b ?? a) //0 trả về giá trị đầu tiên mà nó đọc được kết quả 

//có 2 lệnh rẽ nhánh
// if (a==2) {
//     alert('Hai số bằng nhau')
// }else if (a==3) {
//     alert('Phe trung lập')
// }else {
//     alert('Hai số không bằng nhau')
// }


// switch (a) {
//     case 1:
//         alert('tôi là 1')
//         break;
//     case 2:
//         alert('tôi là số 2')
//         break;
//     case 3:
//         alert('tôi là số 3')
//         break;
//     default:
//         break;
// }

//Trong js cung cấp 3 vòng for
// 1. for thường
// 2. for of
// 3. for in
// var a= [1,2,3,4,5];
// for (let index = 0; index < a.length; index++) {
//     console.log(a[index])
// }
//while và do while
// var b =11;
// while (b<10) {
//     console.log(b);
//     b+=1;
// }
// do {
//     console.log(b)
//     b++;
// } while (b<10);


//bài tập hiển thị prompt yêu cầu người dùng nhập vào 1 số lớn hơn 100 nếu người dùng
//nhập vào số lớn hơn 100 thì show ra alert là ok .Nếu người dùng nhập vào số nhỏ 
//hơn 100 thì yêu cầu người dùng nhập lại ,cho tới khi nào lớn hơn 100

var D = null;
// while (D<100) {
//     D=prompt("Nhập vào 1 số lớn hơn 100")
// }
// alert("ok")

do {
    D=prompt("Nhập vào 1 số lớn hơn 100")
}
while (D<100);
alert("ok")


  
//  có 3 cách để khai báo 
// biến global
// var x = 5; // C1
// let y = 5; // C2
// const c = 3.14; //C3

// console.log('x1', x)
// console.log('y1', y)

// if(true) {
//     console.log('x2', x)
//     console.log('y2', y)
// }

// function showName() {
//     console.log('x3', x)
//     console.log('y3', y)
// }
// showName()

// block scope
// if(true) {
//     // tất cả những gì nằm trong này đều thuộc block scope
//     let x = 8;
//     let d = 9;
// }
// // ngoài ko thuộc block scope của if

// console.log('c', x) // c = 8
// console.log('d', d) // d = 

// function scope
// var e;
// function showName() {
//     // biến loaction
//     var e = 10;
//     let f = 6;
// }
// showName()

// console.log('e', e) // e = 10
// console.log('f', f) // f = 6

// Lỗi là is not define != undefine

// x = 9
// y = 8
// c = 5
// console.log('x', x) // 9
// console.log('y', y) // 
// console.log('c', c) // 
// quy định đạt tên biến của Javascript
// var userName = 'React'
// alert('Xin chào các bạn lớp React')
// var g = confirm('Chào bạn nhé')
// console.log('g', g)
// var k = prompt('Bạn có muốn học tôt javascript không?')
// console.log('k', k)

// Chú ý: dâu + nó có 3 tác dụng
// 1. là thực hiện pheops cộng 1 + 2 = ,  1 + '2' = , 1 + +'2'
// 2. là nuối chuỗi
// 3. được dùng để ép kiểu sang number

// (false && true) => false
// (false && false) => false
// (true && true) => true

// let a = 3;
// let b = 3;
// alert(a && 5) // 5 ? => (0 || 5) => 5
// alert(b ?? a) // 0 ? => b = null, a = 0;

// có 2 loại lệnh rẽ nhánh 
    // if (a === 2) {
    //     alert('Hai sô bằng nhau')
    // } else if(a === 3) {
    //     alert('Phe trung lập')
    // } else {
    //     alert('Hai số không bằng nhau')
    // }

    // toán tử 3 ngôi
    //     a === 3 ? 'tôi là 3' : 'Tôi ko là gì  cả'


    // switch (a) {
    //     case 1:
    //         alert('Tôi là số 1')
    //         break;
    //     case 2:
    //         alert('Tôi là sô 2')
    //         break;
    //     case 3: 
    //         alert('Tôi là số 3')
    //         break;
    //     default:
    //         break;
    // }

// Trong js cung cấp 3 vòng 
// 1. for thường
// 2. for of
// 3. for in
    // var a = [1, 2, 3, 4, 5];
    // for (let index = 0; index < a.length; index++) {
    //     console.log(a[index])
    // }
// while và do while
//var b = 0
// while (b < 10) {
//     console.log(b);
//     b+=1;
// }


// do {
//     console.log(b)
//     b++;
// } while (b < 10);




// Bài tập: Hiển thị prompt yêu cầu người dùng nhập vào 1 số lớn hơn 100. Nếu người dùng nhập vào sô lớp hơn
// 100 thì show ra alert là ok. Nếu người dùng nhập vào số nhỏ hơn 100 thì yêu cầu người dùng nhập lại, cho tới khi nào
// lơn hơn 100

// làm 2 cách áp dụng while và do while


// cach 1:
// var so;
// so = prompt("nhap so can nhan");
// while(so > 100){
    
//     if(so <= 100){
//         alert('mời nhâp lại');
//         so = prompt("nhap so can nhan");
//     }else(so >100)
//     {
//         alert("oke");
      
//     }

// }

// cach 2

// var so1;
// do{
//     so1 = prompt("nhap so");
//     if(so1 <= 100){
//         alert('nhap lại');
//         so1 = prompt("nhap so");
//     }


// }while(so1 >100);
// alert("rồi oke nha");


// function thuchien(a,b,pheptoan){
//     switch(pheptoan)
//     {
//         case "+":
//            return(a+b);
         
//        case "-":
//             return(a+b);
       
//         case "*":
//             return(a*b);
        
//         case "/":
//           //cach1:
//             // if(b!==0)
//             // {
//             //     return a/b;
//             // }else{
//             //     alert("b khac 0");
//             // }

//             //cach2 toan tu 3 ngôi
//             return (b!==0) ? a/b : alert("b khac 0");
        
//         case "%":
//             return(a%b);
//         default:
//                 alert("nhap sai");
//     }

// }   
// console.log(thuchien(10,5,"/"));


//bai4
var a = prompt("nhap a");
var b = prompt("nhap b");
var pheptoan = prompt("nhap phep tinh");
function thuchien(a,b,pheptoan){
    
        switch(pheptoan)
        {
            case "+":
               return parseInt(a) + parseInt(b);        // ép kiểu parseInt
             
           case "-":
                return new Number(a) + new Number(b); // ép kiểu
           
            case "*":
                return +a * +b;
            
            case "/":
              //cach1:
                // if(b!==0)
                // {
                //     return a/b;
                // }else{
                //     alert("b khac 0");
                // }
    
                //cach2 toan tu 3 ngôi
                return (+b!==0) ? +a / +b : alert("b khac 0");
            
            case "%":
                return +a % +b ;
            default:
                    alert("da \"nhap sai\"");
        }
    
    }   
   console.log("phep tinh ", thuchien(a,b,pheptoan));


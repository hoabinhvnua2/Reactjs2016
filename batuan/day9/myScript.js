console.log('Xin chào các bạn lớp Reactjs')
var arr =[1, 2, 3, 4, 5, 6]
let arrLength = arr.length;
 let value;
 let index;
     for (let index = 0; index < arrLength; index++) {
         if (arr[index] > 5) {
             console.log('gia tri', arr[index])
             console.log('Index', index)
         } 
         
     }
     //b3 tìm tất cả các phần tử chia hết che 2 và tập lại thành một mảng
let arrChan = []
for (let index = 0; index < arrLength; index++) {
    if (arr[index] % 2 ===0) {
        arrChan.push(arr[index])
    }
}
console.log('arrChan', arrChan)

//sắp lại mảng từ bé đến lớn

var arrayNotS = [1, 1000, 21, 30, 40]


console.log(arrayNotS.sort((x, y) => x- y))
// sắp xếp chữ
var arrStringSort = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR', 'VUE']
arrStringSort.sort();
console.log('arrStringSort',arrStringSort);
//b4, b5
var arr =[1, 2, 3, 4]
let sum = 0;
for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
}
console.log('sum', sum)
// sử dụng phương thức reduce  tạo ra một mảng  có chứa các phần tử chia hết cho 2
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numBerArr = number.reduce((acc, value) => acc % )
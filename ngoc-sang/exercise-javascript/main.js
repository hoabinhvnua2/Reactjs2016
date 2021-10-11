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


// Bài tập:
// Tạo ra 1 mảng rỗng
// Thêm các phần tử vào mảng:  1, 3, 4, 7
// Thêm 2 vào đầu mảng
// Tìm ra số lớn nhất của mảng 2 cách
// Tìm ra số nhỏ nhất của mảng 2 cách
// Tỉnh tổng phần tử mảng (2 cách)

let arr = [];
console.log(arr);
let arrEle = [1, 3, 4, 7];
console.log(arrEle);
let result = arr.concat(arrEle);
console.log(result);

result.unshift(2);
console.log(result);

// C1: So Lon Nhat
function maxNumber (a,b) {
  if (a > b) {
    console.log(a)
  } else {
    console.log(b)
  }
  // (a>b) ? a : b
}
maxNumber(54, 45);
// #### End:C1: So Lon Nhat


// let resultLength = result.length;
// console.log(resultLength)
// function maxNumberArr (arr) {
//   for (let index = 0; index < resultLength; index++){
//     // var max = arr[0];
//     // if(arr[index] > max ) {
//     //   console.log(arr[index])
//     // }else {
//     //   console.log(max)
//     // }

//     let indexRe = result[index];
//     console.log(indexRe);

//     console.log("Vao Roi")

//   }
// }
// maxNumberArr(result);


var arrN = [1,2,3];
var max = arrN.reduce(function(a, b) {
    // return Math.max(a, b);
    console.log(Math.max(a, b));

}, 0);


// ----------------- Tìm Số Lớn Nhất -------
//------ Cách 1 ------
// var arr = [1,2,3,4];
var arr = [-34, -24, -5, -245, 12, -8, 0]

var largest = arr.reduce(function(x,y){
  return (x > y) ? x : y;
});

console.log("Cach 1",largest);
// --- End: Cách 1----


// function findmax(array)
// {
//     var max = 0;
//     var a = array.length;
//     for (counter=0;counter<a;counter++)
//     {
//         if (array[counter] > max)
//         {
//             max = array[counter];
//         }
//     }
//     // return max;
//     console.log(max);
// }
// findmax(arr)
// max = 0 chỉ áp dụng cho mảng chỉ toàn số nguyên dương thôi

// ----------------- Cách 2---------
function findmax(array)
{
    var max = array[0];
    var a = array.length;
    for (counter=0;counter<a;counter++)
    {
        if (array[counter] > max)
        {
            max = array[counter];
        }
    }
    // return max;
    console.log("Cach 2",max);
}
findmax(arr)
// -----------------End:  Cách 2---------



// ------------- Cách 3 -----------
var maximum = Number.MIN_SAFE_INTEGER;

var array = [-3, -2, 217, 9, -8, 46];
array.forEach(function(value){
  if(value > maximum) {
    maximum = value;
  }
});

console.log("Cach 3",maximum);
// -------------End: Cách 3 -----------


// ---Cách 4 ---------
const numbers = [2, 4, 6, 8, 80, 56, 10];


const findMax = (...numbers) => {
  let currentMax = numbers[0]; // 2

  for (const number of numbers) {
    if (number > currentMax) {
      console.log(number, currentMax);
      currentMax = number;
    }
  }
  console.log('Largest ', currentMax);
  return currentMax;
};

findMax(...numbers);

// ---End: Cách 4 ---------



// ------- Tìm Số Lớn và Số Bé Trong Mảng -----

    // var arr = [267, 306, 108];

    // for(i=0, k=0; i<arr.length; i++) {
    //   for(j=0; j<i; j++) {
    //     if(arr[i]>arr[j]) {
    //       k = arr[i];
    //       arr[i] = arr[j];
    //       arr[j] = k;
    //     }
    //   }
    // }
    // console.log('largest Number: '+ arr[0]);
    // console.log('Smallest Number: '+ arr[arr.length-1]);

// -------End: Tìm Số Lớn và Số Bé Trong Mảng -----


// ------------- End: Tìm Số Lớn Nhất--------


// ------------Begin: Tìm Số Nhỏ Nhất ------------
function findmin(array)
{
    var min = array[0];
    var a = array.length;
    for (counter=0;counter<a;counter++)
    {
        if (array[counter] < min)
        {
            min = array[counter];
        }
    }
    // return min;
    console.log("Cach 1 FindMin",min);

}
findmin(arr)


// ##### Cách 2 #####
array.reduce(function(prev, curr) {
    // return prev.Cost < curr.Cost ? prev : curr;
    console.log("Cach 2 Min",prev.Cost < curr.Cost ? prev : curr)
});

// ##### End: Cách 2 #####
// --------- End: Tìm Số Nhỏ Nhất ----------




// const findMax = (arr, max, i) => arr.length === i ? max :
//   findMax(arr, arr[i] > max ? arr[i] : max, ++i)

// const arr = [5, 34, 2, 1, 6, 7, 9, 3];
// const max = findMax(arr, arr[0], 0)
// console.log(max);

// // Tính trung bình cộng của các số
// const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

// const result = average( [ 4, 4, 5, 6, 6 ] ); // 5

// console.log("TBC",result);


// // const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

// // const list = [0, 10, 20, 30]
// // average(list) // 15


// // End: Tình trung bình cộng của các Số




// ----------------------- Tính tống phần tử trong mảng ---------------------------
// #### Cách 1 #####
console.log(
  [1,2,3].reduce(function(acc, val) { return acc + val; }, 0)
)

// console.log(
//   [].reduce(function(acc, val) { return acc + val; }, 0)
// )

// ##### Cách 2 #####
var arr = [1,2,3,4];
var total=0;
for(var i in arr) { total += arr[i]; }

// ##### Cách 3 #####
// Given array 'arr'
var i = arr.length;
var sum = 0;
while (--i) sum += arr[i];

// ##### Cách 4 #####
[1,2,3,4,5,6].reduceRight(function(a,b){return a+b;})
// End: Tính tổng phần tử trong mảng



arr.reduce(function(prev, curr) {
  // return prev.Cost < curr.Cost ? prev : curr;
  console.log("Cach 2 Min",prev < curr ? prev : curr)
});
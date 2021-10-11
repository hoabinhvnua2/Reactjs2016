// Bài tập:
// Tạo ra 1 mảng rỗng
// Thêm các phần tử vào mảng:  1, 3, 4, 7
// Thêm 2 vào đầu mảng
// Tìm ra số lớn nhất của mảng 2 cách
// Tìm ra số nhỏ nhất của mảng 2 cách
// Tỉnh tổng phần tử mảng (2 cách)





// Tạo ra 1 mảng rỗng
let arr = [];
console.log(arr);

// Thêm các phần tử vào mảng:  1, 3, 4, 7
let arrEle = [1, 3, 4, 7];
console.log(arrEle);

// Thêm 2 vào đầu mảng
let result = arr.concat(arrEle);
console.log(result);
result.unshift(2);
console.log(result);


// -------------------------------- Tìm Số Lớn Nhất ------------------------
// ###------ Cách 1 ------###
// var arr = [1,2,3,4];
var arr = [-34, -24, -5, -245, 12, -8, 0];

var largest = arr.reduce(function (x, y) {
  return x > y ? x : y;
});

console.log("Cach 1", largest);
// --- End: Cách 1---- ####


// ######------- Cách 2---------####
function findmax(array) {
  var max = array[0];
  var a = array.length;
  for (counter = 0; counter < a; counter++) {
    if (array[counter] > max) {
      max = array[counter];
    }
  }
  // return max;
  console.log("Cach 2", max);
}
findmax(arr);
// -----------------End:  Cách 2---------###########

// ######------- Cách 3 ---------######
var maximum = Number.MIN_SAFE_INTEGER;

var array = [-3, -2, 217, 9, -8, 46];
array.forEach(function (value) {
  if (value > maximum) {
    maximum = value;
  }
});

console.log("Cach 3", maximum);
// -------------End: Cách 3 -----------#######

// #####--------Cách 4 ---------#####
const numbers = [2, 4, 6, 8, 80, 56, 10];

const findMax = (...numbers) => {
  let currentMax = numbers[0]; // 2

  for (const number of numbers) {
    if (number > currentMax) {
      console.log(number, currentMax);
      currentMax = number;
    }
  }
  console.log("Largest ", currentMax);
  return currentMax;
};

findMax(...numbers);

// -------------End: Cách 4 ---------#####






// ------- Tìm Số Nhỏ Nhất Trong Mảng -----

// ------------Begin: Tìm Số Nhỏ Nhất ------------
// #####------------Cách 1: Tìm Số Nhỏ Nhất -----------#####
function findmin(array) {
  var min = array[0];
  var a = array.length;
  for (counter = 0; counter < a; counter++) {
    if (array[counter] < min) {
      min = array[counter];
    }
  }
  // return min;
  console.log("Cach 1 FindMin", min);
}
findmin(arr);
// ------------End: Cách 1: Tìm Số Nhỏ Nhất -----------#####



// ##### Cách 2 #####

array.reduce(function(prev, curr) {
  return prev.Cost < curr.Cost ? prev : curr;
    console.log("Cach 2 Min",prev.Cost < curr.Cost ? prev : curr)
});

// ##### End: Cách 2 #####
// --------- End: Tìm Số Nhỏ Nhất ----------



// ----------------------- Tính tống phần tử trong mảng ---------------------------
// #### Cách 1 #####
console.log(
  [1, 2, 3].reduce(function (acc, val) {
    return acc + val;
  }, 0)
);

// console.log(
//   [].reduce(function(acc, val) { return acc + val; }, 0)
// )

// ##### Cách 2 #####
var arr = [1, 2, 3, 4];
var total = 0;
for (var i in arr) {
  total += arr[i];
}
// -----------End:  Cách 2 ------------- #####



// ##### Cách 3 #####
// Given array 'arr'
var i = arr.length;
var sum = 0;
while (--i) sum += arr[i];
// ----------End:  Cách 3 ---------- #####


// ##### Cách 4 #####
[1, 2, 3, 4, 5, 6].reduceRight(function (a, b) {
  return a + b;
});
// -----------End: Cách 4 -----------#####

// -----------------------End: Tính tổng phần tử trong mảng------------------------



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

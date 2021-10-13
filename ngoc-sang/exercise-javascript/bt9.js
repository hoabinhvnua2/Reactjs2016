// B9: Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b. Nghiệm là: a ≤ arr [i] ≤ b.
function filterRangeInPlace(numberList, a ,b) {
  if(a > b || !Array.isArray(numberList)) return [];

  return numberList.reduce((arrInRange, number) => {
    if(number >= a && number <= b) {
      arrInRange.push(number);
    }

    return arrInRange;
  }, [])
}

console.log(filterRangeInPlace([6,3,1,5,7,8,9,2], 1, 8));


// @@@@ Tham khảo cách giải của anh Bình @@@@

// var numberArr = [1, 3, 5, 8, 9 , 6]; 

// // in ra mảng vs đk 4 =< item <= 7
// function filterRangeInPlace(arr, a, b) {
//   if (!a && !b ) {
//     return arr
//   }
//   const newArr = arr.filter((item) =>  a <= item && item <= b )
//   console.log(newArr)
// }

// filterRangeInPlace(numberArr)


// #### End...... #####
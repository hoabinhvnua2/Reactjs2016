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
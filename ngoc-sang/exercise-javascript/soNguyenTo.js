// Bài tập 5: Kiểm tra số vừa nhập có phải là số nguyên tố không.
function isPrimeNumber(x) {
  if (x === 1) {
    return false;
  } else if (x === 2) {
    return true;
  } else {
    for (var i = 2; i <= 500; i++) {
      if (x % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
isPrimeNumber(2);
isPrimeNumber(3);
isPrimeNumber(4);
// ##: Bài tập 5: Kiểm tra số vừa nhập có phải là số nguyên tố không.

// Bài tập 1: Kiểm tra số chắn từ 2 đến 10 (dùng vòng lặp for )

function kiemTraSoChan() {
  let numbers = [];
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
      // numbers += i
      numbers.push(i);
    }
    console.log(numbers);
  }
}
kiemTraSoChan();
// # Bài tập 1

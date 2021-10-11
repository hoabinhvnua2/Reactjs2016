// B7: Đầu vào là một mảng số, ví dụ: arr = [1, -2, 3, 4, -9, 6].
// Nhiệm vụ là: tìm mảng con liền kề của arr với tổng các item lớn nhất.
// Viết hàm getMaxSubSum(arr) sẽ trả về tổng đó.

function getMaxSubSum(arr) {
  if(!Array.isArray(arr) || arr.length === 0) return [];

  let globalSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {

      currentSum = currentSum + arr[j];
      if(currentSum > globalSum) {
        globalSum = currentSum;
      }
    }
  }

  return globalSum;
}

console.log(getMaxSubSum(arr));
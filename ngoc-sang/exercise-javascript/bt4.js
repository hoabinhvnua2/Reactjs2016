// B4:Tạo hàm topSalary(salaries) trả về tên của người được trả lương cao nhất.
// let salaries = {  John: 150, Ann: 160, Pete: 170}
// Nếu tiền lương trống, nó sẽ trả về null.
// Nếu có nhiều người được trả cao nhất, hãy trả lại 1 người bất kỳ trong số họ.

const salaries = {  John: 160, Ann: 170, Pete: 180};
function topSalary (salaries) {
  if(Object.keys(salaries).length === 0) return null;
  let max = 0;
  for (let i in salaries) {
    let salary = salaries[i];
    if(salary > max) {
      max = salary;
    }
  }
  return Object.keys(salaries)
  .filter(name => salaries[name] === max)
  .join(" ");
}

console.log(topSalary(salaries));


// @@@ Cách anh Bình giải @@@@

// function topSalary(obj) {
//   const arrValues = Object.values(obj);
//   if(arrValues.every(item => item === 0 || item === null || item === '')) return null
//   const maxSalary = Math.max(...arrValues)
//   const index = arrValues.findIndex(v => v === maxSalary)
//   console.log(Object.keys(obj)[index])
// }
// topSalary(salaries)

// ##### End: ..... ####
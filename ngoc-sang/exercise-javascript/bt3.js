// B3: Chúng ta có một đối tượng lưu trữ tiền lương của nhóm chúng ta:
// let salaries = {  John: 150, Ann: 160, Pete: 170}
// Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng.

let salaries = {  John: 150, Ann: 160, Pete: 170}
function run() {
    var person  = {
        firstName:"Trung",
        lastName:"Vuong",
        age:50,
        eyeColor:"blue"
    };
    console.log(Object.values(person).join("\n"));
}

// Cách lấy giá trị
// ###### Cách 1 !!!!!!!!
// console.log(typeof Object.values(salaries).join("\n"));
// #### End: Cách 1

// ###### Cách 2 !!!!!!!!
// for (i of Object.values(salaries)){
//   console.log(i);
//   }
// #### End: Cách 2

// -----##### Giải bài tập 2 #####-----
let handleValue = Object.values(salaries)
// console.log(typeof handleValue)
console.log(handleValue)

function sum(numbers) {
    return numbers.reduce(function(a,b) {
        return a +b;
    })
}
sum(handleValue)
// ----------- End: Giải bài tập 2 #####-----

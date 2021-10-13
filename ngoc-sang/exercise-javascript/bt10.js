// B10: Viết hàm getAverageAge(users) lấy một mảng đối tượng có thuộc tính tuổi và trả về tuổi trung bình.


// const users = [
//   {name: "Tuan", age: 20},
//   {name: "Nam", age: 30},
//   {name: "Hung", age: 28}
// ];

// function getAverages(users) {
//   if(!Array.isArray(users) || users.length === 0) return 0;

//   const sumAge =  users.reduce((sum, user) => sum + user.age, 0);

//   return sumAge / users.length;
// }

// console.log(getAverages(users));

// // @@@@ Tham khảo cách giải của anh Bình @@@@

// var customer = [
//   {
//     id: 1,
//     name: 'React'
//   },
//   {
//     id: 2,
//     name: 'Html',
//     age: '20'
//   },
//   {
//     id: 3,
//     name:'Css',
//     age: '25'
//   },
//   {
//     id: 4,
//     name: 'Angular'
//   }
// ]

// function getAverageAge(arr) {
//   if (!arr.length) {
//     return false
//   }

//   const arrNew = arr.filter((item) => item.hasOwnProperty('age'))
//   const arrNewLength = arrNew.length
//   const average = arrNew.reduce((acc, value) => acc += +value.age, 0)

//   console.log(arrNewLength)
//   console.log(average)
//   return average/arrNewLength
// }

// console.log(getAverageAge(customer))

// #### End...... #####
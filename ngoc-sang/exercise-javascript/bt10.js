// B10: Viết hàm getAverageAge(users) lấy một mảng đối tượng có thuộc tính tuổi và trả về tuổi trung bình.


const users = [
  {name: "Tuan", age: 20},
  {name: "Nam", age: 30},
  {name: "Hung", age: 28}
];

function getAverages(users) {
  if(!Array.isArray(users) || users.length === 0) return 0;

  const sumAge =  users.reduce((sum, user) => sum + user.age, 0);

  return sumAge / users.length;
}

console.log(getAverages(users));

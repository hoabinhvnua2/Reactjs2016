// B1:
var user = {}
// var user = new Object({})
// var user = Object.create({})
user.firstName = 'React'
user.lastName = 'HTML'
user.name = "CSS"
console.log('user befor', user)
console.log(user.hasOwnProperty('name'))

delete user.name
console.log('user after', user)
console.log(user.hasOwnProperty('name'))

// B2: 
function isEmpty(obj) {
  // return !obj.hasOwnProperty('lastName')
  return !obj.name
}
console.log(isEmpty(user))


//B3:
var salaries = {
  react: 1500,
  angular: 2000,
  html: 1500,
  css: 2000
};

function tinhTong(obj) {
  let total = 0;
  console.log(Object.keys(obj))
  console.log(Object.values(obj))
  for (const key in obj) {
    total += obj[key]
  }
  return total
}
console.log(tinhTong(salaries))


// B4: 
function topSalary(obj) {
  const arrValues = Object.values(obj);
  if(arrValues.every(item => item === 0 || item === null || item === '')) return null
  const maxSalary = Math.max(...arrValues)
  const index = arrValues.findIndex(v => v === maxSalary)
  console.log(Object.keys(obj)[index])
}
topSalary(salaries)


// B5:
var styles = ['Jazz', 'Blues', 'React', 'Css'];
styles.push('Rock-n-Roll');

function changeItem(arr) {
  const arrLength = arr.length;
  if (arrLength % 2 === 0) {
    return  false
  }

  const index = Math.floor((arrLength - 1) / 2);
  styles[index] = 'Classic';
}
changeItem(styles)

console.log(styles)

console.log(styles.shift())
styles.unshift('Rap')
styles.unshift('Reggae')

console.log(styles)


// B6
// function sumInput() {
//   const arr = []  
//   while (true) {
//     var item = prompt('Bạn nhập vào giá trị số');
//     if (item === null || item === '' || !isFinite(item)) break;
//     arr.push(+item);
//   }
//   const total = arr.reduce((acc, value) => acc += value, 0)
//   return total;
// }
// console.log(sumInput())


// B7

var arrNumber = [1, -2, 3, 4, -9, 6];
function getMaxSubSum(arr) {
  if (!arr.length) {
    return false
  }

  let sum = 0;
  let acc = 0;
  for (const item of arr) {
    acc += item;
    if(acc < 0 ) {acc = 0}
    sum = Math.max(acc, sum)  
  }
  return sum;
}

console.log("max sum", getMaxSubSum(arrNumber))


// B8:

function camelize(str) {
  const arrString = str.split('-');
  var text = arrString[0]

  for (let index = 1; index < arrString.length; index++) {
    text += (arrString[index][0].toUpperCase() + arrString[index].slice(1))
  }

  return text;
 }

console.log(camelize("hadle-submit-form"))


// B9: 
var numberArr = [1, 3, 5, 8, 9 , 6]; 

// in ra mảng vs đk 4 =< item <= 7
function filterRangeInPlace(arr, a, b) {
  if (!a && !b ) {
    return arr
  }
  const newArr = arr.filter((item) =>  a <= item && item <= b )
  console.log(newArr)
}

filterRangeInPlace(numberArr)


// B10
var customer = [
  {
    id: 1,
    name: 'React'
  },
  {
    id: 2,
    name: 'Html',
    age: '20'
  },
  {
    id: 3,
    name:'Css',
    age: '25'
  },
  {
    id: 4,
    name: 'Angular'
  }
]

function getAverageAge(arr) {
  if (!arr.length) {
    return false
  }

  const arrNew = arr.filter((item) => item.hasOwnProperty('age'))
  const arrNewLength = arrNew.length
  const average = arrNew.reduce((acc, value) => acc += +value.age, 0)

  console.log(arrNewLength)
  console.log(average)
  return average/arrNewLength
}

console.log(getAverageAge(customer))
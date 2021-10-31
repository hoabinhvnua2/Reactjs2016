//Bai1: 
var user = {}
user.firstName = 'React'
user.lastName = 'HTML'
user.firstName = 'CSS'

delete user.firstName
console.log(user.name)
//Bai2: 
function isEmpty(obj) {
    //return !obj.hasOwnProperty('name')
    return obj.name
}
console.log(isEmpty(user)) 
//Bai3: 
var salaries = {
    react: 1500,
    angular: 1000,
    html: 1000
};
function tinhTong(obj) {
    let total = 0;

    for(const key in obj) {
        total += obj[key]
    }
    return total;
}
console.log(tinhTong(salaries))

//Bai4: 
function topSalary(obj) {
    const arrValues = Object.values(obj);
    if (arrValues.every(item => item === 0 || item === null || item === "")) return null;
    const maxSalary = Math.max(...arrValues)
    const index = arrValues.findIndex(v => v.key === maxSalary)

    console.log(index)
}
topSalary(salaries) 

//Bai 5: 
var styles = ['Jazz', 'Blues','Country','React'];
styles.push('Rock-n-roll');

function changeItem(arr){
    const arrLength = arr.length;
    if(arrLength %2 === 0){

        return false
    }
    const index = Math.floor((arrLength - 1) / 2);
    styles[index] = 'Classic'; 
}
changeItem(styles)

console.log(styles)

console.log(styles.shift())
console.log(styles.shift('Rap'))

//Bai 6:
function sumInput(){
    const arr = []
    while (true){
        var item = prompt('Ban nhap vao 1 so')
        if (item === null || item === '' || !isFinite(item)) break;
        arr.push(+item);
    }
    const total = arr.reduce((acc,value) => acc += value, 0);
    return total;
}
console.log(sumInput());
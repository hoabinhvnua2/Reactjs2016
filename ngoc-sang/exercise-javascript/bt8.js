// B8: Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString” được viết bằng camel.


function camelize(str) {
  if(str.length === 0) return "";

  return str
  .split("-")
  .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
  .join("");
}

console.log(camelize("mY-short-string"));


// @@@@ Tham khảo cách giải của anh Bình @@@@

// function camelize(str) {
//   const arrString = str.split('-');
//   var text = arrString[0]

//   for (let index = 1; index < arrString.length; index++) {
//     text += (arrString[index][0].toUpperCase() + arrString[index].slice(1))
//   }

//   return text;
// }

// console.log(camelize("hadle-submit-form"))


// #### End...... #####
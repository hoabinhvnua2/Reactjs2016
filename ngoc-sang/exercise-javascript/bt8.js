// B8: Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString” được viết bằng camel.


function camelize(str) {
  if(str.length === 0) return "";

  return str
  .split("-")
  .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
  .join("");
}

console.log(camelize("mY-short-string"));
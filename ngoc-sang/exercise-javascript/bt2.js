// B2: Viết hàm isEmpty (obj) trả về true nếu đối tượng không có thuộc tính, ngược lại là false.

//  ########### Giải Bài 2 !!!!!!!!!!!!!!
function isEmptyObject(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}

isEmptyObject({}); // true
isEmptyObject({ foo: "bar" }); // false
// ############ Kết thúc bài 2 ###########


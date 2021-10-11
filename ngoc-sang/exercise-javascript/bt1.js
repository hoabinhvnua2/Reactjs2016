// B1: Viết code, một dòng cho mỗi yêu cầu sau:
// Tạo một đối tượng user trống.
// Thêm thuộc tính firstName với giá trị React.
// Thêm thuộc tính lastName với giá trị HTML.
// Thay đổi giá trị của name thành CSS.
// Xóa thuộc tính name khỏi đối tượng.


function infoPerson() {
  const user = {};
  user.firstName = 'React';
  user.lastName = 'HTML';
  user.name = 'CSS';
  delete user.name;
  console.log(user);
}
infoPerson();
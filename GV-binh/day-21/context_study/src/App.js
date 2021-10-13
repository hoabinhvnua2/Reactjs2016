import React, { useContext } from "react";
import "./App.css";
import Count from "./Count";
import CountProvider from "./Context";

function App() {
  return (
    <CountProvider>
      <div className="App">
        <Count />
      </div>
    </CountProvider>
  );
}

export default App;

// Yêu cầu tạo ra 4 component
// App.js, AddStudent.js, ShowName.js, Average.js
//AddStudent => gồm có 2 input: Name, Math, Phy, Chem Add. Khi người nhập xong và nhán vào Add thì thêm thông tin sinh viên vào context
// ShowName => Có 1 cái bảng để hiển thị ra STT, Tên sinh viên, Điểm toán, Điểm lý, Điểm hóa, Điểm trung binh. Cột điểm trung bình sẽ show component Average ở đây
// Average => Có 1 thẻ p hiển thị điểm trung bình và có 1 button, ban đầu điểm trung các hiển thị là ?, sau khi clcik vào button để tính điểm trung bình thì xóa
// dấu ? và thay bằng số điểm. chỉ lấy 1 số sau dấu phẩy

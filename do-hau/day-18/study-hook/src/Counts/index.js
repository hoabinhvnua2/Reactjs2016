import React, {useState} from 'react';

const Count = () => {
             //count, tiền tố(set), truyền 10 vào tham số xét cho giá trị count
     const [count, setCount] = useState(0)

     const handleClickCong = () => {
         setCount(count + 1) //c => c+1
     }
     const handleClickTru = () => {
        setCount(count - 1) //c => c-1
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClickCong}>Cộng</button>
            <button onClick={handleClickTru}>Trừ</button>
        </div>
    );
};

export default Count;
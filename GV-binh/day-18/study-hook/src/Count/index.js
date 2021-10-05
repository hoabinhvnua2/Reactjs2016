import React, {useState} from 'react';

const Count = () => {
    const [count, setCount] = useState(0)

    const handleClickCong = () => {
        setCount(count + 1)
    }

    const handleClickTru = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClickCong}>Cộng</button>
            <button onClick={handleClickTru}>Trừ</button>
        </div>
    );
}

export default Count;

// Tạo 1 component là Product
//  tạo 1 state là 1 mảng các Product như sau
// [
//     {
//         id: 1,
//         name: 'Iphone 1'
//     },
//     {
//         id: 1,
//         name: 'Iphone 1'
//     },
//     {
//         id: 1,
//         name: 'Iphone 1'
//     },
// ]

// ul li

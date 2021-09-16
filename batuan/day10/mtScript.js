// obj lưu  trữ đc nhiều dữ liệu,
 const p = new Promise((resolve, reject) => {
    
     resolve(5)
 }).then(x => x * 2)
 .then(y => y - 9)
 .then(z => {console.log('z',z)})
 ;
 //
 fetch('https://gorest.co.in/public/v1/users ')
 .then(x => x.json())
 .then(y => console.log(y.data))
 .then(z => z.filter((zo)=>zo.status ==="active"))
.then(results=> console.log(results))

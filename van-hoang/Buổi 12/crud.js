function getProduct() {
    const spinner = document.getElementById('spinner');
    spinner.removeAttribute('hidden')
    fetch('https://612b8d9922bb490017893b88.mockapi.io/product')
      .then(result => result.json())
      .then(data => {
        const resultHtml = document.getElementById('result')
        let html = ''
        for (let index = 0; index < data.length; index++) {
         html += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${data[index].productName}</td>
            <td>${data[index].active}</td>
            <td>${data[index].quantity}</td>
          </tr>
         `
        }
        spinner.setAttribute('hidden', true)
        resultHtml.innerHTML = html
      })
      .catch(err =>  console.log(err))
  }
getProduct()
  
  
function addNew() {
    const tableList = document.getElementById('tableList');
    const formAdd = document.getElementById('formAdd');
  
    formAdd.removeAttribute('hidden')
    tableList.classList.remove('col-12')
}
  
function closeAddNew() {
    console.log('aa')
    const tableList = document.getElementById('tableList');
      const formAdd = document.getElementById('formAdd');
  
      formAdd.setAttribute('hidden', true)
      tableList.classList.add('col-12')
}

var productList = [];

function updateProduct(id) {
  console.log(id)
  const productName = document.getElementById('product');
  const active = document.getElementById('active');
  const quantity = document.getElementById('quantity');
  const spinner = document.getElementById('spinner');

  if (productName.value.length === 0) {
    alert('Bạn chưa nhập tên sản phẩm');
    return false;
  }

  if (!active.value) {
    alert('Bạn chưa chọn active');
    return fasle;
  }

  if(quantity.value.length === 0) {
    alert('Bạn chưa nhập tổng sản phẩm');
    return false;
  }

  fetch('https://612b8d9922bb490017893b88.mockapi.io/product/' + id, {
    method: 'PUT',
    body: JSON.stringify({productName: productName.value , active: active.value, quantity: quantity.value})
  })
    .then(result => result.json())
    .then(data => {
      productName.value = '';
      active.value = '';
      quantity.value = '';
      spinner.setAttribute('hidden', true)
      closeAddNew()
      getProduct()
    })
    .catch((err) => console.log('err', err))
} 

function handleDelete(id) {
  const spinner = document.getElementById('spinner');
  const confirmProduct = confirm('Bạn có chắc chán muốn xoá sản phẩm ko?')
  if(confirmProduct) {
    spinner.removeAttribute('hidden')
    fetch('https://612b8d9922bb490017893b88.mockapi.io/product/' + id, {
      method: "DELETE"
    })
    .then(result => result.json())
    .then(data => {
      console.log(data)
      spinner.setAttribute('hidden', true)
      getProduct()
    })
    .catch(err => console.log(err))
  }
  return false
}

function handleUpdate(id) {
  const productName = document.getElementById('product');
  const active = document.getElementById('active');
  const quantity = document.getElementById('quantity');
  const spinner = document.getElementById('spinner');
  const waper = document.getElementById('waper');
  var node = document.createElement('button')
  // node.classList.add("btn btn-primary")
  waper.removeChild(waper.lastElementChild)
  waper.appendChild(node)
  waper.lastElementChild.classList.add("btn")
  waper.lastElementChild.classList.add("btn-primary")
  waper.lastElementChild.textContent = "Update"
  waper.lastElementChild.setAttribute('onclick', `updateProduct(${id})`)
  spinner.removeAttribute('hidden')
  addNew()
  fetch('https://612b8d9922bb490017893b88.mockapi.io/product/' + id)
    .then(result => result.json())
    .then(data => {
      console.log(data)
      productName.value = data.productName
      active.value = data.active
      quantity.value = data.quantity
      spinner.setAttribute('hidden', true)
    })
}

function generateHtml(data) {
  const resultHtml = document.getElementById('result')
  let html = ''
  for (let index = 0; index < data.length; index++) {
   html += `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${data[index].productName}</td>
      <td>${data[index].active}</td>
      <td>${data[index].quantity}</td>
      <td>
        <button type="button" class="btn btn-primary" onclick="handleUpdate(${data[index].id})"><i class="bi bi-pencil"></i></button>
        <button type="button" class="btn btn-danger" onclick="handleDelete(${data[index].id})"><i class="bi bi-trash"></i></button>
      </td>
    </tr>
   `
  }

  resultHtml.innerHTML = html
}

function getProduct() {
  const spinner = document.getElementById('spinner');
  spinner.removeAttribute('hidden')
  fetch('https://612b8d9922bb490017893b88.mockapi.io/product')
    .then(result => result.json())
    .then(data => {
      productList = data;
      generateHtml(productList)
      spinner.setAttribute('hidden', true)
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

function handleSubmit() {
  const spinner = document.getElementById('spinner');
  spinner.removeAttribute('hidden')

  const productName = document.getElementById('product');
  const active = document.getElementById('active');
  const quantity = document.getElementById('quantity');

  if (productName.value.length === 0) {
    alert('Bạn chưa nhập tên sản phẩm');
    return false;
  }

  if (!active.value) {
    alert('Bạn chưa chọn active');
    return fasle;
  }

  if(quantity.value.length === 0) {
    alert('Bạn chưa nhập tổng sản phẩm');
    return false;
  }

  fetch('https://612b8d9922bb490017893b88.mockapi.io/product', {
    method: 'POST',
    body: JSON.stringify({productName, active, quantity})
  })
    .then(result => result.json())
    .then(data => {
      productName.value = '';
      active.value = '';
      quantity.value = '';
      productList.push(data)
      spinner.setAttribute('hidden', true)
      closeAddNew()
      generateHtml(productList)
      // getProduct()
    })
    .catch((err) => console.log('err', err))

}




// CRUD Create-Read-Update-Delete
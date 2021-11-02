const getAll = () => {
    return fetch('https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/products').then(r => r.json());
}

const addNewProduct = (param) => {
    return fetch('https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/products', {
        method: 'POST',
        param
    })
}

export const apiProduct = {
    getAll,
    addNewProduct
}


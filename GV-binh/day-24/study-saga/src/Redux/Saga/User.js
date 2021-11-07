import { fork, call, put, takeLatest } from 'redux-saga/effects'
import { apiProduct } from '../../Services/Product'
import { actionProduct } from '../Actions/Products'

export function* fetchProduct(param) {
    console.log('param', param)
    try {
        const res = yield call(apiProduct.getAll)
        console.log('res', res)
        yield put({type: actionProduct.GET_ALL_SUCCESS, payload: res})
    } catch (error) {
        yield put({type: actionProduct.GET_ALL_ERR, payload: error})
    }
}

export function* addProduct() {
    try {
        const res = yield call(apiProduct.addNewProduct)
        yield put({type: actionProduct.GET_ALL_SUCCESS, payload: res})
    } catch (error) {
        yield put({type: actionProduct.GET_ALL_ERR, payload: error})
    }
}

export function* watchFetchProduct() {
    yield takeLatest(actionProduct.GET_ALL, fetchProduct)
}

export function* watchAddProduct() {
    yield takeLatest(actionProduct.GET_ALL, addProduct)
}

export default function* reward() {
    yield fork(watchFetchProduct)
    yield fork(watchAddProduct)
}
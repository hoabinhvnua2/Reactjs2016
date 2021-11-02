import { fork, call, put, takeLatest } from 'redux-saga/effects'
import { apiProduct } from '../../Services/Product'
import { actionProduct } from '../Actions/Products'

export function* fetchProduct() {
    try {
        const res = yield call(apiProduct.getAll)
        yield put({type: actionProduct.GET_ALL_SUCCESS, payload: res})
    } catch (error) {
        yield put({type: actionProduct.GET_ALL_ERR, payload: error})
    }
}

export function* watchFetchProduct() {
    yield takeLatest(actionProduct.GET_ALL, fetchProduct)
}

export default function* reward() {
    yield fork(watchFetchProduct)
}


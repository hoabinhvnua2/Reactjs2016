
import { fork } from 'redux-saga/effects'
import product from './Products';
import user from './User';

export default function* rootSaga() {
    yield fork(product)
    yield fork(user)
}
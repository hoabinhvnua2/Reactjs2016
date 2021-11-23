import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import productActions from '../Actions/Products';
import { productSelector } from "../Selectors/Product";

export const useProduct = () => {
    const products = useSelector(productSelector);
    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators( productActions, dispatch), [dispatch])


    return useMemo(() => ({
        products, actions
    }), [actions, products])
}
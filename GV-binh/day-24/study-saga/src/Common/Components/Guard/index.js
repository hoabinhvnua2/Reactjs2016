
const Guard = ({accessWhen, callBack, children}) => {

    if(!accessWhen) {
        return callBack()
    }

    return children
}

export default Guard;

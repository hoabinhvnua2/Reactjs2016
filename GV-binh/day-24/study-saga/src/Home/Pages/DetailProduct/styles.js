const styles = () => ({
    customWrapDetail: {
        display: 'grid',
        gridTemplateColumns: `repeat(8, 1fr)`,
        columnGap: '10px'
    },
    itemOne: {
        gridColumn: '2 / span 3'
    },
    ml10: {
        marginLeft: '10px'
    },
    wrapComment: {
        display: 'flex',
    },
    avata: {
        width: 25,
        height: 25,
        backgroundColor: '#9fdb4a',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center'
    },
    w100: {
        width: '100%'
    },
    textCenter: {
        textAlign: 'center'
    },
    pdl10: {
        paddingLeft: '10px'
    },
    pdt10: {
        paddingTop: '10px'
    }
});

export default styles;
import { Component } from "react";

import Result from "../Result";

class Counts extends Component {

    // State: là những trạng thái mà component sử dụng để re-render lại DOM
    // Props: Trạng thái được truyền từ cha sang con thì đc gọi là Props

    constructor() {
        super();

        console.log('---Contructor---')
        this.state = {
            count: 10,
            hi: 'Xin chào các bạn lớp Reactjs'
        };
    }

    componentWillMount() {

        console.log('---Will Mount')
    }

    componentDidMount() {
        console.log('---Did Mount---')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('--- Update Component ---')
    // }

    componentDidUpdate() {
        console.log('--- did update---')
    }

    handleIncrement = () => {
        console.log('cong')
        this.setState(() => ({
            count: this.state.count + 1
        }))
    }

    handleDecrement = () => {
        this.setState({
            count:  this.state.count - 1
        })
    }

    render() {
        console.log('---Render---')
        const { count, hi } = this.state
        return (
            <div>
                <Result number={count} increment={this.handleIncrement} decrement={this.handleDecrement} />
            </div>
        )
    }
}

export default Counts;
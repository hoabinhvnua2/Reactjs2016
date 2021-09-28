import { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Result from '../Result';

class Counts extends Component {
    //State: là những trạng thái mà component sử dụng để re-render lại DOM
    //Props: Trạng thái được truyền từ cha sang con được gọi là Props

    constructor() {
        super();
        
        console.log('---Constructor---')
        this.state = {
            count: 10,
            hi:"Xin chào các bạn nhé!!"
        };
        // this.handleIncrement= this.handleIncrement.bind(this)
    }

    componentWillMount() {
        console.log('---Will mount---')
    }
    componentDidMount(){
        console.log('---Did Mount---')
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     // console.log('nextProps', nextProps)
    //     // console.log('nextState', nextState)
    //     console.log('---Update component---')
    // }

    componentDidUpdate() {
        console.log('---did update---')
    }

     handleIncrement = () => {
        console.log('cong')
        this.setState(() => ({
            count: this.state.count + 1
        }))
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log('---Render---')
        const { count, hi } = this.state
        return(
            <div>
            <div>

            </div>
                <Result number={count} increment={this.handleIncrement} decrement={this.handleDecrement}/>
                </div>
        )
    }

}

export default Counts;
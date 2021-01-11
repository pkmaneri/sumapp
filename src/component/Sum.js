import React, { Component } from "react"

class Sum extends Component {
    state = {
        result: 0,
        num1: 0,
        num2: 0,
    }

    handleNum1(e) {
        // console.log(e)
        const num1 = (e.target.value)
        this.setState(prevState => {
            return {
                num1: num1,
                num2: prevState.num2,
            }
        })
    }
    handleNum2(e) {
        // console.log(e)
        const num2 = (e.target.value)
        this.setState(prevState => {
            return {
                num2: num2,
                num1: prevState.num1,
            }
        })
    }
    handleSum(event) {
        // console.log(event.target.value)
        // const num1=this.setState({ num1: event.target.value });
        // const num2=this.setState({ num2: event.target.value });
        // this.setState({ result: num1 + num2 })
        const num1 = this.state.num1;
        const num2 = this.state.num2;

        const result = parseInt(num1) + parseInt(num2);
        this.setState({
            'result': result
        })



    }
    render() {
        return (
            <div className="container">
                <div>
                    <input aria-label="num1-input"  text="text" onChange={this.handleNum1.bind(this)} value={this.state.num1}></input>
                    <input aria-label="num2-input"  text="text" onChange={this.handleNum2.bind(this)} value={this.state.num2}></input>
                </div>
                <button aria-label="sum-button"   onClick={this.handleSum.bind(this)}>Sum</button>
                <b aria-label="sum-output"  >{this.state.result}</b>
            </div>
        )
    }
}
export default Sum
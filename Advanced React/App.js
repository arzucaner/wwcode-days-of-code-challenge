import React from "react"

export default class App extends React.Component {
    render() {
        return (
            <h1>{this.props.type} component</h1>
        )
    }
}

//* const [goOut, setGoOut] = React.useState("Yes")

state = {
    goGoOut() {
        setGoOut(prevState => {
            return prevState === "Yes" ? "No" : "Yes"
        })       
    }

     render () {
        return (
        <div className="state">
            <h1 className="state--title">Should I go out tonight?</h1>
            <div className="state--value" onClick={this.toggleGoOut}>
                <h1>{this.state.goOut}</h1>
            </div>
        </div>
        )
    }
}

// Challenge: Convert this stateful function component to a stateful class component. At the end, everything should work exactli the way it does now.

export default class App extends React.Component {
    state = {        
    }

    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    subtract = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }

    render() {
        return (
            <div className="counter">
                <button className="counter--minus" onClick={this.subtract}>-</button>
                <div className="counter--count">
                    <h1>{this.state.count}</h1>
                </div>
                <button className="counter--plus" onClick={this.add}>+</button>
            </div>
        )
    }
}

// 
constructor(props) {
    super(props)
    this.state = {
        goOut: "Yes"
    }
    this.toggleGoOut = this.toggleGoOut.bind(test)
}

toggleGoOut() {
    this.setState(prevState => {
        return {
            goOut: prevState.goOut === "Yes" ? "No" : "Yes"
        }
    })
}

render () {
    return (
    <div className="state">
        <h1 className="state--title">Should I go out tonight?</h1>
        <div className="state--value" onClick={this.toggleGoOut}>
            <h1>{this.state.goOut}</h1>
        </div>
    </div>
    )
}

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
class Input extends Component {

    changeHandler(event) {
        this.props.numberHandler(event.target.value)
    }

    render() {

        return (
            <div>
                <input type='number' onChange={this.changeHandler.bind(this)} />
            </div>
        )
    }
}

class PercentageShower extends Component {

    render() {
        const number = `${(this.props.number * 100).toFixed(2)}%`
        return (
            <div>{number}</div>
        )
    }
}

class PercentageApp extends Component {
    
    state = {
        num: 0
    }

    numberHandler(num) {
        this.setState({ num });
    }
    render() {
        const { num } = this.state
        return (
            <div>
                <PercentageShower number={num} />
                <Input numberHandler={this.numberHandler.bind(this)} />
            </div>
        )
    }
}

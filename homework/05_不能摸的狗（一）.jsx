class Dog extends Component {
    bark() {
        console.log('bark')
    }

    run() {
        console.log('run')
    }

    clickedHandler() {
        this.bark()
        this.run()
    }

    render() {
        return (<div onClick={this.clickedHandler.bind(this)}>DOG</div>)
    }
}
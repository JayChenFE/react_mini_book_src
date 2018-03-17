class Post extends Component {
    handleClick() {
        console.log(this.p.clientHeight)
    }
    render() {
        return (
            <p onClick={this.handleClick.bind(this)}
                ref={p => this.p = p}>
                {this.props.content}
            </p>
        )
    }
}
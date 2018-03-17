class Computer extends Component {
    state = { status: 'off' }

    onClickHandler() {

        this.setState(prevState => ({
            status: prevState.status === 'off' ? 'on' : 'off'
        })
        )
    }

    render() {
        const { status } = this.state
        const content = `显示器${status === 'on' ? '亮' : '关'}了`
        return (
            <div>
                <Screen showContent={content} />>
                <button onClick={this.onClickHandler.bind(this)}>开关</button>
            </div>
        )
    }
}

class Screen extends Component {

    static defaultProps = { showContent: "无内容" }



    render() {
        const { showContent } = this.props
        return (
            <div className='screen'>{showContent}</div>
        )
    }
}

class Post extends Component {

    state = { content: '' }

    componentWillMount() {
        this.loadData()
    }

    async loadData() {
        this.setState({ content: '数据加载中...' })
        const content = await getPostData()
        this.setState({ content })
    }

    render() {
        return (
            <div>
                <div className='post-content'>{this.state.content}</div>
                <button onClick={() => { this.loadData() }}>刷新</button>
            </div>
        )
    }
}
const loadAndRefresh = url => WrappedComponent => (
    class extends Component {
        componentWillMount() {
            this._loadData()
        }

        async _loadData() {
            this.setState({ content: '数据加载中...' })
            const content = await getData(url)
            this.setState({ content })
        }

        render() {
            const props = {
                content: this.state.content,
                refresh: this._loadData.bind(this),
                ...this.props
            }
            return (
                <WrappedComponent {...props} />
            )
        }
    }
)

class Post extends Component {
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
                <button onClick={() => this.props.refresh()}>刷新</button>
            </div>
        )
    }
}

Post = loadAndRefresh('/post')(Post)
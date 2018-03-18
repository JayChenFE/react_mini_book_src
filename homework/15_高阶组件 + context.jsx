const makeProvider = data =>
    WrapComponent =>
        class extends Component {
            static childContextTypes = {
                data: PropTypes.any
            }

            getChildContext = _ => ({ data })

            render = _ => <WrapComponent />
        }
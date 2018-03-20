const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]
        case "DELETE_USER":
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case "UPDATE_USER":
            return [...state.map((user, index) => (index === action.index ? { ...user, ...action.user } : user)
            )]
        default:
            return state
    }
}
class User extends Component {

    handleDeleteUser() {
        if (this.props.onDeleteUser) {
            this.props.onDeleteUser(this.props.index);
        }
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <div>Name: {user.username}</div>
                <div>Age: {user.age}</div>
                <div>Gender: {user.gender}</div>
                <button onClick={this.handleDeleteUser.bind(this)}>删除</button>
            </div>
        )
    }
}

class UsersList extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            age: 0,
            gender: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        const { type, value } = e.target
        switch (type) {
            case 'text':
                this.setState({ username: value });
                break;
            case 'number':
                this.setState({ age: parseInt(value, 10) });
                break;
            case 'radio':
                this.setState({ gender: value });
                break;
            default:
                break;
        }
    }

    handleAddUser() {
        if (this.props.onAddUser) {
            this.props.onAddUser(this.state);
        }
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
                <div className='add-user'>
                    <div>Username: <input type='text' onChange={this.handleInputChange} value={this.state.username} /></div>
                    <div>Age: <input type='number' onChange={this.handleInputChange} value={this.state.age} /></div>
                    <div>Gender:
                        <label>Male: <input type='radio' name='gender' value='male' onChange={this.handleInputChange} /></label>
                        <label>Female: <input type='radio' name='gender' value='female' onChange={this.handleInputChange} /></label>
                    </div>
                    <button onClick={this.handleAddUser.bind(this)}>增加</button>
                </div>
                {/* 显示用户列表 */}
                <div className='users-list'>{users.map((user, index) => <User user={user} key={index} index={index} onDeleteUser={this.props.onDeleteUser} />)}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}
const mapDispatchToProps = (dispatch) => {

    const onAddUser = user => {
        dispatch({ type: 'ADD_USER', user })
    },
        onDeleteUser = index => {
            dispatch({ type: 'DELETE_USER', index })
        }

    return {
        onAddUser,
        onDeleteUser
    }
}

UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
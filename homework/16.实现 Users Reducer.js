
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
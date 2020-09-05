import { usersData } from "../common/users";

const initial_state = usersData;

export const usersReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                id: action.user_data.id,
                login: action.user_data.login,
                nickname: action.user_data.nickname,
                email: action.user_data.email,
            };
        case 'LOGOUT_USER':
            return initial_state
        default:
            return state;
    }
};

export default usersReducer
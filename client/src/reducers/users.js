import { usersData } from "../common/users";

const initial_state = {
    current_user: usersData,
    users_list: []
};

export const usersReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                current_user: {
                    id: action.user_data.id,
                    nickname: action.user_data.nickname,
                    email: action.user_data.email,
                }
            };
        case 'SET_USERS_LIST':
            return {
                ...state,
                users_list: []
            }
        case 'RESET_CURRENT_USER':
            return {
                ...state,
                current_user: initial_state.current_user
            }
        default:
            return state;
    }
};

export default usersReducer
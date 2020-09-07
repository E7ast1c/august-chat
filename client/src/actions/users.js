import { usersData, checkUserData } from "../common/users";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_USERS_LIST = 'SET_USERS_LIST';
export const RESET_CURRENT_USER = 'RESET_CURRENT_USER';

export const createNewUser = (checkUserData) => (dispatch, getState) => {
    // here we call api and auth user
    // now it just a dummy
    let ReceivedUserData = usersData;
    ReceivedUserData.id = getRandomInt(100)
    ReceivedUserData.nickname = getRandomNickName()
    ReceivedUserData.email = checkUserData.email
   // return dispatch(loginUser(userData))
}

export const createLoginUser = (checkUserData) => (dispatch, getState) => {
    console.log(createLoginUser)
    let ReceivedUserData = usersData;
    ReceivedUserData.id = getRandomInt(100)
    ReceivedUserData.nickname = getRandomNickName()
    ReceivedUserData.email = checkUserData.addEmail
    dispatch(loginUser(ReceivedUserData))
};

export const loginUser = (user_data) => {
    return {
        type: SET_CURRENT_USER,
        user_data
    }
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function getRandomNickName() {
    const dummyLogins = ['Liam','Noah','William','Elijah','James','Benjamin','Lucas']
    const rnd = getRandomInt(dummyLogins.length)
    return dummyLogins[rnd]
}

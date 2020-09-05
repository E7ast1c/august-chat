import { usersData, checkUserData } from "../common/users";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const createNewUser = (checkUserData) => (dispatch, getState) => {

    // here we call api and auth user
    // now it just a dummy
    let ReceivedUserData = usersData;
    ReceivedUserData.id = getRandomInt(100)
    ReceivedUserData.login = login
    ReceivedUserData.nickname = getRandomNickName()
    ReceivedUserData.email = getRandomEmail()
    return dispatch(loginUser(userData))
}

export const loginUser = (user_data) => {
    return {
        type: LOGIN_USER,
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

function getRandomEmail() {
    const rndNickName = getRandomNickName()
    return str.concat(rndNickName,'@gmail.com')
}

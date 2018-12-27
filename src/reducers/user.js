const initialState = {
    get state() {
        return {
            loginStatus: false,
            loading: false,

            userData: {
                nickname: '',
                password: '',
            },
            loadedComp: false,
            loadedDept: false,
            loadedEmpl: false,
        }
    }
}

export function userReducer(state = initialState){
    return state
}
const initialState = {
    uid: ""
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SIGNIN":
            return {
                ...state,
                uid: action.dataRequest
            };
        case "SIGNOUT":
            return initialState;
        default:
            return state;
    }
};
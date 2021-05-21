export const loginAction = (dataRequest: any) => {
    return {
        type: 'SIGNIN',
        dataRequest: dataRequest
    }
}

export const logoutAction = () => {
    return {
        type: 'SIGNOUT',
    }
}
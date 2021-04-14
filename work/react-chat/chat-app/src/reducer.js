export const reducer = (state, action) => { 
    switch(action.type) {
        case 'changeTheme':
            return { ...state, theme: action.theme };
        case 'updatePersonalInfo':
            return { ...state, ...action.info };
        case 'updateLastActive':
            return { ...state, lastActive: Date.now() };
        default:
            return state;
        } 
};

// export default reducer;
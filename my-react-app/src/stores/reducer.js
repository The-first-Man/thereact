export default (state = {
    water: 'sweet',
    skill: ['ps', 'js', 'css'],
    searchInputText: ''
}, action) => {
    switch (action.type) {
        case 'HANDLEWATER':
            return {
                water: 'sault'
            }
        case 'GETINPUTVALUE':
            return {
                ...state,
                searchInputText: action.searchInputText
            }
        default:
            return state
    }
}
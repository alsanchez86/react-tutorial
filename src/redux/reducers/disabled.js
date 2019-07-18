export default (state = false, {type, value}) => {
    switch(type){
        case "TOGGLE_DISABLED":
            return !state;
        default:
            return state;
    }
};
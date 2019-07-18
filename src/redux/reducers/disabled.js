export default (state = false, {type, value}) => {
    switch(type){
        case "toggleDisabled":
            return !state;
        default:
            return state;
    }
};
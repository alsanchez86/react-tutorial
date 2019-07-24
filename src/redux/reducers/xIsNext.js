export default (state = true, {type, value}) => {
    switch(type){
        case "MARK_SQUARE":
            return !state;
        default:
            return state;
    }
};
export default (state = true, {type, value}) => {
    switch(type){
        case "MARK_SQUARE":
            return !state;

        case "RESTART_BOARD":
            return true;

        default:
            return state;
    }
};
/*
 * Export reducer function
*/
export default (state = true, {type, value}) => {
    switch(type){
        // Mark a square and return the new state
        case "MARK_SQUARE":
            return !state;

        // Restart state
        case "RESTART_BOARD":
            return true;

        // Default
        default:
            return state;
    }
}
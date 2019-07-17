/**
 *
 *
 * @param {boolean} [state]
 * @param {object} {type, value}
 * @returns {boolean}
 */
export default (state = false, {type, value}) => {
    switch(type){
        case "setDisabled":
            return value;
        default:
            return state;
    }
};
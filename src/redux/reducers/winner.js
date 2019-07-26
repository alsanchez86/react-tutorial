export default (state = "", {type, value}) => {
    switch(type){
        case "MARK_SQUARE":
            return state;
        default:
            return state;
    }
};

/**
 * Calculate if there is a winner combination on current squares state
 *
 * @param {Array} squares
 * @returns {String | Null}
 */
// calculateWinner(squares = []) {
//     return [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ].filter(e => {
//         let map = e.map(a => squares[a]);
//         let notNull = (map.indexOf("") === -1);
//         let equals = map.every((e, i, a) => e === a[0]);
//         return (notNull && equals);
//     }).map(e => e.map(a => squares[a]).reduce(e => e))[0] || "";
// }
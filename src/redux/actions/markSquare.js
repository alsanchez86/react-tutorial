/**
 * Action to change state to another saved on history (board reducer)
 * @param {number} row
 * @param {number} column
 * @param {string} mark
 * @return {object}
 */
export const markSquare = (row = 0, column = 0, mark = "X") => ({
    type: "MARK_SQUARE",
    value: {
        row,
        column,
        mark
    }
});
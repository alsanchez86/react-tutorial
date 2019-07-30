/**
 * Action to change state to another saved on history (board reducer)
 * @param {number} index
 * @return {object}
 */
export const jump = (index = 0) => ({
    type: "JUMP",
    value: {
        index
    }
});
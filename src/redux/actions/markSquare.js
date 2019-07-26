export const markSquare = (row = 0, column = 0, mark = "X") => ({
    type: "MARK_SQUARE",
    value: {
        row,
        column,
        mark
    }
});
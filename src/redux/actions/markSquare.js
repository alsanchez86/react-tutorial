export const markSquare = (index = 0, mark = "X") => ({
    type: "MARK_SQUARE",
    value: {
        index,
        mark
    }
});
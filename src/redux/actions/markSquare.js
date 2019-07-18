export const markSquare = (i = 0, m = "X") => ({
    type: "MARK_SQUARE",
    value: {
        index: i,
        mark: m
    }
});
export const jump = (index = 0) => ({
    type: "JUMP",
    value: {
        index
    }
});
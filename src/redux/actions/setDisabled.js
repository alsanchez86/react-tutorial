export const type = "setDisabled";

const setDisabled = (value = "") => {
    return {
        type: type,
        value: value
    };
}

export default setDisabled;
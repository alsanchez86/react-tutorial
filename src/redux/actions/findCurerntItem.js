export const type = "findCurrentItem";

const findCurrentItem = (id = "") => {
    return {
        type: type,
        payload: ""
    };
}

export default findCurrentItem;
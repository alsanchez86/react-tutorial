/**
 * Get random string for use on ids
 * @export
 * @returns {string}
 */
export function getRandomId(): string {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}

/**
 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
 *
 * @export
 * @param {*} obj
 * @param {string} path
 * @param {*} defaultValue
 * @returns {*}
 */
// export function get(obj: any = {}, path: string = "", defaultValue: any = undefined): any {
//     const result = String.prototype.split
//         .call(path, /[,[\].]+?/)
//         .filter(Boolean)
//         .reduce((res, key) => (res !== null && res !== undefined) ? res[key] : res, obj);
//     return (result === undefined || result === obj) ? defaultValue : result;
// }
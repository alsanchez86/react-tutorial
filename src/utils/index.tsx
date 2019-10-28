/**
 * Get random string for use on ids
 * @export
 * @returns {string}
 */
export function getRandomId(): string {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}

// function getPath() {
//     [
//         obj => obj.a[0].b.c,
//         obj => obj.a[1]
//     ].map(path => path(object));
// }
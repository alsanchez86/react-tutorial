/**
 * Get random string for use on ids
 * @export
 * @returns {String}
 */
export function getRandomId(): String {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}
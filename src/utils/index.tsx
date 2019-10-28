/**
 * Get random string for use on ids
 * @export
 * @returns {string}
 */
export function getRandomId(): string {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}
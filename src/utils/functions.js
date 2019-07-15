/**
 * Get random string like an id
 *
 * @export
 * @returns {string}
 */
export function getRamdonId() {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}
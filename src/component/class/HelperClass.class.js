/**
 * HelperClass prototype
 *
 * @class HelperClass
 */
export default class HelperClass {
    /**
     * Returns a random string
     *
     * @returns {string}
     */
    getRamdonId() {
        return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }
}
// Class
import StateClass from "./StateClass.class";

/**
 * HistoryClass prototype
 *
 * @class HistoryClass
 */
export default class HistoryClass {
    /**
     * Creates an instance of HistoryClass.
     *
     * @param {string} [id=""]
     * @param {string} [text=""]
     * @param {StateClass} [state=new StateClass()]
     * @memberof HistoryClass
     */
    constructor(id = "", text = "", state = new StateClass()) {
        this.id = id;
        this.text = text;
        this.state = state;
    }
}
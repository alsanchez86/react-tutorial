// Class
import State from "./State.class";

/**
 * History prototype
 *
 * @class History
 */
export default class History {
    /**
     * Creates an instance of History
     *
     * @param {String} [id=""]
     * @param {String} [text=""]
     * @param {Object<State>} [state=new State()]
     * @memberof History
     */
    constructor(id = "", text = "", state = new State()) {
        this.id = id;
        this.text = text;
        this.state = state;
    }
}
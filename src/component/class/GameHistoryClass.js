// Class
import StateClass from "./StateClass";
import HistoryClass from "./HistoryClass";
import HelperClass from "./HelperClass";

/**
 * Class to manage the history of the game
 *
 * @export
 * @class GameHistoryClass
 */
export default class GameHistoryClass {
    /**
     * Creates an instance of GameHistoryClass.
     *
     * @memberof GameHistoryClass
     */
    constructor() {
        this.history = []; // Private array of Histories
        this.helper = new HelperClass();
    }

    /**
     * Add state to history
     *
     * @param {StateClass} state
     * @memberof GameHistoryClass
     */
    add(state = new StateClass()){
        const id = this.helper.getRamdonId();
        const text = (this.history.length > 0) ? ("Go to move #" + this.history.length) : "Go to game start";
        this.history.push(new HistoryClass(id, text, state));
    }

    /**
     * Get history private array
     *
     * @returns {object}
     * @memberof GameHistoryClass
     */
    get(){
        return this.history;
    }

    /**
     * Get the id of the last history added
     *
     * @returns {string}
     * @memberof GameHistoryClass
     */
    getLastHistoryId(){
        let sliced = this.history.slice(-1).pop();
        return sliced ? sliced.id : "";
    }

    /**
     * Reset history private array
     *
     * @memberof GameHistoryClass
     */
    clean(){
        this.history = [];
    }
}
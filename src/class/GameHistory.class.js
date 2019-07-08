// Class
import State from "./State.class";
import History from "./History.class";

/**
 * Class to manage the history of the game
 *
 * @class GameHistory
 */
export default class GameHistory {
    /**
     * Creates an instance of GameHistory
     *
     * @memberof GameHistory
     */
    constructor() {
        this.history = new Array(); // Private array of Histories
    }

    /**
     * Add state to history
     *
     * @param {Object<State>} state
     * @memberof GameHistory
     */
    add(state = new State()){
        const id = getRamdonId();
        const text = (this.history.length > 0) ? ("Go to move #" + this.history.length) : "Go to game start";
        this.history.push(new History(id, text, state));
    }

    /**
     * Get history private array
     *
     * @returns {object}
     * @memberof GameHistory
     */
    get(){
        return this.history;
    }

    /**
     * Get the id of the last history added
     *
     * @returns {string}
     * @memberof GameHistory
     */
    getLastHistoryId(){
        let sliced = this.history.slice(-1).pop();
        return sliced ? sliced.id : "";
    }

    /**
     * Reset history private array
     *
     * @memberof GameHistory
     */
    clean(){
        this.history = new Array();
    }
}

/**
 * Returns a random string
 *
 * @returns {string}
 */
function getRamdonId(){
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}
/**
 * State prototype
 * Unique state app (Flux) on the main component (Game)
 * Musnt have states on childrens components
 *
 * @class State
 */
export default class State {
    /**
     * Creates an instance of State.
     *
     * @param {string} [squares=Array(9).fill("")]
     * @param {boolean} [xIsNext=true]
     * @param {string} [winner=""]
     * @memberof State
     */
    constructor(squares = Array(9).fill(""), xIsNext = true, winner = "") {
        this.squares = squares;
        this.xIsNext = xIsNext;
        this.winner = winner;
    }
}
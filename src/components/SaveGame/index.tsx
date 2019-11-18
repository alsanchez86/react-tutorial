// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { saveGame } from "../../redux/board/actions";
// Import Jsx template
import Template from "./templates/";

// Types
type Props = {
    saveGame: Function,
    history: string[][][]
};
type State = {
    isOpen: boolean
};

/**
 *
 *
 * @export
 * @class SaveGame
 * @extends {Component}
 */
class SaveGame extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    /**
     *
     *
     * @memberof LoadGame
     */
    toggleModal(): void {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /**
     *
     *
     * @memberof LoadGame
     */
    confirm(): void {
        if (this.props.history.length > 0){
            // TODO:
            // 1.- Obtener el valor del input text y realizarle una validación básica con alguna expresión regular para comprobar que es un nombre válido. Crear una función en utils.js para tal fin.
            // 2.- Lanzar acción saveGame() en la cual guardaremos los datos (el histórico completo de la partida) en el localStorage del navegador con el nombre que ha indicado el usuario.
            // 3.- Se mostrará un gif de loading en el modal mientras se realiza el guardado. Poner un setTimeout para simular que el guardado se realiza en un servicio esterno.
            // 4.- Si todo ha ido bien, cerrar el modal de SaveGame y mostrar otro modal (ya vemos como lo hago, si meto este modal en este componente o hago el contenido dinámico con this.props.children o algo así) con el mensaje "La partida se ha guardado correctamente".


            // this.props.saveGame()
            //     .then(() => this.toggleModal())
            //     .catch((error: Error) => {
            //         this.setState({
            //             text: error.message,
            //             confirmButtonText: CONFIRM_BUTTON_TRY_TEXT
            //         })
            //     });
        }
    }

    /**
     *
     *
     * @returns
     * @memberof SaveGame
     */
    render() {
        return (
            <Template
                isOpen={this.state.isOpen}
                toggle={() => this.toggleModal()}
                confirm={() => this.confirm()}
                cancel={() => this.toggleModal()}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any) => ({
        history: state.boardReducer.history
    }),
    // mapDispatchToProps
    (dispatch: Function) => ({
        saveGame: () => dispatch(saveGame())
    })
)(SaveGame);
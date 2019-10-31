// Import React library
import React from "react";
// Import reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

type Props = {
    toggle: Function,
    isOpen: boolean,
    confirm: Function,
    cancel: Function
};

export default (p: Props) =>

<div>
    <Button color="danger" onClick={() => p.toggle()}>
        Load saved game
    </Button>

    <Modal isOpen={p.isOpen} toggle={() => p.toggle()}>
        <ModalBody>
            Current game will be lost. ¿Are you sure to load saved game?
        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={() => p.confirm()}>
                Confirm
            </Button>

            <Button color="secondary" onClick={() => p.cancel()}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
</div>
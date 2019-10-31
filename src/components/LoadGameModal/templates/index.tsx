// Import React library
import React from "react";
// Import reactstrap components
import { Button, ButtonGroup, Modal, ModalBody, ModalFooter } from "reactstrap";

type Props = {
    toggle: Function,
    isOpen: boolean,
    confirm: Function,
    cancel: Function,
    text: string,
    confirmButtonText: string
};

export default (p: Props) =>

<div>
    <Button color="danger" onClick={() => p.toggle()}>
        Load saved game
    </Button>

    <Modal isOpen={p.isOpen} toggle={() => p.toggle()} size={"sm"}>
        <ModalBody>
            <p className="text-center">
                {p.text}
            </p>
        </ModalBody>

        <ModalFooter>
            <ButtonGroup className="mx-auto">
                <Button color="primary" onClick={()=> p.confirm()}>
                    {p.confirmButtonText}
                </Button>

                <Button color="secondary" onClick={()=> p.cancel()}>
                    Cancel
                </Button>
            </ButtonGroup>
        </ModalFooter>
    </Modal>
</div>
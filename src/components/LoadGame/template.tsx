// Import React library
import React from "react";
// Import reactstrap components
import { Button, ButtonGroup, Modal, ModalBody, ModalFooter } from "reactstrap";

type Props = {
    disabled: boolean,
    isOpen: boolean,
    text: any,
    confirmButtonText: string,
    load: Function,
    toggle: Function,
    confirm: Function,
    onClose: Function,
    cancel: Function
};

export default (p: Props) =>

<Button color="info" onClick={()=> p.load()} disabled={p.disabled}>
    {p.disabled ? "Loading..." : "Load example game"}

    <Modal
        size={"sm"}
        isOpen={p.isOpen}
        toggle={()=> p.toggle()}
        onClosed={() => p.onClose()}>
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
</Button>
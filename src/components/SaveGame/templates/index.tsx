// Import React library
import React from "react";
// Import reactstrap components
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";

type Props = {
    isOpen: boolean,
    toggle: Function,
    confirm: Function,
    cancel: Function,
    value: any,
    handleChange: Function
};

export default (p: Props) =>

<Button color="success" size="sm" onClick={()=> p.toggle()}>
    Save

    <Modal size={"md"} isOpen={p.isOpen} toggle={()=> p.toggle()}>
        <ModalHeader toggle={()=> p.toggle()} charCode="X">
            <p className="text-center">
                Save current game?
            </p>
        </ModalHeader>

        <ModalBody>
            <Input type="text" name="name" placeholder="Name" value={p.value} onChange={(event) => p.handleChange(event)}/>
        </ModalBody>

        <ModalFooter>
            <ButtonGroup className="mx-auto">
                <Button color="primary" onClick={() => p.confirm()}>
                    Confirm
                </Button>

                <Button color="secondary" onClick={() => p.cancel()}>
                    Cancel
                </Button>
            </ButtonGroup>
        </ModalFooter>
    </Modal>
</Button>
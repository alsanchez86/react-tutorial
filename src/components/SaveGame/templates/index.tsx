// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";

type Props = {
    saveGameClick: Function
};

export default (p: Props) =>

<Button color="success" size="sm" onClick={()=> p.saveGameClick()}>
    Save

    {/* <Modal isOpen={p.isOpen} toggle={()=> p.toggle()} size={"sm"} onClosed={() => p.onClose()}>
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
    </Modal> */}
</Button>
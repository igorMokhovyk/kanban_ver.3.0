import React, {useState} from "react";
import {Button, Modal, Input, ModalHeader, Label, ModalBody, ModalFooter} from "reactstrap";


function AddNewColumnButton(props) {

    const [buttonMode, setButtonMode] = useState(false);
    const [inputColumnState, setInputCulumnState] = useState('')

    const newColumnHandler = () => {
        props.addNewColumnButton(inputColumnState)
        setInputCulumnState('')
        setButtonMode(!buttonMode)
    }


    return (
        <div>


            <Button onClick={() => setButtonMode(!buttonMode)}>Add New Column</Button>

            {buttonMode &&
            <>
                <Modal isOpen={buttonMode}>
                    <ModalHeader>
                        <Label>Add New Column</Label>
                    </ModalHeader>
                    <ModalBody>
                        <Input type='text' placeholder='Write here'
                               onChange={(e) => setInputCulumnState(e.target.value)}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={newColumnHandler}>Add</Button>
                        <Button onClick={() => setButtonMode(!buttonMode)}>Close</Button>
                    </ModalFooter>
                </Modal>
            </>
            }


        </div>
    )
}

export default AddNewColumnButton;
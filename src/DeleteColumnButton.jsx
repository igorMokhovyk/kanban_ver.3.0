import React, {useState} from "react";
import {Button, Modal, Input, ModalHeader, Label, ModalBody, ModalFooter} from "reactstrap";


function DeleteColumnButton(props) {
    const [deleteMode, setDeleteMode] = useState(false);
    const [columnName, setColumnName] = useState('')


    return (


        <div>
            <Button onClick={() => setDeleteMode(!deleteMode)}>Delete Column</Button>

            {
                deleteMode &&
                <Modal isOpen={deleteMode}>
                    <ModalHeader>
                        <Label>Name:</Label>
                    </ModalHeader>
                    <ModalBody>

                        <Label>Status:</Label>
                        <Input type="select" value={columnName}
                               onChange={(event) => setColumnName(event.target.value)}>
                            {props.columns.map(el => <option>{el.status}</option>)}
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button>Delete</Button>
                        <Button onClick={() => setDeleteMode(!deleteMode)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            }

        </div>


    )
}

export default DeleteColumnButton;
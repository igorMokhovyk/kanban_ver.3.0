import React from "react";
import {Button, Modal, ModalHeader, ModalBody, ButtonToggle} from 'reactstrap';

function Columns (props) {
    return (
        <div className='col-4 col-sm Column rounded-lg shadow-lg' style={{border: '1px solid'}}>
            <h3 className='Column-text'>
                {props.column.title}
            </h3>


        </div>
    )
}


export default Columns;
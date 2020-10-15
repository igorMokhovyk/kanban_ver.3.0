import React from "react";
import {Button, Modal, ModalHeader, ModalBody, ButtonToggle} from 'reactstrap';
import Tasks from "./Tasks";

function Columns (props) {
    return (
        <div className='col-4 col-sm Column rounded-lg shadow-lg' style={{border: '1px solid'}}>
            <h3 className='Column-text'>
                {props.column.title}
            </h3>

            {props.task.filter(el => el.status === props.column.status)
                .sort((a, b) => a.priority - b.priority)
                .map(el => <Tasks el={el}/>)}
        </div>
    )
}


export default Columns;
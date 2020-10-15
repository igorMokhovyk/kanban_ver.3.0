import React from "react";

function Tasks (props) {
    return (
        <div className='card text-white bg-warning mb-3 shadow-sm'>
            <div className='card-body'>
                <h6>{props.el.name}</h6>
                <h7>{props.el.priority}</h7>
            </div>
        </div>
    )
}

export default Tasks;
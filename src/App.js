import React, {useEffect, useState} from 'react';
import './App.css';
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import AddNewColumnButton from "./AddNewColumnButton";
import DeleteColumnButton from "./DeleteColumnButton";


function App() {

    useEffect(() => {
        getList()
        getColumnList()
    }, []);

    const [columns, setColumns] = useState([]);
    const [task, setTask] = useState([]);


//Getting columns from local server

    const getColumnList = () => {
        axios.get('http://localhost:3000/columns')
            .then(res => setColumns(res.data))
            .catch(error => console.log(error))
    }


    //Getting task from local server

    const getList = () => {
        axios.get('http://localhost:3000/todos')
            .then(res => setTask(res.data))
            .catch(err => console.log(err))
    }


    const addNewColumnButtonFunc = async (name) => {
        let b = name.toLowerCase()
        await axios.post('http://localhost:3000/columns', {
            title: name, status: b
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        await axios.get('http://localhost:3000/columns')
            .then(res => setColumns(res.data))
            .catch(err => console.log(err))
    }


    const deleteColumnButton = async (id) => {
       await axios.delete(`http://localhost:3000/columns${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        await axios.get('http://localhost:3000/columns')
            .then(res => setColumns(res.data))
            .catch(err => console.log(err))
    }



    return (
        <div className="App">
            <div className="container">
                <>
                    <AddNewColumnButton addNewColumnButton={addNewColumnButtonFunc}/>
                    <DeleteColumnButton deleteColumnButton={deleteColumnButton}
                                        columns={columns}/>
                </>
                <div className="row">

                    {columns.map(el => <Columns column={el}
                                                key={el.id}
                                                task={task}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;

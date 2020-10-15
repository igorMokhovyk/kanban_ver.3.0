import React, {useEffect, useState} from 'react';
import './App.css';
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import AddNewColumnButton from "./AddNewColumnButton";


function App() {

    const [columns, setColumns] = useState([]);

    const getList = () => {
        axios.get('http://localhost:3000/columns')
            .then(res => setColumns(res.data))
            .catch(error => console.log(error))
    }


    const addNewColumnButtonFunc = () => {

    }

    useEffect(() => {
        getList()
    }, []);


    return (
        <div className="App">
            <div className="container">
                <AddNewColumnButton addNewColumnButton={addNewColumnButtonFunc}/>
            {columns.map(el => <Columns column={el}
                                        key={el.id}
                />
            )}

            </div>
        </div>
    );
}

export default App;

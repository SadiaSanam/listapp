import React, { useContext, useState } from 'react';
import {GlobalContext} from './GlobalStore'
import { v4 as uuidv4 } from 'uuid'; 

const TaskInput = () => {

    const [ task, setTask] = useState(''); 

    const { trans, createTask } = useContext(GlobalContext);

    const newTask = ( e ) => {

        e.preventDefault(); 

        const id = uuidv4(); 
        const done = false; 

        const newTran = { id, task, done }

        createTask( newTran );

        setTask('');

        e.target.reset(); 

    }

    return (
        <div>
            <form onSubmit= { newTask }  >
                <label>Task</label>
                <input type='text' required onChange={ (e) => setTask( e.target.value)}  />
                <button className='task-btn' type='submit'  >Add</button>
            </form>
        </div>
    )
}

export default TaskInput
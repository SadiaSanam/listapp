import React from 'react';

import TaskInput from './TaskInput';
import ListTasks from './ListTasks'

const ShowTasks = () => {
    return (
        <>
            
                <div className='task-layout'> 
                    <div className='task-input'>
                        <TaskInput />
                    </div>
                    <div className='task-list'> 
                        <ListTasks /> 
                    </div>
                </div>
            
        </>
    )
}

export default ShowTasks
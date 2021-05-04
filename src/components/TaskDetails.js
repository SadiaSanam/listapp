import React, {useContext} from 'react';

import {GlobalContext} from './GlobalStore'; 

import { RiDeleteBin6Line } from 'react-icons/ri'; 
import { GoThumbsup } from 'react-icons/go';

const TaskDetails = ( { tran }  ) => {

    const { completed, deleteTask } = useContext(GlobalContext)



    return (
    
            <li  className = { tran.done ? "done" : "notdone" } > 
                
               {tran.task}   

                <button  className='delete-btn'
                    onClick= { () => deleteTask( tran.id )}  > <RiDeleteBin6Line /> </button> 
            
                <button  className='done-btn'
                    onClick= { () => completed( tran.id ) }  > <GoThumbsup />     </button> 
            </li>

        
    )
}

export default TaskDetails

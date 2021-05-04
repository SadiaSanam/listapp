import React, { createContext, useReducer } from 'react';

import Reducer from './Reducer';

import { reactLocalStorage } from 'reactjs-localstorage'

const localStorage = reactLocalStorage.getObject( 'REACTJSTODO')

console.log( 'local ', localStorage );

const initialState = {

    trans: []
}

 if ( Object.entries( localStorage ).length > 0 ) { 

    initialState.trans = localStorage

 } 


console.log( 'check trans ', initialState.trans );

export const GlobalContext = createContext( initialState );

export const GlobalStore = (  {children} ) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    function createTask ( tran ) {
       
        dispatch( {
            type: 'ADD',
            payload: tran 
        })

    }


    function completed (index ) {

        let temp = [...state.trans];
        let i = temp.findIndex( tran => tran.id === index);
        let status = temp[i].done;
        temp[i].done = status ? false : true; 
        console.log( 'check ', temp )

        dispatch( {

            type: 'DONE',
            payload:  temp

        })

        // reactLocalStorage.setObject('REACTJSTODO', state );
    }

    function deleteTask ( id ) { 

        dispatch( {
            type: 'DELETE',
            payload: id 
        } )

        // reactLocalStorage.setObject('REACTJSTODO', state );
    }


    return (
        <GlobalContext.Provider value={ { trans: state.trans , createTask, completed, deleteTask }   } >
           
            { children }

        </GlobalContext.Provider>
    
    )
}


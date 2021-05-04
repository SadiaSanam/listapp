export default (state, action) => {

    
  switch ( action.type ) {
      
      case 'ADD':
          return {
              ...state, trans:[  ...state.trans, action.payload ]
          }

      case 'DONE':
          return {

              ...state, trans: [ ...action.payload ]
          }

      case 'DELETE': 

          return {
              ...state, trans: state.trans.filter( tran => tran.id !== action.payload )
          }

      default:
          return state
  }
}
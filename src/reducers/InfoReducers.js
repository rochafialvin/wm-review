let init = {
   name  : '',
   email : '',
   hobby : ''
}

// Reducer
export default ( state = init, action ) => {
   // action : {type, payload}

   switch(action.type){
      case 'KIRIM_DATA' :
         // Mproses payload
         // payload : {name, email, hobby}
         return {...state, name : action.payload.name, email: action.payload.email, hobby: action.payload.hobby}

      case 'RESET_DATA' :
         // Memporses payload 

      default :
         return state
   }
}

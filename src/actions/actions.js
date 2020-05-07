
// Action Creator
export let kirimAction = (name, email, hobby) => {
   // Action
   return {
      type : 'KIRIM_DATA',
      payload : {name, email, hobby}
   }
}


// export let resetAction = () => {
//    return {
//       type: 'RESET_DATA',
//       payload: {name : 'Empty', email: 'Empty', hobby: 'Empty'}
//    }
// }
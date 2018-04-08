import * as types from './../constants/ActionTypes';
const data=require('./city.list.json');


var initialState =data;


var  myreducer =(state =initialState ,action)=>{

    switch(action.type){
        case types.LIST_ALL:
        return state;
        case types.ADD_TASK:
        
        console.log(action);
        return state

        default : return state ;
    }

}

export default myreducer
import { combineReducers } from 'redux';
import  tasks from './tasks';
import pagination from './paginations';


const myReducer = combineReducers ({
 tasks,
 pagination
});

export default myReducer;
import * as types from './../constants/ActionTypes';


export  const listAll=()=>{
        return  {
            type : types.LIST_ALL
        }
}

export const addTask = (task)=>{
        return {
            type :types.ADD_TASK,
            task
        }
}

export const setPaginationNext =()=>{
    return  {
        type : types.SET_PAGINATION_NEXT,
        
    }
}

export const setPaginationPrevious =()=>{
    return  {
    
        type : types.SET_PAGINATION_PREVIOUS,
       
    }
}


export const chooseItemPagination =(currentPage)=>{
    return  {
        type : types.CHOOSE_ITEM_PAGINATION,
        currentPage

    }
}


export const chooseItemCity =(itemCity)=>{
    return  {
        type : types.CHOOSE_ITEM_CITY,
        itemCity
    }
}

export const filterItemCity =(value)=>{
    return {
        type :types.FILTER_ITEM_CITY,
        value
    }
}

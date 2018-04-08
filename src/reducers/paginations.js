import * as types from './../constants/ActionTypes';


const data=require('./city.list.json');

var initialState ={
    max:10,
    min:1,
    currentPage:1,
    currentItems:data.slice(1,52),
    selectedCity:0,
    isSearch:false,
    items:[],
    itemWeather:{}
};


var  myreducer =(state =initialState ,action)=>{
    switch(action.type){
        case types.SET_PAGINATION_NEXT:
              let currentPage=state.currentPage;
              let max= state.isSearch?currentPage+1> state.max&&currentPage+1<state.items.length/52?currentPage+1:state.max:currentPage+1> state.max&&currentPage+1<data.length/52?currentPage+1:state.max;
                 return {
                    currentPage :state.isSearch?currentPage+1> state.items.length/52 ? currentPage : currentPage+1: currentPage+1> data.length/52 ? currentPage : currentPage+1,
                    currentItems : state.isSearch?state.items.slice((state.currentPage-1)*51,state.currentPage*51): data.slice((state.currentPage-1)*51,state.currentPage*51),
                    max:max,
                    min:max-state.min>9  ?  state.min+1:state.min,
                    isSearch:state.isSearch,
                    items:state.items
                 }
        case types.SET_PAGINATION_PREVIOUS:
            let current=state.currentPage-1<1?state.currentPage:state.currentPage-1;
             let min=current< state.min ?current-1:state.min;
            
                return {
                    currentPage:current,
                    currentItems: state.isSearch?state.items.slice(( state.currentPage-1)*51, state.currentPage*51): data.slice(( state.currentPage-1)*51, state.currentPage*51),
                    max:  state.max-min>9  ?   state.max-1: state.max,
                    min:min,
                    isSearch:state.isSearch,
                    items:state.items
                }
        case types.CHOOSE_ITEM_CITY:
             state.selectedCity=action.itemCity.key;
             state.itemWeather=action.itemCity.city;
             
                return state

        case types.CHOOSE_ITEM_PAGINATION:
       
                return {
                    max:state.max,
                    min:state.min,
                    currentPage:action.currentPage,
                    currentItems: state.isSearch? state.items.slice((action.currentPage-1)*51,action.currentPage*51): data.slice((action.currentPage-1)*51,action.currentPage*51)
                
                }
        case types.FILTER_ITEM_CITY:
        
        let items=data.filter(item=>{
            return item.name.toLowerCase().indexOf(action.value.toLowerCase())>-1});
                return {
                    max:items.length/51>10?10:items.length/51,
                    min:1,  
                    currentPage:1,
                    currentItems: items.slice(1,52),
                    isSearch:true,
                    items:items
                }
        default : return state ;
    }

}


export default myreducer
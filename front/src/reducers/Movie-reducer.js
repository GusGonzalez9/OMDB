
 const initialState = {
    movie:{}, // todas las pelis    
    datos:{},// una sola peli
    t:{},
    favorites:[]
}

export default (state = initialState , action)=>{
    switch(action.type){
        case 'SET_MOVIE':
        return Object.assign({},state,{movie : action.movie})
        case "SET_LOGGIN":
            return Object.assign({},state,{datos:action.movie})
        case "SET_LOG":
            return Object.assign({},state,{t:action.t})
        case "SET_GET_FAVORITES":
            return Object.assign({},state,{favorites:action.favorites})
        default: return state 
    }
} 
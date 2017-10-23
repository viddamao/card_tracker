const filters = (state = ['All','All',''], action) => {
    if (action.type=== 'SET_FILTERS'){
        switch (action.filter_type){
            case ('CATEGORY'):
            return;        
            case ('SUBSET'):
            return;        
            case ('KEYWORD'):
            return;
            default:
            break;
        }
    }
            
    return state
    
}

export default filters
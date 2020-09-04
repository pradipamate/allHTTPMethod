
const initialstage=[];

const Signreducer=(state=initialstage,action)=>{
    switch(action.type){
    case "FETCH_BEEGIN":
     return{...state,
        fetching:true}
    case "add":
        return{
            ...state,all:action.payload,fetching:false
        }
    
    default :
    return state;
    }
}

export default Signreducer;
const Visablity = (state={BodyVisablity:"show",DetailesVisablity:"hide"},action)=>{
    switch(action.type){
        case "SHOW_BODY":
            return {BodyVisablity:"show",DetailesVisablity:"hide"};
        case "SHOW_DETAILES":
            return {BodyVisablity:"hide",DetailesVisablity:"show"};
        default:
            return state;
    }
}
export default Visablity
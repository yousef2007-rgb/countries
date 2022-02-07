const Data = (state={
    name:"",flag:"",nativeName:"",population:"",region:"",subRegion:"",capital:"",borderCountry:[],topLevelDomain:"",currencies:[],languages:[]
},action)=>{
    switch(action.type){
        case "SEND_DATA":
            return action.data;
        default:
            return state;
    }
}
export default Data
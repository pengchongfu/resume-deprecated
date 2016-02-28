const initstate={
  leftnav:false,
  page:1
};

function Reducer(state=initstate,action){
  switch(action.type){
    case "openleftnav":
      return Object.assign({},state,{leftnav:true});
    case "closeleftnav":
      return Object.assign({},state,{leftnav:false});
    case "homepage":
      return Object.assign({},state,{page:1});
    case "about":
      return Object.assign({},state,{page:2});
    case "more":
      return Object.assign({},state,{page:3});
    default:
      return state;
  }
  
};
export default Reducer;
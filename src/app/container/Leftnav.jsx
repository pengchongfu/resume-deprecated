import Leftnav from '../component/Leftnav';
import {connect} from 'react-redux';

function mapState(state){
  return {
    leftnav:state.leftnav,
    page:state.page
  }
}

function mapDispatch(dispatch){
  return {
    openleftnav:()=>dispatch({type:"openleftnav"}),
    closeleftnav:()=>dispatch({type:"closeleftnav"}),
    homepage:()=>dispatch({type:"homepage"}),
    about:()=>dispatch({type:"about"}),
    more:()=>dispatch({type:"more"})
  }
}

export default connect(
  mapState,
  mapDispatch
)(Leftnav);
import Bar from '../component/Bar';
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
    page1:()=>dispatch({type:"page1"}),
    about:()=>dispatch({type:"about"}),
    page3:()=>dispatch({type:"page3"})
  }
}

export default connect(
  mapState,
  mapDispatch
)(Bar);
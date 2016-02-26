import Page from '../component/Page';
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
    page2:()=>dispatch({type:"page2"}),
    page3:()=>dispatch({type:"page3"})
  }
}

export default connect(
  mapState,
  mapDispatch
)(Page);
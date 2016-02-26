import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

class Leftnav extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <LeftNav
        docked={false}
        open={this.props.leftnav}
        onRequestChange={this.props.closeleftnav}
      >
        <MenuItem onTouchTap={()=>{this.props.closeleftnav();this.props.page1();}}>page1</MenuItem>
        <MenuItem onTouchTap={()=>{this.props.closeleftnav();this.props.page2();}}>page2</MenuItem>
        <MenuItem onTouchTap={()=>{this.props.closeleftnav();this.props.page3();}}>page3</MenuItem>
      </LeftNav>      
    );
  }
}
export default Leftnav;
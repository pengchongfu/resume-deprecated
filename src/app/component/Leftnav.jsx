import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

class Leftnav extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <LeftNav
        disableSwipeToOpen={true}
        docked={false}
        open={this.props.leftnav}
        onRequestChange={this.props.closeleftnav}
      >
        <AppBar
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onTouchTap={this.props.closeleftnav}
        />
        <MenuItem onTouchTap={()=>{this.props.closeleftnav();this.props.page1();}}>page1</MenuItem>
        <MenuItem onTouchTap={()=>{this.props.closeleftnav();this.props.page2();}}>page2</MenuItem>
        <MenuItem onTouchTap={()=>{this.props.closeleftnav();this.props.page3();}}>page3</MenuItem>
      </LeftNav>      
    );
  }
}
export default Leftnav;
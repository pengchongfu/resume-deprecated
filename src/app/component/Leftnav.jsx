import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import Info from 'material-ui/lib/svg-icons/action/info';
import More from 'material-ui/lib/svg-icons/notification/more';

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
        <MenuItem leftIcon={<ActionHome />} onTouchTap={()=>{this.props.closeleftnav();this.props.homepage();}}>主页</MenuItem>
        <MenuItem leftIcon={<Info />} onTouchTap={()=>{this.props.closeleftnav();this.props.about();}}>关于</MenuItem>
        <MenuItem leftIcon={<More />} onTouchTap={()=>{this.props.closeleftnav();this.props.more();}}>更多</MenuItem>
      </LeftNav>      
    );
  }
}
export default Leftnav;
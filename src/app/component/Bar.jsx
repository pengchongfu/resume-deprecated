import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Info from 'material-ui/lib/svg-icons/action/info';
import Cloud from './cloud';

class Bar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <AppBar
      zDepth={0}
      style={{position:'fixed'}}
      title="彭崇甫的简历"
      onLeftIconButtonTouchTap={this.props.openleftnav}
      iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="page1" onTouchTap={()=>{this.props.closeleftnav();this.props.page1();}} leftIcon={<Cloud />} />
          <MenuItem primaryText="page2" onTouchTap={()=>{this.props.closeleftnav();this.props.page2();}} />
          <MenuItem primaryText="page3" onTouchTap={()=>{this.props.closeleftnav();this.props.page3();}} leftIcon={<Info />} />
        </IconMenu>
      }
      
    />);
  }
}
export default Bar;
import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

class Bar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <AppBar
      style={{position:'fixed'}}
      title="彭崇甫的简历"
      iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="page1" />
          <MenuItem primaryText="page2" />
          <MenuItem primaryText="page3" />
        </IconMenu>
      }
      
    />);
  }
}
export default Bar;
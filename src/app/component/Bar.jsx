import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Info from 'material-ui/lib/svg-icons/action/info';
import GithubLogo from './GithubLogo';

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
          <MenuItem primaryText="GITHUB" leftIcon={<GithubLogo />} href={"https://github.com/steinsphang/resume"} target="_blank" />
          <MenuItem primaryText="ABOUT" onTouchTap={()=>{this.props.closeleftnav();this.props.about();}} leftIcon={<Info />} />
        </IconMenu>
      }
      
    />);
  }
}
export default Bar;
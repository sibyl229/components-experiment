import React, { Component } from 'react';
import { List, ListItem, Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import menuData from './menuData';
//import MenuItem from './MenuItem';
const MyRawTheme = require('../app/theme.js');


export default class MenuList extends Component {
  static propTypes = {
    menuID: React.PropTypes.string.isRequired,
    level: React.PropTypes.number.isRequired,
    onSubmenuRequest: React.PropTypes.func.isRequired,
    onSubmenuCancel: React.PropTypes.func.isRequired,
  }

  mouseEnterHandler = (childMenuID) => {
    return () => {
      this.props.onSubmenuRequest(childMenuID, this.props.level + 1);
    }
  }

  mouseLeaveHandler = (childMenuID) => {
    return () => {
    //  this.props.onSubmenuCancel(childMenuID, this.props.level + 1);
    }
  }

  render() {
    const style = {
      position: "absolute",
      left: this.props.level * 200,
      borderStyle: "solid",
      borderWidth: "1px 1px 1px 0",
      borderColor: MyRawTheme.palette.borderColor,
      width: "200px"
    };

    return (
      <div>
        <List style={{...style,...this.props.style}} className={ this.props.menuID }>
        {
          menuData[this.props.menuID].map((menuEntry) => {
            return (<ListItem
                primaryText={menuEntry.label}
                rightIconButton={''}
                onMouseEnter={this.mouseEnterHandler(menuEntry.child)}
                onMouseLeave={this.mouseLeaveHandler(menuEntry.child)}/>
              );
          })
        }
        </List>

      </div>);
  }

}
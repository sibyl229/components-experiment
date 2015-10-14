import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import menuData from './menuData';
import MenuItem from './MenuItem';


export default class MenuList extends Component {
  static propTypes = {
    menuID: React.PropTypes.string.isRequired,
    onSubmenuRequest: React.PropTypes.func.isRequired,
    onSubmenuCancel: React.PropTypes.func.isRequired,
  }

  render() {
    const style = {};

    return (
      <div style={{...style,...this.props.style}} id={ this.props["project/id"] }>
        <ul className={ this.props.menuID }>
        {
          menuData[this.props.menuID].map((menuEntry) => {
            return (<MenuItem {...this.props}
                      label={menuEntry.label}
                      childMenu={menuEntry.child}
                      level={0}/>);
          })
        }
        </ul>
      </div>);
  }

}
import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';



export default class MenuItem extends Component {
  static propTypes = {
    label: React.PropTypes.string.isRequired,
    level: React.PropTypes.number.isRequired,
    onSubmenuRequest: React.PropTypes.func.isRequired,
    onSubmenuCancel: React.PropTypes.func.isRequired,
    childMenu: React.PropTypes.string
  }

  _handleMouseOver = () => {
    console.log('hover' + this.props.label);
    if (this.props.childMenu) {
      this.props.onSubmenuRequest(this.props.childMenu, this.props.level + 1);
    }
  }

  _handleMouseOut = () => {
    console.log('left' + this.props.label);
    if (this.props.childMenu) {
      this.props.onSubmenuCancel(this.props.childMenu, this.props.level + 1);
    }
  }


  render() {
    const style = {};

    return (
      <div style={{...style,...this.props.style}}>
        <li onMouseOver={this._handleMouseOver} onMouseOut={this._handleMouseOut}>{ this.props.label }</li>
      </div>);
  }

}
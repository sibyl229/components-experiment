import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import { getImageUrl } from '../utils';
import MenuList from './MenuList';


export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: null,
      1: null,
      2: null
    };
  }

  showMenuList = (menuID, level) => {
    let setting = {};
    setting[level] = menuID;
    console.log('Request called with:');
    console.log(setting);
    this.setState(setting);
  }

  hideMenuList = (menuID, level) => {
    let setting = {};
    setting[level] = null;
    console.log('Cancel called with:')
    console.log(setting);
    this.setState(setting);
  }

  render() {

    let imageUrl = getImageUrl(this.props.imageUrl);
    const style = {
      margin: "20px",
    };

    return (
      <div style={{...style,...this.props.style}} >
        <div>
          <MenuList menuID="primary"
                    onSubmenuRequest={this.showMenuList}
                    onSubmenuCancel={this.hideMenuList}/>
        </div>
        <div>
        {
          console.log(this.state) || this.state[1] ? <MenuList menuID={this.state[1]}
                                        onSubmenuRequest={this.showMenuList}
                                        onSubmenuCancel={this.hideMenuList}/> : null
        }
        </div>
      </div>);
  }

}

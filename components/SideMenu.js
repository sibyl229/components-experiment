import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import { getImageUrl } from '../utils';
import MenuList from './MenuList';
import styles from './SideMenu.css';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      visibleSubMenus: ['primary']
    };
  }

  showMenuList = (menuID, level) => {
    // slice creates a new array, keeping only visible sub-menus preceeding the level
    if (menuID) {
      let visibleSubMenus = this.state.visibleSubMenus.slice(0, level);
      visibleSubMenus[level] = menuID;
      console.log('Request called with:');
      console.log(visibleSubMenus);
      this.setState({visibleSubMenus});
    }
  }

  hideMenuList = (menuID, level) => {
    // let setting = {};
    // setting[level] = null;
    // console.log('Cancel called with:')
    // console.log(setting);
    // this.setState(setting);
  }

  render() {

    let imageUrl = getImageUrl(this.props.imageUrl);
    const style = {
      margin: "20px",
    };

    return (
      <div style={{...style,...this.props.style}} >
        {/*<ReactCSSTransitionGroup transitionName="example">*/
        /*</ReactCSSTransitionGroup>*/}
        <ReactCSSTransitionGroup transitionName="example">
        {
          this.state.visibleSubMenus.map((menuID, index) => {
            return (
              <MenuList menuID={menuID}
                        key={index}
                        level={index}
                        onSubmenuRequest={this.showMenuList}
                        onSubmenuCancel={this.hideMenuList}/>);
          })
        }
        </ReactCSSTransitionGroup>
      </div>);
  }

}

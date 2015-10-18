import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton } from 'material-ui';
import { getImageUrl } from '../utils';
import MenuList from './MenuList';
import styles from './SideMenu.css';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
      <div className="Grid" style={{...style,...this.props.style}} >

        <div key="a" className="GridCell">
          <MenuList menuID="primary"
                    key="primary"
                    level={0}
                    onSubmenuRequest={this.showMenuList}
                    onSubmenuCancel={this.hideMenuList}/>
        </div>
        <div key="b" className="GridCell">
        <ReactCSSTransitionGroup transitionName="example">
        {
          console.log(this.state) || this.state[1]
            ? <MenuList key="m" menuID={this.state[1]}
                        key={this.state[1]}
                        level={1}
                        onSubmenuRequest={this.showMenuList}
                        onSubmenuCancel={this.hideMenuList}/>
            : null
        }
        </ReactCSSTransitionGroup>
        </div>
      </div>);
  }

}

import React from 'react';
import "babel/polyfill";
import './Grid/grid.css';
import styles from './App.css';
import { AppBar, Styles } from 'material-ui';
import { Link } from 'react-router';
import SideMenu from '../components/SideMenu';
//import './data.js';

const MyRawTheme = require('./theme.js');
const ThemeManager = Styles.ThemeManager;
const ThemeDecorator = Styles.ThemeDecorator;


//@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
// The ES7 style decorator breaks this.props.children needed for routing
const App = React.createClass({

  //the key passed through context must be called "muiTheme"
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  },


  render() {

    return (
      <div className={styles.app}>
        <SideMenu/>
      </div>
    )
  }
});

export default App;

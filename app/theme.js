import { Utils, Styles } from 'material-ui';

let Colors = Styles.Colors;
let ColorManipulator = Utils.ColorManipulator;
let Spacing = Styles.Spacing;

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.indigoA400,
    accent2Color: Colors.indigoA200,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.grey50,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  },
};

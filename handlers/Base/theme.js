var Colors = require('material-ui/lib/styles/colors');
var ColorManipulator = require('material-ui/lib/utils/color-manipulator');
var Spacing = require('material-ui/lib/styles/spacing');

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.grey400,
    primary2Color: Colors.grey700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.lightGreen500,
    accent2Color: Colors.blue500,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.blue500,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  },
};
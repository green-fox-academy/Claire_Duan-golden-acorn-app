import { connect } from 'react-redux';
import { buy, eat } from '../../actions';
import ArrowHandler from '../../components/ArrowHandler';

// const mapStateToProps = (state) => {
//   return {
//     name: 'Buy one',
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    callback: function callback(e) {
      if (e.keyCode === 38) {
        dispatch(buy(1));
      } else if (e.keyCode === 40) {
        dispatch(eat(1));
      }
    },
  };
};

const PressKey = connect(
  mapDispatchToProps,
)(ArrowHandler);

export default PressKey;

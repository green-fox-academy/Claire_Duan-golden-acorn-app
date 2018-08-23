import { connect } from 'react-redux';
import { buy, eat } from '../../actions';
import ArrowHandler from '../../components/ArrowHandler';

const mapDispatchToProps = dispatch => ({
  callback: function callback(e) {
    if (e.keyCode === 38) {
      dispatch(buy(1));
    } else if (e.keyCode === 40) {
      dispatch(eat(1));
    }
  },
});

const PressKey = connect(
  null,
  mapDispatchToProps,
)(ArrowHandler);

export default PressKey;

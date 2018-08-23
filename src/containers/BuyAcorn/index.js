import { connect } from 'react-redux';
import { buy } from '../../actions';
import Button from '../../components/Button';

const mapStateToProps = () => {
  return {
    name: 'Buy One',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: function callback() {
      dispatch(buy(1));
    },
    keyHandler: function keyHandler(e) {
      if (e.keyCode === 38) {
        dispatch(buy(1));
      }
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;

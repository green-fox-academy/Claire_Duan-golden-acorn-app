import { connect } from 'react-redux';
import { buy } from '../../actions';
import Button from '../../components/Button';

const mapStateToProps = (state) => {
  return {
    name: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: function callback() {
      dispatch(buy(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;

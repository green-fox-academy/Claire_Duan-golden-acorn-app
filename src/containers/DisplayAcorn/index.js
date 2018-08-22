import { connect } from 'react-redux';
import Display from '../../components/Display';

const mapStateToProps = (state) => {
  return {
    // amount: state.amount.amount,
    amount: state.amount,
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
)(Display);

export default DisplayAcorn;

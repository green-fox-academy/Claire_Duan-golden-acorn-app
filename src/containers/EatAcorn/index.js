import { connect } from 'react-redux';
import { eat } from '../../actions';
import Button from '../../components/Button';

const mapStateToProps = (state) => {
  return {
    name: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {
      dispatch(eat(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;

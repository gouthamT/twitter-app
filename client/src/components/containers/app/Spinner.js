import { connect } from 'react-redux';
import SpinnerView from '../../primitives/spinnerView';

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
    css: 'spin__center' 
  };
};


const Spinner = connect(
  mapStateToProps,
  null
)(SpinnerView);

export default Spinner;
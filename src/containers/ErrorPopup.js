import { connect } from 'react-redux';
import { hideError } from '../actions/errorActions';
import ErrorPopup from '../components/shared/ErrorPopup';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  hideError: () => dispatch(hideError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup);

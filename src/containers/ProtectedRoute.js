import { connect } from 'react-redux';
import { loginSuccess } from '../actions/authActions';
import ProtectedRoute from '../components/Auth/ProtectedRoute';

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: () => dispatch(loginSuccess),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);

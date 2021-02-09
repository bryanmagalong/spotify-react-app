import { connect } from 'react-redux';
import Redirect from '../components/Auth/Redirect';
import { login } from '../actions/authActions';

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Redirect);

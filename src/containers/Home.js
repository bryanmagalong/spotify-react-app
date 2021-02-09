import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import Home from '../components/Home';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

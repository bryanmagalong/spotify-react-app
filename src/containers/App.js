import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  error: state.errorReducer.error,
  isOpen: state.errorReducer.isOpen,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);

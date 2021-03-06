import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';
import { asArray } from '../reducers/selectors';

const mapStateToProps = ( state ) => ({
  benches: asArray(state),
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);

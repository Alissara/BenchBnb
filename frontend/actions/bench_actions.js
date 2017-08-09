import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECIEVE_BENCHES';

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => dispatch => (
  APIUtil.fetchBenches()
    .then(
      benches => (dispatch(receiveBenches(benches)))
    )
);

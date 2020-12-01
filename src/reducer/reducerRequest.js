import requestAction from '../actions/request';
export const STATUS_REQUEST = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
};
export default (inititalState, { type, payload }) => {
  switch (type) {
    case requestAction.GET_ALL_REQUEST_SUCCESS:
      return {
        ...inititalState,
        records: payload.records,
        status: STATUS_REQUEST.SUCCESS,
      };
    case requestAction.GET_ALL_REQUEST_FAIL:
      return {
        status: STATUS_REQUEST.ERROR,
      };
    case requestAction.SEARCH_FILTER:
      return {
        ...inititalState,
        searchField: payload.searchQuery,
      };
    default:
      return { ...inititalState };
  }
};

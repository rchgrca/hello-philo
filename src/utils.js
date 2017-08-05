/* eslint import/prefer-default-export: "off" */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

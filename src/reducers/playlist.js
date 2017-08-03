import { ADD_TO_PLAYLIST, DELETE_FROM_PLAYLIST } from '../actions';
import { createReducer } from '../utils';

const addEpisode = (state, { payload }) => ({ ...state, [payload.title]:payload });

const deleteEpisode = (state, { payload }) => ({ ...state, ...payload });

const handlers = {
  [ADD_TO_PLAYLIST]: addEpisode,
  [DELETE_FROM_PLAYLIST]: deleteEpisode
};

export default createReducer({}, handlers);

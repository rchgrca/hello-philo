import { ADD_TO_PLAYLIST, DELETE_FROM_PLAYLIST } from '../actions';
import { createReducer } from '../utils';

const addEpisode = (state, { payload }) => ({ ...state, [payload.title]:payload });

const deleteEpisode = (state, { payload }) => {
    // create an array with the state's key/value pairs returned
    const tempStateEntries = Object.entries({...state});
    // remove episode by filtering array, then convert it back to an object
    const filteredtempState = tempStateEntries.filter((episode) => {
        return episode[0] !== payload.title;
    }).reduce((obj, episode) => {
        obj[episode[0]] = episode[1]
        return obj
    },{});
    return {
        ...filteredtempState
    }
}

const handlers = {
  [ADD_TO_PLAYLIST]: addEpisode,
  [DELETE_FROM_PLAYLIST]: deleteEpisode
};

export default createReducer({}, handlers);

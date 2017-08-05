import { ADD_TO_PLAYLIST, DELETE_FROM_PLAYLIST } from '../actions';
import { createReducer } from '../utils';

const addEpisode = (state, { payload }) => ({ ...state, [payload.title]:payload });

const deleteEpisode = (state, { payload }) => {
    const tempState = { ...state };
    const tempStateEntries = Object.entries(tempState);
    const filteredtempStateArray = tempStateEntries.filter((episode) => {
        return episode[0] !== payload.title;
    });
    const filteredtempStateObject = filteredtempStateArray.reduce((obj, episode) => {
     obj[episode[0]] = episode[1]
     return obj
    },{});
    return {
        ...filteredtempStateObject
    }
}

const handlers = {
  [ADD_TO_PLAYLIST]: addEpisode,
  [DELETE_FROM_PLAYLIST]: deleteEpisode
};

export default createReducer({}, handlers);

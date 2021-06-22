import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface EpisodesState {
    episodesIds: string[];
}

const initialState: EpisodesState = {
    episodesIds: [],
};

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        add: (state, payload: PayloadAction<string>) => {
            state.episodesIds.push(payload.payload)
        },
        remove: (state, payload: PayloadAction<string>) => {
            state.episodesIds = state.episodesIds.filter((e) => e !== payload.payload);
        },
    },
});

export const {add, remove} = episodesSlice.actions;

export const selectEpisodes = (state: RootState) => state.episodes.episodesIds;

export default episodesSlice.reducer;

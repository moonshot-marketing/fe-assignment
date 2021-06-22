import {gql} from '@apollo/client/core';
import {QueryHookOptions, useQuery} from '@apollo/client';
import {Episode} from "../types";

export const GET_EPISODE_BY_ID_QUERY = gql`
    query getEpisodeById($episodeId: ID!) {
        episodes: episodesByIds(ids: [$episodeId]) {
            id
            name
            air_date
            episode
            characters {
                id
                name
                status
                species
                type
                gender
                image
                created
            }
            created
        }
    }
`;

export interface EpisodeInput {
    episodeId: string;
}

export interface EpisodeResponse {
    episodes: Episode[];
}

export const useGetEpisodeById = (episodeId: string, props?: QueryHookOptions) => {
    return useQuery<EpisodeResponse, EpisodeInput>(GET_EPISODE_BY_ID_QUERY, {
        ...props,
        variables: {episodeId}
    });
};

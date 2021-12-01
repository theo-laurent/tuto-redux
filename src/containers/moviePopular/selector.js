import { createSelector } from "reselect";

const selectMoviePopular = (state) => state.moviePopular;

export const selectData = createSelector(
    [selectMoviePopular], 
    select => select.movies
) 

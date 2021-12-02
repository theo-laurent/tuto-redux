import { connect } from "react-redux";
import { compose } from "redux";

// reselect
// import { createStructuredSelector } from "reselect";

//actions
import { findMovieAction } from "../movieDetailed/actions";
//components
import ShowMovieSearch from "../../components/showMovieSearch/index";

const mapDispatchToProps = (dispatch) => ({
  findMovie: (data) => dispatch(findMovieAction(data)),
});

const mapStateToProps = ({ header }) => ({
  movieSearch: header.searchMovie,
});

//render
const ShowMovieSearchContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ShowMovieSearch);

export default ShowMovieSearchContainer;

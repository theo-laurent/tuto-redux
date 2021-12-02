import { connect } from "react-redux";
import { compose } from "redux";

// reselect
// import { createStructuredSelector } from "reselect";

//actions

//components
import ShowMovieSearch from "../../components/showMovieSearch/index";

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = ({ header }) => ({
  movieSearch: header.searchMovie,
});

//render
const ShowMovieSearchContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ShowMovieSearch);

export default ShowMovieSearchContainer;

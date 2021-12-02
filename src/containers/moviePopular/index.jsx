import { connect } from "react-redux";
import { compose } from "redux";

// reselect
// import { createStructuredSelector } from "reselect";

//actions
import { getDataAction } from "./action";

//components
import Movie from "../../components/moviePopular/index";

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(getDataAction(data)),
});

const mapStateToProps = ({ moviePopular }) => ({
  movies: moviePopular.movies,
});

//render
const MovieContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Movie
);

export default MovieContainer;

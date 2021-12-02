import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

//actions

//components
import movieDetailed from "../../components/movieDetailed";
//selecteurs

// sert a envoyer les données au store
const mapDispatchToProps = (dispatch) => ({
  // on donne un nom à notre props pour recupérer l'action dans le component
});

const mapStateToProps = ({ movieDetailed }) => ({
  movie: movieDetailed.movie,
});

// const mapStateToProps = createStructuredSelector({movieDetailed});

//render
const MovieDetailedContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(movieDetailed);

export default MovieDetailedContainer;

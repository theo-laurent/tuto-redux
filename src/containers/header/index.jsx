import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

//actions
import { searchMovieAction } from "./action";
//components
import Header from "../../components/header/index";
//selecteurs

// sert a envoyer les données au store
const mapDispatchToProps = (dispatch) => ({
  // on donne un nom à notre props pour recupérer l'action dans le component
  searchMovie: (data) => dispatch(searchMovieAction(data))
});


const mapStateToProps = createStructuredSelector({
});
//render
const headerContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Header
);

export default headerContainer;

import { connect } from "react-redux";
import { compose } from "redux";

// reselect
import { createStructuredSelector } from "reselect";

//actions
import { getDataAction } from "./action";

//components
import Movie from "../../components/moviePopular/index";


const mapDispatchToProps = (dispatch) => ({
  getData: (données) => dispatch(getDataAction(données)),
});

const mapStateToProps = ({ home }) => ({
  nom: home.data.nom,
  age: home.data.age,
});

//render
const MovieContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Movie
);

export default MovieContainer;

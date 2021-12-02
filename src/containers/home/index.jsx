import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

//actions
import { getDataAction } from "./action";
//components
import Home from "../../components/home/index";
//selecteurs
import { selectData } from "../moviePopular/selector";

// sert a envoyer les données au store
const mapDispatchToProps = (dispatch) => ({
  // on donne un nom à notre props pour recupérer l'action dans le component
  getData: (données) => dispatch(getDataAction(données)),
});

//sert a envoyer en props au components les donées du store

// const mapStateToProps = ({ moviePopular }) => ({
//   movie: moviePopular,
// });

const mapStateToProps = createStructuredSelector({
  movies: selectData,
});
//render
const HomeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Home
);

export default HomeContainer;

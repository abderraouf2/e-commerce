import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { isCollectionLoaded } from "../../Redux/shop/shop.selector";

import Collection from "./collection";
import WithSpinner from "../../components/withSpinner/withSpinner";


const mapStateToProps  = createStructuredSelector({
  isLoading: (state)=> !isCollectionLoaded(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { isCollectionsFetching } from "../../Redux/shop/shop.selector";
import WithSpinner from '../withSpinner/withSpinner';
import CollectionOverview from "./collection-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: isCollectionsFetching
})

const collectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default collectionOverviewContainer;
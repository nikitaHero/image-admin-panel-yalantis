import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getImages, removeImage } from "./thunks";

import Card from "../Card";
import Prealoader from "../Prealoader";

const ImageGrid = ({ getImages, data, removeImage }) => {
  useEffect(() => {
    getImages();
  }, []);

  const _handleRemoveImage = async (id) => {
    let loaderOff = true;
    await removeImage(id);
    await getImages(loaderOff);
  };
  return (
    <div className="row">
      {data.isFetching ? (
        <Prealoader />
      ) : data.images && !data.isFetching ? (
        data.images.map((item) => (
          <Card onRemove={_handleRemoveImage} key={item.id} data={item} />
        ))
      ) : (
        false
      )}
    </div>
  );
};

const mapState = (state) => ({
  data: state.gridPage,
});
const mapDispatch = (dispatch) => ({
  getImages: (loaderOff) => dispatch(getImages(loaderOff)),
  removeImage: (id) => dispatch(removeImage(id)),
});

export default connect(mapState, mapDispatch)(ImageGrid);

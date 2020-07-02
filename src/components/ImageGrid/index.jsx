import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getImages, removeImage } from "./thunks";

import Card from "./Card";

const ImageGrid = ({ getImages, data, removeImage }) => {
  useEffect(() => {
    getImages();
  }, []);

  const _handleRemoveImage = async (id) => {
    await removeImage(id);
    await getImages();
  };
  return (
    <div className="row">
      {data.images &&
        data.images.map((item) => (
          <Card onRemove={_handleRemoveImage} key={item.id} data={item} />
        ))}
    </div>
  );
};

const mapState = (state) => ({
  data: state.gridPage,
});
const mapDispatch = (dispatch) => ({
  getImages: () => dispatch(getImages()),
  removeImage: (id) => dispatch(removeImage(id)),
});

export default connect(mapState, mapDispatch)(ImageGrid);
